# SPM 2026 Countdown — Versi Web (iOS Safari & Android)

Aplikasi web rasmi kiraan hari peperiksaan Sijil Pelajaran Malaysia (SPM) 2026 yang dibina khusus untuk kemudahan calon SPM yang menggunakan **iPhone (iOS Safari)**, **iPad**, mahupun peranti Android.

---

### Ciri-Ciri Utama

1. **100% Vanilla (Tiada Build Tools Diperlukan)**:
   - Menggunakan HTML5, CSS3, dan JavaScript tulen.
   - Boleh dibuka terus pada mana-mana penyemak imbas web atau dihoskan pada mana-mana pelayan statik (GitHub Pages, Netlify, Vercel, Cloudflare Pages, atau web server sekolah).

2. **Penyelarasan Waktu Piawai Kerajaan (NTP Time Sync)**:
   - Menyelaraskan masa secara automatik dengan **Waktu Piawai Malaysia (MYT UTC+8)** melalui server masa.
   - Mengelakkan ralat kiraan hari sekiranya jam pada telefon bimbit pelajar lewat, cepat, atau tersilap zon waktu.
   - Status penyelarasan dipaparkan terus di bahagian atas skrin (`MYT (UTC+8) • Terselaras ✓`).

3. **Reka Bentuk Google Health / Material You**:
   - Skrin pengenalan minimalis (`SPM COUNTDOWN`) tanpa animasi sarat.
   - Kad pastel squircle (bucu bulat 24px) yang tenang dan kemas:
     - 🟢 **Mint Green**: Ujian Bertutur (Speaking)
     - 🔵 **Sky Blue**: Ujian Bertulis & Mendengar
     - 🟣 **Lilac / Lavender**: Ujian Amali Sains
   - Susunan 2-lajur mudah dibaca dengan nombor saiz besar dan kiraan hari terdekat sentiasa di atas.

4. **Sokongan iPhone "Add to Home Screen"**:
   - Pelajar iPhone hanya perlu membuka pautan ini di Safari, tekan butang **Kongsi (Share)** -> **Add to Home Screen (Tambah ke Skrin Utama)**.
   - Aplikasi akan berfungsi seperti aplikasi natif tanpa perlu memuat turun fail APK!

---

### Cara Menjalankan Secara Tempatan

Gunakan mana-mana web server ringkas, contohnya:

```bash
# Menggunakan Python (tersedia secara meluas)
python -m http.server 8080 --directory web

# Atau menggunakan npx serve
npx serve web
```
