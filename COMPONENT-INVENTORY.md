# Component Inventory — Techpedia Project

## 1. Foundation Components

| Komponen | Variants/states | Aturan konsistensi |
| --- | --- | --- |
| Container | Default, narrow article, full-bleed media | Konten teks tidak terlalu lebar; full-bleed tetap punya padding mobile. |
| Section wrapper | White, light background, deep-blue emphasis terbatas | Pergantian surface memberi ritme, bukan dekorasi. |
| Heading group | Eyebrow, H1, H2, H3, body intro | Satu H1; heading tidak dipakai hanya untuk memperbesar teks. |
| Button / CTA | Primary, secondary outline, tertiary text; default/hover/focus/disabled/loading | Label adalah kata kerja spesifik; Primary Royal Blue. |
| Link | Inline, navigation, card link | Dibedakan dari body text dan memiliki focus state. |
| Icon | Pendukung, status, external direction bila perlu | Gaya/ketebalan garis konsisten; tidak menjadi satu-satunya penanda. |

## 2. Navigation Components

| Komponen | Isi | State/perilaku |
| --- | --- | --- |
| Global header | Logo, nav, Contact CTA, menu trigger mobile | Active page, hover, focus, menu open/close. |
| Services menu | Enam layanan + deskripsi singkat | Opsional mega menu desktop; tetap dapat diakses keyboard. |
| Mobile navigation | Daftar halaman pilar + CTA | Fokus terperangkap secara tepat saat panel terbuka; close jelas. |
| Breadcrumb | Parent → current page | Tidak perlu di Home; current page bukan link. |
| Footer | Explore, Services, Resources, Legal, contact valid | Desktop grid; mobile stack/accordion. |
| Anchor navigation | Link section panjang | Active state opsional; jangan mengubah URL secara membingungkan. |

## 3. Content Components

| Komponen | Penggunaan | Anatomi minimal |
| --- | --- | --- |
| Service card | Services dan Home | Icon opsional, title, ringkasan, link detail. |
| Portfolio card | Portfolio grid | Visual valid, kategori, title, layanan, link detail. |
| Article card | Insights / related articles | Kategori, title, ringkasan opsional, metadata valid, link. |
| Value pillar | Why Choose Us / values | Icon opsional, title, deskripsi singkat. |
| Process step | Work Process / Our Process | Nomor, title, penjelasan, connector desktop opsional. |
| FAQ accordion | FAQ hub / service detail | Question button, answer panel, expanded/collapsed state. |
| Testimonial card | Hanya bila testimoni valid | Kutipan, nama/atribusi dan izin; jangan render placeholder sebagai bukti. |
| Empty state | Portfolio/Insights filter | Penjelasan, clear-filter, link alternatif. |
| Error state | Form/system | Pesan spesifik, tindakan pemulihan, nilai tetap tersimpan. |

## 4. Conversion Components

| Komponen | Fungsi | Ketentuan |
| --- | --- | --- |
| Hero CTA group | Aksi awal di halaman pilar/detail | Satu primary dan maksimal satu secondary. |
| Closing CTA band | Mengonversi setelah konten utama | Pesan spesifik halaman + CTA Contact. |
| Contact form | Mengumpulkan inquiry | Mengikuti `FORM-INTERACTION.md`; service preselected jika berasal dari detail layanan. |
| WhatsApp CTA | Kanal alternatif | Tampil hanya jika aktif dan dikelola. |
| Privacy notice | Transparansi sebelum submit | Ringkas dan tertaut ke Privacy Policy. |
| Confirmation state | Menutup submit berhasil | Bukti penerimaan tanpa janji waktu respons yang belum dikonfirmasi. |

## 5. Form Components & States

| Komponen | States wajib |
| --- | --- |
| Text input / textarea | Default, hover, focus, filled, error, disabled, read-only bila perlu. |
| Select / radio group | Default, focus, selected, error, disabled. |
| Checkbox privacy | Unchecked, checked, focus, error, disabled. |
| Submit button | Default, hover, focus, loading, disabled. |
| Field helper/error | Assistive, error, success bila relevan; selalu dekat field. |

## 6. Pemakaian yang Dihindari

- Card dengan tinggi atau padding tidak konsisten dalam satu grid.
- Multiple primary CTA pada satu section.
- Carousel otomatis untuk portofolio/testimoni; gunakan grid atau kontrol eksplisit.
- Gradien dekoratif, ilustrasi ramai, atau motion yang menutupi konten inti.
- Placeholder testimoni/proyek/teknologi yang tampak sebagai klaim nyata.
