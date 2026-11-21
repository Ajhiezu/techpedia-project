# Pembaruan gaya berdasarkan referensi lokal

**Referensi desain aktif terbaru:** [adaptasi AI SaaS Starter Kit](STARTER-KIT-DESIGN.md), mengikuti folder source yang kemudian dipilih pengguna. Palet tetap putih–cyan. Uraian di bawah menyimpan riwayat tahap sebelumnya.

**Palet terkini:** sesuai arahan berikutnya, dasar halaman kini putih dengan aksen cyan. Layout referensi dan aurora tetap dipakai. Teks utama menggunakan netral gelap dan cyan yang lebih gelap agar terbaca; tombol WhatsApp serta indikator juga mengikuti cyan. Screenshot beranda, layanan, kontak, studi kasus, dan kesepakatan telah diperbarui. Pemeriksaan 22 halaman pada 320–1920 px lulus tanpa overflow/runtime exception; bukti terbaru di `white-cyan-results.json`. Build dan lint lulus. Uraian tema gelap di bawah adalah riwayat tahap sebelumnya.

Referensi pengguna: `C:/Users/ajhie/Downloads/home-v1.htm` dan `careers.htm`. Keduanya diperiksa melalui struktur HTML, stylesheet referensi, dan preview lokal yang menonaktifkan JavaScript pihak ketiga. Style referensi memakai dasar gelap, hero terpusat, header dan tombol pill, glow, serta section berbingkai.

Implementasi pada website utama:

- `frontend/assets/reference-theme.css`: tema gelap, navigasi pill, hero terpusat dengan glow cyan, susunan layanan berbentuk baris seperti careers pada desktop, kartu/proses/galeri/contact/footer yang konsisten, serta breakpoint mobile/tablet/desktop.
- `frontend/index.html`: memuat stylesheet tema setelah style existing; build menerapkan tema yang sama ke seluruh 22 halaman hasil prerender dan `dist/`.
- Primary cyan `#32d9f5` dan token brand `#087e9b` dipertahankan. Tidak memakai primary ungu referensi. Font brand, maskot/video, screenshot proyek, data dan alur konsultasi tetap menggunakan sumber Techpedia.
- Tema dibuat menggunakan CSS project, tanpa mengimpor Webflow runtime, aset, konten, font atau dependency dari template referensi ke website publik.

Validasi:

- `npm.cmd run build`: PASS, 22 halaman statis.
- `npm.cmd test`: PASS, 21 tes.
- `npm.cmd run lint`: PASS, syntax checks sesuai script.
- `npm.cmd run test:cro`: PASS, 14 kelompok tes interaksi browser.
- Pemeriksaan visual tambahan: 22 halaman pada 320, 390, 768, 1024, 1440, 1920 px; tidak ditemukan overflow horizontal; tema gelap dan primary cyan terkonfirmasi; tidak ada runtime exception. Bukti: `style-results.json`.
- Screenshot ditinjau untuk beranda desktop/mobile, layanan, kontak, studi kasus RPK, dan bagian kesepakatan yang terbuka. Font eksternal diblokir pada browser QA sehingga preview memakai fallback; deklarasi Inter/Plus Jakarta Sans tetap dipakai pada source.

Screenshot: [beranda desktop](after-desktop.png), [beranda mobile](after-mobile.png), [layanan](style-services.png), [kontak](style-contact.png), [studi kasus](style-project.png), [kesepakatan](style-agreements.png).

Perubahan masih lokal dan belum dideploy. Frontend Next.js alternatif tidak dimigrasikan ke tema baru dalam perubahan ini; deployment utama memakai frontend statis existing.

## Tambahan aurora hero

Contoh GradientBarsHero dari pengguna diadaptasi menjadi 11 batang gradasi cyan dalam komponen `TechpediaConversion.aurora()` dan CSS tema existing. Tinggi batang mengikuti pola 55/45/40/35/20/15/20/35/40/45/55 persen, dengan animasi naik bertahap memakai transform sehingga tidak mengubah layout. Lapisan dekoratif memakai aria-hidden dan pointer-events none. Preferensi reduced motion menampilkan bentuk statis. Konten hero tetap langsung terlihat; form waitlist dan social proof bawaan contoh tidak ditambahkan.

Build, lint, dan 21 tes lulus. Pemeriksaan Chrome pada 1440, 390, 320 px menemukan 11 batang, tanpa overflow atau runtime exception; reduced motion mematikan animasi, sementara preferensi normal mengaktifkan keyframe scaleY. Screenshot beranda diperbarui. Tidak ada dependency React/Tailwind tambahan pada website statis.
