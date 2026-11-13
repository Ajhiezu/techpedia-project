# Responsive Guidelines — Techpedia Project

## 1. Responsive Principles

Responsivitas bersifat content-first: breakpoint dipakai ketika konten tidak lagi nyaman dibaca atau dioperasikan, bukan semata-mata mengikuti jenis perangkat. Semua layout harus fluida di antara breakpoint token.

## 2. Mode Layout

| Mode | Grid & container | Typography | Komposisi |
| --- | --- | --- | --- |
| Mobile (<768 px) | 4 kolom, margin 16–24 px, gutter 16 px. | Display/H1 turun sesuai token; body minimal 16 px. | Satu kolom; CTA stack/full width; menu trigger. |
| Tablet (768–1199 px) | 8 kolom, margin ≥32 px, gutter 20 px. | Heading menyesuaikan bertahap. | Dua kolom untuk card/split jika isi masih nyaman. |
| Desktop (≥1200 px) | 12 kolom, container max 1200 px, gutter 24 px. | Token desktop penuh. | Hero/split dua kolom; card grid tiga kolom. |
| Large desktop (≥1440 px) | Container tetap max 1200 px; whitespace bertambah. | Jangan memperbesar body secara tidak perlu. | Jangan menambah kolom konten hanya karena ruang tersedia. |

## 3. Adaptation Rules

| Pola | Mobile | Tablet | Desktop / Large |
| --- | --- | --- | --- |
| Navbar | Logo + menu trigger; CTA dalam menu atau action ringkas. | Trigger bila nav tidak muat. | Nav lengkap + CTA. |
| Hero | Copy, CTA, visual bertumpuk; copy dahulu. | Stack atau split sesuai panjang copy. | Split 7/5 atau komposisi setara. |
| Card grid | 1 kolom. | 2 kolom. | 3 kolom untuk card ringkas. |
| Contact | Form full width; helper bisa bawah. | Dua kolom bila field tetap nyaman. | Form 7/12 + helper 5/12. |
| Process | Timeline vertikal. | Grid 2–3 kolom atau timeline sederhana. | Horizontal jika tidak memadatkan label. |
| Filter | Select atau chips horizontal scroll dengan clear action. | Wrap controls. | Inline chips + summary. |
| Footer | Stack/accordion groups. | Dua kolom groups. | Multi-column groups. |

## 4. Touch, Content, & Performance

- Target sentuh minimum 44 × 44 CSS px untuk kontrol utama atau beri area target setara.
- Hindari hover-only action; semua tindakan tersedia melalui tap/keyboard.
- Jangan gunakan tabel lebar untuk informasi esensial pada mobile; ubah menjadi daftar/card.
- Media harus responsive dan memiliki ruang yang dicadangkan agar layout tidak meloncat.
- Prioritaskan konten/CTA utama sebelum visual non-esensial dalam urutan DOM mobile.

## 5. Overflow & Validation Checklist

- Tidak ada fixed width pada input, button group, card, tabel, atau gambar yang melampaui container.
- Judul panjang dapat wrap tanpa menabrak CTA/visual.
- Error form, badge, dan status panjang tidak memotong teks.
- Uji 320 px, 375 px, 768 px, 1024 px, 1280 px, dan ≥1440 px; juga zoom 200% serta landscape.
- Sticky CTA tidak menutupi footer, input aktif, keyboard virtual, atau action sistem.
