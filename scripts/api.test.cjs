const {test}=require('node:test');
const assert=require('node:assert/strict');
const {list}=require('../frontend/assets/api.js');
test('pagination follows only the configured API origin',async()=>{
 const urls=[];const result=await list('/api/v1','posts',async url=>{urls.push(url);return {ok:true,json:async()=>({data:[{id:urls.length}],next_page_url:urls.length===1?'https://untrusted.invalid/secret':null})};});
 assert.deepEqual(urls,['/api/v1/posts?page=1','/api/v1/posts?page=2']);assert.equal(result.length,2);
});
test('HTTP failure never looks like an empty successful response',async()=>{
 await assert.rejects(list('/api/v1','services',async()=>({ok:false})),/unavailable/);
});
test('invalid API payload is rejected',async()=>{
 await assert.rejects(list('/api/v1','services',async()=>({ok:true,json:async()=>({data:{}})})),/Invalid/);
});
