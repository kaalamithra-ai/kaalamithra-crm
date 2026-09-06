const http = require('http');
const fs = require('fs');
const path = require('path');
const root = 'c:/Users/Dzone/Downloads/kaalamithra-crm-website/';
const types = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon'};
const server = http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  let file = path.join(root, url);
  try {
    let data = fs.readFileSync(file);
    let ext = path.extname(file);
    res.writeHead(200, {'Content-Type': types[ext] || 'application/octet-stream'});
    res.end(data);
  } catch(e) {
    let data = fs.readFileSync(path.join(root, 'index.html'));
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end(data);
  }
});
server.listen(8000, () => console.log('Kaalamithra server on :8000'));