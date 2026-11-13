# Responsive Layout — Techpedia Project

## 1. Breakpoint & Grid

| Mode | Rentang acuan | Grid | Gutter / margin | Pola utama |
| --- | --- | --- | --- | --- |
| Desktop | ≥ 1200 px | 12 kolom | Gutter 24 px; margin responsif | Grid 3 kolom, hero dua kolom, article 8 kolom. |
| Tablet | 768–1199 px | 8 kolom | Gutter 20 px; margin 32–48 px | Grid 2 kolom, hero adaptif, filter wrap. |
| Mobile | < 768 px | 4 kolom | Gutter 16 px; margin 16–24 px | Konten satu kolom, CTA bertumpuk, carousel hanya bila diperlukan. |

Nilai ini adalah acuan desain; implementasi harus memakai layout fluida untuk rentang di antaranya, bukan bergantung pada tiga ukuran perangkat saja.

## 2. Perilaku Global

| Elemen | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Header | Logo, enam nav item, CTA. | Nav dapat dipadatkan/menu trigger, CTA diprioritaskan. | Logo + menu trigger; CTA ada di menu atau sticky action yang tidak mengganggu. |
| Hero | Dua kolom bila ada visual. | Dua kolom bila copy tetap lega; bila tidak, stack. | Selalu stack; copy sebelum visual. |
| Cards | 3 kolom untuk kartu ringkas. | 2 kolom. | 1 kolom; jangan memaksa card mini berdampingan. |
| CTA group | Horizontal bila ruang cukup. | Wrap bila perlu. | Vertikal/full width bila membentuk target sentuh lebih baik. |
| Footer | Multi-kolom. | 2 kolom kelompok. | Satu kolom atau accordion untuk grup tautan. |
| Form | Label/field lebar penuh dalam kolom form. | Tetap field lebar penuh. | Field dan tombol full width; keyboard input sesuai tipe. |

## 3. Aturan per Komponen

- **Service card:** jangan memotong copy untuk menyamakan tinggi; tombol/tautan diletakkan konsisten di bagian akhir card.
- **Portfolio filter:** desktop berupa chips; mobile gunakan overflow horizontal yang memiliki indikator, atau select. Filter harus keyboard-accessible dan menyediakan `Clear filter`.
- **Process timeline:** horizontal hanya jika setiap step cukup lebar; berubah menjadi grid/vertikal sebelum teks terjepit.
- **Accordion:** seluruh header menjadi target sentuh; indikator state tidak hanya berupa warna.
- **Table:** ringkas menjadi card/list pada mobile bila kolom tidak lagi terbaca; jangan memicu horizontal scroll untuk informasi inti.
- **Breadcrumb:** desktop lengkap; mobile boleh menampilkan parent + current page atau menyederhanakan dengan tetap jelas.

## 4. Mobile Conversion Pattern

1. Header memberi akses ke Contact tanpa menutupi konten.
2. Hero menampilkan satu CTA primer dahulu; secondary CTA setelahnya.
3. Setiap Service Detail mengulang CTA setelah scope/proses/FAQ, bukan hanya di hero.
4. Contact form tidak memakai modal; URL dapat dibagikan dan pengguna dapat kembali tanpa kehilangan konteks.
5. Sticky CTA opsional hanya di halaman informasi; hilangkan saat form submit terlihat agar tidak tumpang tindih.

## 5. Pencegahan Overflow & Aksesibilitas

- Jangan gunakan lebar tetap pada card, gambar, tombol, atau input; media berskala terhadap container.
- Pecah judul panjang secara natural; jangan mengecilkan body text secara ekstrem.
- Sediakan focus state kontras, target sentuh nyaman, dan urutan tab sesuai urutan visual.
- Uji zoom browser 200%, mode landscape, teks diperbesar, serta reduced motion.
- Pastikan status filter, error form, dan submit success dapat diumumkan pembaca layar.
