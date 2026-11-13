# Accessibility Guidelines — Techpedia Project

## 1. Target

Target desain adalah **WCAG 2.2 Level AA**. Ini adalah baseline desain dan QA; kepatuhan final tetap harus diverifikasi pada implementasi dengan konten, browser, dan teknologi bantu yang sesungguhnya.

## 2. Kontras & Warna

- Target minimum teks normal: 4.5:1; teks besar: 3:1; komponen UI dan indikator grafis penting: 3:1 terhadap warna bersebelahan.
- Gunakan pasangan token terukur pada `DESIGN-TOKENS.md`; jangan menaruh teks sekunder dengan opacity rendah di atas background berwarna tanpa pengujian ulang.
- Status success, warning, error, dan information selalu memiliki teks/ikon serta pesan eksplisit.
- Focus indicator kontras dan terlihat pada semua surface; jangan menghapus outline browser tanpa pengganti yang memadai.

## 3. Keyboard & Focus

| Area | Requirement |
| --- | --- |
| Urutan tab | Mengikuti urutan visual/logika: skip link → header → main → footer. |
| Fokus | Terlihat, tidak tertutup sticky header/modal, dan tidak hilang saat state berubah. |
| Menu | Trigger, link, dan close dapat dioperasikan keyboard; Escape menutup menu/dialog. |
| Modal | Fokus masuk ke dialog ketika dibuka, tetap di dalam dialog, dan kembali ke pemicu ketika ditutup. |
| Accordion/filter | Dapat dioperasikan keyboard serta menyampaikan expanded/selected state. |
| Form | Submit gagal mengarahkan fokus ke ringkasan error atau field error pertama; nilai tetap ada. |

## 4. Semantik & Screen Reader

- Gunakan landmark semantik: `header`, `nav`, `main`, `footer`; hanya satu `main` dan H1 per halaman.
- Pertahankan hierarki heading tanpa melompati level demi ukuran visual.
- Setiap input memiliki label programatik; helper/error dihubungkan ke input.
- Icon button harus memiliki accessible name; gambar informatif punya alt yang menjelaskan informasi, gambar dekoratif memakai alt kosong.
- Gunakan `aria-current` untuk navigasi/pagination aktif dan `aria-expanded` untuk accordion/menu.
- Status loading, hasil filter, error, dan success diumumkan sesuai tingkat urgensi; jangan gunakan live region untuk pesan berulang yang mengganggu.

## 5. Form & Error Prevention

- Tandai field wajib secara jelas dalam teks dan programatik, bukan asterisk tanpa penjelasan.
- Beri instruksi format sebelum input jika diperlukan; validasi inline tidak boleh menginterupsi saat pengguna masih mengetik.
- Pesan error menyebut masalah dan tindakan perbaikan spesifik.
- Privacy consent dapat dibaca sebelum submit dan tautan kebijakannya dapat diakses keyboard.
- Jangan meminta data sensitif, kredensial, atau informasi yang tidak relevan dengan inquiry awal.

## 6. Motion, Reflow, & Input

- Hormati `prefers-reduced-motion`: nonaktifkan/reduksi transisi dekoratif dan auto-motion.
- Jangan menggunakan auto-playing carousel atau konten bergerak tanpa kontrol pause/stop bila diperlukan.
- Desain harus tetap berfungsi pada zoom 200% dan reflow tanpa kehilangan fungsi atau kebutuhan scroll dua dimensi untuk konten biasa.
- Tindakan drag memiliki alternatif tap/keyboard; target pointer cukup besar dan tidak terlalu rapat.

## 7. QA Scenario Minimum

1. Navigasi seluruh halaman dengan keyboard saja.
2. Buka/tutup menu, modal, accordion, filter, dan dropdown dengan keyboard.
3. Isi dan submit Contact form dengan data salah, lalu perbaiki dan submit berhasil.
4. Uji state loading, kosong, error jaringan, dan success melalui pembaca layar.
5. Uji kontras, zoom 200%, mobile kecil, reduced motion, dan konten panjang.
