/* ═══════════════════════════════════════════════════════════════════
   ITALTERM — generator za sitemap.xml

   POKRETANJE (u mapi stranice):   node build-sitemap.js

   Pokrenite ovo SVAKI PUT nakon što dodate ili uklonite proizvode u
   products.js, pa novi sitemap.xml uploadajte na Hostinger zajedno s
   products.js. Google tako odmah zna za nove proizvode.
   ═══════════════════════════════════════════════════════════════════ */

const fs = require('fs');

const SITE = 'https://www.italterm.net';

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

// Filtrirane liste (/proizvodi?group=…&cat=…). Ovo su komercijalno
// najvrjednije stranice — netko tko traži "radijatori" treba doći na popis
// radijatora. Uzimamo samo kombinacije koje stvarno imaju proizvoda, pa
// prazne kategorije iz sidebara ne završe u sitemapu.
// Proizvod se može nalaziti u više kategorija/grupa (vidi products.js:
// polja `cats` i `groups`) — tada se pojavljuje u svakoj od njih.
const prodCats   = p => p.cats   || (p.cat   ? [p.cat]   : []);
const prodGroups = p => p.groups || (p.group ? [p.group] : []);

const seen = new Map();
for (const p of PRODUCTS) {
  for (const g of prodGroups(p)) {
    seen.set('group=' + g, (seen.get('group=' + g) || 0) + 1);
    for (const c of prodCats(p)) {
      const k = 'group=' + g + '&cat=' + c;
      seen.set(k, (seen.get(k) || 0) + 1);
    }
  }
}
const listUrls = [...seen.entries()].map(([q, count]) => ({
  loc: SITE + '/proizvodi?' + q,
  changefreq: 'weekly',
  // Kategorije s više artikala su korisnije odredište pa im dajemo prednost.
  priority: count >= 5 ? '0.8' : '0.6',
}));

const urls = [
  ...PAGES.map(p => ({ loc: SITE + p.loc, changefreq: p.changefreq, priority: p.priority })),
  ...listUrls,
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
