// ═══════════════════════════════════════════════════════════════════
//  ITALTERM – Katalog proizvoda
//  Uredite ovu datoteku da dodate, izmijenite ili uklonite proizvode.
// ═══════════════════════════════════════════════════════════════════
//
//  KAKO DODATI PROIZVOD:
//  ─────────────────────
//  Kopirajte jedan blok ispod i popunite polja:
//
//  {
//    group: 'grijanje',               ← glavna kategorija (vidi listu ispod)
//    cat:   'radijatori',             ← potkategorija     (vidi listu ispod)
//    brand: 'Rifar',                  ← naziv brenda
//    name:  'Monolit 500',            ← naziv proizvoda
//    desc:  'Opis proizvoda...',       ← kratki opis (1-2 rečenice)
//    code:  'RF-MON-500',             ← šifra artikla
//    img:   'images/rf-mon-500.jpg',  ← putanja do slike (opcionalno)
//  },
//
// ───────────────────────────────────────────────────────────────────
//  DOSTUPNE GRUPE (group):
//    'grijanje'   'hladenje'   'sanitarije'   'vodomaterijal'   'plin'
//
//  DOSTUPNE POTKATEGORIJE (cat):
//  [grijanje]
//    'radijatori'          'cirkulacijske-pumpe'   'dimovodne-cijevi'
//    'spremnici'           'dizalice-topline'      'fancoil'
//    'pex-al-pex'          'cijevi-grijanje'       'izolacija'
//    'podno-grijanje'      'ovjesni-pribor'
//  [hladenje]
//    'klima-uredaji'       'prateci-materijal'     'cijevi-klima'
//  [sanitarije]
//    'slavine-kuhinjske'   'slavine-umivaonik'     'slavine-tus'
//    'slavine-bide'        'kade'                  'kabine'
//    'bojleri'             'vodokotlici'           'namjestaj'
//    'tus-kanalice'        'wc-daske'
//  [vodomaterijal]
//    'spremnici-vodo'      'cijevi'                'ventili'
//    'kanalizacija'        'navodnjavanje'         'alkaten'
//  [plin]
//    'regulatori'          'plinski-materijal'     'plin-pex'
//
// ───────────────────────────────────────────────────────────────────
//  SLIKE – kako dodati:
//
//  JEDNA SLIKA:
//    Napravite folder "images" pored ovog datotekaa.
//    Stavite sliku tamo i u proizvodu upišite:
//      img: 'images/pumpa.jpg',
//
//  VIŠE SLIKA (galerija):
//    Koristite 'imgs' (množina) s nizom putanja:
//      imgs: [
//        'images/pumpa-1.jpg',
//        'images/pumpa-2.jpg',
//        'images/pumpa-3.jpg',
//      ],
//    Prva slika se prikazuje kao glavna, ostale kao thumbnail-i
//    na stranici proizvoda. Klikom na thumbnail mijenja se glavna slika.
//
//  Ako ne dodate ni img ni imgs – prikazat će se placeholder. Nema greške.
//  Preporučena veličina: 600×400 px, bijela pozadina, JPG ili PNG.
//
// ───────────────────────────────────────────────────────────────────
//  SPECIFIKACIJE (opcionalno) – kako dodati tabelu:
//
//    specs: {
//      title:   'Tehnički podaci',                          // opcionalan naslov
//      headers: ['Model', 'Učinak hlađenja', 'Učinak grijanja', 'Dimenzije'],
//      rows: [
//        ['AirLeaf SL 200',  '0,91 kW', '1,02 kW', '735 x 579 x 129'],
//        ['AirLeaf SL 400',  '2,12 kW', '2,21 kW', '935 x 579 x 129'],
//        ['AirLeaf SL 600',  '2,81 kW', '3,02 kW', '1135 x 579 x 129'],
//        ['AirLeaf SL 800',  '3,30 kW', '3,81 kW', '1335 x 579 x 129'],
//        ['AirLeaf SL 1000', '3,71 kW', '4,32 kW', '1535 x 579 x 129'],
//      ],
//    },
//
//  Možete koristiti i bez 'title' i bez 'headers' – samo 'rows'.
//  Ako ne dodate 'specs' – tabela se neće prikazati. Nema greške.
//
// ───────────────────────────────────────────────────────────────────
//  KARAKTERISTIKE / FEATURES (opcionalno) – lista s kvačicama:
//
//    features: [
//      'Klasa energetske efikasnosti A+++',
//      'WiFi upravljanje aplikacijom',
//      'Rad do -25°C',
//      '5 godina garancije',
//    ],
//
//  Prikazuje se ispod opisa kao lista s plavim kvačicama.
//  Idealno za istaknute proizvode (npr. LG Therma V).
//
// ───────────────────────────────────────────────────────────────────
//  LOGO BRENDA (opcionalno) – prikazuje logo iznad naziva proizvoda:
//
//    brandLogo: 'images/brendovi/lg.png',
//
//  Ako ne dodate 'brandLogo' – prikazat će se samo tekst brenda. Nema greške.
//  Preporučena visina logotipa: 80–120 px, transparentna pozadina (PNG).
// ═══════════════════════════════════════════════════════════════════

