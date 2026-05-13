const https=require('https');
https.get('https://github.com/gohugoio/hugo/releases/tag/v0.161.1',{headers:{'User-Agent':'node','Accept':'text/html'}},res=>{
 let d='';
 res.on('data',c=>d+=c);
 res.on('end',()=>{
   console.log('status',res.statusCode);
   console.log('contains hugo_extended?', d.includes('hugo_extended'));
   console.log('contains .zip?', d.includes('.zip'));
   console.log('length', d.length);
 });
}).on('error',e=>console.error('ERR',e.message));
