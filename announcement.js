// ═══════════════════════════════════════════════════════════════
//  ITALTERM – Obavijest / Avviso  (announcement banner)
//
//  ►►► THIS IS THE ONLY FILE YOU NEED TO EDIT. ◄◄◄
//      All pages read their banner from here.
//
//  MODE:
//    true    → banner is ALWAYS shown (dates ignored)
//    false   → banner is OFF
//    'auto'  → banner shows only between START and END
//
//  DATES: month is 0-indexed!  0=siječanj … 6=srpanj, 7=kolovoz … 11=prosinac
// ═══════════════════════════════════════════════════════════════

var ANNOUNCEMENT_ACTIVE = true;

var START = new Date(2026, 7, 1);   // 1. kolovoza 2026.
var END   = new Date(2026, 7, 15);  // 15. kolovoza 2026.

var msg_hr = '🏖️ Godišnji odmor: 01.08. – 15.08.2026. Narudžbe primamo, isporuke po povratku. Hvala na razumijevanju!';
var msg_it = '🏖️ Ferie estive: 01.08. – 15.08.2026. Accettiamo ordini, consegne al nostro rientro. Grazie per la comprensione!';

// ═══════════════════════════════════════════════════════════════
//  Ispod ovoga nema potrebe mijenjati ništa.
// ═══════════════════════════════════════════════════════════════
(function () {
  var el = document.getElementById('announcement-banner');

  if (!el) {
    console.log('[obavijest] Nema <div id="announcement-banner"> na ovoj stranici.');
    return;
  }
  if (ANNOUNCEMENT_ACTIVE === false) {
    console.log('[obavijest] Isključeno (ANNOUNCEMENT_ACTIVE = false).');
    return;
  }
  if (ANNOUNCEMENT_ACTIVE === 'auto') {
    var now = new Date();
    if (now < START || now > END) {
      console.log('[obavijest] Skriveno — danas (' + now.toLocaleDateString('hr-HR') +
                  ') je izvan raspona ' + START.toLocaleDateString('hr-HR') +
                  ' – ' + END.toLocaleDateString('hr-HR') + '.');
      return;
    }
  }
  if (sessionStorage.getItem('ann_dismissed')) {
    console.log('[obavijest] Korisnik je zatvorio obavijest. Za ponovni prikaz: ' +
                'sessionStorage.removeItem("ann_dismissed") pa osvježi stranicu.');
    return;
  }

  var lang = (typeof getLang === 'function' ? getLang() : localStorage.getItem('it_lang')) || 'hr';
  var msg  = lang === 'it' ? msg_it : msg_hr;

  el.innerHTML =
    '<div style="max-width:1100px;margin:0 auto;display:flex;align-items:center;' +
    'justify-content:space-between;gap:16px">' +
      '<span style="font-size:14px;font-weight:500;line-height:1.45">' + msg + '</span>' +
      '<button id="ann-close" aria-label="Zatvori" style="background:none;border:none;' +
      'cursor:pointer;color:inherit;font-size:20px;line-height:1;padding:0 4px;' +
      'flex-shrink:0">&#10005;</button>' +
    '</div>';

  el.style.cssText = 'display:block;background:#d97706;color:#fff;padding:11px 6%;' +
                     "font-family:'DM Sans',sans-serif;position:relative;z-index:1100";

  document.getElementById('ann-close').onclick = function () {
    el.style.display = 'none';
    sessionStorage.setItem('ann_dismissed', '1');
  };
})();
