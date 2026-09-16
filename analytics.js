// ═══════════════════════════════════════════════════════════════
//  ITALTERM – Google Analytics + privola za kolačiće
//
//  ►►► UPIŠITE SAMO MJERNI ID ISPOD. ◄◄◄
//
//  Gdje ga naći:
//    1. analytics.google.com → Admin (zupčanik dolje lijevo)
//    2. Data streams → Web → italterm.net
//    3. "Measurement ID" gore desno — izgleda kao G-ABC1234XYZ
//
//  Dok je GA_ID prazan, ova datoteka NE RADI NIŠTA — ne učitava
//  Google, ne postavlja kolačiće i ne prikazuje traku za privolu.
//  Slobodno je uploadajte i prije nego što otvorite Analytics račun.
// ═══════════════════════════════════════════════════════════════

var GA_ID = '';   // ← npr. 'G-ABC1234XYZ'

// ═══════════════════════════════════════════════════════════════
//  Ispod ovoga ništa ne treba mijenjati.
// ═══════════════════════════════════════════════════════════════
(function () {
  'use strict';

  if (!GA_ID) return;                       // nije podešeno — izlaz

  var KEY = 'it_consent';                   // 'yes' | 'no'
  var stored;
  try { stored = localStorage.getItem(KEY); } catch (e) { stored = null; }

  // Jezik: lang.js se učitava poslije ovoga, pa čitamo izravno.
  var it = (function () {
    try { return localStorage.getItem('it_lang') === 'it'; } catch (e) { return false; }
  })();

  var T = it ? {
    text:    'Usiamo i cookie per capire come viene usato il sito. Nessun dato viene venduto a terzi.',
    more:    'Informativa privacy',
    accept:  'Accetto',
    decline: 'Rifiuto',
  } : {
    text:    'Koristimo kolačiće kako bismo razumjeli kako se stranica koristi. Podatke ne prodajemo trećim stranama.',
    more:    'Pravila privatnosti',
    accept:  'Prihvaćam',
    decline: 'Odbijam',
  };

  // ── Učitavanje Google Analyticsa ─────────────────────────────
  var loaded = false;
  function loadGA() {
    if (loaded) return;
    loaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    // anonymize_ip: skraćuje IP adresu posjetitelja prije pohrane.
    gtag('config', GA_ID, { anonymize_ip: true });

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);

    trackEvents();
  }

  // ── Što pratimo ──────────────────────────────────────────────
  //  Zanima nas samo ono što vodi do posla: koji proizvod je
  //  otvorio upit, je li upit poslan, i je li netko nazvao ili
  //  pisao preko WhatsAppa/Vibera.
  function trackEvents() {
    function send(name, params) {
      if (typeof gtag === 'function') gtag('event', name, params || {});
    }

    document.addEventListener('click', function (ev) {
      var a = ev.target.closest && ev.target.closest('a');
      if (!a) return;
      var href = a.getAttribute('href') || '';

      if (href.indexOf('kontakt?product=') === 0 || href.indexOf('/kontakt?product=') === 0) {
        var code = decodeURIComponent(href.split('product=')[1].split('&')[0] || '');
        send('upit_zapocet', { sifra: code });          // klik na "Zatraži ponudu"
      } else if (href.indexOf('tel:') === 0) {
        send('poziv', { broj: href.slice(4) });
      } else if (href.indexOf('mailto:') === 0) {
        send('email_klik', {});
      } else if (href.indexOf('wa.me') !== -1) {
        send('whatsapp', {});
      } else if (href.indexOf('viber:') === 0) {
        send('viber', {});
      }
    }, true);

    // Obrazac nema polje sa šifrom — proizvod stiže kroz ?product= u
    // adresi (vidi prefillFromUrl u kontakt.html), pa je čitamo odande.
    var form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function () {
        var code = '';
        try { code = new URLSearchParams(location.search).get('product') || ''; } catch (e) {}
        send('upit_poslan', {
          sifra:     code,
          kategorija: (form.querySelector('[name="kategorija"]') || {}).value || '',
        });
      });
    }
  }

  // ── Traka za privolu ─────────────────────────────────────────
  function showBanner() {
    var css = document.createElement('style');
    css.textContent =
      '.ck-bar{position:fixed;left:0;right:0;bottom:0;z-index:2000;background:#0f1923;' +
      'color:rgba(255,255,255,.85);border-top:2.5px solid #1BA8D5;padding:16px 6%;' +
      'display:flex;align-items:center;gap:18px;flex-wrap:wrap;' +
      "font-family:'DM Sans',sans-serif;font-size:13.5px;line-height:1.6;" +
      'box-shadow:0 -8px 28px rgba(0,0,0,.28)}' +
      '.ck-bar p{margin:0;flex:1;min-width:240px}' +
      '.ck-bar a{color:#1BA8D5;text-decoration:underline}' +
      '.ck-btns{display:flex;gap:10px;flex-shrink:0}' +
      ".ck-bar button{font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:600;" +
      'letter-spacing:.06em;text-transform:uppercase;padding:11px 22px;border-radius:4px;' +
      'cursor:pointer;border:1.5px solid rgba(255,255,255,.28);background:none;color:#fff;' +
      'transition:all .15s;min-height:44px}' +
      '.ck-bar button:hover{border-color:#fff}' +
      '.ck-bar .ck-yes{background:#1BA8D5;border-color:#1BA8D5}' +
      '.ck-bar .ck-yes:hover{background:#1490b8;border-color:#1490b8}' +
      '@media(max-width:620px){.ck-bar{padding:14px 20px}.ck-btns{width:100%}' +
      '.ck-bar button{flex:1}}';
    document.head.appendChild(css);

    var bar = document.createElement('div');
    bar.className = 'ck-bar';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', T.text);

    var p = document.createElement('p');
    p.textContent = T.text + ' ';
    var link = document.createElement('a');
    link.href = 'privatnost';
    link.textContent = T.more;
    p.appendChild(link);

    var btns = document.createElement('div');
    btns.className = 'ck-btns';
    var no = document.createElement('button');
    no.textContent = T.decline;
    var yes = document.createElement('button');
    yes.className = 'ck-yes';
    yes.textContent = T.accept;

    function choose(val) {
      try { localStorage.setItem(KEY, val); } catch (e) {}
      bar.remove();
      if (val === 'yes') loadGA();
    }
    no.onclick  = function () { choose('no'); };
    yes.onclick = function () { choose('yes'); };

    btns.appendChild(no);
    btns.appendChild(yes);
    bar.appendChild(p);
    bar.appendChild(btns);
    document.body.appendChild(bar);
  }

  if (stored === 'yes')      loadGA();
  else if (stored === 'no')  { /* posjetitelj je odbio — ništa */ }
  else if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', showBanner);
  else showBanner();
})();