const PRODUCTS = [
  // ── GRIJANJE › RADIJATORI ──────────────────────────────────────
  
   {
    group: 'grijanje',
    cat:   'radijatori',
    brand: 'Termopan',
    name:  'RADIJATOR PLOČASTI TERMOPAN - KOMPAKT K-22',
    desc:  'Panelni radijatori Termopan nude kombinaciju vrhunskog kvaliteta, performansi i dizajna, zahvaljujući najsavremenijoj i najmodernijoj tehnologiji. Dizajn pruža potpunu fleksibilnost ugradnje.',
    code:  'K-22',
    img:   'images/Grijanje/Radijatori/Pločasti radijatori/termopan-vk-22.jpg',
     variants: [
    { label: '600 X 400',  code: '',  notes: '...'  },
    { label: '600 X 600',  code: '',  notes: '...'  },
    { label: '600 X 800',  code: '',  notes: '...'  }, 
    { label: '600 X 1000', code: '',  notes: '...'  },
    { label: '600 X 1200', code: '',  notes: '...'  },
    { label: '600 X 1400', code: '',  notes: '...'  },
    { label: '600 X 1600', code: '',  notes: '...'  },
    { label: '600 X 1800', code: '',  notes: '...'  },
    { label: '600 X 2000', code: '',  notes: '...'  },
    ], 
  }, 
  {
    group: 'grijanje',
    cat:   'radijatori',
    brand: 'Termopan',
    name:  'RADIJATOR PLOČASTI TERMOPAN - VENTILSKI VK - K-22',
    desc:  'Panelni radijatori Termopan nude kombinaciju vrhunskog kvaliteta, performansi i dizajna, zahvaljujući najsavremenijoj i najmodernijoj tehnologiji. Dizajn pruža potpunu fleksibilnost ugradnje.',
    code:  'VK-K-22',
    img:   'images/Grijanje/Radijatori/Pločasti radijatori/termopan-vk-22.jpg',
    variants: [
    { label: '600 X 400',  code: '',  notes: '...'  },
    { label: '600 X 600',  code: '',  notes: '...'  },
    { label: '600 X 800',  code: '',  notes: '...'  }, 
    { label: '600 X 1000', code: '',  notes: '...'  },
    { label: '600 X 1200', code: '',  notes: '...'  },
    { label: '600 X 1400', code: '',  notes: '...'  },
    ], 
  },
   
  // ── GRIJANJE › CIRKULACIJSKE PUMPE ────────────────────────────
   {
    group: 'grijanje',
    cat:   'cirkulacijske-pumpe',
    brand: 'IBO',
    name:  'OHI PRO CIRKULACIJSKA PUMPA',
    desc:  'IBO OHI PRO predstavlja seriju klasičnih (trobrzinskih) cirkulacijskih pumpi s produljenim vijekom trajanja, namijenjenih sustavima centralnog grijanja, klimatizacije te cirkulacije potrošne tople vode.',
    code:  'OHI-PRO',
    img: 'images/Grijanje/Cirk. pumpe/IBO OHI PRO.jpg',
    variants: [
    { label: '25-60/180',  code: 'OHI-PRO-25-60-180',  notes: '...'  },
    { label: '25-80/180',  code: 'OHI-PRO-25-60-180',  notes: '...'  },
    { label: '32-60/180',  code: 'OHI-PRO-32-60-180',  notes: '...'  },
  ],
  },
  {
    group: 'grijanje',
    cat:   'cirkulacijske-pumpe',
    brand: 'IBO',
    name:  'MAGI 2 CIRKULACIJSKA PUMPA',
    desc:  'IBO MAGI 2 je napredna, energetski štedna cirkulacijska pumpa namijenjena za kućnu upotrebu. Opremljen modernim motorom s trajnim magnetom i regulatorom diferencijalnog tlaka, automatski prilagođava svoje performanse trenutnim hidrauličkim potrebama sustava.',
    code:  'MAGI-2',
    img: 'images/Grijanje/Cirk. pumpe/IBO MAGI 2.png',
    variants: [
    { label: '25-60/180',  code: 'MAGI-2-25-60-180',  notes: '...' },
    { label: '25-80/180',  code: 'MAGI-2-25-80-180',  notes: '...'  },
    { label: '32-60/180',  code: 'MAGI-2-32-60-180',  notes: '...'  },
  ],

  },
 
  {
    group: 'grijanje',
    cat:   'cirkulacijske-pumpe',
    brand: 'IBO',
    name:  'MAGI H ELEKTRONSKA CIRKULACIJSKA PUMPA',
    desc:  'IBO MAGI H je visokoučinkovita, elektronička cirkulacijska pumpa namijenjena za sustave centralnog grijanja, podnog grijanja, solarne sustave te klimatizaciju.',
    code:  'MAGI-H',
    img: 'images/Grijanje/Cirk. pumpe/IBO MAGI H.jpg',
    variants: [
    {label: "25-120/180", code: "MAGI-H-25-120-180", notes: "..."    },
    {label: "32-120/180", code: "MAGI-H-32-120-180", notes: "..."},
    ],
  },
  
  {
    group: 'grijanje',
    cat:   'cirkulacijske-pumpe',
    brand: 'IBO',
    name:  'AMG SOLAR 25-80/180',
    desc:  'IBO AMG Solar 25-80/180 je visokoučinkovita, energetski štedljiva elektronička cirkulacijska pumpa posebno optimizirana za rad u solarnim sustavima i sustavima centralnog grijanja.',
    code:  'AMG-SOLAR',
    img: 'images/Grijanje/Cirk. pumpe/IBO AMG SOLAR.jpg',
  },
  {
    group: 'grijanje',
    cat:   'cirkulacijske-pumpe',
    brand: 'IBO',
    name:  'EPRO 151 PLUS',
    desc:  'IBO EPRO 15-15 PLUS je kompaktna, iznimno energetski štedljiva elektronička cirkulacijska pumpa namijenjena isključivo za cirkulaciju tople sanitarne vode (P.T.V. / C.W.U.) u kućanstvima.',
    code:  'EPRO-15-15-PLUS',
    img: 'images/Grijanje/Cirk. pumpe/IBO EPRO 15-15 PLUS.jpg',
  },
  {
    group: 'grijanje',
    cat:   'cirkulacijske-pumpe',
    brand: 'IBO',
    name:  'OHI BRONZE',
    desc:  'IBO OHI BRONZE je klasična trobrzinska cirkulacijska pumpa s kućištem od bronce (oznaka BR), namijenjena prvenstveno za cirkulaciju potrošne tople vode (P.T.V.) u stambenim objektima.',
    code:  'OHI-BR',
    img: 'images/Grijanje/Cirk. pumpe/OHI BR.jpg',
    variants: [
    { label: '15-60/130',  code: 'OHI-BR-15-60-130',  notes: '...'  },
    { label: '25-60/130',  code: 'OHI-BR-25-60-130',  notes: '...'  },
  ],
  },
  {
    group: 'grijanje',
    cat:   'cirkulacijske-pumpe',
    brand: 'IBO',
    name:  'W15 IH 10',
    desc:  'je kompaktna površinska automatska pumpa za povećanje pritiska vode u hidrauličkim instalacijama.',
    img: 'images/Grijanje/Cirk. pumpe/W15 IH 10.jpg',
  },


  // ── GRIJANJE › DIMOVODNE CIJEVI ───────────────────────────────
  /* {
    group: 'grijanje',
    cat:   'dimovodne-cijevi',
    brand: 'TECNOGAS',
    name:  'Dimovod DN80/125 – 1m',
    desc:  'Koaksijalna dimovod cijev DN80/125, dužina 1 m. Za kondenzacijske kotlove, nehrđajući čelik.',
    code:  'TG-DV-80-1M',
     img: 'images/tecnogas-dimovod-80.jpg',
 }, */

  // ── GRIJANJE › SPREMNICI, BUFFERI, BOJLERI ────────────────────
  {
    group: 'grijanje',
    cat:   'spremnici',
    brand: 'AUSTRIA EMAIL',
    name:  'SOLARNI SPREMNIK HT ERMR 10 bar - 2 IZMJENJIVAČA',
    desc:  'HT ERMR označava seriju visokokvalitetnih solarnih stojećih bojlera (spremnika tople vode). Ovi uređaji služe za indirektno zagrijavanje i skladištenje potrošne tople vode pomoću dva ugrađena izmjenjivača topline.',
    code:  'AE-ERMR',
    img: 'images/Grijanje/SPREMNICI/AE ERMR.webp',
    variants: [ 
    { label: '200 L',  code: 'AE-ERMR-200',  notes: '...'  },
    { label: '300 L',  code: 'AE-ERMR-300',  notes: '...'  },
    { label: '500 L',  code: 'AE-ERMR-500',  notes: '...'  },
  ],
 },
 {
    group: 'grijanje',
    cat:   'spremnici',
    brand: 'AUSTRIA EMAIL',
    name:  'SOLARNI SPREMNIK TSA 10 bar - 2 IZMJENJIVAČA',
    desc:  'Spremnik solarni Austria Email TSA predstavlja kombinirani solarni bojler od 10 bara s dva ugrađena izmjenjivača topline, posebno optimiziran za kućne sustave pripreme tople sanitarne vode.',
    code:  'AE-TSA-02',
    img: 'images/Grijanje/SPREMNICI/ae tsa 2.jpg',
    variants: [
    { label: '200 L',  code: 'AE-TSA-202',  notes: '...'  },
    { label: '300 L',  code: 'AE-TSA-302',  notes: '...'  },
    { label: '500 L',  code: 'AE-TSA-502',  notes: '...'  },
  ],
 },
 {
    group: 'grijanje',
    cat:   'spremnici',
    brand: 'TESY',
    name:  'SOLARNI SPREMNIK - 2 IZMJENJIVAČA',
    desc:  'Visokokvalitetni kombinirani spremnik tople vode s dva izmjenjivača topline. Proizvod potpisuje poznati europski proizvođač TESY. Najčešće se primjenjuje u modernim kućanstvima za povezivanje na bivalentne sustave grijanja, poput kombinacije solarnih kolektora i plinskog kotla ili kotla na kruta goriva.',
    code:  'TESY-EV7',
    img: 'images/Grijanje/SPREMNICI/TESY EV7.jpg',
    variants: [
    { label: '200 L',  code: 'TESY-EV7-200',  notes: '...'  },
    ],
 },
{
    group: 'grijanje',
    cat:   'spremnici',
    brand: 'AUSTRIA EMAIL',
    name:  'SPREMNIK DIZALICE TOPLINE - 1 IZMJENJIVAČ',
    desc:  'Austria Email TSA HP predstavlja najnoviju seriju modernih spremnika tople sanitarne vode specijaliziranih za rad s dizalicama topline. HP u nazivu označava Heat Pump (dizalica topline), a glavna odlika ove serije je jedan integrirani izmjenjivač topline iznimno velike površine koji omogućuje visoku učinkovitost prijenosa energije pri niskim radnim temperaturama.',
    code:  'AE-TSA-HP',
    img: 'images/Grijanje/SPREMNICI/AE TSA.jpg',
    variants: [
    { label: '200 L',  code: 'AE-TSA-HP-201',  notes: '...'  },
    { label: '300 L',  code: 'AE-TSA-HP-301',  notes: '...'  },
    { label: '500 L',  code: 'AE-TSA-HP-501',  notes: '...'  },
  ],
 },
 {
    group: 'grijanje',
    cat:   'spremnici',
    brand: 'AUSTRIA EMAIL',
    name:  'SPREMNIK DIZALICE TOPLINE - 1 IZMJENJIVAČ',
    desc:  'Austria Email TSA 151 predstavlja monovalentni samostojeći spremnik tople vode s jednim izmjenjivačem topline i nazivnim radnim tlakom od 10 bara. ',
    code:  'AE-TSA-151',
    img: 'images/Grijanje/SPREMNICI/ae tsa 2.jpg',
    variants: [
    //{ label: '200 L',  code: 'AE-TSA-151-200',  notes: '...'  },
    //{ label: '300 L',  code: 'AE-TSA-151-300',  notes: '...'  },
    { label: '500 L',  code: 'AE-TSA-151-500',  notes: '...'  },
  ],
 },
 {
    group: 'grijanje',
    cat:   'spremnici',
    brand: 'THERMOFLUX',
    name:  'SPREMNIK DIZALICE TOPLINE INOX - 2 IZMJENJIVAČA',
    desc:  'Thermoflux STV 320 je visokokvalitetni inox spremnik tople sanitarne vode zapremine 320 litara. Ovaj model je specifično optimiziran za rad s modernim sustavima grijanja poput dizalica topline (toplotnih pumpi) i solarnih sustava.',
    code:  'TF-STV-320',
    img: 'images/Grijanje/SPREMNICI/TF STV320.webp',
 },
  // ── GRIJANJE › DIZALICE TOPLINE ───────────────────────────────
  {
    group: 'grijanje',
    cat:   'dizalice-topline',
    brand: 'LG',
    name:  'THERMA V MONOBLOK',
    desc:  'LG Therma V je visokoučinkovita dizalica topline zrak-voda koja koristi naprednu invertersku tehnologiju za maksimalnu uštedu energije i stabilno grijanje čak i pri ekstremnim zimskim temperaturama. Zahvaljujući ekološkom plinu R32 i tihom radu, predstavlja idealno, dugoročno rješenje za podno grijanje, radijatore i pripremu potrošne tople vode u svakom modernom domu.',
    code:  'LG THERMA V',
    featured: true,
    img: 'images/Grijanje/Dizalice topline/LG THERMA V/LG THERMA V.jpg',
    variants: [
    { label: '5.5 kW ',   code: 'LG-THERMA-V-5K-1Ø',  notes: 'MONOFAZA'  },
    { label: '7.0 kW ',   code: 'LG-THERMA-V-7K-1Ø',  notes: 'MONOFAZA'  },
    { label: '9.0 kW ',   code: 'LG-THERMA-V-9K-1Ø', notes: 'MONOFAZA'  },
    { label: '12.0 kW ',  code: 'LG-THERMA-V-12K-1Ø',  notes: 'MONOFAZA'  },
    { label: '14.0 kW ',  code: 'LG-THERMA-V-14K-1Ø',  notes: 'MONOFAZA'  },
    { label: '16.0 kW ',  code: 'LG-THERMA-V-16K-1Ø', notes: 'MONOFAZA'  },

      { label: '12.0 kW ',   code: 'LG-THERMA-V-12K-3Ø',  notes: 'TROFAZA'  },
      { label: '14.0 kW ',   code: 'LG-THERMA-V-14K-3Ø',  notes: 'TROFAZA'  },
      { label: '16.0 kW ',   code: 'LG-THERMA-V-16K-3Ø', notes: 'TROFAZA'  },
  ],
  },
  {
    group: 'grijanje',
    cat:   'dizalice-topline',
    brand: 'THERMOFLUX',
    name:  'THERMOFLUX MONOBLOK R410A',
    desc:  'THERMOFLUX MONOBLOK R410A  je serija inverterskih dizalica topline zrak-voda, prepoznatljiva po izvrsnom omjeru cijene i kvalitete te visokoj energetskoj učinkovitosti do A+++ razreda. Budući da se radi o monoblok izvedbi, cijeli rashladni krug smješten je unutar jedne vanjske jedinice.',
    code:  'TF-MONOBLOK-R410A',
    featured: true,
    img: 'images/Grijanje/Dizalice topline/THERMOFLUX/MONOBLOK R410A.webp',
    variants: [
    { label: '10.0 kW ',   code: 'TF-MONOBLOK-R410A-10DC-1Ø',  notes: 'MONOFAZA'  },
    { label: '13.0 kW ',   code: 'TF-MONOBLOK-R410A-13DC-1Ø',  notes: 'MONOFAZA'  },
    { label: '17.0 kW ',   code: 'TF-MONOBLOK-R410A-17DC-1Ø', notes: 'MONOFAZA'  },
    { label: '19.0 kW ',   code: 'TF-MONOBLOK-R410A-19DC-1Ø',  notes: 'MONOFAZA'  },
    
    
      { label: '17.0 kW ',   code: 'LG-THERMA-V-17DC-3Ø',  notes: 'TROFAZA'  },
      { label: '19.0 kW ',   code: 'LG-THERMA-V-19DC-3Ø',  notes: 'TROFAZA'  },
      { label: '26.0 kW ',   code: 'LG-THERMA-V-26DC-3Ø', notes: 'TROFAZA'  },
      { label: '32.0 kW ',   code: 'LG-THERMA-V-32DC-3Ø', notes: 'TROFAZA'  },
  ],
  },
  {
    group: 'grijanje',
    cat:   'dizalice-topline',
    brand: 'THERMOFLUX',
    name:  'THERMOFLUX MONOBLOK R32',
    desc:  'THERMOFLUX MONOBLOK R32   je inverterska dizalica topline zrak/voda namijenjena za grijanje, hlađenje i pripremu potrošne tople vode. Karakterizira je visoka energetska učinkovitost energetskog razreda A+++, ekološki prihvatljiviji plin R32 te napredna EVI tehnologija ubrizgavanja koja omogućuje stabilan rad na ekstremnim temperaturama.',
    code:  'TF-MONOBLOK-R32',
    featured: true,
    img: 'images/Grijanje/Dizalice topline/THERMOFLUX/MONOBLOK R32.webp',
    variants: [
    { label: '6.0 kW ',   code: 'TF-MONOBLOK-R32-06EVI-1Ø',  notes: 'MONOFAZA'  },
    { label: '10.0 kW ',   code: 'TF-MONOBLOK-R32-10EVI-1Ø',  notes: 'MONOFAZA'  },
    { label: '12.0 kW ',   code: 'TF-MONOBLOK-R32-12EVI-1Ø', notes: 'MONOFAZA'  },
    { label: '16.0 kW ',   code: 'TF-MONOBLOK-R32-16EVI-1Ø',  notes: 'MONOFAZA'  },
    
    
      { label: '16.0 kW ',   code: 'LG-THERMA-V-16EVI-3Ø',  notes: 'TROFAZA'  },
      { label: '20.0 kW ',   code: 'LG-THERMA-V-20EVI-3Ø',  notes: 'TROFAZA'  },
      { label: '22.0 kW ',   code: 'LG-THERMA-V-22EVI-3Ø', notes: 'TROFAZA'  },
      
  ],
  },
  // ── GRIJANJE › FANCOIL ────────────────────────────────────────
  {
    group: 'grijanje',
    cat:   'fancoil',
    brand: 'INNOVA',
    name:  'AirLeaf SL',
    desc:  'Innova AirLeaf SL je serija ultra tankih i dizajnerskih hidroničkih ventilokonvektora (fancoila) namijenjenih za grijanje, hlađenje i odvlaživanje prostora. Zbog svoje dubine od svega 129 mm i elegantnog izgleda sa skrivenim kućištem, idealan su izbor za moderne stambene prostore i savršeno se kombiniraju s niskotemperaturnim izvorima poput dizalica topline',
    code:  'AirLeaf SL',
    featured: true,
    imgs: [ 'images/Grijanje/Fancoil/Innova AirLeaf SL.jpg', 
            'images/Grijanje/Fancoil/Innova AirLeaf SL show.jpg'
          ],
    variants: [
    { label: 'AirLeaf SL 200',  code: 'AirLeaf-SL-200',  },
    { label: 'AirLeaf SL 400',  code: 'AirLeaf-SL-400',  },
    { label: 'AirLeaf SL 600',  code: 'AirLeaf-SL-600',  },
    { label: 'AirLeaf SL 800',  code: 'AirLeaf-SL-800',  },
    { label: 'AirLeaf SL 1000', code: 'AirLeaf-SL-1000', },
  ],
    specs: {
      title:   'Tehnički podaci',
      headers: ['Model', 'Učinak hlađenja', 'Učinak grijanja', 'Dimenzije (Š x V x D mm)'],
      rows: [
        ['AirLeaf SL 200',  '0,91 kW', '1,02 kW', '735 x 579 x 129'],
        ['AirLeaf SL 400',  '2,12 kW', '2,21 kW', '935 x 579 x 129'],
        ['AirLeaf SL 600',  '2,81 kW', '3,02 kW', '1135 x 579 x 129'],
        ['AirLeaf SL 800',  '3,30 kW', '3,81 kW', '1335 x 579 x 129'],
        ['AirLeaf SL 1000', '3,71 kW', '4,32 kW', '1535 x 579 x 129'],
      ],
  },
  },
  {
    group: 'grijanje',
    cat:   'fancoil',
    brand: 'CLIVET',
    name:  'Aura CFFAC',
    desc:  'Clivet Aura CFFAC je serija svestranih i elegantnih hidroničkih ventilokonvektora (fancoila) s klasičnim AC motorom s 3 brzine, namijenjenih za podnu (parapetnu) ili stropnu montažu. Za razliku od prethodno spomenutog Innova AirLeaf modela koji se fokusira na ultra-tanki profil (129 mm), Clivet Aura donosi robustan talijanski dizajn standardne dubine od 200 mm, vrhunski kapacitet grijanja i hlađenja te visoku fleksibilnost pri ugradnji.',
    code:  'Aura CFFAC',
    featured: true,
    imgs: [ 'images/Grijanje/Fancoil/Clivet Aura.jpg', 
            'images/Grijanje/Fancoil/Clivet Aura CFFAC.jpg'
          ],
    variants: [
    { label: 'Aura CFFAC 1',  code: 'Aura-CFFAC-1',  },
    { label: 'Aura CFFAC 2',  code: 'Aura-CFFAC-2',  },
    { label: 'Aura CFFAC 3',  code: 'Aura-CFFAC-3',  },
    { label: 'Aura CFFAC 6',  code: 'Aura-CFFAC-6',  },
    { label: 'Aura CFFAC 10',  code: 'Aura-CFFAC-10',  },
    { label: 'Aura CFFAC 12',  code: 'Aura-CFFAC-12',  },
  ],
    specs: {
      title:   'Tehnički podaci',
      headers: ['Model', 'Učinak hlađenja', 'Učinak grijanja', 'Dimenzije (Š x V x D mm)'],
      rows: [
        ['Aura CFFAC 1',  '1,65 kW', '1,85 kW', '790 x 495 x 200'],
        ['Aura CFFAC 2',  '2,25 kW', '2,35 kW', '790 x 495 x 200'],
        ['Aura CFFAC 3',  '2,65 kW', '3,05 kW', '1020 x 495 x 200'],
        ['Aura CFFAC 6',  '4,20 kW', '4,70 kW', '1240 x 495 x 200'],
        ['Aura CFFAC 10', '6,75 kW', '7,15 kW', '1360 x 495 x 200'],
        ['Aura CFFAC 12', '8,25 kW', '8,50 kW', '1360 x 495 x 200'],
      ],
  },
  },
  {
    group: 'grijanje',
    cat:   'fancoil',
    brand: 'BPS Clima',
    name:  'BPS Clima FC-VM1',
    desc:  'BPS Clima FC-VM1 je elegantan i snažan ventilokonvektor s ukrasnim kućištem, namijenjen za vidljivu montažu nisko na zid ili na pod (parapetna ugradnja) FC-VM5 FC-VM4 FC-VM3 FC-VM2 FC-VM1 FC-OM1 FC-OM2 .... Predstavlja savršenu i energetski učinkovitu zamjenu za klasične radijatore u sustavima s dizalicama topline ili chillerima, pružajući vrhunsko grijanje i hlađenje prostora.',
    code:  'BPS-FC-VM1',
    featured: true,
    imgs: [ 'images/Grijanje/Fancoil/BPS VM1.jpg',
            'images/Grijanje/Fancoil/BPS FC VM1.jpg',     
          ],
    variants: [
    { label: 'FC 22 - VM1',  code: 'BPS-FC-VM1',  },
    { label: 'FC 32 - VM1',  code: 'BPS-FC-VM1',  },
    { label: 'FC 52 - VM1',  code: 'BPS-FC-VM1',  },
    { label: 'FC 72 - VM1',  code: 'BPS-FC-VM1',  },
    { label: 'FC 92 - VM1',  code: 'BPS-FC-VM1',  },
  ],
    specs: {
      title:   'Tehnički podaci',
      headers: ['Model', 'Učinak hlađenja', 'Učinak grijanja', 'Dimenzije (Š x V x D mm)'],
      rows: [
        ['FC 22 - VM1',  '2,00 kW', '4,91 kW', '870 x 625 x 220'],
        ['FC 32 - VM1',  '2,53 kW', '5,98 kW', '870 x 625 x 220'],
        ['FC 52 - VM1',  '3,75 kW', '8,16 kW', '1070 x 625 x 220'],
        ['FC 72 - VM1',  '5,52 kW', '12,00 kW', '1270 x 625 x 220'],
        ['FC 92 - VM1',  '7,53 kW', '15,50 kW', '1470 x 625 x 220'],
      ],
  },
  },
  // ── GRIJANJE › PODNO-GRIJANJE ─────────────────────────────────────
  {
  group: 'grijanje',
  cat:   'podno-grijanje',
  brand: 'FRAGMAT',
  name:  'RASTER',
  desc:  'STIROTERMAL DUO je vrlo kompaktna ploča koja omogućuje ravnomjerno opterećenje, sastoji se od tvrdog stiropora i tvrdo profilirane polistirenske folije. Ploče se međusobno čvrsto i vodonepropusno spajaju poprečno i uzdužno po principu >>čep u čep<<, stoga su prikladne za ugradnju ispod cementnog estriha kao i ispod samonivelirajućih estriha u prostorijama gdje je visina poda ograničena. Oblik čepova omogućuje vrlo čvrsto pričvršćivanje cijevi promjera od 14 do 18 mm na udaljenosti od najmanje 50 mm.',
  code:  'RASTER',
  img:   'images/Grijanje/PODNO GRIJANJE/RASTER.png',
  variants: [
    { label: 'STIROTERMAL DUO 33mm',  code: 'STIROTERMAL-11',  },
    { label: 'STIROTERMAL DUO 42mm',  code: 'STIROTERMAL-20',  },
    { label: 'STIROTERMAL DUO 52mm',  code: 'STIROTERMAL-30',  },
  ],
},
 {
  group: 'grijanje',
  cat:   'podno-grijanje',
  brand: 'Sa.Mi Plastic',
  name:  'CIJEV ZA PODNO GRIJANJE',
  desc:  'Petoslojne cijevi s integriranom EVOH barijerom u središnjem sloju pružaju vrhunsku fleksibilnost, stopostotnu zaštitu od prodora kisika i maksimalnu otpornost na oštećenja tijekom ugradnje podnog grijanja.',
  code:  'PODNO-GRIJANJE',
  img:   'images/Grijanje/PODNO GRIJANJE/CIJEVI.png',
  variants: [
    { label: 'ø16mm',  code: 'SAMI-16',  },
  ],
},
{
  group: 'grijanje',
  cat:   'podno-grijanje',
  brand: 'FERRO',
  name:  'RAZDJELNICI ZA PODNO GRIJANJE',
  desc:  'Razdjelnik za podno grijanje je "srce i mozak" cijelog sustava koji prima toplu vodu iz bojlera ili toplinske pumpe te je precizno raspoređuje po pojedinačnim cijevima u prostorijama.',
  code:  'RAZDJELNICI',
  img:   'images/Grijanje/PODNO GRIJANJE/RAZDJELNICI.png',
  variants: [
    { label: '2 IZLAZA',  code: '',  },
    { label: '3 IZLAZA',  code: '',  },
    { label: '4 IZLAZA',  code: '',  },
    { label: '5 IZLAZA',  code: '',  },
    { label: '6 IZLAZA',  code: '',  },
    { label: '7 IZLAZA',  code: '',  },
    { label: '8 IZLAZA',  code: '',  },
    { label: '9 IZLAZA',  code: '',  },
    { label: '10 IZLAZA',  code: '',  },
    { label: '11 IZLAZA',  code: '',  },
    { label: '12 IZLAZA',  code: '',  },
    { label: '13 IZLAZA',  code: '',  },
    { label: '14 IZLAZA',  code: '',  },
    { label: '15 IZLAZA',  code: '',  },
  ],
},
  // ── GRIJANJE › PEX-AL-PEX ─────────────────────────────────────
  {
    group: 'grijanje',
    cat:   'pex-al-pex',
    brand: 'Sa.Mi Plastic',
    name:  'PEX-AL-PEX CIJEV ZA GRIJANJE-HLAĐENJE - BIJELA IZOLACIJA',
    desc:  'Pex-Al-Pex cijev je vrhunska višeslojna kompozitna cijev s tvorničkom bijelom izolacijom, koja zahvaljujući aluminijskoj barijeri i toplinskoj zaštiti pruža maksimalnu energetsku učinkovitost, sprječava kondenzaciju i osigurava dugotrajan rad u sustavima grijanja i hlađenja.',
    code:  'PEX-AL-PEX-GRIJANJE-HLADENJE',
    img: 'images/Grijanje/PEX-AL-PEX/PEX-AL-PEX GRIJANJE-HLAĐENJE.jpg',
    variants: [
    { label: 'ø16mm',  code: '',  },
    { label: 'ø20mm',  code: '',  },
    ]
  },
  {
    group: 'grijanje',
    cat:   'pex-al-pex',
    brand: 'Sa.Mi Plastic',
    name:  'PEX-AL-PEX CIJEV ZA VODU - PLAVA IZOLACIJA',
    desc:  'PEX-Al-PEX je visokokvalitetna višeslojna cijev s tvorničkom plavom izolacijom, koja osigurava maksimalnu higijensku ispravnost, sprječava zagrijavanje i kondenzaciju hladne vode te jamči dugotrajnu sigurnost vodovodnih instalacija.',
    code:  'PEX-AL-PEX-PLAVA',
    img: 'images/Grijanje/PEX-AL-PEX/pex-al-pex plava.jpg',
    variants: [
    { label: 'ø16mm',  code: '',  },
    { label: 'ø20mm',  code: '',  },
    { label: 'ø26mm',  code: '',  },
    { label: 'ø32mm',  code: '',  },
    ]
  },
  {
    group: 'grijanje',
    cat:   'pex-al-pex',
    brand: 'Sa.Mi Plastic',
    name:  'PEX-AL-PEX CIJEV ZA VODU - BEZ IZOLACIJE',
    desc:  'SAMI višeslojnA neizoliranA cijev s kisikovom barijerom, dimenzija 16 x 2 mm, namijenjena za vodovodne sustave, grijanje i podno grijanje.',
    code:  'PEX-AL-PEX-BEZ-IZOLACIJE',
    img: 'images/Grijanje/PEX-AL-PEX/SAMI 16 BEZ IZOLACIJE.jpg',
    variants: [
    { label: 'ø16mm',  code: '',  },
    ]
  },
  // ── GRIJANJE › CIJEVI ─────────────────────────────────────────
 /* {
    group: 'grijanje',
    cat:   'cijevi-grijanje',
    brand: 'Viega',
    name:  'Bakarna cijev 15mm – 5m',
    desc:  'Tvrda bakarna cijev Ø15 mm, dužina 5 m. EN 1057, za instalacije grijanja i vode.',
    code:  'VI-BAK-15-5M',
    // img: 'images/viega-bakar-15.jpg',
  },*/

  // ── GRIJANJE › IZOLACIJA ──────────────────────────────────────
  /*{
    group: 'grijanje',
    cat:   'izolacija',
    brand: 'THERMOFLUX',
    name:  'Armaflex AF-1 Ø18mm – 2m',
    desc:  'Elastomerna izolacija za cijevi Ø18 mm, debljina 19 mm. Samoljepljiva, dužina 2 m.',
    code:  'TF-AF-18-2M',
    // img: 'images/thermoflux-armaflex-18.jpg',
  },*/

  // ── HLAĐENJE › KLIMA UREĐAJI ──────────────────────────────────
  {
    group: 'hladenje',
    cat:   'klima-uredaji',
    brand: 'CLIVET',
    name:  'CLIVET Nativ serija',
    desc:  'Clivet Nativ je inverter klima uređaja renomiranog talijanskog brenda Clivet. Ističe se odličnom kvalitetom te pruža energetski učinkovito hlađenje (A++) i grijanje (A+) uz visoku pouzdanost.',
    code:  'Clivet Nativ',
    featured: true,
    imgs: ['images/Hlađenje/Klima uređaji/Clivet Nativ AC.jpg',
            'images/Hlađenje/Klima uređaji/Clivet Nativ klima uređaj.jpg'
    ],
    variants: [
    { label: 'NATIV 27M',  code: 'NATIV 27M',  },
    { label: 'NATIV 35M',  code: 'NATIV 35M',  },
    { label: 'NATIV 53M',  code: 'NATIV 53M',  },
    { label: 'NATIV 70M',  code: 'NATIV 70M',  },
  ],
    specs: {
      title:   'Tehnički podaci',
      headers: ['Model', 'Učinak hlađenja', 'Učinak grijanja', 'Energetska klasa (H/G)'],
      rows: [
        ['Nativ 27M',  '2,75 kW', '2,90 kW', 'A++ / A+'],
        ['Nativ 35M',  '3,52 kW', '3,81 kW', 'A++ / A+'],
        ['Nativ 53M',  '5,30 kW', '5,60 kW', 'A++ / A+'],
        ['Nativ 70M',  '7,03 kW', '7,33 kW', 'A++ / A+'],
      ],
  },
  },
  {
    group: 'hladenje',
    cat:   'cijevi-klima',
    brand: '',
    name:  'CIJEVI ZA KLIMA UREĐAJE',
    desc:  'Predizolirana bakrena cijev namijenjena za klimatizacijske i split sustave, koja zahvaljujući specijalnom polimernom omotaču pruža iznimnu otpornost na UV zrake, mehanička oštećenja i stvaranje kondenzacije.',
    code:  'cijevi-klima',
    img: 'images/Hlađenje/OPREMA ZA KLIME/ISOCLIMA/Cijevi za klimu.png',
    variants: [
        { label: 'ø6'  },
        { label: 'ø10' },
        { label: 'ø12' },
        { label: 'ø16' }
    ],
  },
  {
    group: 'hladenje',
    cat:   'prateci-materijal',
    brand: 'TECNOGAS',
    name:  'ALAT ZA SAVIJANJE CIJEVI',
    desc:  'Ovaj je alat namijenjen isključivo za precizno, hladno savijanje mekanih bakrenih cijevi za klima uređaje, bez oštećenja ili deformacija. Omogućuje savijanje cijevi do maksimalnog kuta od 90°. Minimalni radijus zakrivljenosti iznosi 2,5 puta promjer cijevi (2,5 x Ø), što sprječava spljoštavanje, gužvanje ili pucanje stijenki cijevi prilikom rada.',
    code:  'ALAT-ZA-SAVIJANJE-CIJEVI',
    imgs: ['images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/alat za savijanje cijevi/11535 1.jpg',
            'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/alat za savijanje cijevi/11535 2.jpg',
            'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/alat za savijanje cijevi/11535 3.jpg',
            'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/alat za savijanje cijevi/11535 4.jpg',
            'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/alat za savijanje cijevi/11535 5.jpg',
            'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/alat za savijanje cijevi/11535 6.jpg',
            'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/alat za savijanje cijevi/11535 7.jpg',
    ],
  },
  {
    group: 'hladenje',
    cat:   'prateci-materijal',
    brand: 'TECNOGAS',
    name:  'SPREJ PJENASTI ZA ČIŠĆENJE KLIMA UREĐAJA',
    desc:  'Ovaj proizvod je namjenski pjenasti sprej za čišćenje i higijenizaciju unutarnjih jedinica klima uređaja (isparivača i filtera).',
    code:  'SPREJ-PJENASTI',
    imgs: ['images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/SPREJ ZA DEZINFEKCIJU/SPREJ PJENA 1.jpg',
            'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/SPREJ ZA DEZINFEKCIJU/SPREJ PJENA 2.jpg',
    ],
  },
   {
    group: 'hladenje',
    cat:   'prateci-materijal',
    brand: 'TECNOGAS',
    name:  'CLEAN-L TEKUĆINA ZA DEZINFEKCIJU KLIMA UREĐAJA',
    desc:  'Proizvod je specijalna tekućina za uklanjanje kamenca i pranje, razvijena posebno za čišćenje lamela na isparivačima i kondenzatorima unutarnjih i vanjskih jedinica. Uništava naslage kamenca, tvrdokornu prljavštinu i bakterije koje se razvijaju unutar ovih sklopova.',
    code:  'CLEAN-L',
    imgs: ['images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/SPREJ ZA DEZINFEKCIJU/CLEANL 1.jpg',
    ],
  },
{
    group: 'hladenje',
    cat:   'prateci-materijal',
    brand: 'TECNOGAS',
    name:  'SANIX SPREJ ZA DEZINFEKCIJU KLIMA UREĐAJA',
    desc:  'Glavna namjena ove linije je uništavanje bakterijske flore i neutralizacija neugodnih mirisa koji se razvijaju unutar unutarnjih jedinica klima uređaja uslijed nakupljanja vlage. Tekući sprej namijenjen za izravno prskanje po filterima i izmjenjivaču topline unutarnje jedinice.',
    code:  'SANIX-SPREJ',
    img: 'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/SPREJ ZA DEZINFEKCIJU/SANIX SPREJ.jpg',
  },
  {
    group: 'hladenje',
    cat:   'prateci-materijal',
    brand: 'TECNOGAS',
    name:  'SANIX TABLETE ZA DEZINFEKCIJU KLIMA UREĐAJA',
    desc:  'Ove su tablete posebno dizajnirane za tretiranje stajaće vode u odvodu kondenzata. Sprječavaju nastanak algi, kamenca i popratnih mirisa. Primjenjuju se tako da se jedna tableta mjesečno ubaci izravno u ugradbenu kadicu za skupljanje kondenzata. Posudica sadrži 33 tableta.',
    code:  'SANIX-TABLETE',
    img: 'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/SPREJ ZA DEZINFEKCIJU/SANIX TABLETE.jpg',
  },
  {
    group: 'hladenje',
    cat:   'prateci-materijal',
    brand: 'TECNOGAS',
    name:  'MANOMETRI ZA KLIMA UREĐAJE',
    desc:  'Profesionalni manometarski set namijenjen punjenju, pražnjenju i testiranju klimatizacijskih i rashladnih sustava.',
    code:  'MANOMETAR-KLIMA',
    imgs: ['images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/MANOMETRI/MANOMETRI SET - KUTIJA.jpg',
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/MANOMETRI/MANOMETRI SET - MANOMETRI.jpg',
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/MANOMETRI/MANOMETRI SET - CIJEVI.jpg',
    ],
  },
  {
    group: 'hladenje',
    cat:   'prateci-materijal',
    brand: 'TECNOGAS',
    name:  'SET ZA SAVIJANJE CU CIJEVI ZA KLIMA UREĐAJE',
    desc:  'Iznimno praktično i fleksibilno rješenje za hladno oblikovanje bakrenih cijevi, namijenjeno prvenstveno instalaterima klimatizacijskih i rashladnih sustava. Set se sastoji od 4 opruge za savijanje cijevi u rasponu od Ø 1/4",Ø 3/8", Ø 1/2", Ø 5/8" ',
    code:  'SET-SAVIJANJE',
    imgs: ['images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/alat za savijanje cijevi/11543 -11.jpg',
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/alat za savijanje cijevi/11543 -12.jpg',
    ],
  },
  {
    group: 'hladenje',
    cat:   'prateci-materijal',
    brand: 'TECNOGAS',
    name:  'ALAT ZA PERTLANJE ',
    desc:  'FLA-TOP 45°, komplet s alatom za frikcijsko proširenje cijevi za kutove od 45°, rezačem cijevi i alatom za uklanjanje neravnina s cijevi. Komplet uključuje: steznu šipku i ekscentrični čelični konus za prirubnicu te vilicu s klinom za centriranje i indikatorom položaja. Okretni unutarnji-vanjski odstranjivač srha s cijevi, Ø 50 mm. Rezač cijevi, 5 do 28 mm. Isporučuje se u praktičnoj plastičnoj kutiji.',
    code:  'FLA-TOP-45',
    imgs: ['images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/ALAT ZA PERTLANJE/FLA TOP 45 ALAT.jpg',
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/ALAT ZA PERTLANJE/PERT ALAT.png', 
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/ALAT ZA PERTLANJE/ČISTAČ.png',
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/ALAT ZA PERTLANJE/REZAČ.png',  
    ],
  },
  {
    group: 'hladenje',
    cat:   'prateci-materijal',
    brand: 'TECNOGAS',
    name:  'PUMPA ZA KONDENZAT',
    desc:  'Ovaj uređaj služi za prisilno izbacivanje kondenzata iz unutarnjih jedinica klima uređaja u situacijama kada nije moguće izvesti prirodni pad. Može podići vodu s dubine do 2 metra, dok njezina maksimalna visina potiska i ukupna duljina odvodne linije iznose do 12 metara.',
    code:  'TECNOWATER-PUMPA',
    imgs: ['images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/TG PUMPA ZA KONDENZ/TG PUMPA 1.jpg',
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/TG PUMPA ZA KONDENZ/TG PUMPA 2.jpg', 
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/TG PUMPA ZA KONDENZ/TG PUMPA 3.jpg',
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/TG PUMPA ZA KONDENZ/TG PUMPA 4.jpg', 
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/TG PUMPA ZA KONDENZ/TG PUMPA 5.jpg',
           'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/TG PUMPA ZA KONDENZ/TG PUMPA 6.jpg', 
    ],
  },
{
    group: 'hladenje',
    cat:   'prateci-materijal',
    brand: 'TECNOGAS',
    name:  'MIRISNI SPREJ ZA DEZINFEKCIJU KLIMA UREĐAJA',
    desc:  'Sanet dezinfekcijski sprej idealan je za uklanjanje neugodnih mirisa uzrokovanih plijesni i bakterijskom florom koja može biti prisutna unutar klima uređaja. Dezinfekcijsko i osvježavajuće. Dostupno u mirisima Ocean Blue i Papaya.',
    code:  'SANET-SPREJ',
    imgs: ['images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/SPREJ ZA DEZINFEKCIJU/BLUE OCEAN.png',
      'images/Hlađenje/OPREMA ZA KLIME/TECNOGAS/SPREJ ZA DEZINFEKCIJU/PAPAYA.png'
    ],
    variants: [
    { label: 'Ocean Blue',  code: 'SANET-OCEAN-BLUE',  },
    { label: 'Papaya',  code: 'SANET-PAPAYA',  },
  ],
  },
  
  // ── VODOMATERIJAL › SANITARIJE ────────────────────────────────
  {
    group: 'sanitarije',
    cat:   'vodokotlici',
    brand: 'GEBERIT',
    name:  'GEBERIT DELTA01 UGRADBENI VODOKOTLIĆ',
    desc:  'Geberit Delta 01 je pouzdani i dugotrajni ugradbeni vodokotlić koji pruža tiho ispiranje i elegantan dizajn uz jednostavnu montažu u suhomontažne ili zidane zidove.',
    code:  'DELTA-01',
    img: 'images/VODOMATERIJAL/VODOKOTLIĆI/UGRADBENI VODOKOTLIĆI/GEBERIT/DELTA01.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'vodokotlici',
    brand: 'TECE',
    name:  'TECE UGRADBENI VODOKOTLIĆ',
    desc:  'TECE ugradbeni vodokotlić je izuzetno fleksibilan i tehnički napredan sustav koji se ističe velikim volumenom ispiranja, iznimno tihim radom te univerzalnim aktivacijskim mehanizmom koji vam omogućuje slobodan izbor i naknadnu promjenu bilo koje TECE tipke za ispiranje.',
    code:  'TECE',
    img: 'images/VODOMATERIJAL/VODOKOTLIĆI/UGRADBENI VODOKOTLIĆI/TECE/TECE VODOKOTLIĆ.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'vodokotlici',
    brand: 'REHAU',
    name:  'REHAU UGRADBENI VODOKOTLIĆ',
    desc:  'REHAU MEPA P31 je visokokvalitetni njemački ugradbeni vodokotlić visine osmišljen u suradnji s ekspertom za sanitarne tehnologije MEPA, koji se ističe iznimno robusnim, plastificiranim čeličnim okvirom, nogicama podesivim po visini do 240 mm s integriranim antikliznim sustavom te vrhunskom izolacijom protiv kondenzacije i podesivim dvokoličinskim ispiranjem.',
    code:  'REHAU',
    img: 'images/VODOMATERIJAL/VODOKOTLIĆI/UGRADBENI VODOKOTLIĆI/REHAU/REHAU.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'vodokotlici',
    brand: 'GEBERIT',
    name:  'GEBERIT AP110 VODOKOTLIĆ',
    desc:  'Geberit AP110 (poznat i kao "Rio") je klasični nadžbukni vodokotlić za nisku montažu, izrađen od ASA plastike otporne na UV zrake, koji nudi praktično dvokoličinsko ispiranje (3/4 ili 6/9 litara) i potpunu izolaciju protiv kondenzacije.',
    code:  'AP110-RIO',
    img: 'images/VODOMATERIJAL/VODOKOTLIĆI/VODOKOTLIĆI/GEBERIT/AP110.webp',
  },
  {
    group: 'sanitarije',
    cat:   'vodokotlici',
    brand: 'GEBERIT',
    name:  'GEBERIT AP112 VODOKOTLIĆ',
    desc:  'Geberit AP112 je iznimno svestran nadžbukni vodokotlić prilagođen za nisku, srednju ili visoku montažu, opremljen start/stop tipkom za uštedu vode, potpunom izolacijom protiv orošavanja te mogućnošću trostranog priključka vode.',
    code:  'AP112',
    img: 'images/VODOMATERIJAL/VODOKOTLIĆI/VODOKOTLIĆI/GEBERIT/AP112.webp',
  },
   {
    group: 'sanitarije',
    cat:   'vodokotlici',
    brand: 'GEBERIT',
    name:  'GEBERIT AP116 VODOKOTLIĆ',
    desc:  'Geberit AP116 je moderan nadžbukni vodokotlić za nisku montažu koji se odlikuje elegantnim, tankim linijama i dizajnom s dvije odvojene tipke za dvokoličinsko ispiranje (3/4,5 l i 6/7,5 l), čime pruža maksimalnu uštedu vode i suvremeniji izgled u kupaonici.',
    code:  'AP116',
    img: 'images/VODOMATERIJAL/VODOKOTLIĆI/VODOKOTLIĆI/GEBERIT/AP116.webp',
  },
  {
    group: 'sanitarije',
    cat:   'vodokotlici',
    brand: 'LIV',
    name:  'LIV LAGUNA VODOKOTLIĆ',
    desc:  'LIV Laguna je iznimno popularan i cjenovno pristupačan nadžbukni vodokotlić za nisku montažu (s mogućnošću visoke), napravljen od kvalitetnog ABS materijala s ugrađenom izolacijom protiv kondenzacije i velikom start/stop tipkom koja omogućuje jednostavnu kontrolu i uštedu potrošnje vode.',
    code:  'LIV-LAGUNA',
    img: 'images/VODOMATERIJAL/VODOKOTLIĆI/VODOKOTLIĆI/LIV/LAGUNA.webp',
  },
  // ── VODOMATERIJAL › WC DASKE ──────────────────────────────────
 /* {
    group: 'vodomaterijal',
    cat:   'wc-daske',
    brand: 'GEBERIT',
    name:  'Sedo WC daska softclose',
    desc:  'WC daska s mekim zatvaranjem, bijela. Uklanjanje jednim pritiskom dugmeta za lako čišćenje.',
    code:  'GE-SED-WCS',
    // img: 'images/geberit-sedo-daska.jpg',
  },*/

  // ── VODOMATERIJAL › BATERIJE ──────────────────────────────────
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA KUHINJU - TUBO DARK ELEGANCE',
    desc:  'Baterija za sudoperu MINOTTI TUBO DARK ELEGANCE.',
    code:  '6118 / 6118-3',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/61183B.jpg',
    variants: [
    { label: '6118',  code: '6118', desc: 'Slavina za sudeoper sa 2 cijevi', },
    { label: '6118-3',  code: '6118-3', desc: 'Slavina za sudeoper sa 3 cijevi', },
  ],
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA KADU - TUBO DARK ELEGANCE',
    desc:  'Slavina za kadu MINOTTI TUBO DARK ELEGANCE.',
    code:  '6111B',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/TUŠ SLAVINE/6111B.jpg',
  },
   {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA TUŠ - TUBO DARK ELEGANCE',
    desc:  'Slavina za tuš MINOTTI TUBO DARK ELEGANCE.',
    code:  '6113B',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/TUŠ SLAVINE/6113B.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-umivaonik',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA UMIVAONIK - TUBO DARK ELEGANCE',
    desc:  'Slavina za umivaonik MINOTTI TUBO DARK ELEGANCE.',
    code:  '6112B',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/SLAVINE ZA UMIVAONIK/6112B.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA KUHINJU - TUBO',
    desc:  'Slavina za kuhinju MINOTTI TUBO.',
    code:  '6128B',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/6128B.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA SUDOPER SAVITLJIVA STELA',
    desc:  'Slavina za sudoper savitljiva MINOTTI STELA.',
    code:  '2120',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/2120.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA KUHINJU - TUBO',
    desc:  'Slavina za kuhinju MINOTTI TUBO.',
    code:  '4501',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/4501_4501-3.jpg',
    variants: [
    { label: '4501',  code: '4501', desc: 'Slavina za sudoper sa 2 cijevi', },
    { label: '4501-3',  code: '4501-3', desc: 'Slavina za sudoper sa 3 cijevi', },
  ],
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA KUHINJU - PRIMA',
    desc:  'Slavina za kuhinju - MINOTTI PRIMA',
    code:  '4114',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/4114_4114-3.jpg',
    variants: [
    { label: '4114',  code: '4114', desc: 'Slavina za sudoper sa 2 cijevi', },
    { label: '4114-3',  code: '4114-3', desc: 'Slavina za sudoper sa 3 cijevi', },
  ],
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA KUHINJU - STANDARD',
    desc:  'Slavina za kuhinju MINOTTI STANDARD.',
    code:  '8884',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/8884.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA KUHINJU - STANDARD',
    desc:  'Slavina za kuhinju MINOTTI STANDARD - 3 cijevi.',
    code:  '8888',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/8888.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA KUHINJU - STANDARD',
    desc:  'Slavina za sudoper MINOTTI STANDARD.',
    code:  '6888',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/6888.jpg',
  },
  
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA KUHINJU - STANDARD',
    desc:  'Slavina za kuhinju MINOTTI STANDARD.',
    code:  '6884',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/6884_6884-S.jpg',
    variants: [
    { label: '6884',  code: '6884', desc: 'Slavina za sudoper sa 2 cijevi', },
    { label: '6884-S',  code: '6884-S', desc: 'Slavina za sudoper sa 3 cijevi', },
  ],
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA PROTČNI BOJLER -  STANDARD',
    desc:  'Slavina za protočni bojler MINOTTI STANDARD.',
    code:  '7833',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/7833.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'SLAVINA ZA KUHINJU - MINOTTI',
    desc:  'Slavina za KUHINJU MINOTTI.',
    code:  'MH-9018-J',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/9018.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'MINOTTI',
    name:  'MINOTTI SLAVINA ZA KUHINJU ZIDNA ZA HLADNU VODU  - PRIMA',
    desc:  'Slavina za kuhinju zidna za hladnu vodu MINOTTI PRIMA',
    code:  '4007',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/KUHINJSKE SLAVINE/4007.jpg',
  },
 {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'MINOTTI',
    name:  'SLAVINA ZA TUŠ - MINOTTI PRIMA',
    desc:  'Slavina za tuš MINOTTI PRIMA.',
    code:  '4113',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/TUŠ SLAVINE/4113.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'MINOTTI',
    name:  'SLAVINA ZA TUŠ - MINOTTI STANDARD',
    desc:  'Slavina za tuš MINOTTI STANDARD.',
    code:  '6883',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/TUŠ SLAVINE/6883.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'MINOTTI',
    name:  'SLAVINA ZA TUŠ - MINOTTI PRIMA',
    desc:  'Slavina za tuš MINOTTI PRIMA.',
    code:  '4111',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/TUŠ SLAVINE/4111.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'MINOTTI',
    name:  'SLAVINA ZA TUŠ OKRETNA - MINOTTI PRIMA',
    desc:  'Slavina za tuš okretna MINOTTI PRIMA.',
    code:  '4110',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/TUŠ SLAVINE/4110.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'MINOTTI',
    name:  'SLAVINA ZA  KADU - MINOTTI STANDARD',
    desc:  'Slavina za kadu MINOTTI STANDARD.',
    code:  '6881',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/TUŠ SLAVINE/6881.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-umivaonik',
    brand: 'MINOTTI',
    name:  'SLAVINA ZA UMIVAONIK - MINOTTI PRIMA',
    desc:  'Slavina za umivaonik MINOTTI PRIMA.',
    code:  '4112',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/SLAVINE ZA UMIVAONIK/4112.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-umivaonik',
    brand: 'MINOTTI',
    name:  'SLAVINA ZA UMIVAONIK - MINOTTI STANDARD',
    desc:  'Slavina za umivaonik MINOTTI STANDARD.',
    code:  '6885',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/SLAVINE ZA UMIVAONIK/6885.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-bide',
    brand: 'MINOTTI',
    name:  'SLAVINA ZA BIDE - MINOTTI PRIMA',
    desc:  'Slavina za bide MINOTTI PRIMA.',
    code:  '4116',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/SLAVINE ZA BIDE/4116.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-bide',
    brand: 'MINOTTI',
    name:  'SLAVINA ZA BIDE - MINOTTI STANDARD',
    desc:  'Slavina za bide MINOTTI STANDARD.',
    code:  '6889',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/SLAVINE ZA BIDE/6889.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'MINOTTI',
    name:  'TUŠ SET QUADRA NEW - MINOTTI DARK ELEGANCE',
    desc:  'Crna Minotti Quadra New baterija za tuš sa usponskim tušem i ružom nudi savršen spoj luksuza i funkcionalnosti za moderno kupatilo MINOTTI TUBO DARK ELEGANCE.',
    code:  'MUT-045B',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/TUŠ SLAVINE/MUT-045B.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'MINOTTI',
    name:  'TUŠ SET QUADRA - MINOTTI DARK ELEGANCE',
    desc:  'Baterija za tuš sa komplet usponskim tušem ruža MINOTTI TUBO DARK ELEGANCE.',
    code:  'MUT-065B',
    img: 'images/VODOMATERIJAL/SLAVINE/MINOTTI/TUŠ SLAVINE/MUT-065B.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'VALVEX',
    name:  'VALVEX DIONE CHROME UGRADBENI TUŠ SET',
    desc:  'Dione Chrome ugradbeni tuš set VALVEX.',
    code:  '2449990',
    img: 'images/VODOMATERIJAL/SLAVINE/VALVEX/UGRADBENI TUŠ SET/DIONE CHROME.png',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'VALVEX',
    name:  'VALVEX ARS CHROME TUŠ SET',
    desc:  'Ars Chrome ugradbeni tuš set VALVEX.',
    code:  '2420150',
    img: 'images/VODOMATERIJAL/SLAVINE/VALVEX/UGRADBENI TUŠ SET/ARS CHROME.png',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'VALVEX',
    name:  'VALVEX ARS BLACK TUŠ SET',
    desc:  'Ars Black ugradbeni tuš set VALVEX.',
    code:  '2420160',
    img: 'images/VODOMATERIJAL/SLAVINE/VALVEX/UGRADBENI TUŠ SET/ARS BLACK.png',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-umivaonik',
    brand: 'VALVEX',
    name:  'VALVEX ARS SLAVINA ZA UMIVAONIK - VISOKA',
    desc:  'Ars slavina za umivaonik - visoka VALVEX.',
    code:  '2420360',
    img: 'images/VODOMATERIJAL/SLAVINE/VALVEX/SLAVINE/ARS VISOKA.png',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'UNITAS',
    name:  'UNITAS - i90 INFINITY RUČICA ZA PODŽBUKNU SLAVINU',
    desc:  'Rozetna i ručica za podžbuknu bateriju s prebacivačem INFINITY (12250) UNITAS.',
    code:  '12250',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/INFINITY/UNITAS INFINITY i90 12250.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA TUŠ INFINITY',
    desc:  'Baterija tuš jednoručna INFINITY UNITAS.',
    code:  '00401',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/INFINITY/SLAVINA ZA TUŠ 00401 INFINITY.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'UNITAS',
    name:  'UNITAS - TUŠ SET KOMPLET INFINITY',
    desc:  'Šipka klizna, tuš ručica niklovana, crijevo za tuš 150 cm SET UNITAS INFINITY (12460).',
    code:  '12460',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/INFINITY/SET ZA TUŠ KOMPLET 12460 INFINITY.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA KUHINJU INFINITY',
    desc:  'Baterija usadna jednoručna za sudoper Infinity 00170 UNITAS.',
    code:  '00170',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/INFINITY/SLAVINA ZA KUHINJU 00170 INFINITY.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA KUHINJU INFINITY',
    desc:  'Baterija usadna jednoručna za sudoper Infinity 00175 UNITAS.',
    code:  '00175',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/INFINITY/SLAVINA ZA KUHINJU 00175 INFINITY.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA KUHINJU INFINITY',
    desc:  'Baterija usadna jednoručna za sudoper Infinity 00176 UNITAS.',
    code:  '00176',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/INFINITY/SLAVINA ZA KUHINJU 00176 INFINITY.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-umivaonik',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA UMIVAONIK INFINITY',
    desc:  'Baterija usadna s 2 cijevi jednoručna za umivaonik 102x84 mm UNITAS INFINITY (00004).',
    code:  '00004',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/INFINITY/SLAVINA ZA UMIVAONIK 00004 INFINITY.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-umivaonik',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA UMIVAONIK INFINITY',
    desc:  'Baterija usadna s 2 cijevi jednoručna za umivaonik 118x91 mm UNITAS INFINITY (00014).',
    code:  '00014',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/INFINITY/SLAVINA ZA UMIVAONIK 00014 INFINITY.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-bide',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA BIDE INFINITY',
    desc:  'Baterija za bide jednoručna UNITAS INFINITY (00503).',
    code:  '00503',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/INFINITY/SLAVINA ZA BIDE 00503 INFINITY.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-umivaonik',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA UMIVAONIK ZIDNA CLASSIC',
    desc:  'Slavina pokretna 1/2" UNITAS 10351.',
    code:  '10351',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/CLASSIC/SLAVINA ZA UMIVAONIK ZIDNA 10351.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-umivaonik',
    brand: 'UNITAS',
    name:  'UNITAS - ZA KUHINJU PREGIBNA FRESH',
    desc:  'Baterija usadna jednoručna za kuhinju pregibna UNITAS FRESH (00135).',
    code:  '00135',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/FRESH/SLAVINA ZA SUDOPER PREGIBNA 00135 FRESH.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'UNITAS',
    name:  'UNITAS - PODŽBUKNI MJEŠAČ ZA TUŠ ',
    desc:  'SlMješač podžbukni za tuš bateriju s prebacivačem FRESH,PROJECT, INFINITY (00368) UNITAS.',
    code:  '00368',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/PODŽBUKNI/PODŽBUKNA MJEŠALICA 00368 BLACK.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'UNITAS',
    name:  'UNITAS - PODŽBUKNA SLAVINA ZA TUŠ',
    desc:  'Podžbukna baterija set SQ s prebacivačem UNITAS (mješač i nadžbukna rozetna) (00362).',
    code:  '00362',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/PODŽBUKNI/PODŽBUKNA SLAVINA 00362 SQ.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'UNITAS',
    name:  'UNITAS - PODŽBUKNI SET CRNI ZA TUŠ SQ BLACK',
    desc:  'Podžbukna baterija set SQ s prebacivačem UNITAS (mješač i nadžbukna rozetna) (00364).',
    code:  '00364',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/PODŽBUKNI/PODŽBUKNI TUŠ 00364 SQ BLACKjpg.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'UNITAS',
    name:  'UNITAS - PODŽBUKNI SET CRNI ZA TUŠ ELITE BLACK',
    desc:  'Podžbukni set ELITE CRNI (mješač,rozetna,zidni priključak,držač tuša,tuš mlaznica,ručica,crijevo,držač zidni) UNITAS BLACK (00364).',
    code:  '00364',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/PODŽBUKNI/PODŽBUKNI TUŠ 00377 ELITE BLACK.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-bide',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA BIDE PROJECT',
    desc:  'Baterija za bide jednoručna UNITAS PROJECT (00518).',
    code:  '00518',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/PROJECT/SLAVINA ZA BIDE 00518 PROJECT.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA KUHINJU  PROJECT',
    desc:  'Baterija usadna s 3 cijevi jednoručna za sudoper UNITAS PROJECT (01185).',
    code:  '01185',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/PROJECT/SLAVINA ZA KUHINJU 01185 PROJECT.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA TUŠ PROJECT',
    desc:  'Baterija tuš jednoručna bez izljeva PROJECT UNITAS (00425).',
    code:  '00425',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/PROJECT/SLAVINA ZA TUŠ 00425 PROJECT.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-umivaonik',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA UMIVAONIK PROJECT',
    desc:  'Baterija usadna s 2 cijevi jednoručna za umivaonik UNITAS PROJECT (00026).',
    code:  '00026',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/PROJECT/SLAVINA ZA UMIVAONIK 00026 PROJECT.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-tus',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA KADU SIMPATY',
    desc:  'Baterija tuš jednoručna pokretni izljev UNITAS SIMPATY (00389).',
    code:  '00389',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/SIMPATY/SLAVINA ZA KADU 00389 SIMPATY.jpg',
  },
  {
    group: 'sanitarije',
    cat:   'slavine-kuhinjske',
    brand: 'UNITAS',
    name:  'UNITAS - SLAVINA ZA PROTOČNI BOJLER PROJECT',
    desc:  'Baterija za protočni bojler jednoručna UNITAS SIMPATY (01281).',
    code:  '01281',
    img: 'images/VODOMATERIJAL/SLAVINE/UNITAS/SIMPATY/SLAVINA ZA KUHINJU - ZIDNA 01281 SIMPATY.jpg',
  },


  {
    group: 'sanitarije',
    cat:   'kabine',
    brand: 'ROCCO ECO',
    name:  'WALK IN TUŠ KABINA ROCCO ECO - CRNO MAT',
    desc:  'Kabina tuš WALK IN h-200 (8mm sivo (zatamnjeno) staklo, crni mat profili, crna mat teleskopska šipka 70-120 cm) ROCCO ECO.',
    code:  '31168',
    imgs: [
      'images/VODOMATERIJAL/TUŠ STIJENKE/CRNO STAKLO/ROCCO ECO - 80 X 200 CRNO STAKLO.jpg',
      'images/VODOMATERIJAL/TUŠ STIJENKE/CRNO STAKLO/ROCCO ECO - 80 X 200 CRNO STAKLO 1.jpg',
      'images/VODOMATERIJAL/TUŠ STIJENKE/CRNO STAKLO/ROCCO ECO - 80 X 200 CRNO STAKLO 2.jpg',
      'images/VODOMATERIJAL/TUŠ STIJENKE/CRNO STAKLO/ROCCO ECO - 80 X 200 CRNO STAKLO 3.jpg'
    ]
  },
  {
    group: 'sanitarije',
    cat:   'kabine',
    brand: 'ROCCO ECO',
    name:  'WALK IN TUŠ KABINA ROCCO ECO',
    desc:  'Kabina tuš WALK IN h-200 WALK IN (8mm prozirno staklo, teleskopska šipka 70-120 cm) ROCCO ECO.',
    code:  '31206',
    imgs: [
      'images/VODOMATERIJAL/TUŠ STIJENKE/PROZIRNO STAKLO/ROCCO ECO - 80 X 200 PROZIRNO STAKLO.jpg',
      'images/VODOMATERIJAL/TUŠ STIJENKE/PROZIRNO STAKLO/ROCCO ECO - 80 X 200 PROZIRNO STAKLO 2.jpg',
      'images/VODOMATERIJAL/TUŠ STIJENKE/PROZIRNO STAKLO/ROCCO ECO - 80 X 200 PROZIRNO STAKLO 3.jpg',
      'images/VODOMATERIJAL/TUŠ STIJENKE/PROZIRNO STAKLO/ROCCO ECO - 80 X 200 PROZIRNO STAKLO 4.jpg'
    ]
  },

  // ── VODOMATERIJAL › BOJLERI ───────────────────────────────────
  {
    group: 'sanitarije',
    cat:   'bojleri',
    brand: 'TESY',
    name:  'TESY BASE LINE ',
    desc:  'TESY BiLight Base Line označava seriju pouzdanih, energetski učinkovitih električnih i kombiniranih bojlera europskog proizvođača TESY.',
    code:  'TESY-BASE-LINE',
    img: 'images/VODOMATERIJAL/Bojleri/Tesy/Base line.jpg',
    variants: [
    { label: 'TESY Base Line 50L',  code: 'TESY-BASE-50',  },
    { label: 'TESY Base Line 80L',  code: 'TESY-BASE-80',  },
    { label: 'TESY Base Line 100L',  code: 'TESY-BASE-100',  },
    { label: 'TESY Base Line 120L',  code: 'TESY-BASE-120',  },
    { label: 'TESY Base Line 150L',  code: 'TESY-BASE-150',  }, 
    ],
  },
  {
    group: 'sanitarije',
    cat:   'bojleri',
    brand: 'THERMOFLUX',
    name:  'THERMOFLUX SLIM',
    desc:  'ThermoFLUX Slim je moderni i elegantni električni bojler koji spaja visoku energetsku učinkovitost i naprednu tehnologiju, a prvenstveno je namijenjen ugradnji u kupaonice svih veličina gdje je prostor ograničen.',
    code:  'THERMOFLUX-SLIM',
    featured: true,
    img: 'images/VODOMATERIJAL/Bojleri/Thermoflux/Thermoflux slim.webp',
    variants: [
    { label: 'THERMOFLUX SLIM 50L',  code: 'THERMOFLUX-SLIM-50',  },
    { label: 'THERMOFLUX SLIM 80L',  code: 'THERMOFLUX-SLIM-80',  },
    ],
  },
  {
    group: 'sanitarije',
    cat:   'bojleri',
    brand: 'ATLANTIC',
    name:  "ATLANTIC O'PRO",
    desc:  "Atlantic O'Pro+ 2K predstavlja seriju visokoučinkovitih klasičnih električnih bojlera francuskog proizvođača Atlantic, prepoznatljivih po ugrađenom snažnom bakrenom grijaču od 2000 W (2K). Glavna prednost ove serije je ekskluzivna, patentirana O'Pro tehnologija koja pruža vrhunsku zaštitu od korozije i produljuje životni vijek uređaja do 50%.",
    code:  'ATLANTIC-O-PRO',
    img: 'images/VODOMATERIJAL/Bojleri/Atlantic/OPRO 2K.jpg',
    variants: [
    { label: "ATLANTIC O'PRO 50L",  code: 'ATLANTIC-O-PRO-50',  },
    { label: "ATLANTIC O'PRO 80L",  code: 'ATLANTIC-O-PRO-80',  },
    ],
  },
  {
    group: 'sanitarije',
    cat:   'bojleri',
    brand: 'ATLANTIC',
    name:  "ATLANTIC O'PRO SLIM",
    desc:  "Atlantic O'Pro Slim 2,0 K je serija visokokvalitetnih kompaktnih električnih bojlera s uskim kućištem, opremljenih snažnim bakrenim grijačem od 2000 W (2,0 K). Zahvaljujući malom promjeru vanjskog plašta, ovi su modeli idealni za ugradnju u uske prostore, niše ili kupaonice s ograničenim zidnim prostorom.",
    code:  'ATLANTIC-O-PRO-SLIM',
    img: 'images/VODOMATERIJAL/Bojleri/Atlantic/OPRO SLIM.jpg',
    variants: [
    { label: "ATLANTIC O'PRO SLIM 30L",  code: 'ATLANTIC-OPRO-SLIM-30',  },
    ],
  },
  // ── VODOMATERIJAL › CIJEVI ────────────────────────────────────
  {
    group: 'vodomaterijal',
    cat:   'alkaten',
    brand: '',
    name:  'ALKATEN CIJEVI ZA VODU 10bar',
    desc:  'Naziv PEHD odnosi se na visokokvalitetne cijevi i pripadajući instalacijski sustav od polietilena visoke gustoće (PE-HD). Ove se cijevi na tržištu najčešće nazivaju alkaten cijevi i primarno se koriste za siguran i dugotrajan transport pitke vode, sustave navodnjavanja te izgradnju uličnih i kućnih vodovodnih priključaka.',
    code:  'Alkaten-PEHD',
    img: 'images/VODOMATERIJAL/CIJEVI/ALKATEN PEHD/PEHD CIJEV.jpg',
    variants: [
    { label: 'Alkaten PEHD 20 mm',  code: 'ALKATEN-PEHD-20',  },
    { label: 'Alkaten PEHD 25 mm',  code: 'ALKATEN-PEHD-25',  },
    { label: 'Alkaten PEHD 32 mm',  code: 'ALKATEN-PEHD-32',  },
    { label: 'Alkaten PEHD 40 mm',  code: 'ALKATEN-PEHD-40',  },
    { label: 'Alkaten PEHD 50 mm',  code: 'ALKATEN-PEHD-50',  },
    ]  
  },
   {
    group: 'vodomaterijal',
    cat:   'alkaten',
    brand: '',
    name:  'ALKATEN CIJEVI ZA NAVODNJAVANJE 6bar',
    desc:  'Idealne su za poljoprivredu, sustave "kap po kap", staklenike i vrtove gdje radni tlakovi rijetko prelaze 3–4 bara.',
    code:  'Alkaten-PEHD-6',
    img: 'images/VODOMATERIJAL/CIJEVI/ALKATEN PEHD/PEHD CIJEV.jpg',
    variants: [
    { label: 'Alkaten PEHD 20 mm',  code: 'ALKATEN-PEHD-20',  },
    { label: 'Alkaten PEHD 25 mm',  code: 'ALKATEN-PEHD-25',  },
    { label: 'Alkaten PEHD 32 mm',  code: 'ALKATEN-PEHD-32',  },
    ]  
  },

  // ── VODOMATERIJAL › NAVODNJAVANJE ──────────────────────────────
  {
    group: 'vodomaterijal',
    cat:   'navodnjavanje',
    brand: 'Rain',
    name:  'RAIN CENTRALA ZA NAVODNJAVANJE I-DIAL-24VAC - 6 i 12 ZONA',
    desc:  'RAIN I-Dial Outdoor je upravljačka jedinica s punom funkcijom dizajnirana za fleksibilno upravljanje sustavom. Njegova svestranost čini ga idealnim za stambene, sportske i komunalne primjene. Može kontrolirati od 6 do 12 solenoidnih ventila s 4 programa i 1 pokretanjem svakog. Jednostavna metodologija programiranja u 3 jednostavna koraka omogućuje vam promjenu programiranja u samo 60 sekundi. Osim toga, dodatne funkcije omogućuju upravljanje senzorom kiše i pumpom.',
    code:  'I-DIAL',
    imgs: [ 'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/I-DIAL.webp',
      'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/I-DIAL CENTRALA.webp',
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'navodnjavanje',
    brand: 'Rain',
    name:  'RAIN CENTRALA ZA NAVODNJAVANJE C-DIAL-24VAC - 12 ZONA',
    desc:  'RAIN C-Dial je kompaktna upravljačka jedinica, jednostavna za korištenje, što je čini savršenom za male stambene primjene. Može kontrolirati do 6 solenoidnih ventila s 2 programa i 2 pokretanja za svaki. Praktično programiranje u 3 jednostavna koraka omogućuje podešavanje navodnjavanja u samo 60 sekundi.',
    code:  'C-DIAL',
    imgs: [ 'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/C-DIAL CENTRALA.webp',
      'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/C-DIAL.webp',
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'navodnjavanje',
    brand: 'Rain',
    name:  'RAIN CENTRALA ZA NAVODNJAVANJE AMICO PRO',
    desc:  'RAIN upravljačka jedinica Amico Pro, napajana s 2 potpuno zatvorene baterije od 1,5 A, može se ugraditi izravno u kutiju solenoidnog ventila.',
    code:  'AMICO-PRO',
    imgs: [ 'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/AMICO PRO.webp',
      'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/AMICO PRO KIT.webp',
    ]
  },
   {
    group: 'vodomaterijal',
    cat:   'navodnjavanje',
    brand: 'Rain',
    name:  'RAIN CENTRALA ZA NAVODNJAVANJE AMICO+',
    desc:  'RAIN Zahvaljujući Amico+ kontroleru stvorena je nova brza i učinkovita metoda programiranja kontrolera u tri jednostavna koraka. Unesite vrijeme navodnjavanja, koliko dugo i koliko često i programiranje sustava je dovršeno. Ovo je posebno prikladno za navodnjavanje malih terasa i balkona.',
    code:  'AMICO-PLUS',
    imgs: [ 'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/AMICO+.webp',
      'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/AMICO+ 1.webp',
      'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/AMICO+ 2.webp',
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'navodnjavanje',
    brand: 'Rain',
    name:  'RAIN SENZOR ZA KIŠU',
    desc:  'RAIN Senzor za kišu Acqua Click funkcionira kao prekidač koji automatski zaustavlja navodnjavanje kada dođe do određene količine kiše. Mehanizam koji omogućuje ovaj rad temelji se na higroskopskim diskovima koji bubre upijajući kišnicu i skupljaju se nakon što ispari.',
    code:  'AQUA-CLICK',
    imgs: [ 'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/SENZOR ZA KIŠU 1.webp',
      'images/VODOMATERIJAL/NAVODNJAVANJE/CENTRALE/SENZOR ZA KIŠU 2.webp',
    ]
  },

  // ── VODOMATERIJAL › VENTILI ───────────────────────────────────
 /* {
    group: 'vodomaterijal',
    cat:   'ventili',
    brand: 'Raccorderie Metalliche',
    name:  'Kuglični ventil DN20 PN25',
    desc:  'Mesing kuglični ventil DN20, PN25. Poluga ručka, PTFE brtva. Za vodu i plin.',
    code:  'RM-KV-20-25',
    // img: 'images/rm-kuglicni-dn20.jpg',
  },*/

  // ── VODOMATERIJAL › KANALIZACIJA ──────────────────────────────
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'VARGON',
    name:  'PP NISKOŠUMNA CIJEV Ø50',
    desc:  'Vargokal Plus je inovativni, niskošumni troslojni kanalizacijski sustav za unutarnju odvodnju otpadnih voda u stambenim, poslovnim i industrijskim objektima. Proizvodi ga tvrtka Vargon (članica Wienerberger grupe), a razvijen je s primarnim ciljem maksimalnog smanjenja buke nastale protokom vode kroz instalacije.',
    code:  'PP-NISKOŠUMNA-50',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/VARGOKAL PLUS.jpg',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'VARGOKAL-PLUS-250',  },
      { label: 'Dužina: 50 cm',  code: 'VARGOKAL-PLUS-500',  },
      { label: 'Dužina: 100 cm',  code: 'VARGOKAL-PLUS-1000',  },
      { label: 'Dužina: 200 cm',  code: 'VARGOKAL-PLUS-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'VARGON',
    name:  'PP NISKOŠUMNA CIJEV Ø110',
    desc:  'Vargokal Plus je inovativni, niskošumni troslojni kanalizacijski sustav za unutarnju odvodnju otpadnih voda u stambenim, poslovnim i industrijskim objektima. Proizvodi ga tvrtka Vargon (članica Wienerberger grupe), a razvijen je s primarnim ciljem maksimalnog smanjenja buke nastale protokom vode kroz instalacije.',
    code:  'PP-NISKOŠUMNA-110',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/VARGOKAL PLUS.jpg',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'VARGOKAL-PLUS-250',  },
      { label: 'Dužina: 50 cm',  code: 'VARGOKAL-PLUS-500',  },
      { label: 'Dužina: 100 cm',  code: 'VARGOKAL-PLUS-1000',  },
      { label: 'Dužina: 200 cm',  code: 'VARGOKAL-PLUS-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'VARGON',
    name:  'PP CIJEV Ø32',
    desc:  'Vargokal kanalizacijske cijevi i spojevi (proizvođača Vargon) vrhunski su sustavi za kućnu kanalizaciju izrađeni od polipropilena (PP) prema standardu EN 1451-1. Koriste se za unutarnju odvodnju otpadnih i oborinskih voda unutar objekata te za ventilaciju odvodnih sustava.',
    code:  'PP-CIJEV-32',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/VARGOKAL.jpg',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'PP-32-250',  },
      { label: 'Dužina: 50 cm',  code: 'PP-32-500',  },
      { label: 'Dužina: 100 cm',  code: 'PP-32-1000',  },
      { label: 'Dužina: 200 cm',  code: 'PP-32-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'VARGON',
    name:  'PP CIJEV Ø40',
    desc:  'Vargokal kanalizacijske cijevi i spojevi (proizvođača Vargon) vrhunski su sustavi za kućnu kanalizaciju izrađeni od polipropilena (PP) prema standardu EN 1451-1. Koriste se za unutarnju odvodnju otpadnih i oborinskih voda unutar objekata te za ventilaciju odvodnih sustava.',
    code:  'PP-CIJEV-40',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/VARGOKAL.jpg',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'PP-40-250',  },
      { label: 'Dužina: 50 cm',  code: 'PP-40-500',  },
      { label: 'Dužina: 100 cm',  code: 'PP-40-1000',  },
      { label: 'Dužina: 200 cm',  code: 'PP-40-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'VARGON',
    name:  'PP CIJEV Ø75',
    desc:  'Vargokal kanalizacijske cijevi i spojevi (proizvođača Vargon) vrhunski su sustavi za kućnu kanalizaciju izrađeni od polipropilena (PP) prema standardu EN 1451-1. Koriste se za unutarnju odvodnju otpadnih i oborinskih voda unutar objekata te za ventilaciju odvodnih sustava.',
    code:  'PP-CIJEV-75',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/VARGOKAL.jpg',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'PP-75-250',  },
      { label: 'Dužina: 50 cm',  code: 'PP-75-500',  },
      { label: 'Dužina: 100 cm',  code: 'PP-75-1000',  },
      { label: 'Dužina: 200 cm',  code: 'PP-75-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'VARGON',
    name:  'PP CIJEV Ø110',
    desc:  'Vargokal kanalizacijske cijevi i spojevi (proizvođača Vargon) vrhunski su sustavi za kućnu kanalizaciju izrađeni od polipropilena (PP) prema standardu EN 1451-1. Koriste se za unutarnju odvodnju otpadnih i oborinskih voda unutar objekata te za ventilaciju odvodnih sustava.',
    code:  'PP-CIJEV-110',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/VARGOKAL.jpg',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'PP-110-250',  },
      { label: 'Dužina: 50 cm',  code: 'PP-110-500',  },
      { label: 'Dužina: 100 cm',  code: 'PP-110-1000',  },
      { label: 'Dužina: 200 cm',  code: 'PP-110-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'VARGON',
    name:  'PP CIJEV Ø125',
    desc:  'Vargokal kanalizacijske cijevi i spojevi (proizvođača Vargon) vrhunski su sustavi za kućnu kanalizaciju izrađeni od polipropilena (PP) prema standardu EN 1451-1. Koriste se za unutarnju odvodnju otpadnih i oborinskih voda unutar objekata te za ventilaciju odvodnih sustava.',
    code:  'PP-CIJEV-125',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/VARGOKAL.jpg',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'PP-125-250',  },
      { label: 'Dužina: 50 cm',  code: 'PP-125-500',  },
      { label: 'Dužina: 100 cm',  code: 'PP-125-1000',  },
      { label: 'Dužina: 200 cm',  code: 'PP-125-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'VARGON',
    name:  'PP CIJEV Ø160',
    desc:  'Vargokal kanalizacijske cijevi i spojevi (proizvođača Vargon) vrhunski su sustavi za kućnu kanalizaciju izrađeni od polipropilena (PP) prema standardu EN 1451-1. Koriste se za unutarnju odvodnju otpadnih i oborinskih voda unutar objekata te za ventilaciju odvodnih sustava.',
    code:  'PP-CIJEV-160',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/VARGOKAL.jpg',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'PP-160-250',  },
      { label: 'Dužina: 50 cm',  code: 'PP-160-500',  },
      { label: 'Dužina: 100 cm',  code: 'PP-160-1000',  },
      { label: 'Dužina: 200 cm',  code: 'PP-160-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'PEŠTAN',
    name:  'UKC CIJEV Ø110 ZA KANALIZACIJU',
    desc:  'Peštan UKC su troslojne narančaste PVC cijevi vrhunske čvrstoće namijenjene za siguran i dugotrajan odvod otpadnih te oborinskih voda u vanjskim, podzemnim kanalizacijskim sustavima.',
    code:  'UKC-CIJEV-110',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/PEŠTAN UKC.webp',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'UKC-110-250',  },
      { label: 'Dužina: 50 cm',  code: 'UKC-110-500',  },
      { label: 'Dužina: 100 cm',  code: 'UKC-110-1000',  },
      { label: 'Dužina: 200 cm',  code: 'UKC-110-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'PEŠTAN',
    name:  'UKC CIJEV Ø125 ZA KANALIZACIJU',
    desc:  'Peštan UKC su troslojne narančaste PVC cijevi vrhunske čvrstoće namijenjene za siguran i dugotrajan odvod otpadnih te oborinskih voda u vanjskim, podzemnim kanalizacijskim sustavima.',
    code:  'UKC-CIJEV-125',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/PEŠTAN UKC.webp',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'UKC-125-250',  },
      { label: 'Dužina: 50 cm',  code: 'UKC-125-500',  },
      { label: 'Dužina: 100 cm',  code: 'UKC-125-1000',  },
      { label: 'Dužina: 200 cm',  code: 'UKC-125-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'PEŠTAN',
    name:  'UKC CIJEV Ø160 ZA KANALIZACIJU',
    desc:  'Peštan UKC su troslojne narančaste PVC cijevi vrhunske čvrstoće namijenjene za siguran i dugotrajan odvod otpadnih te oborinskih voda u vanjskim, podzemnim kanalizacijskim sustavima.',
    code:  'UKC-CIJEV-160',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/PEŠTAN UKC.webp',
    variants: [
      { label: 'Dužina: 25 cm',  code: 'UKC-160-250',  },
      { label: 'Dužina: 50 cm',  code: 'UKC-160-500',  },
      { label: 'Dužina: 100 cm',  code: 'UKC-160-1000',  },
      { label: 'Dužina: 200 cm',  code: 'UKC-160-2000',  },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'VARGON',
    name:  'PP KOLJENO',
   // desc:  'Peštan UKC su troslojne narančaste PVC cijevi vrhunske čvrstoće namijenjene za siguran i dugotrajan odvod otpadnih te oborinskih voda u vanjskim, podzemnim kanalizacijskim sustavima.',
    code:  'PP-KOLJENO',
    img: 'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/PP KOLJENO.jpg',
    variants: [
      { label: '32/45°',  code: 'PP-KOLJENO-32-45',  },
      { label: '32/90°',  code: 'PP-KOLJENO-32-90',  },
      { label: '40/45°',  code: 'PP-KOLJENO-40-45',  },
      { label: '40/90°',  code: 'PP-KOLJENO-40-90',  },
      { label: '50/15°',  code: 'PP-KOLJENO-50-15',  },
      { label: '50/30°',  code: 'PP-KOLJENO-50-30',  },
      { label: '50/45°',  code: 'PP-KOLJENO-50-45',  },
      { label: '50/90°',  code: 'PP-KOLJENO-50-90',  },
      { label: '75/45°',  code: 'PP-KOLJENO-75-45',  },
      { label: '75/90°',  code: 'PP-KOLJENO-75-90',  },
      { label: '110/15°', code: 'PP-KOLJENO-110-15', },
      { label: '110/30°', code: 'PP-KOLJENO-110-30', },
      { label: '110/45°', code: 'PP-KOLJENO-110-45', },
      { label: '110/90°', code: 'PP-KOLJENO-110-90', },
      { label: '125/45°', code: 'PP-KOLJENO-125-45', },
      { label: '125/90°', code: 'PP-KOLJENO-125-90', },
      { label: '160/45°', code: 'PP-KOLJENO-160-45', },
      { label: '160/90°', code: 'PP-KOLJENO-160-90', },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'VARGON',
    name:  'PP RAČVA',
   // desc:  'Peštan UKC su troslojne narančaste PVC cijevi vrhunske čvrstoće namijenjene za siguran i dugotrajan odvod otpadnih te oborinskih voda u vanjskim, podzemnim kanalizacijskim sustavima.',
    code:  'PP-RAČVA',
    imgs: ['images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/PP RAČVA.jpg',
      'images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/PP RAČVA REDUCIRANA.jpg',
    ],
    variants: [
      { label: '32/45°',  code: 'PP-RAČVA-32-45',  },
      { label: '32/90°',  code: 'PP-RAČVA-32-90',  },
      { label: '40/45°',  code: 'PP-RAČVA-40-45',  },
      { label: '40/90°',  code: 'PP-RAČVA-40-90',  },
      { label: '50/45°',  code: 'PP-RAČVA-50-45',  },
      { label: '50/90°',  code: 'PP-RAČVA-50-90',  },
      { label: '75/45°',  code: 'PP-RAČVA-75-45',  },
      { label: '75/90°',  code: 'PP-RAČVA-75-90',  },
      { label: '110/45°', code: 'PP-RAČVA-110-45', },
      { label: '110/90°', code: 'PP-RAČVA-110-90', },
      { label: '110/50/45°', code: 'PP-RAČVA-110-50-45', },
      { label: '110/50/90°', code: 'PP-RAČVA-110-50-90', },
      { label: '125/45°', code: 'PP-RAČVA-125-45', },
      { label: '125/90°', code: 'PP-RAČVA-125-90', },
      { label: '125/110/45°', code: 'PP-RAČVA-125-110-45', },
      { label: '125/110/90°', code: 'PP-RAČVA-125-110-90', },
      { label: '160/45°', code: 'PP-RAČVA-160-45', },
      { label: '160/90°', code: 'PP-RAČVA-160-90', },
      { label: '160/110/45°', code: 'PP-RAČVA-160-110-45', },
      { label: '160/110/90°', code: 'PP-RAČVA-160-110-90', },
      { label: '160/125/45°', code: 'PP-RAČVA-160-125-45', },
      { label: '160/125/90°', code: 'PP-RAČVA-160-125-90', },
    ]
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'PEŠTAN',
    name:  'UKC KOLJENO',
   // desc:  'Peštan UKC su troslojne narančaste PVC cijevi vrhunske čvrstoće namijenjene za siguran i dugotrajan odvod otpadnih te oborinskih voda u vanjskim, podzemnim kanalizacijskim sustavima.',
    code:  'UKC-KOLJENO',
    imgs: ['images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/UKC KOLJENO.jpg'
    ],
    variants: [
      { label: '110/45°', code: 'UKC-KOLJENO-110-45', },
      { label: '110/90°', code: 'UKC-KOLJENO-110-90', },
      { label: '125/45°', code: 'UKC-KOLJENO-125-45', },
      { label: '125/90°', code: 'UKC-KOLJENO-125-90', },
      { label: '160/45°', code: 'UKC-KOLJENO-160-45', },
      { label: '160/90°', code: 'UKC-KOLJENO-160-90', },
    ],
  },
  {
    group: 'vodomaterijal',
    cat:   'kanalizacija',
    brand: 'PEŠTAN',
    name:  'UKC RAČVA',
   // desc:  'Peštan UKC su troslojne narančaste PVC cijevi vrhunske čvrstoće namijenjene za siguran i dugotrajan odvod otpadnih te oborinskih voda u vanjskim, podzemnim kanalizacijskim sustavima.',
    code:  'UKC-RAČVA',
    imgs: ['images/VODOMATERIJAL/CIJEVI/CIJEVI ZA KANALIZACIJU/UKC RAČVA.webp'
    ],
    variants: [
      { label: '110/45°', code: 'UKC-RAČVA-110-45', },
      { label: '110/90°', code: 'UKC-RAČVA-110-90', },
      { label: '125/45°', code: 'UKC-RAČVA-125-45', },
      { label: '125/90°', code: 'UKC-RAČVA-125-90', },
      { label: '125/110/45°', code: 'UKC-RAČVA-125-110-45', },
      { label: '125/110/90°', code: 'UKC-RAČVA-125-110-90', },
      { label: '160/45°', code: 'UKC-RAČVA-160-45', },
      { label: '160/90°', code: 'UKC-RAČVA-160-90', },
      { label: '160/110/45°', code: 'UKC-RAČVA-160-110-45', },
      { label: '160/110/90°', code: 'UKC-RAČVA-160-110-90', },
      { label: '160/125/45°', code: 'UKC-RAČVA-160-125-45', },
      { label: '160/125/90°', code: 'UKC-RAČVA-160-125-90', },
    ],
  },

  // ── PLIN › PLINSKI PROIZVODI ──────────────────────────────────
  {
    group: 'plin',
    cat:   'regulatori',
    brand: 'CAVAGNA GROUP',
    name:  'PLIN REGULATOR 2. STUPANJ 10kg/h',
    desc:  'Ovi regulatori se koriste u instalacijama s dvostupanjskom regulacijom, moraju se montirati kao drugi stupanj, nizvodno od regulatora prvog stupnja.',
    code:  'PLIN-REG-2ST',
    img: 'images/PLIN/REGULATORI/PLIN REG 2. STUP.jpg',
    specs: {
      title:   'Tehnički podaci',
      headers: ['Model', 'Maksimalni tlak', 'Izlazni tlak', 'Vrsta i promjer navoja', 'Kapacitet protoka'],
      rows: [
        ['Regulator propana EN16129',  '1,95 bar', '30-35 mBar', '1/2″ F x 1/2″ F', '10 kg/h'],
      ],
  },
  },
  {
    group: 'plin',
    cat:   'regulatori',
    brand: 'CAVAGNA GROUP',
    name:  'PLIN REGULATOR 1. STUPANJ 20 - 40kg/h',
    desc:  'Regulatori visokog tlaka obično smanjuju tlak u spremniku na srednji tlak koji koristi drugi regulator.',
    code:  'PLIN-REG-1ST',
    img: 'images/PLIN/REGULATORI/PLIN REG 1. STUP.jpg',
    specs: {
      title:   'Tehnički podaci',
      headers: ['Model', 'Maksimalni tlak', 'Izlazni tlak', 'Kapacitet protoka'],
      rows: [
        ['Regulator propana EN16129',  '16 bar', '0,5 - 3 bar', '20-40 kg/h'],
      ],
  },
  },

  // ── PLIN › PLIN PEX-AL-PEX ────────────────────────────────────
 /*  {
    group: 'plin',
    cat:   'plin-pex',
    brand: 'Aquatechnik',
    name:  'Alpex-Gas 16×2.0 – 50m',
    desc:  'PEX-AL-PEX cijev za plinske instalacije Ø16×2.0 mm, rola 50 m. Certifikat za plin.',
    code:  'AT-GAS-16-50',
    // img: 'images/aquatechnik-gas-16.jpg',
  },*/
  {
    group: 'plin',
    cat:   'plin-pex',
    brand: '',
    name:  'PLIN PEX-AL-PEX CIJEV',
    desc:  'Plinske cijevi Pex-Al-Pex predstavljaju visokosiguran, višeslojni kompozitni sustav s aluminijskom jezgrom koji zahvaljujući izvrsnoj fleksibilnosti, nepropusnosti za kisik i otpornosti na koroziju omogućuje brzu i dugotrajnu ugradnju u kućne plinske instalacije.',
    code:  'PLIN-PEX-AL-PEX',
    img: 'images/PLIN/PEX CIJEV/CIJEV.jpg',
    variants: [
    { label: 'ø16mm',  code: '',  },
    { label: 'ø20mm',  code: '',  },
    { label: 'ø26mm',  code: '',  },
    ],
  }, 
  {
    group: 'plin',
    cat:   'plin-pex',
    brand: '',
    name:  'PLIN PEX NIPL PRELAZ',
    code:  'PLIN-PEX-NIPL',
    img: 'images/PLIN/PLIN PLEX FITINZI/PLIN PEX NIPL PRELAZ.webp',
    variants: [
    { label: 'ø16mm - 1/2"',  code: '',  },
    { label: 'ø20mm - 1/2"',  code: '',  },
    { label: 'ø20mm - 3/4"',  code: '',  },
    { label: 'ø26mm - 3/4"',  code: '',  },
    { label: 'ø26mm - 1"',  code: '',  },
    ],
  }, 
  {
    group: 'plin',
    cat:   'plin-pex',
    brand: '',
    name:  'PLIN PEX MUFA PRELAZ',
    code:  'PLIN-PEX-MUFA',
    img: 'images/PLIN/PLIN PLEX FITINZI/PLIN PEX MUFA PRELAZ.webp',
    variants: [
    { label: 'ø16mm - 1/2"',  code: '',  },
    { label: 'ø20mm - 1/2"',  code: '',  },
    { label: 'ø20mm - 3/4"',  code: '',  },
    { label: 'ø26mm - 3/4"',  code: '',  },
    { label: 'ø26mm - 1"',  code: '',  },
    ],
  }, 
  {
    group: 'plin',
    cat:   'plin-pex',
    brand: '',
    name:  'PLIN PEX SPOJNICA',
    code:  'PLIN-PEX-SPOJNICA',
    img: 'images/PLIN/PLIN PLEX FITINZI/PLIN PEX SPOJNICA.webp',
    variants: [
    { label: 'ø16mm',  code: '',  },
    { label: 'ø20mm',  code: '',  },
    { label: 'ø26mm',  code: '',  },
    ],
  },
  {
    group: 'plin',
    cat:   'plin-pex',
    brand: '',
    name:  'PLIN PEX T SPOJNICA',
    code:  'PLIN-PEX-TE-SPOJNICA',
    img: 'images/PLIN/PLIN PLEX FITINZI/PLIN PEX TE.webp',
    variants: [
    { label: 'ø16mm',  code: '',  },
    { label: 'ø20mm',  code: '',  },
    { label: 'ø26mm',  code: '',  },
    ],
  },
   {
    group: 'plin',
    cat:   'plin-pex',
    brand: '',
    name:  'PLIN PEX KOLJENO',
    code:  'PLIN-PEX-KOLJENO',
    imgs: ['images/PLIN/PLIN PLEX FITINZI/KOLJENO.avif',
            'images/PLIN/PLIN PLEX FITINZI/PLIN PEX KOLJENO SA NAVOJEM.webp',
            'images/PLIN/PLIN PLEX FITINZI/PLIN PEX KOLJENO SA NAVOJEM I NOSAČEM.webp',
    ],
    variants: [
    { label: 'ø16mm',  code: '',  },
    { label: 'ø20mm',  code: '',  },
    { label: 'ø26mm',  code: '',  },
    { label: 'KOLJENO SA NAVOJEM M',  code: '',  },
    { label: 'KOLJENO SA NAVOJEM F',  code: '',  },
    ],
  },
];