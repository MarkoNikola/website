// ═══════════════════════════════════════════════════════════════
//  ITALTERM – Obavijest / Avviso
//
//  ►►► THIS IS THE ONLY FILE YOU NEED TO EDIT. ◄◄◄
//      All pages read their announcement from here.
//
//  ANNOUNCEMENT_ACTIVE:
//    true    → uvijek prikazano  (always shown, dates ignored)
//    false   → isključeno        (off)
//    'auto'  → samo između START i END
//
//  STYLE:
//    'popup'   → skočni prozor u sredini ekrana
//    'banner'  → traka na vrhu stranice
//
//  DATUMI: mjesec se broji od 0!  0=siječanj … 6=srpanj, 7=kolovoz … 11=prosinac
// ═══════════════════════════════════════════════════════════════

var ANNOUNCEMENT_ACTIVE = true;
var STYLE               = 'popup';

var START = new Date(2026, 7, 1);   // 1. kolovoza 2026.
var END   = new Date(2026, 7, 15);  // 15. kolovoza 2026.

var title_hr = 'Godišnji odmor';
var title_it = 'Ferie estive';

var msg_hr = 'Ne radimo od <strong>01.08.</strong> do <strong>15.08.2026.</strong><br><br>' +
             'Narudžbe zaprimamo i tijekom odmora, a isporuke kreću odmah po povratku. ' +
             'Hvala na razumijevanju i vidimo se uskoro!';

var msg_it = 'Siamo chiusi dal <strong>01.08.</strong> al <strong>15.08.2026.</strong><br><br>' +
             'Accettiamo ordini anche durante le ferie, le consegne riprendono subito al nostro rientro. ' +
             'Grazie per la comprensione e a presto!';

var btn_hr = 'U redu';
var btn_it = 'Va bene';

// ═══════════════════════════════════════════════════════════════
//  Ispod ovoga nema potrebe mijenjati ništa.
// ═══════════════════════════════════════════════════════════════
(function () {
  function start() {
    if (ANNOUNCEMENT_ACTIVE === false) {
      return console.log('[obavijest] Isključeno (ANNOUNCEMENT_ACTIVE = false).');
    }
    if (ANNOUNCEMENT_ACTIVE === 'auto') {
      var now = new Date();
      if (now < START || now > END) {
        return console.log('[obavijest] Skriveno — danas (' + now.toLocaleDateString('hr-HR') +
          ') je izvan raspona ' + START.toLocaleDateString('hr-HR') +
          ' – ' + END.toLocaleDateString('hr-HR') + '.');
      }
    }
    if (sessionStorage.getItem('ann_dismissed')) {
      return console.log('[obavijest] Zatvoreno. Za ponovni prikaz u konzoli upiši: ' +
        'sessionStorage.removeItem("ann_dismissed") pa osvježi stranicu.');
    }

    var it    = ((typeof getLang === 'function' ? getLang() : localStorage.getItem('it_lang')) || 'hr') === 'it';
    var title = it ? title_it : title_hr;
    var msg   = it ? msg_it   : msg_hr;
    var btn   = it ? btn_it   : btn_hr;

    var css = document.createElement('style');
    css.textContent =
      '@keyframes annFade{from{opacity:0}to{opacity:1}}' +
      '@keyframes annPop{from{opacity:0;transform:translateY(18px) scale(.97)}' +
                        'to{opacity:1;transform:none}}' +
      '#ann-ov{position:fixed;inset:0;z-index:99999;background:rgba(10,17,25,.62);' +
        'backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;' +
        'padding:20px;animation:annFade .25s ease both}' +
      '#ann-box{position:relative;width:100%;max-width:460px;background:#fff;border-radius:14px;' +
        'overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.35);' +
        "font-family:'DM Sans',sans-serif;animation:annPop .32s cubic-bezier(.22,1,.36,1) both}" +
      '#ann-top{background:linear-gradient(135deg,#1a2d3d 0%,#0f1923 100%);' +
        'padding:26px 30px 22px;text-align:center;border-bottom:3px solid #1BA8D5}' +
      '#ann-ico{font-size:38px;line-height:1;display:block;margin-bottom:10px}' +
      '#ann-top h3{margin:0;color:#fff;font-family:\'Barlow Condensed\',sans-serif;' +
        'font-size:27px;font-weight:800;letter-spacing:.02em;text-transform:uppercase}' +
      '#ann-body{padding:24px 30px 26px;text-align:center;color:#4a5568;' +
        'font-size:15px;line-height:1.62}' +
      '#ann-body strong{color:#1a2332;font-weight:600;white-space:nowrap}' +
      '#ann-ok{margin-top:22px;width:100%;background:#1BA8D5;color:#fff;border:none;' +
        'border-radius:7px;padding:13px;font-family:\'Barlow Condensed\',sans-serif;' +
        'font-size:16px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;' +
        'cursor:pointer;transition:background .18s}' +
      '#ann-ok:hover{background:#1490b8}' +
      '#ann-x{position:absolute;top:12px;right:14px;background:none;border:none;' +
        'color:rgba(255,255,255,.65);font-size:23px;line-height:1;cursor:pointer;' +
        'padding:4px 8px;transition:color .18s}' +
      '#ann-x:hover{color:#fff}' +
      '@media(max-width:480px){#ann-top{padding:22px 22px 18px}#ann-body{padding:20px 22px 22px}}';
    document.head.appendChild(css);

    // ── BANNER ──────────────────────────────────────────────────
    if (STYLE === 'banner') {
      var el = document.getElementById('announcement-banner');
      if (!el) return console.log('[obavijest] Nema <div id="announcement-banner">.');
      el.innerHTML =
        '<div style="max-width:1100px;margin:0 auto;display:flex;align-items:center;' +
        'justify-content:space-between;gap:16px">' +
          '<span style="font-size:14px;font-weight:500;line-height:1.45">🏖️ ' +
            title + ': ' + msg.replace(/<br>/g, ' ').replace(/<\/?strong>/g, '') + '</span>' +
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
      return;
    }

    // ── POPUP ───────────────────────────────────────────────────
    var ov = document.createElement('div');
    ov.id = 'ann-ov';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.innerHTML =
      '<div id="ann-box">' +
        '<button id="ann-x" aria-label="Zatvori">&#10005;</button>' +
        '<div id="ann-top">' +
          '<span id="ann-ico">🏖️</span>' +
          '<h3>' + title + '</h3>' +
        '</div>' +
        '<div id="ann-body">' + msg +
          '<button id="ann-ok">' + btn + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(ov);
    document.body.style.overflow = 'hidden';

    function close() {
      ov.remove();
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      sessionStorage.setItem('ann_dismissed', '1');
    }
    function onKey(e) { if (e.key === 'Escape') close(); }

    document.getElementById('ann-ok').onclick = close;
    document.getElementById('ann-x').onclick  = close;
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    document.addEventListener('keydown', onKey);
    document.getElementById('ann-ok').focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
