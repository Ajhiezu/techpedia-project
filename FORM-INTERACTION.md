# Form Interaction — Techpedia Project

## 1. Tujuan Form

Form inquiry mengumpulkan konteks minimum yang cukup untuk memulai discovery, tanpa menjadikan calon klien harus membuat spesifikasi teknis lengkap. Form harus dapat diakses, jelas, aman secara komunikasi, dan nyaman digunakan di mobile.

## 2. Field & Perilaku

| Field | Wajib | Interaksi | Validasi / bantuan |
| --- | --- | --- | --- |
| Nama | Ya | Single-line text. | Pesan error: “Masukkan nama Anda.” |
| Email atau nomor WhatsApp | Minimal satu | Tampilkan dua field; pengguna dapat mengisi salah satu atau keduanya. | Validasi format setelah input selesai atau saat submit; jelaskan “Isi minimal satu kanal kontak.” |
| Nama bisnis/organisasi | Tidak | Single-line text. | Tidak ada error bila kosong. |
| Layanan yang diminati | Ya | Select/radio yang mudah dipindai; preselected dari halaman asal. | Opsi: Website, E-Commerce, Custom Software, ERP & Business Solutions, UI/UX, Maintenance & IT Support, Belum yakin. |
| Budget range | Tidak | Select dengan opsi rentang yang ditetapkan kemudian. | Jangan tampilkan atau mengunci rentang sebelum kebijakan komersial siap; boleh menggunakan “Belum ditentukan”. |
| Deskripsi proyek/kebutuhan | Ya | Textarea multi-baris. | Placeholder membantu, misalnya “Ceritakan tujuan, masalah, atau jenis solusi yang Anda butuhkan.” |
| Link/referensi | Tidak | URL field atau upload hanya bila infrastruktur dan kebijakan file siap. | Validasi URL; jangan wajibkan. |
| Persetujuan privasi | Ya | Checkbox dengan tautan Privacy Policy. | Pesan error: “Setujui pemrosesan data untuk mengirim inquiry.” |

Jangan meminta password, API key, data pelanggan, dokumen identitas, atau akses sistem pada form awal.

## 3. Urutan & Progresi

Untuk volume field awal ini, gunakan satu halaman form dengan pengelompokan yang jelas: **Kontak** → **Kebutuhan proyek** → **Persetujuan**. Multi-step hanya dipertimbangkan bila field bertambah secara material dan setiap tahap memberikan alasan yang jelas.

Urutan rekomendasi:

1. Nama dan kanal kontak.
2. Nama bisnis/organisasi (opsional).
3. Layanan yang diminati.
4. Budget range (opsional).
5. Deskripsi proyek/kebutuhan dan link/referensi (opsional).
6. Persetujuan privasi dan submit.

## 4. State Form

| State | Perilaku UX | Copy contoh |
| --- | --- | --- |
| Default | Label selalu terlihat; bantuan ringkas di bawah field bila perlu. | “Pilih layanan yang paling mendekati kebutuhan Anda.” |
| Focus | Focus ring terlihat jelas, tidak hanya perubahan warna tipis. | — |
| Error validasi | Error inline dekat field; fokus pindah ke error pertama saat submit. Nilai field tetap tersimpan. | “Masukkan alamat email yang valid.” |
| Submit loading | Tombol disabled untuk mencegah submit ganda; indikator status dapat dibaca screen reader. | “Mengirim inquiry…” |
| Submit berhasil | Arahkan ke confirmation page/state; jangan reset sebelum hasil diketahui. | “Terima kasih, inquiry Anda telah diterima.” |
| Gagal sistem/jaringan | Data tetap ada; berikan tindakan mencoba lagi dan alternatif kontak jika aktif. | “Inquiry belum terkirim. Periksa koneksi Anda lalu coba lagi.” |

Pesan error tidak boleh menyalahkan pengguna atau hanya memakai warna merah sebagai penanda.

## 5. Confirmation Experience

Confirmation perlu memuat:

- Konfirmasi bahwa inquiry berhasil diterima.
- Ringkasan singkat layanan yang dipilih dan kanal kontak yang dikirim, tanpa mengekspos data sensitif.
- Informasi langkah berikutnya **hanya bila proses tersebut telah ditetapkan**.
- Tautan kembali ke Services, Insights, atau Home sebagai jalur lanjutan.

Jangan mencantumkan nomor tiket, estimasi respons, atau janji follow-up otomatis bila sistem/prosesnya belum tersedia.

## 6. Empty, Error, dan Fallback State Pendukung

| Kondisi | Tampilan / tindakan |
| --- | --- |
| Layanan belum terpilih dari jalur umum | Tampilkan opsi `Belum yakin / perlu rekomendasi`; jangan memblokir inquiry. |
| WhatsApp tidak aktif | Jangan tampilkan CTA WhatsApp; gunakan form/email yang aktif. |
| Link/referensi tidak valid | Tampilkan error inline dan izinkan pengguna mengosongkan field opsional. |
| Attachment belum didukung | Jangan tampilkan kontrol upload; arahkan untuk mendiskusikan kebutuhan pada tahap lanjut. |
| Backend form tidak tersedia | Jangan membuat tombol submit palsu; tampilkan kanal kontak aktif atau status maintenance yang jujur. |

## 7. Mobile & Accessibility Requirements

- Gunakan tipe keyboard yang tepat untuk email, nomor telepon, dan URL.
- Label berada di atas field; placeholder tidak menggantikan label.
- Target sentuh, jarak antar-field, dan tombol submit cukup nyaman.
- Hindari modal form penuh yang sulit ditutup; halaman Contact normal lebih mudah dibagikan dan diakses kembali.
- Dukungan keyboard, urutan fokus logis, label programatik, serta pengumuman status submit untuk pembaca layar adalah wajib.
- Uji form pada layar kecil, jaringan lambat, dan orientasi layar berbeda.
