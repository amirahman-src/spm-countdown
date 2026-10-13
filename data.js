// ============================================================================
// JADUAL WAKTU PEPERIKSAAN SPM 2026 (LEMBAGA PEPERIKSAAN MALAYSIA)
// Master Dataset for SPM Countdown Web Edition
// ============================================================================

window.EXAM_DATA = [
  // ==================== UJIAN BERTUTUR (SPEAKING) ====================
  {
    id: 'spk-bm',
    code: '1103/3',
    shortName: 'B.M - BERTUTUR',
    fullName: 'Bahasa Melayu (Ujian Bertutur)',
    type: 'speaking',
    typeName: 'Bertutur',
    stream: 'Teras',
    date: '2026-10-26T08:00:00+08:00',
    dateDisplay: '26 - 29 Okt 2026',
    timeDisplay: '8:00 AM (Sidang 1, 2 & 3)',
    location: 'Bilik Menunggu / Bilik Ujian',
    colorTheme: 'speaking',
    papers: [
      { code: '1103/3', name: 'Ujian Bertutur Individu & Kumpulan', time: '8:00 AM - 4:10 PM', duration: 'Mengikut Sidang' }
    ],
    tips: [
      'Hadir di bilik menunggu sekurang-kurangnya 10 minit sebelum taklimat bermula.',
      'Bawa kad pengenalan dan penyataan pendaftaran peperiksaan.',
      'Pastikan suara jelas dan intonasi baku semasa ujian bertutur individu dan perbincangan kumpulan.'
    ]
  },
  {
    id: 'spk-bi',
    code: '1119/3',
    shortName: 'B.I - SPEAKING',
    fullName: 'Bahasa Inggeris (Speaking Test)',
    type: 'speaking',
    typeName: 'Bertutur',
    stream: 'Teras',
    date: '2026-11-02T08:00:00+08:00',
    dateDisplay: '2 - 5 Nov 2026',
    timeDisplay: '8:00 AM (Session 1, 2 & 3)',
    location: 'Waiting Room / Examination Room',
    colorTheme: 'speaking',
    papers: [
      { code: '1119/3', name: 'Speaking Test (Part 1, 2 & 3)', time: '8:00 AM - 4:15 PM', duration: '12 - 14 Mins per pair' }
    ],
    tips: [
      'Arrive 10 minutes prior to briefing time at the Waiting Room.',
      'Part 1: General interview questions about yourself and hobbies.',
      'Part 2: Speak for 1 minute on an individual prompt card.',
      'Part 3: 3-minute interactive discussion with your partner using mind map.'
    ]
  },

  // ==================== UJIAN AMALI SAINS (EXPERIMENT) ====================
  {
    id: 'amali-fizik',
    code: '4531/3',
    shortName: 'FIZIK AMALI',
    fullName: 'Fizik (Ujian Amali Sains)',
    type: 'experiment',
    typeName: 'Amali',
    stream: 'Sains Tulen',
    date: '2026-11-16T08:00:00+08:00',
    dateDisplay: '16 Nov 2026',
    timeDisplay: '8:00 AM (Sidang 1 - 4)',
    location: 'Makmal Fizik',
    colorTheme: 'experiment',
    papers: [
      { code: '4531/3', name: 'Fizik Kertas 3 (Amali)', time: '40 minit setiap sidang', duration: '40 Minit (+ 5 min semak radas)' }
    ],
    tips: [
      'Gunakan 5 minit pertama untuk memeriksa radas dan kelengkapan eksperimen.',
      'Catat bacaan dengan unit dan titik perpuluhan yang betul.',
      'Plot graf dengan skala seragam dan lukis garis lurus penyuaian terbaik (line of best fit).'
    ]
  },
  {
    id: 'amali-kimia',
    code: '4541/3',
    shortName: 'KIMIA AMALI',
    fullName: 'Kimia (Ujian Amali Sains)',
    type: 'experiment',
    typeName: 'Amali',
    stream: 'Sains Tulen',
    date: '2026-11-17T08:00:00+08:00',
    dateDisplay: '17 Nov 2026',
    timeDisplay: '8:00 AM (Sidang 1 - 4)',
    location: 'Makmal Kimia',
    colorTheme: 'experiment',
    papers: [
      { code: '4541/3', name: 'Kimia Kertas 3 (Amali)', time: '45 minit setiap sidang', duration: '45 Minit (+ 5 min semak radas)' }
    ],
    tips: [
      'Semak semua bahan uji kimia dan tabung uji sebelum mula.',
      'Catatkan pemerhatian warna mendakan, pembebasan gas atau perubahan suhu dengan tepat.',
      'Sentiasa memakai cermin mata keselamatan (goggles) dan kot makmal.'
    ]
  },
  {
    id: 'amali-biologi',
    code: '4551/3',
    shortName: 'BIOLOGI AMALI',
    fullName: 'Biologi (Ujian Amali Sains)',
    type: 'experiment',
    typeName: 'Amali',
    stream: 'Sains Tulen',
    date: '2026-11-18T08:00:00+08:00',
    dateDisplay: '18 Nov 2026',
    timeDisplay: '8:00 AM (Sidang 1 - 4)',
    location: 'Makmal Biologi',
    colorTheme: 'experiment',
    papers: [
      { code: '4551/3', name: 'Biologi Kertas 3 (Amali)', time: '45 minit setiap sidang', duration: '45 Minit (+ 5 min semak radas)' }
    ],
    tips: [
      'Periksa spesimen biologi, mikroskop dan larutan iodin/Benedict.',
      'Lengkapkan jadual keputusan dengan tajuk dan unit yang lengkap.',
      'Lukis rajah biologi dengan garisan jelas tanpa bayangan (no shading).'
    ]
  },
  {
    id: 'amali-sains-tambahan',
    code: '4561/3',
    shortName: 'SAINS TAMBAHAN AMALI',
    fullName: 'Sains Tambahan (Ujian Amali Sains)',
    type: 'experiment',
    typeName: 'Amali',
    stream: 'Sains Tulen',
    date: '2026-11-18T08:00:00+08:00',
    dateDisplay: '18 Nov 2026',
    timeDisplay: '8:00 AM (Sidang 1 - 4)',
    location: 'Makmal Sains',
    colorTheme: 'experiment',
    papers: [
      { code: '4561/3', name: 'Sains Tambahan Kertas 3 (Amali)', time: '45 minit setiap sidang', duration: '45 Minit' }
    ],
    tips: [
      'Semak semua radas eksperimen semasa 5 minit semakan.',
      'Pastikan pemboleh ubah dimanipulasi dan bergerak balas direkod teratur.'
    ]
  },

  // ==================== UJIAN BERTULIS & MENDENGAR (WRITING) ====================
  {
    id: 'write-bm',
    code: '1103/1, 2, 4',
    shortName: 'B.M',
    fullName: 'Bahasa Melayu (Bertulis & Mendengar)',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Teras',
    date: '2026-11-23T09:00:00+08:00',
    dateDisplay: '23 Nov 2026',
    timeDisplay: '9:00 AM - 5:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '1103/4', name: 'Kertas 4 (Ujian Mendengar)', time: '9:00 AM - 9:30 AM', duration: '30 Minit' },
      { code: '1103/1', name: 'Kertas 1 (Karangan Respon Terbuka & Terhad)', time: '10:45 AM - 12:45 PM', duration: '2 Jam' },
      { code: '1103/2', name: 'Kertas 2 (Tatabahasa, Pemahaman, Novel)', time: '2:30 PM - 5:00 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Kertas wajib lulus untuk melayakkan calon menerima Sijil SPM.',
      'Kertas 1: Pilih soalan karangan bahagian B yang benar-benar dikuasai format dan faktanya.',
      'Kertas 2: Beri fokus kepada 9 soalan morfologi, sintaksis, peribahasa dan petikan sastera.'
    ]
  },
  {
    id: 'write-bi',
    code: '1119/1, 2, 4',
    shortName: 'B.I',
    fullName: 'Bahasa Inggeris (Written & Listening)',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Teras',
    date: '2026-11-24T09:00:00+08:00',
    dateDisplay: '24 Nov 2026',
    timeDisplay: '9:00 AM - 4:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '1119/4', name: 'Paper 4 (Listening Test)', time: '9:00 AM - 9:40 AM', duration: '40 Minit' },
      { code: '1119/1', name: 'Paper 1 (Reading & Use of English)', time: '11:00 AM - 12:30 PM', duration: '1 Jam 30 Minit' },
      { code: '1119/2', name: 'Paper 2 (Writing - Short Communicative & Guided)', time: '2:30 PM - 4:00 PM', duration: '1 Jam 30 Minit' }
    ],
    tips: [
      'CEFR aligned exam (target B2/C1 grade).',
      'Manage time strictly in Paper 2: Part 1 email (20m), Part 2 essay (30m), Part 3 article/review (40m).'
    ]
  },
  {
    id: 'write-pi-pm',
    code: '1223/1 / 1225',
    shortName: 'P.ISLAM / MORAL',
    fullName: 'Pendidikan Islam / Pendidikan Moral',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Teras',
    date: '2026-11-25T08:15:00+08:00',
    dateDisplay: '25 Nov 2026',
    timeDisplay: '8:15 AM - 10:45 AM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '1223/1', name: 'Pendidikan Islam Kertas 1', time: '8:15 AM - 10:45 AM', duration: '2 Jam 30 Minit' },
      { code: '1225', name: 'Pendidikan Moral', time: '8:15 AM - 10:45 AM', duration: '2 Jam 30 Minit' },
      { code: '5402/1', name: 'Al-Syariah Kertas 1', time: '8:15 AM - 10:30 AM', duration: '2 Jam 15 Minit' },
      { code: '3729/1', name: 'Pertanian Kertas 1', time: '2:30 PM - 5:00 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Pendidikan Islam: Hafaz intipati ayat hafazan/kefahaman dan dalil naqli utama.',
      'Pendidikan Moral: Kuasai 18 nilai universal dan berikan hujah bernas mengikut isu semasa.'
    ]
  },
  {
    id: 'write-math',
    code: '1449/1, 2',
    shortName: 'MATEMATIK',
    fullName: 'Matematik',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Teras',
    date: '2026-11-26T08:15:00+08:00',
    dateDisplay: '26 Nov 2026',
    timeDisplay: '8:15 AM - 1:15 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '1449/1', name: 'Matematik Kertas 1 (Objektif 40 Soalan)', time: '8:15 AM - 9:45 AM', duration: '1 Jam 30 Minit' },
      { code: '1449/2', name: 'Matematik Kertas 2 (Bahagian A, B & C)', time: '10:45 AM - 1:15 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Pastikan bateri kalkulator saintifik penuh dan mod berada dalam (DEG).',
      'Tunjukkan setiap langkah pengiraan dalam Kertas 2 untuk mendapatkan markah kaedah (K).'
    ]
  },
  {
    id: 'write-sejarah',
    code: '1249/1, 2',
    shortName: 'SEJARAH',
    fullName: 'Sejarah',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Teras',
    date: '2026-11-30T08:15:00+08:00',
    dateDisplay: '30 Nov 2026',
    timeDisplay: '8:15 AM - 1:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '1249/1', name: 'Sejarah Kertas 1 (Objektif 40 Soalan)', time: '8:15 AM - 9:15 AM', duration: '1 Jam' },
      { code: '1249/2', name: 'Sejarah Kertas 2 (Struktur & Esei KBAT)', time: '10:30 AM - 1:00 PM', duration: '2 Jam 30 Minit' },
      { code: '5226', name: 'Tasawwur Islam', time: '2:30 PM - 5:00 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Mata pelajaran wajib lulus untuk pensijilan SPM.',
      'Gunakan teknik F+H+C+I (Fakta, Huraian, Contoh, Inferens) untuk soalan esei dan KBAT.'
    ]
  },
  {
    id: 'write-psv',
    code: '2611/1, 2',
    shortName: 'P.SENI VISUAL',
    fullName: 'Pendidikan Seni Visual',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Sastera',
    date: '2026-12-01T08:15:00+08:00',
    dateDisplay: '1 Dis 2026',
    timeDisplay: '8:15 AM - 5:00 PM',
    location: 'Dewan / Bilik Seni',
    colorTheme: 'writing',
    papers: [
      { code: '2611/2', name: 'PSV Kertas 2 (Ujian Melukis)', time: '8:15 AM - 11:15 AM', duration: '3 Jam' },
      { code: '2611/1', name: 'PSV Kertas 1 (Teori Seni)', time: '12:00 PM - 1:00 PM', duration: '1 Jam' },
      { code: '3763/1', name: 'Reka Cipta Kertas 1', time: '2:30 PM - 5:00 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Bawa medium lukisan yang dibenarkan (cat air, poster colour, pastel).',
      'Rancang komposisi objek dan ton pencahayaan sebelum mewarna.'
    ]
  },
  {
    id: 'write-perniagaan',
    code: '3766/1, 2',
    shortName: 'PERNIAGAAN',
    fullName: 'Perniagaan',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Perniagaan',
    date: '2026-12-02T08:15:00+08:00',
    dateDisplay: '2 Dis 2026',
    timeDisplay: '8:15 AM - 1:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '3766/1', name: 'Perniagaan Kertas 1 (Objektif)', time: '8:15 AM - 9:30 AM', duration: '1 Jam 15 Minit' },
      { code: '3766/2', name: 'Perniagaan Kertas 2 (Bahagian A, B & C Kajian Kes)', time: '10:45 AM - 1:00 PM', duration: '2 Jam 15 Minit' }
    ],
    tips: [
      'Fokus kajian kes Bahagian C: Kenal pasti masalah perniagaan, analisis SWOT dan cadangan penyelesaian.'
    ]
  },
  {
    id: 'write-biologi',
    code: '4551/1, 2',
    shortName: 'BIOLOGI',
    fullName: 'Biologi (Teori)',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Sains Tulen',
    date: '2026-12-02T08:15:00+08:00',
    dateDisplay: '2 Dis 2026',
    timeDisplay: '8:15 AM - 1:15 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '4551/1', name: 'Biologi Kertas 1 (Objektif 40 Soalan)', time: '8:15 AM - 9:30 AM', duration: '1 Jam 15 Minit' },
      { code: '4551/2', name: 'Biologi Kertas 2 (Struktur & Esei)', time: '10:45 AM - 1:15 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Gunakan kata kunci biologi yang tepat seperti osmosis, translokasi, homeostasis, respirasi sel.',
      'Sertakan rajah skematik jika membantu penerangan proses.'
    ]
  },
  {
    id: 'write-sains',
    code: '1511/1, 2',
    shortName: 'SAINS',
    fullName: 'Sains (Teras)',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Sastera',
    date: '2026-12-03T08:15:00+08:00',
    dateDisplay: '3 Dis 2026',
    timeDisplay: '8:15 AM - 1:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '1511/1', name: 'Sains Kertas 1 (Objektif 40 Soalan)', time: '8:15 AM - 9:30 AM', duration: '1 Jam 15 Minit' },
      { code: '1511/2', name: 'Sains Kertas 2 (Bahagian A Amali Bertulis, B & C)', time: '10:30 AM - 1:00 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Kuasai kemahiran proses sains: inferens, hipotesis, pemboleh ubah dan definisi secara operasi (DSO).'
    ]
  },
  {
    id: 'write-fizik',
    code: '4531/1, 2',
    shortName: 'FIZIK',
    fullName: 'Fizik (Teori)',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Sains Tulen',
    date: '2026-12-03T08:15:00+08:00',
    dateDisplay: '3 Dis 2026',
    timeDisplay: '8:15 AM - 1:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '4531/1', name: 'Fizik Kertas 1 (Objektif 40 Soalan)', time: '8:15 AM - 9:30 AM', duration: '1 Jam 15 Minit' },
      { code: '4531/2', name: 'Fizik Kertas 2 (Struktur & Esei Konsepsi/Kuantitatif)', time: '10:30 AM - 1:00 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Hafal konsep hukum asas: Hukum Newton, Hukum Ohm, Prinsip Archimedes, Hukum Pantulan & Pembiasan.',
      'Sertakan formula, gantian nombor dan unit akhir (contoh: N, J, W, kg m/s).'
    ]
  },
  {
    id: 'write-ekonomi',
    code: '3767/1, 2',
    shortName: 'EKONOMI',
    fullName: 'Ekonomi',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Perniagaan',
    date: '2026-12-07T08:15:00+08:00',
    dateDisplay: '7 Dis 2026',
    timeDisplay: '8:15 AM - 1:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '3767/1', name: 'Ekonomi Kertas 1 (Objektif)', time: '8:15 AM - 9:30 AM', duration: '1 Jam 15 Minit' },
      { code: '3767/2', name: 'Ekonomi Kertas 2 (Esei & Analisis Graf)', time: '10:45 AM - 1:00 PM', duration: '2 Jam 15 Minit' }
    ],
    tips: [
      'Lukis keluk permintaan dan penawaran dengan paksi dan label tepat.',
      'Fokus kepada konsep dasar monetari, dasar fiskal dan perdagangan antarabangsa.'
    ]
  },
  {
    id: 'write-bahasa-cina-tamil',
    code: '6351 / 6354',
    shortName: 'B.CINA / B.TAMIL',
    fullName: 'Bahasa Cina / Bahasa Tamil / Bahasa Arab',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Bahasa',
    date: '2026-12-08T08:15:00+08:00',
    dateDisplay: '8 Dis 2026',
    timeDisplay: '8:15 AM - 4:45 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '6351/1', name: 'Bahasa Cina Kertas 1', time: '8:15 AM - 10:00 AM', duration: '1 Jam 45 Minit' },
      { code: '6351/2', name: 'Bahasa Cina Kertas 2', time: '2:30 PM - 4:45 PM', duration: '2 Jam 15 Minit' },
      { code: '6354/1', name: 'Bahasa Tamil Kertas 1', time: '8:15 AM - 10:00 AM', duration: '1 Jam 45 Minit' },
      { code: '6354/2', name: 'Bahasa Tamil Kertas 2', time: '2:30 PM - 4:45 PM', duration: '2 Jam 15 Minit' }
    ],
    tips: [
      'Peruntukkan masa menulis karangan sekurang-kurangnya 50 minit.',
      'Periksa ketepatan aksara, tatabahasa dan makna petikan klasik/moden.'
    ]
  },
  {
    id: 'write-sains-sukan',
    code: '4572/1, 2',
    shortName: 'SAINS SUKAN',
    fullName: 'Sains Sukan',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Sastera',
    date: '2026-12-09T08:15:00+08:00',
    dateDisplay: '9 Dis 2026',
    timeDisplay: '8:15 AM - 1:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '4572/1', name: 'Sains Sukan Kertas 1 (Objektif)', time: '8:15 AM - 9:30 AM', duration: '1 Jam 15 Minit' },
      { code: '4572/2', name: 'Sains Sukan Kertas 2 (Esei & Struktur)', time: '10:30 AM - 1:00 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Kuasai aspek anatomi, fisiologi senam, biomekanik dan psikologi sukan.'
    ]
  },
  {
    id: 'write-sains-komputer',
    code: '3770/1',
    shortName: 'SAINS KOMPUTER',
    fullName: 'Sains Komputer / Bible Knowledge',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Sains Tulen',
    date: '2026-12-10T08:15:00+08:00',
    dateDisplay: '10 Dis 2026',
    timeDisplay: '8:15 AM - 5:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '9221', name: 'Bible Knowledge', time: '8:15 AM - 10:15 AM', duration: '2 Jam' },
      { code: '5227/1', name: 'Pendidikan Al-Quran & Al-Sunnah Kertas 1', time: '8:15 AM - 10:45 AM', duration: '2 Jam 30 Minit' },
      { code: '3770/1', name: 'Sains Komputer Kertas 1', time: '2:30 PM - 5:00 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Sains Komputer: Teliti algoritma pseudokod, carta alir, pangkalan data (SQL) dan reka bentuk sistem.'
    ]
  },
  {
    id: 'write-prinsip-akaun',
    code: '3756/1, 2',
    shortName: 'PRINSIP AKAUN',
    fullName: 'Prinsip Perakaunan',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Perniagaan',
    date: '2026-12-14T08:15:00+08:00',
    dateDisplay: '14 Dis 2026',
    timeDisplay: '8:15 AM - 1:15 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '3756/1', name: 'Prinsip Perakaunan Kertas 1 (Objektif)', time: '8:15 AM - 9:30 AM', duration: '1 Jam 15 Minit' },
      { code: '3756/2', name: 'Prinsip Perakaunan Kertas 2 (Penyata Kewangan)', time: '10:45 AM - 1:15 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Pastikan format Penyata Pendapatan dan Penyata Kedudukan Kewangan (PKK) kemas dan imbang.',
      'Semak pelarasan akhir tahun: susut nilai, hutang lapuk dan peruntukan hutang ragu.'
    ]
  },
  {
    id: 'write-kimia',
    code: '4541/1, 2',
    shortName: 'KIMIA',
    fullName: 'Kimia (Teori)',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Sains Tulen',
    date: '2026-12-15T08:15:00+08:00',
    dateDisplay: '15 Dis 2026',
    timeDisplay: '8:15 AM - 1:15 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '4541/1', name: 'Kimia Kertas 1 (Objektif 40 Soalan)', time: '8:15 AM - 9:30 AM', duration: '1 Jam 15 Minit' },
      { code: '4541/2', name: 'Kimia Kertas 2 (Struktur & Esei)', time: '10:45 AM - 1:15 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Tulis persamaan kimia seimbang dengan simbol keadaan fizik (s, l, g, aq) jika diminta.',
      'Kuasai stoikiometri, konsep mol, asid-bes-garam, elektrokimia dan kimia organik.'
    ]
  },
  {
    id: 'write-geografi',
    code: '2280/1, 2',
    shortName: 'GEOGRAFI',
    fullName: 'Geografi / Kesusasteraan Melayu',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Sastera',
    date: '2026-12-16T08:15:00+08:00',
    dateDisplay: '16 Dis 2026',
    timeDisplay: '8:15 AM - 5:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '2216/1', name: 'Kesusasteraan Melayu Komunikatif Kertas 1', time: '8:15 AM - 10:45 AM', duration: '2 Jam 30 Minit' },
      { code: '2280/1', name: 'Geografi Kertas 1 (Objektif)', time: '11:45 AM - 1:00 PM', duration: '1 Jam 15 Minit' },
      { code: '2280/2', name: 'Geografi Kertas 2 (Esei & Kemahiran Peta)', time: '2:30 PM - 5:00 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Peta topografi: Kira skala bearing, keratan rentas dan tafsir pola saliran/petempatan.'
    ]
  },
  {
    id: 'write-addmath',
    code: '3472/1, 2',
    shortName: 'ADD MATHS',
    fullName: 'Matematik Tambahan',
    type: 'writing',
    typeName: 'Bertulis',
    stream: 'Sains Tulen',
    date: '2026-12-17T08:15:00+08:00',
    dateDisplay: '17 Dis 2026',
    timeDisplay: '8:15 AM - 5:00 PM',
    location: 'Dewan Peperiksaan',
    colorTheme: 'writing',
    papers: [
      { code: '3472/1', name: 'Matematik Tambahan Kertas 1', time: '8:15 AM - 10:15 AM', duration: '2 Jam' },
      { code: '3472/2', name: 'Matematik Tambahan Kertas 2', time: '2:30 PM - 5:00 PM', duration: '2 Jam 30 Minit' }
    ],
    tips: [
      'Kertas hari terakhir SPM 2026! Kekalkan fokus dan stamina maksimum.',
      'Kuasai topik utama: Pembezaan & Pengamiran, Vektor, Fungsi Trigonometri, Hukum Linear dan Pengaturcaraan Linear.'
    ]
  }
];
