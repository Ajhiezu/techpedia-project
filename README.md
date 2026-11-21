# Techpedia Project - Custom Software & Application Development

Redesign Awwwards: konsep **Dari kebutuhan ke sistem**, tipografi Inter lokal, showcase interaktif berdasarkan konteks bisnis, galeri proyek asimetris, indeks layanan, dan tampilan mobile. Source visual: `frontend/assets/awwwards.css`, `frontend/assets/studio-v3.js`, dan `frontend/assets/awwwards-motion.js`. Arah desain: [DESIGN.md](DESIGN.md). Jalankan `npm.cmd run build`, lalu `npm.cmd start`; buka http://localhost:8081. QA browser terbaru: `npm.cmd run test:browser` (Chrome lokal, jalankan server dari `dist/` untuk QA production). Jalankan `npm.cmd install` untuk menyiapkan perangkat QA. GSAP dan Lenis yang disajikan situs berada di `frontend/assets/vendor/`; versi sumber tercatat pada `package-lock.json`. Laporan: [redesign Awwwards](docs/redesign-awwwards/REPORT.md).

Redesign V3: hero terpusat dengan tiga tab, showcase screenshot original, services/FAQ terang, proses dan portfolio gelap, serta CTA cyan. Services dan Work sudah didesain ulang; `/portfolio/` tetap tersedia dan `/work/` ditambahkan. Dokumentasi, perbandingan screenshot, dan hasil QA ada di [laporan V3](docs/redesign-v3/REPORT.md). Jalankan `npm.cmd run build`, `npm.cmd test`, `npm.cmd run lint`, dan `npm.cmd run test:browser`. Source desain aktif: `frontend/assets/studio-v3.js` dan `frontend/assets/studio-v3.css`; konfigurasi harga tetap di `frontend/assets/pricing.js` dengan `pricingApproved: false`.

Redesign V2: homepage dark/cyan dengan maskot original, empat proyek, dan paket harga yang belum disetujui (nominal disembunyikan). Lihat [laporan dan hasil validasi](docs/redesign-v2/REPORT.md). Edit paket di `frontend/assets/pricing.js`, lalu jalankan build. Jalankan `node scripts/qa/studio-v2-browser.cjs` dan `node scripts/qa/studio-v2-features.cjs` untuk QA redesign.

Website utama jasa pengembangan aplikasi custom, website, dan sistem bisnis Techpedia. Studi kasus disimpan di website ini; Live Demo membuka aplikasi proyek pada URL masing-masing. Website utama tidak bergantung pada database atau backend demo.

