const https = require('https');
const url = 'https://github.com/gohugoio/hugo/releases/latest';
https.get(url, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const re = /href="([^"]*\.zip)"/g;
    let match;
    const urls = [];
    while ((match = re.exec(data)) !== null) urls.push(match[1]);
    console.log('found', urls.length, 'zip matches');
    urls.slice(0,50).forEach(u => console.log(u));
  });
}).on('error', e => console.error('ERR', e.message));
