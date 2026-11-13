# Wireframe Specification — Techpedia Project

## 1. Status & Tujuan

Dokumen ini adalah rancangan low-fidelity untuk keputusan struktur, hierarki, dan konversi. Blok `[IMAGE]`, `[CARD]`, dan `[CONTENT]` menunjukkan ruang/fungsi, bukan aset, warna final, atau copy final. Implementasi visual harus mengikuti `BRAND-GUIDELINES.md`.

## 2. Sistem Frame Bersama

| Elemen | Spesifikasi low-fidelity | Alasan |
| --- | --- | --- |
| Header | Logo kiri; Home, Services, Portfolio, About Us, Insights, Contact; CTA primer kanan. | Navigasi dan aksi kontak selalu mudah ditemukan. |
| Main container | Lebar konten terpusat dengan margin responsif; section ditumpuk vertikal. | Keterbacaan dan ritme konsisten. |
| Grid desktop | 12 kolom; card 3/4 kolom sesuai konten; teks utama maksimal 7–8 kolom. | Membentuk hierarki tanpa kepadatan. |
| Grid tablet | 8 kolom; card umumnya 2 kolom. | Menjaga struktur saat ruang menyempit. |
| Grid mobile | 4 kolom; konten satu kolom kecuali kontrol ringkas. | Menghilangkan horizontal overflow. |
| Footer | Brand singkat, navigasi Explore/Services/Resources/Legal, kanal kontak terverifikasi. | Menyediakan recovery navigation dan trust. |

## 3. Token Struktur (bukan desain final)

| Token | Ketetapan |
| --- | --- |
| Color role | Primary `#2457D6`; secondary `#163B8C`; background `#F4F7FC`; text `#172B4D`; surface white. |
| Typography | Plus Jakarta Sans untuk heading; Inter untuk body. |
| Spacing | Gunakan skala kelipatan 4/8 px; section besar lebih lapang daripada jarak antar elemen dalam card. |
| Heading | Satu H1 per halaman; H2 untuk section; H3 untuk card/kelompok di dalam section. |
| CTA | Primer solid Royal Blue; sekunder outline/tertiary link. Satu CTA primer dominan per section. |
| Card | Surface putih, border halus, padding konsisten, tinggi hanya diseragamkan dalam satu kelompok yang sejenis. |

## 4. Template Visual Low-Fidelity

### A. Landing / Home

```text
┌──────────────── Header: Logo | Primary navigation | [Primary CTA] ────────────────┐
├──────────────── Hero: H1 + value proposition + [CTA] [Secondary] | [Visual] ───────┤
├──────────────── Trust / Technology (validated items only) ──────────────────────────┤
├──────────────── Services Overview: H2 | [Card] [Card] [Card] / [Card] [Card] [Card] ┤
├──────────────── About Preview: [Image/visual] | H2 + short narrative + [Link] ──────┤
├──────────────── Featured Projects OR Method/Approach fallback ───────────────────────┤
├──────────────── Why Choose Us: [Pillar] [Pillar] [Pillar] ──────────────────────────┤
├──────────────── Work Process: [01] → [02] → [03] → [04] ────────────────────────────┤
├──────────────── Testimonials (validated only) / omit section ───────────────────────┤
├──────────────── FAQ accordion ──────────────────────────────────────────────────────┤
├──────────────── Closing CTA ────────────────────────────────────────────────────────┤
└──────────────── Footer ─────────────────────────────────────────────────────────────┘
```

### B. Service Detail

```text
┌ Header + breadcrumb ─────────────────────────────────────────────────────────────────┐
├ Hero: Service label | H1 + outcome + [Primary CTA] | [Supporting visual] ───────────┤
├ Problems we help solve: [problem] [problem] [problem] ──────────────────────────────┤
├ Solution overview: explanatory copy | [scope/deliverable list] ──────────────────────┤
├ Process: [01] → [02] → [03] → [04] ─────────────────────────────────────────────────┤
├ Related work (only valid) OR relevant insight / service FAQ ─────────────────────────┤
├ Service FAQ ─────────────────────────────────────────────────────────────────────────┤
├ Closing CTA: [Primary] [Secondary] ──────────────────────────────────────────────────┤
└ Footer ──────────────────────────────────────────────────────────────────────────────┘
```

### C. Listing / Portfolio / Insights

```text
┌ Header ──────────────────────────────────────────────────────────────────────────────┐
├ Intro: eyebrow + H1 + explanation + [CTA] ──────────────────────────────────────────┤
├ Category/filter controls ────────────────────────────────────────────────────────────┤
├ Results: [Card] [Card] [Card] / [Card] [Card] [Card] ────────────────────────────────┤
├ Empty state when no valid result: message + [Clear filter] [View Services] ──────────┤
├ Contextual CTA ──────────────────────────────────────────────────────────────────────┤
└ Footer ──────────────────────────────────────────────────────────────────────────────┘
```

## 5. Universal Accessibility Checks

- Urutan heading, landmark header/main/footer, fokus keyboard, dan skip link harus logis.
- CTA diberi label tindakan spesifik; jangan mengandalkan warna atau ikon saja.
- Accordion/filter/form menyampaikan state secara programatik dan visual.
- Konten tidak boleh membutuhkan hover untuk dipahami.
- Motion bersifat halus dan menghormati preferensi reduced motion.
