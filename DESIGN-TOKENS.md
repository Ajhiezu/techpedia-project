# Design Tokens — Techpedia Project

## 1. Status Token

Token berikut adalah keputusan UI Foundation untuk Phase 2. Warna brand yang diberikan tetap dipertahankan. Warna semantic merupakan rekomendasi fungsional untuk state sistem dan tidak diposisikan sebagai warna brand utama.

## 2. Color Tokens

### Brand, surface, text, & border

| Token | Value | Peran |
| --- | --- | --- |
| `color.primary.600` | `#2457D6` | CTA utama, link aktif, kontrol utama. |
| `color.primary.800` | `#163B8C` | Active state, emphasis dark, surface brand terbatas. |
| `color.background.default` | `#F4F7FC` | Latar halaman/section lembut. |
| `color.surface.default` | `#FFFFFF` | Card, input, modal, dan surface utama. |
| `color.text.primary` | `#172B4D` | Heading dan body utama. |
| `color.text.secondary` | `#64748B` | Metadata dan supporting copy. |
| `color.border.default` | `#D8E0EF` | Batas card/input nonaktif. |
| `color.border.strong` | `#AAB8D0` | Batas yang perlu lebih jelas. |
| `color.focus.ring` | `#2457D6` | Focus ring terlihat. |

### Semantic recommendation

| Token | Value | Penggunaan |
| --- | --- | --- |
| `color.success.700` | `#16794C` | Submit berhasil, status positif. |
| `color.warning.700` | `#9A5B00` | Peringatan yang memerlukan perhatian. |
| `color.error.700` | `#B42318` | Error validasi dan kegagalan tindakan. |
| `color.information.700` | `#1D4ED8` | Informasi sistem non-kritis. |
| `color.overlay` | `rgba(23,43,77,0.56)` | Backdrop modal/drawer. |

Semantic status selalu dipadukan dengan teks, ikon, dan/atau pola yang jelas—bukan warna saja.

### Kontras terukur untuk teks putih

| Pasangan | Rasio | Status untuk teks normal AA |
| --- | ---: | --- |
| `#2457D6` pada `#FFFFFF` | 6.16:1 | Lulus |
| `#163B8C` pada `#FFFFFF` | 10.30:1 | Lulus |
| `#172B4D` pada `#FFFFFF` | 14.10:1 | Lulus |
| `#64748B` pada `#FFFFFF` | 4.76:1 | Lulus |
| `#16794C` pada `#FFFFFF` | 5.42:1 | Lulus |
| `#9A5B00` pada `#FFFFFF` | 5.43:1 | Lulus |
| `#B42318` pada `#FFFFFF` | 6.57:1 | Lulus |
| `#1D4ED8` pada `#FFFFFF` | 6.70:1 | Lulus |

Rasio harus diuji ulang untuk ukuran, bobot, opacity, dan layer aktual sebelum rilis.

## 3. Typography Tokens

Font family: `Plus Jakarta Sans` untuk display/heading dan `Inter` untuk body/UI. Angka line-height berikut adalah target desain; implementasi dapat memakai nilai relatif yang ekuivalen.

| Token | Family | Size / line height | Weight | Penggunaan |
| --- | --- | --- | --- | --- |
| `type.display` | Plus Jakarta Sans | 56 / 64 px | 700 | Hero desktop terbatas. |
| `type.h1` | Plus Jakarta Sans | 44 / 52 px | 700 | Judul halaman. |
| `type.h2` | Plus Jakarta Sans | 36 / 44 px | 700 | Judul section. |
| `type.h3` | Plus Jakarta Sans | 28 / 36 px | 650–700 | Subsection/card title penting. |
| `type.h4` | Plus Jakarta Sans | 22 / 30 px | 650–700 | Judul card/kelompok. |
| `type.body.large` | Inter | 18 / 28 px | 400 | Intro dan supporting copy penting. |
| `type.body` | Inter | 16 / 24 px | 400 | Isi utama dan input. |
| `type.body.small` | Inter | 14 / 20 px | 400 | Metadata dan helper. |
| `type.caption` | Inter | 12 / 16 px | 500 | Label pendukung, bukan isi penting. |
| `type.button` | Inter | 14 / 20 px | 600 | Label tombol. |

Pada mobile, Display menjadi 40/48 px, H1 36/44 px, H2 30/38 px, H3 24/32 px; body tetap minimal 16/24 px.

## 4. Spacing, Radius, Shadow

### Spacing scale (kelipatan 4 px)

| Token | Value | Token | Value |
| --- | ---: | --- | ---: |
| `space.1` | 4 px | `space.8` | 32 px |
| `space.2` | 8 px | `space.10` | 40 px |
| `space.3` | 12 px | `space.12` | 48 px |
| `space.4` | 16 px | `space.16` | 64 px |
| `space.5` | 20 px | `space.20` | 80 px |
| `space.6` | 24 px | `space.24` | 96 px |

| Token | Value | Penggunaan |
| --- | --- | --- |
| `radius.sm` | 6 px | Tag, input kecil. |
| `radius.md` | 10 px | Card dan input. |
| `radius.lg` | 16 px | CTA band/modal. |
| `shadow.sm` | `0 1px 2px rgba(23,43,77,.08)` | Card tenang. |
| `shadow.md` | `0 8px 24px rgba(23,43,77,.12)` | Menu/modal elevated. |

## 5. Layout Tokens

| Token | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| `layout.container.max` | 1200 px | fluid | fluid |
| `layout.margin.inline` | 48 px minimum | 32 px | 16 px |
| `layout.grid.columns` | 12 | 8 | 4 |
| `layout.grid.gutter` | 24 px | 20 px | 16 px |
| `layout.section.y` | 96 px | 72 px | 56 px |
| `layout.section.y.compact` | 64 px | 48 px | 40 px |

## 6. Breakpoint Tokens

| Token | Value | Tujuan |
| --- | --- | --- |
| `breakpoint.mobile` | < 768 px | Layout satu kolom dan menu mobile. |
| `breakpoint.tablet` | 768–1199 px | Grid 8 kolom dan layout adaptif. |
| `breakpoint.desktop` | ≥ 1200 px | Grid 12 kolom. |
| `breakpoint.large` | ≥ 1440 px | Ruang pandang besar; container tetap dibatasi. |
