# Techpedia Project - Custom Software & Application Development

Website utama jasa pengembangan aplikasi custom, website, dan sistem bisnis Techpedia. Studi kasus disimpan di website ini; Live Demo membuka aplikasi proyek pada URL masing-masing. Website utama tidak bergantung pada database atau backend demo.

Kontak aktif: WhatsApp **087732774899**, email **ajhiezudesign@gmail.com**, dan [Fastwork Techpedia](https://fastwork.id/user/techpedia_project).

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