Kontak aktif: WhatsApp **087732774899**, email **ajhiezudesign@gmail.com**, dan [Fastwork Techpedia](https://fastwork.id/user/techpedia_project).

Pembaruan CRO November 2026: [audit source](docs/cro/AUDIT.md), [laporan implementasi dan QA](docs/cro/REPORT.md). Build menghasilkan 22 halaman HTML yang dapat dibaca tanpa JavaScript, dengan URL bersih; bookmark hash lama tetap didukung. Maskot, video, carousel, warna dan tipografi existing dipertahankan. Testimoni contoh tidak diterbitkan.

Jalankan `npm.cmd run build` setelah mengubah konten atau komponen, lalu `npm.cmd test`, `npm.cmd run lint`, dan `npm.cmd run test:cro` (Chrome lokal). Perintah `test:hub` dan `test:browser` memakai suite CRO terkini; runner historis `scripts/qa/hub-browser.cjs` memiliki ekspektasi copy lama dan disimpan sebagai referensi.

Build membaca environment proses: `TECHPEDIA_SITE_URL` (default URL produksi existing), `TECHPEDIA_INDEXABLE=false` untuk staging, dan `TECHPEDIA_GA_ID` opsional. Contoh ada di `.env.example`; script Node tidak otomatis memuat file `.env`. Setelah mengganti variabel, build ulang. Jika Vercel menggunakan Root Directory `frontend` dengan build kosong, jalankan build dari root secara lokal dan sertakan hasil generate; environment Vercel saja tidak mengubah file yang sudah dihasilkan.

Analitik default nonaktif. Sebelum mengaktifkan ID GA4, pemilik perlu melengkapi kebijakan/retensi, menonaktifkan Enhanced Measurement otomatis untuk outbound clicks dan form interactions di GA4 agar tidak menggandakan event aplikasi, lalu meninjau alur persetujuan. Tidak ada `page_view` otomatis; event utama memakai satu event per klik, dengan `source`. `contact_form_submit` hanya tersedia di mode API sesudah respons HTTP 201. Isi proyek, nama, email, dan nomor pengunjung tidak dimasukkan ke event. Preferensi analitik tersedia pada footer ketika ID dikonfigurasi.

## Jalankan lokal

Dari root proyek, gunakan Node dan Python 3:

```powershell
npm.cmd start
```

Buka http://localhost:8081. Tidak perlu menjalankan Laravel atau database untuk website utama.

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
npm.cmd run test:hub
```

Build menyiapkan konten publik dan menghasilkan `dist/`. Tes browser memerlukan Chrome lokal; `QA_BROWSER=edge` memilih Edge. Profil browser QA terpisah dan `--no-sandbox` hanya untuk konten pengujian lokal.

## Isi proyek sendiri

### Publikasi website utama di Vercel

Gunakan Root Directory `frontend`, Framework Preset `Other`, Build Command kosong, Install Command kosong, dan Output Directory `.` (satu titik). Konfigurasi berada di `frontend/vercel.json`; website utama dapat dipublikasikan langsung dari folder ini.

Saat mengubah data di `content/site.json`, jalankan `npm.cmd run build` dari root proyek terlebih dahulu, lalu commit hasil pembaruan di `frontend/` bersama source sebelum push. Vercel akan menyajikan file siap pakai tersebut.

Edit **content/site.json**. Portofolio RPK Pustaka sudah ditambahkan berdasarkan informasi dan gambar dari pemilik project. Salin [template proyek](docs/portfolio-hub/PROJECT-TEMPLATE.json), isi data karya Anda, lalu set status published dan approved true bila siap ditampilkan. Mode tersedia: full-live-demo, interactive-ui-demo dan case-study-only. Link demo/GitHub/Figma kosong tidak menghasilkan tombol mati.

Panduan lengkap: [CONTENT-GUIDE.md](docs/portfolio-hub/CONTENT-GUIDE.md). JSON dalam frontend/content adalah hasil generate dan hanya memuat data publik. Berkas source draft di content/ tidak ikut build dist/.

## Versi React/Next.js

Source React + TypeScript + Tailwind di frontend-next memakai local content secara default. Setelah akses npm tersedia:

```powershell
cd frontend-next
npm.cmd install
npm.cmd run typecheck
npm.cmd run build
npm.cmd start
```

Target hasilnya frontend-next/out, berupa static export yang tidak membutuhkan runtime Laravel. Build/type check Next.js **belum terverifikasi**, karena instalasi paket ditolak EACCES. Website statis frontend/ adalah versi yang telah diuji di browser saat ini.

## Source sebelumnya

Backend Laravel, API dan inquiry lama dipertahankan untuk penggunaan opsional. Mode API frontend harus dipilih secara eksplisit melalui TECHPEDIA_CONTENT_MODE=api; defaultnya local. Untuk regresi mode lama: npm.cmd run test:browser:api. Informasi backend ada di docs/backend/ dan laporan QA historis ada di docs/quality-assurance/.

[Arsitektur terbaru](docs/portfolio-hub/ARCHITECTURE.md) dan [hasil validasi](docs/portfolio-hub/VALIDATION-REPORT.md) menjelaskan perubahan lingkup serta batas pengujian. Belum ada deployment; Phase 6 tetap memerlukan persetujuan eksplisit.
