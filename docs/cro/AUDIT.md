# Audit CRO — 18 November 2026

Scope: source website utama `frontend/`, konten `content/site.json`, build/QA scripts, konfigurasi Vercel, serta arsitektur alternatif `frontend-next/` dan `backend/`. Perubahan pengguna yang sudah ada dipertahankan; backend tidak diubah. Website publik tidak berhasil dibuka melalui web tool; audit ini berdasarkan checkout lokal.

- Deployment utama: HTML/CSS/JS statis, routing hash (`frontend/assets/app.js`), konten lokal yang disaring oleh `prepare-hub-content.cjs`. Backend Laravel opsional, terpisah. React 19 / Next 16 / TypeScript / Tailwind 4 tersedia sebagai implementasi alternatif, bukan target Vercel utama menurut README.
- Identitas: cyan `#087e9b`, Inter, Plus Jakarta Sans, ilustrasi/video maskot 3D, companion WhatsApp, custom cursor, animasi headline, carousel screenshot. Semuanya dapat dipertahankan; headline perlu stabil agar pesan bisnis terbaca.
- Hero belum memakai pesan dan CTA yang diminta. Beranda hanya menampilkan tiga layanan. Maintenance, integrasi, offline-first, dan kolaborasi belum mudah ditemukan.
- `reviewsSection()` menyajikan `review-samples.json` sebagai “Ulasan Klien”, lengkap dengan nama dan bintang. Tidak ada field izin/sumber/verifikasi. Hentikan publikasi contoh ini; simpan aset sumber untuk tinjauan pemilik.
- Empat proyek terpublikasi: RPK Pustaka, TechCommers, StayEase, Tech Resto. Eduvia tidak ada pada data publik. Stack seluruhnya kosong. Tipe klien didukung teks hanya untuk RPK; demo UI didukung untuk TechCommers dan Tech Resto; tipe StayEase serta status selesai/produksi belum didukung. Jangan menyimpulkan selesai dari status CMS `published`.
- Detail proyek sudah memiliki overview, challenge, solution, role, results dan galeri, tetapi status pengerjaan, stack dan batas bukti belum eksplisit. Presentasi khusus harus dipertahankan.
- Kontak valid secara konfigurasi: WhatsApp 6287732774899, ajhiezudesign@gmail.com, Fastwork techpedia_project. GitHub kosong, LinkedIn tidak tersedia. Jangan membuat profil baru. Mode lokal sudah menghindari form backend palsu.
- SEO: `noindex,nofollow`, `robots.txt` memblokir semua crawler, tanpa sitemap/canonical/Twitter Card. HTML awal berisi main kosong; hash bukan URL halaman terpisah yang dapat diindeks. Perlu prerender statis untuk halaman utama, layanan, dan studi kasus.
- Tidak ditemukan integrasi GA pada jalur frontend utama. Integrasi opsional harus menunggu persetujuan, tidak mengirim isi proyek/kontak, dan tidak menembakkan event formulir sebelum HTTP 201.
- Fokus keyboard, skip link, reduced motion, lazy video, dan carousel telah tersedia. Uji regresi dibutuhkan pada hero, galeri, menu mobile, FAQ, kontak, dan overflow.

Prosedur penawaran, pengujian, dokumentasi, PIC, revisi, dan dukungan harus dikonfirmasi pemilik dalam operasional; halaman menjelaskannya sebagai acuan kerja yang akan disepakati, bukan sertifikasi atau jaminan hasil.
