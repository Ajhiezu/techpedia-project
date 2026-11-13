(function(root){
 async function list(base,resource,fetcher=fetch){
  const data=[];let page=1;
  do {const response=await fetcher(`${base}/${resource}?page=${page}`,{headers:{Accept:'application/json'},signal:AbortSignal.timeout(15000)});if(!response.ok)throw new Error('Content unavailable');const result=await response.json();if(!Array.isArray(result.data))throw new Error('Invalid content response');data.push(...result.data);if(!result.next_page_url)break;page++;if(page>100)throw new Error('Content pagination limit exceeded');}while(true);return data;
 }
 root.TechpediaApi={list};if(typeof module!=='undefined')module.exports={list};
})(typeof window==='undefined'?globalThis:window);
