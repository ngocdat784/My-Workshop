const https=require('https');
const url='https://github.com/gohugoio/hugo/releases/tag/v0.161.1';
https.get(url,{headers:{'User-Agent':'node','Accept':'text/html'}},res=>{
 let d='';
 res.on('data',c=>d+=c);
 res.on('end',()=>{
   console.log('status',res.statusCode);
   console.log(d.slice(0,1000));
 });
}).on('error',e=>console.error('ERR',e.message));
