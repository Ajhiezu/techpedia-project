# Design System — Techpedia Project

## 1. Tujuan Sistem

Design System Techpedia Project menjaga tampilan Corporate Professional yang bersih, terpercaya, modern, dan berorientasi konversi. Sistem ini menyatukan keputusan visual, perilaku komponen, dan aksesibilitas untuk Phase 2 UI/UX Design.

## 2. Prinsip Desain

1. **Clarity first** — informasi, scope, dan CTA lebih penting daripada ornamen.
2. **Professional restraint** — whitespace, tipografi, dan struktur membangun kepercayaan; dekorasi digunakan seperlunya.
3. **Business-contextual** — konten dimulai dari masalah dan tujuan pengguna.
4. **Consistent action** — CTA primer selalu mudah dikenali dan tidak berkompetisi dalam satu section.
5. **Accessible by default** — state, kontras, keyboard, dan motion dipertimbangkan sejak awal.

## 3. Hierarki Visual

| Level | Peran | Pedoman |
| --- | --- | --- |
| Level 1 | H1 / Display, CTA primer | Maksimal satu fokus utama per viewport awal. |
| Level 2 | H2, intro section, visual/diagram pendukung | Mengelompokkan informasi keputusan. |
| Level 3 | H3/H4, cards, FAQ, metadata | Mendukung scan tanpa mengambil fokus CTA utama. |
| Utility | Caption, badge, divider, helper | Memberi konteks; tidak membawa pesan inti sendirian. |

## 4. Aturan Warna & Surface

- Putih dan `#F4F7FC` mendominasi surface untuk menjaga kesan lapang.
- `#2457D6` diprioritaskan untuk tombol primer, link aktif, dan focus ring.
- `#163B8C` dipakai untuk active/emphasis terbatas, bukan sebagai latar setiap section.
- Warna semantic digunakan untuk status sistem, tidak menggantikan CTA brand.
- Border dan shadow membedakan hierarchy secara halus; hindari gradient/efek dekoratif berlebihan.

Detail nilai token ada di `DESIGN-TOKENS.md`.

## 5. Sistem Komposisi

| Pola | Penggunaan | Struktur |
| --- | --- | --- |
| Hero | Home, landing layanan, page intro | Eyebrow opsional → H1 → intro → CTA group → visual pendukung. |
| Section header | Hampir semua section | Eyebrow opsional → H2 → body intro → action opsional. |
| Card grid | Services, Portfolio, Insights | Header → grid card yang setara → link/CTA terkait. |
| Content split | About, service overview, Contact | Teks/aksi dan visual/pendukung dalam dua kolom desktop. |
| CTA band | Akhir halaman/section | Pesan ringkas → satu CTA primer → sekunder opsional. |
| Reading layout | Blog/legal | Container sempit, hierarki heading, related content setelah isi. |

## 6. Aturan Konsistensi

- Navbar, footer, container, grid, button, dan form memakai spesifikasi tunggal lintas halaman.
- Maksimum satu button primer per CTA group; secondary action memakai outline atau link.
- Card sejenis dalam satu grid memiliki padding, heading hierarchy, dan posisi action konsisten.
- Gunakan copy CTA yang spesifik: `Diskusikan Project Anda`, bukan `Klik di sini`.
- Jaga visual valid: tidak ada statistik, testimoni, teknologi, logo klien, atau hasil proyek tanpa verifikasi/izin.

## 7. Motion

Micro-interaction untuk hover, focus, accordion, dan menu dapat menggunakan durasi sekitar 150–250 ms dengan easing sederhana. Motion tidak boleh menjadi satu-satunya indikator state, memindahkan layout secara mengejutkan, atau menghambat pengguna; semua harus dihentikan/dikurangi saat preferensi reduced motion aktif.

## 8. Governance Phase 2

- Gunakan token semantik, bukan nilai warna/spacing ad hoc.
- Tambah variant hanya bila ada use case lintas halaman, nama jelas, dan state aksesibel.
- Dokumentasikan setiap exception beserta alasan; jangan menambah warna brand tanpa persetujuan.
- Uji komponen dalam desktop, tablet, mobile, keyboard, dan konten panjang sebelum dinyatakan siap.
