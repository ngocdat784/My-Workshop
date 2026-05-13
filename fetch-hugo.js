const https = require('https');
function fetch(url, cb) {
  https.get(url, { headers: { 'User-Agent': 'node' } }, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      const next = res.headers.location.startsWith('http') ? res.headers.location : 'https://github.com' + res.headers.location;
      return fetch(next, cb);
    }
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => cb(null, data, res));
  }).on('error', cb);
}
fetch('https://github.com/gohugoio/hugo/releases/latest', (err, data, res) => {
  if (err) return console.error('ERR', err.message);
  console.log('status', res.statusCode, res.responseUrl || '');
  const re = /href="([^"]*hugo_extended[^"]*windows-amd64[^"]*\.zip)"/g;
  let match; const urls = [];
  while ((match = re.exec(data)) !== null) urls.push(match[1]);
  console.log('found', urls.length, 'matches');
  urls.forEach(u => console.log(u));
  const re2 = /href="([^"]*\.zip)"/g;
  let m2; const zips=[];
  while ((m2=re2.exec(data))!==null) zips.push(m2[1]);
  console.log('zip count', zips.length);
  zips.slice(0,20).forEach(u=>console.log(u));
});
