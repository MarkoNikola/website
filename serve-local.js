// ═══════════════════════════════════════════════════════════════
//  Lokalni server za razvoj / Server locale di sviluppo
//
//  POKRETANJE
//    U VS Code:  Terminal → Run Task… → "ITALTERM: pokreni server"
//    Ili ručno:  node serve-local.js
//    Pa otvori:  http://localhost:3000
//
//  ŠTO RADI
//    1. Čiste adrese — /proizvod?id=... radi bez ".html", isto kao
//       na Hostingeru. Live Server to NE zna jer ne čita .htaccess.
//    2. Automatsko osvježavanje — spremiš datoteku, stranica se sama
//       ponovno učita.
//
//  Ova datoteka je SAMO za lokalni rad. Ne treba je uploadati.
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

// ── live reload ────────────────────────────────────────────────
const clients = new Set();
const RELOAD_SNIPPET = `
<script>
(function(){
  var es = new EventSource('/__reload');
  es.onmessage = function(){ location.reload(); };
  es.onerror = function(){ /* server restarted or stopped — keep trying */ };
})();
</script>`;

function notifyClients(file) {
  console.log('  promjena: ' + file + '  → osvježavam preglednik');
  for (const res of clients) {
    try { res.write('data: reload\n\n'); } catch { clients.delete(res); }
  }
}

const IGNORE = /(^|[\\/])(\.git|node_modules|\.vscode)([\\/]|$)/;
let debounce = null;
function watch(dir) {
  try {
    fs.watch(dir, { recursive: true }, (evt, file) => {
      if (!file || IGNORE.test(file)) return;
      if (!/\.(html|js|css)$/i.test(file)) return;
      clearTimeout(debounce);
      debounce = setTimeout(() => notifyClients(file), 120);
    });
  } catch {
    // recursive watch unsupported — watch the top level only
    fs.watch(dir, (evt, file) => {
      if (!file || IGNORE.test(file)) return;
      if (!/\.(html|js|css)$/i.test(file)) return;
      clearTimeout(debounce);
      debounce = setTimeout(() => notifyClients(file), 120);
    });
  }
}

// ── server ─────────────────────────────────────────────────────
http.createServer((req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent(req.url.split('?')[0]); }
  catch { urlPath = req.url.split('?')[0]; }

  // live-reload channel
  if (urlPath === '/__reload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
    res.write('\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  // never let a request escape the project folder
  const rel  = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, '');
  let   file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT)) { res.writeHead(403).end('Forbidden'); return; }

  if (urlPath === '/' || urlPath === '') file = path.join(ROOT, 'index.html');

  // same rule as .htaccess: no extension and no such file → try adding .html
  if (!fs.existsSync(file) && !path.extname(file) && fs.existsSync(file + '.html')) {
    file += '.html';
  }

  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1 style="font-family:sans-serif">404</h1>' +
            '<p style="font-family:sans-serif">Nema datoteke za <code>' + urlPath + '</code></p>');
    return;
  }

  const ext = path.extname(file).toLowerCase();
  const headers = {
    'Content-Type': TYPES[ext] || 'application/octet-stream',
    'Cache-Control': 'no-store',   // always serve the newest edit
  };

  // inject the reload listener into HTML pages
  if (ext === '.html') {
    let html = fs.readFileSync(file, 'utf8');
    html = html.includes('</body>')
      ? html.replace('</body>', RELOAD_SNIPPET + '\n</body>')
      : html + RELOAD_SNIPPET;
    headers['Content-Length'] = Buffer.byteLength(html);
    res.writeHead(200, headers);
    res.end(html);
    return;
  }

  res.writeHead(200, headers);
  fs.createReadStream(file).pipe(res);

}).listen(PORT, () => {
  watch(ROOT);
  console.log('\n  ITALTERM — lokalni server\n');
  console.log('  http://localhost:' + PORT);
  console.log('  http://localhost:' + PORT + '/proizvodi');
  console.log('  http://localhost:' + PORT + '/proizvod?id=PP-CIJEV');
  console.log('\n  Čiste adrese: DA    Auto-osvježavanje: DA');
  console.log('  Ctrl+C za prekid\n');
});
