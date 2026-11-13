# Mengisi Portfolio Hub Techpedia

Edit satu file utama: `content/site.json` dari root proyek. File `frontend/content/site.json` adalah hasil generate; jangan diedit langsung.

## Kontak aktif

- WhatsApp: 087732774899, ditautkan sebagai https://wa.me/6287732774899.
- Email: ajhiezudesign@gmail.com.
- Fastwork: https://fastwork.id/user/techpedia_project.
- GitHub profil belum diberikan, sehingga tombol profil GitHub tidak dibuat.

Ubah bagian `profile.contacts` untuk memperbarui kontak. Kanal kosong tidak menghasilkan tombol mati.

## Tambahkan proyek

Salin objek dari [PROJECT-TEMPLATE.json](PROJECT-TEMPLATE.json) ke array `projects` dalam `content/site.json`. Template bukan proyek publik dan tidak diimpor otomatis. Gunakan ID dan slug unik; ganti semua teks dengan informasi proyek yang sebenarnya.

Isi title, short_description, category_name dan technologies. Simpan thumbnail di `frontend/assets/projects/`, lalu gunakan misalnya `assets/projects/nama-proyek.webp`; kosongkan bila belum punya screenshot. Gunakan gambar proyek sendiri atau yang diizinkan, bukan screenshot proyek lain.

Tulis overview dan kontribusi pribadi pada role. Challenge, solution, architecture, results dan lessons opsional. Hapus/kosongkan bagian yang tidak diperlukan; jangan isi hasil atau klaim yang tidak dapat dibuktikan.

Pilih demo_type:

- `full-live-demo`: aplikasi dengan backend/database sendiri; isi demo_url HTTPS.
- `interactive-ui-demo`: preview UI terpisah; isi demo_url HTTPS.
- `case-study-only`: studi kasus lokal tanpa tombol demo; cocok untuk karya yang tidak boleh dibuka sebagai aplikasi publik.

Isi github_url hanya bila repository boleh dibagikan dan memang dapat dibuka pengunjung. Isi design_url untuk tautan Figma bila tersedia. Link kosong tidak tampil. Demo/GitHub/Figma membuka tab baru, dengan noopener/noreferrer. Website utama tidak mencoba menyalakan backend, mengecek kesehatan demo atau membaca database proyek.

Untuk menampilkan karya: ubah status menjadi `published` dan approved menjadi `true`. Untuk menyembunyikan: gunakan status `draft` atau approved `false`. featured `true` memprioritaskan proyek di homepage; bila tidak ada featured, homepage mengambil tiga karya publik pertama. published_at opsional; tanggal masa depan tidak ditampilkan.

## Bangun dan periksa

Dari root:

```powershell
npm.cmd run prepare:content
npm.cmd test
npm.cmd run build
npm.cmd start
```

Buka http://localhost:8080. Build memvalidasi isi, membuang draft/unapproved dari JSON publik dan menyalin aset ke `dist/`. Field internal yang tidak didukung tidak ikut record proyek publik. Jangan masukkan data rahasia/kredensial ke isi studi kasus yang disetujui untuk publik.

Versi React/Next.js memakai data publik hasil generate yang sama. Setelah dependensinya tersedia, jalankan npm.cmd run build dari frontend-next; hasil static export ditargetkan ke frontend-next/out. Perubahan konten perlu build ulang. Paket Next.js masih terblokir npm EACCES pada lingkungan pengerjaan ini, sehingga output React tersebut belum terverifikasi.

Belum ada deployment. Robots/noindex tetap dalam mode pra-publikasi sampai domain dan publikasi disetujui.
