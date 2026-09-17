// ═══════════════════════════════════════════════════════════════
//  ITALTERM – Instagram i Facebook
//
//  ►►► UPIŠITE SAMO ADRESE PROFILA ISPOD. ◄◄◄
//      Sve stranice čitaju ikone odavde — ne treba ih dodavati u
//      svaku HTML datoteku posebno.
//
//  Ostavite li polje prazno, ta se ikona NIGDJE ne prikazuje. Tako
//  nikad ne može ostati link koji vodi u prazno ili na tuđi profil.
//
//  Adresu kopirajte iz adresne trake preglednika kad ste na profilu,
//  npr.  https://www.instagram.com/italterm/
// ═══════════════════════════════════════════════════════════════

var SOCIAL = {
  instagram: 'https://www.instagram.com/italtermdoo/',   // ← npr. 'https://www.instagram.com/italterm/'
  facebook:  'https://www.facebook.com/italtermdoo/',   // ← npr. 'https://www.facebook.com/italterm'
};

// ═══════════════════════════════════════════════════════════════
//  Ispod ovoga ništa ne treba mijenjati.
// ═══════════════════════════════════════════════════════════════
(function () {
  'use strict';

  // Ikone su inline SVG, a ne slike — nema dodatnog zahtjeva prema
  // serveru i boja se nasljeđuje od okolnog teksta (currentColor).
  var ICON = {
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>' +
      '<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>' +
      '<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  };

  var NAME = { instagram: 'Instagram', facebook: 'Facebook' };

  function links() {
    var out = [];
    ['instagram', 'facebook'].forEach(function (k) {
      var url = (SOCIAL[k] || '').trim();
      if (url) out.push({ key: k, url: url });
    });
    return out;
  }

  var L = links();
  if (!L.length) return;            // ništa nije upisano — izlaz

  var css = document.createElement('style');
  css.textContent =
    // ── gornja traka ──
    '.top-social{display:inline-flex;align-items:center;gap:12px}' +
    '.top-social a{color:rgba(255,255,255,.55);display:inline-flex;transition:color .2s}' +
    '.top-social a:hover{color:#fff}' +
    '.top-social svg{width:14px;height:14px;display:block}' +
    // ── podnožje ──
    '.f-social{display:flex;gap:12px;margin-top:16px}' +
    '.f-social a{display:inline-flex;align-items:center;justify-content:center;' +
    'width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.14);' +
    'color:rgba(255,255,255,.55);transition:all .2s}' +
    '.f-social a:hover{color:#fff;border-color:var(--blue,#1BA8D5);background:rgba(27,168,213,.12)}' +
    '.f-social svg{width:16px;height:16px}' +
    // U uskoj traci (katalog, stranica proizvoda) nema mjesta za
    // razmak odozgo — ikone stoje u istom redu kao autorska prava.
    '.f-social-inline{margin-top:0}' +
    '.f-social-inline a{width:30px;height:30px}' +
    '.f-social-inline svg{width:14px;height:14px}' +
    // Na mobitelu je gornja traka skrivena, pa ikone iz podnožja
    // ostaju jedini put do profila — zato su ondje malo veće.
    '@media(max-width:620px){.f-social a{width:38px;height:38px}.f-social svg{width:17px;height:17px}}';
  document.head.appendChild(css);

  function anchor(item, withLabel) {
    var a = document.createElement('a');
    a.href = item.url;
    a.target = '_blank';
    a.rel = 'noopener';             // bez ovoga otvorena kartica može mijenjati našu
    a.title = NAME[item.key];
    a.setAttribute('aria-label', NAME[item.key]);
    a.innerHTML = ICON[item.key] + (withLabel ? ' <span>' + NAME[item.key] + '</span>' : '');
    return a;
  }

  function mount() {
    // ── 1. Gornja traka, odmah do WhatsAppa ──────────────────────
    var top = document.querySelector('.top-utility-right');
    if (top) {
      var wa = top.querySelector('a[href*="wa.me"]');
      var box = document.createElement('span');
      box.className = 'top-social';
      L.forEach(function (i) { box.appendChild(anchor(i, false)); });

      var sep = document.createElement('span');
      sep.className = 'top-divider';

      if (wa && wa.nextSibling) {
        top.insertBefore(box, wa.nextSibling);
        top.insertBefore(sep, box);
      } else {
        top.appendChild(sep);
        top.appendChild(box);
      }
    }

    // ── 2. Podnožje ──────────────────────────────────────────────
    // Na stranicama s punim podnožjem ikone idu ispod adrese, u
    // kontakt stupac. Katalog i stranica proizvoda imaju samo usku
    // traku s autorskim pravima — ondje idu u nju, jer bi inače
    // ostale bez ikona (provjereno: /proizvodi ih prije nije imao).
    var fbox = document.createElement('div');
    fbox.className = 'f-social';
    L.forEach(function (i) { fbox.appendChild(anchor(i, false)); });

    var addr = document.querySelector('footer a[href="#"] [data-i18n="contact.address.line1"]');
    var col  = addr ? addr.closest('.f-grid > div') : null;
    if (!col) {
      var cols = document.querySelectorAll('footer .f-grid > div');
      col = cols.length ? cols[cols.length - 1] : null;
    }
    if (col) {
      col.appendChild(fbox);
      return;
    }

    var bottom = document.querySelector('footer .f-bottom');
    if (bottom) {
      fbox.classList.add('f-social-inline');
      bottom.insertBefore(fbox, bottom.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
