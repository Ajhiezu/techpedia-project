const {spawn}=require('node:child_process');const path=require('node:path');const fs=require('node:fs/promises');
exports.open=async function({label='live-browser',executable='C:/Program Files/Google/Chrome/Application/chrome.exe'}={}){
 const root=path.resolve(__dirname,'../..');await fs.mkdir(path.join(root,'.qa'),{recursive:true});
 const proc=spawn(executable,['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port=0',`--user-data-dir=${path.join(root,'.qa',label+'-'+Date.now())}`],{windowsHide:true,stdio:['ignore','ignore','pipe']});
 const endpoint=await new Promise((resolve,reject)=>{let out='';const timer=setTimeout(()=>{proc.kill();reject(Error('Browser startup timeout'));},15000);proc.on('error',reject);proc.stderr.on('data',c=>{out+=c;const m=out.match(/DevTools listening on (ws:\/\/[^\s]+)/);if(m){clearTimeout(timer);resolve(m[1]);}});});
 const socket=new WebSocket(endpoint);await new Promise((resolve,reject)=>{socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true});});
 let sequence=0;const pending=new Map();const errors=[];socket.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);if(m.id){const task=pending.get(m.id);if(task){clearTimeout(task.timer);pending.delete(m.id);m.error?task.reject(Error(JSON.stringify(m.error))):task.resolve(m.result);}}});
 const send=(method,params={},sessionId)=>new Promise((resolve,reject)=>{const id=++sequence;const timer=setTimeout(()=>{pending.delete(id);reject(Error('CDP timeout '+method));},10000);pending.set(id,{resolve,reject,timer});socket.send(JSON.stringify({id,method,params,...(sessionId?{sessionId}:{})}));});
 const {targetId}=await send('Target.createTarget',{url:'about:blank'});const {sessionId}=await send('Target.attachToTarget',{targetId,flatten:true});const command=(m,p={})=>send(m,p,sessionId);
 const evaluate=async expression=>{const r=await command('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
 await command('Page.enable');await command('Runtime.enable');return {command,evaluate,errors,close:async()=>{try{await send('Browser.close');}catch{}socket.close();proc.kill();}};
};
