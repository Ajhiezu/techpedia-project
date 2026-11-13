# Component Specification — Techpedia Project

## 1. Global Interactive State Contract

Semua komponen interaktif menyediakan state yang relevan berikut. State yang tidak berlaku ditandai N/A, bukan dipaksakan secara visual.

| State | Ketentuan universal |
| --- | --- |
| Default | Keterjangkauan visual jelas dan label terbaca. |
| Hover | Hanya perangkat pointer; perubahan halus pada surface/border/elevation, bukan layout shift. |
| Focus | Focus ring `color.focus.ring` yang jelas, offset minimal 2 px; tidak pernah dihapus. |
| Active/selected | Perubahan state persisten dengan teks/ikon/aria state bila diperlukan. |
| Disabled | Kontras dan affordance dibedakan; tidak dapat dioperasikan dan tidak menerima fokus bila semantik memungkinkan. |
| Loading | Aksi dicegah dari submit ganda; label/status loading dapat dibaca screen reader. |
| Error | Pesan spesifik dekat kontrol; bukan warna saja; nilai pengguna dipertahankan. |
| Success | Konfirmasi tindakan jelas dan tidak mengandalkan hijau saja. |

## 2. Navigation

| Komponen | Anatomi | Variants / states | Aturan |
| --- | --- | --- | --- |
| Navbar | Logo, nav links, CTA, mobile trigger | Default, current, hover, focus, menu-open | Sticky hanya bila tidak mengurangi ruang baca; current page ditandai teks/aria-current. |
| Mobile menu | Dialog/panel, nav links, CTA, close | Closed, open, focus, loading N/A | Fokus dikelola saat buka/tutup; Escape menutup. |
| Footer | Brand, grouped links, legal, contact | Link default/hover/focus | Tidak memuat kanal kontak yang belum aktif. |
| Breadcrumb | Parent links, current item | Default, hover, focus, current | Current page tidak dapat diklik; tidak tampil di Home. |
| Pagination | Previous, page items, next | Default, hover, focus, current, disabled, loading | Current diberi `aria-current`; jangan hanya gunakan ikon. |

## 3. Actions & Disclosure

| Komponen | Anatomi | Variants / states | Aturan |
| --- | --- | --- | --- |
| Button | Label, ikon opsional, loading indicator | Primary, secondary, tertiary; default/hover/focus/active/disabled/loading | Tinggi target minimum nyaman; label tindakan spesifik. |
| Icon button | Ikon, accessible name/tooltip | Default/hover/focus/active/disabled/loading | Hanya untuk aksi yang umum; wajib accessible label. |
| CTA section | Eyebrow opsional, heading, body, CTA group | Light, brand emphasis; action states mengikuti button | Satu primary CTA; bukan pengganti informasi penting. |
| Accordion | Trigger, icon state, content panel | Collapsed, expanded, hover, focus, disabled bila relevan | Trigger adalah button; `aria-expanded` dan hubungan panel valid. |
| Modal | Dialog, title, content, close, actions | Closed/open/loading/error/success | Untuk tugas singkat; focus trap, Escape/close, return focus; hindari untuk Contact form utama. |

## 4. Cards & Informational Components

| Komponen | Anatomi | Variants / states | Aturan |
| --- | --- | --- | --- |
| Base card | Surface, border, content, action opsional | Static; clickable default/hover/focus/active | Kartu statis bukan elemen klik palsu; entire card klik hanya bila satu tujuan. |
| Service card | Icon opsional, H3, description, detail link | Default/hover/focus bila link | Grid: 3/2/1 desktop/tablet/mobile. |
| Project card | Visual valid, category, title, service, detail link | Default/hover/focus/loading placeholder | Jangan gunakan project placeholder sebagai portofolio nyata. |
| Blog card | Category, H3, excerpt, metadata valid, link | Default/hover/focus/loading placeholder | Metadata hanya jika tersedia. |
| Badge | Label pendek, semantic/neutral variant | Default; status semantic | Tidak digunakan sebagai satu-satunya status/informasi. |
| Empty state | Icon opsional, H2/H3, body, recovery actions | Default | Selalu memberikan jalur pemulihan; contoh: clear filter atau Services. |
| Alert/status | Icon, title opsional, message, action opsional | Information/success/warning/error; dismissible bila perlu | `role`/live region sesuai urgensi; jangan terlalu sering mengumumkan. |

## 5. Form Components

| Komponen | Anatomi | States | Aturan |
| --- | --- | --- | --- |
| Text input | Label, input, helper/error, optional icon | Semua global state | Label selalu terlihat; type sesuai data. |
| Select/dropdown | Label, trigger, selected value, option list, helper/error | Default, open, hover, focus, selected, disabled, loading, error | Native select diprioritaskan bila custom select tidak memberi manfaat aksesibilitas nyata. |
| Textarea | Label, textarea, helper/error, counter bila diperlukan | Semua global state | Jangan auto-resize hingga mengganggu layout; deskripsi proyek bebas. |
| Checkbox | Control, label, helper/error | Unchecked, checked, focus, disabled, error | Target klik mencakup label; dipakai untuk privacy consent. |
| Radio group | Group label, options, helper/error | Default, selected, focus, disabled, error | Untuk pilihan eksklusif yang jumlahnya sedikit, misalnya layanan. |
| Form feedback | Inline error / submit status | Error, loading, success | Error pertama mendapat fokus saat submit gagal; success pindah ke confirmation state. |

## 6. Section & Content Components

| Komponen | Anatomi | Aturan |
| --- | --- | --- |
| Section header | Eyebrow opsional, H2, intro, action opsional | H2 satu per section; action tidak wajib. |
| Process step | Number, H3, description | Horizontal desktop hanya jika teks tetap lega; vertikal mobile. |
| FAQ group | Topic title, accordion items, CTA | Hindari jawaban yang menjanjikan SLA/proses belum dikonfirmasi. |
| Filter bar | Category chips/select, result summary, clear filter | Keyboard operable; state filter dikomunikasikan; empty state tersedia. |
| Image/media | Alt text/caption bila bermakna | Visual dekoratif diberi alt kosong; media proyek hanya dengan izin. |

## 7. Component QA Checklist

- [ ] Menggunakan token warna, spacing, typography, radius, dan shadow.
- [ ] Memiliki state fokus yang terlihat dan dapat diuji keyboard.
- [ ] Memiliki empty/error/loading/success state bila data atau aksi memerlukannya.
- [ ] Tidak menimbulkan layout shift saat hover/loading/error.
- [ ] Teruji dengan konten panjang, mobile, zoom 200%, dan reduced motion.
