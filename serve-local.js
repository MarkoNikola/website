// ═══════════════════════════════════════════════════════════════
//  Lokalni server za testiranje / Server locale per il test
//
//  POKRETANJE:   node serve-local.js
//  pa otvori:    http://localhost:3000
//
//  Zašto postoji: na Hostingeru .htaccess pretvara /proizvod u
//  /proizvod.html. Node i Python serveri ne čitaju .htaccess, pa
//  bez ovoga dobiješ "Cannot GET /proizvod". Ovaj server radi istu
//  stvar lokalno, da testiranje odgovara pravoj stranici.
//
//  Ova datoteka se NE mora uploadati na Hostinger — samo za lokalno.
// ═══════════════════════════════════════════════════════════════

const http = require('http');
const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

const TYPES = {
  '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8',   '.json':'application/json; charset=utf-8',
  '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.gif':'image/gif',
  '.webp':'image/webp', '.avif':'image/avif', '.svg':'image/svg+xml', '.ico':'image/x-icon',
  '.woff':'font/woff', '.woff2':'font/woff2', '.ttf':'font/ttf', '.otf':'font/otf',
  '.pdf':'application/pdf', '.mp4':'video/mp4', '.txt':'text/plain; charset=utf-8',
};

http.createServer((req, res) => {
  // strip the query string, decode %20 etc.
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0]);
  } catch { urlPath = req.url.split('?')[0]; }

  // never let a request escape the project folder
  let rel = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, '');
  let file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT)) { res.writeHead(403).end('Forbidden'); return; }

  if (urlPath === '/' || urlPath === '') file = path.join(ROOT, 'index.html');

  // same rule as .htaccess: no extension and no such file -> try adding .html
  if (!fs.existsSync(file) && !path.extname(file) && fs.existsSync(file + '.html')) {
    file += '.html';
  }

  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
    res.end('<h1>404</h1><p>Nema datoteke za <code>' + urlPath + '</code></p>');
    return;
  }

  res.writeHead(200, {
    'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'no-cache',   // always see your latest edit
  });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => {
  console.log('\n  ITALTERM — lokalni server\n');
  console.log('  http://localhost:' + PORT);
  console.log('  http://localhost:' + PORT + '/proizvodi');
  console.log('  http://localhost:' + PORT + '/proizvod?id=PP-CIJEV');
  console.log('\n  Ctrl+C za prekid\n');
});
