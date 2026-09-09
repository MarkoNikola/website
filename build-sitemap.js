/* ═══════════════════════════════════════════════════════════════════
   ITALTERM — generator za sitemap.xml

   POKRETANJE (u mapi stranice):   node build-sitemap.js

   Pokrenite ovo SVAKI PUT nakon što dodate ili uklonite proizvode u
   products.js, pa novi sitemap.xml uploadajte na Hostinger zajedno s
   products.js. Google tako odmah zna za nove proizvode.
   ═══════════════════════════════════════════════════════════════════ */

const fs = require('fs');

const SITE = 'https://italterm.net';

// Statične stranice. priority je relativan (0.0–1.0) — koristi se samo
// za usporedbu stranica unutar iste domene.
const PAGES = [
  { loc: '/',          changefreq: 'weekly',  priority: '1.0' },
  { loc: '/proizvodi', changefreq: 'weekly',  priority: '0.9' },
  { loc: '/o-nama',    changefreq: 'monthly', priority: '0.6' },
  { loc: '/kontakt',   changefreq: 'monthly', priority: '0.7' },
];

// products.js deklarira `const PRODUCTS = [...]` — učitamo ga kao tekst i
// izvršimo u ovom kontekstu da ne moramo duplicirati podatke.
const src = fs.readFileSync('products.js', 'utf8');
const PRODUCTS = new Function(src + '; return PRODUCTS;')();

const today = new Date().toISOString().slice(0, 10);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                          .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const urls = [
  ...PAGES.map(p => ({ loc: SITE + p.loc, changefreq: p.changefreq, priority: p.priority })),
  ...PRODUCTS.map(p => ({
    loc: SITE + '/proizvod?id=' + encodeURIComponent(p.code),
    changefreq: 'monthly',
    priority: p.featured ? '0.8' : '0.5',
  })),
];

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u =>
    '  <url>\n' +
    `    <loc>${esc(u.loc)}</loc>\n` +
    `    <lastmod>${today}</lastmod>\n` +
    `    <changefreq>${u.changefreq}</changefreq>\n` +
    `    <priority>${u.priority}</priority>\n` +
    '  </url>'
  ).join('\n') + '\n</urlset>\n';

fs.writeFileSync('sitemap.xml', xml);
console.log(`sitemap.xml zapisan — ${urls.length} URL-ova (${PRODUCTS.length} proizvoda).`);
