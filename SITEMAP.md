# Sitemap — Techpedia Project

## Prinsip Struktur

Sitemap dirancang untuk dua kebutuhan utama: calon pelanggan dapat cepat menemukan solusi yang relevan, dan mesin pencari dapat memahami hubungan antara layanan, bukti pekerjaan, serta konten edukasi. Halaman detail layanan menjadi landing page organik utama; halaman Portfolio dan Insights mendukung evaluasi dan discovery.

```mermaid
flowchart TD
    H[Home /] --> S[Services /services]
    H --> P[Portfolio /portfolio]
    H --> A[About Us /about]
    H --> I[Insights /insights]
    H --> C[Contact /contact]
    H --> F[FAQ /faq]

    S --> S1[Website Development /services/website-development]
    S --> S2[E-Commerce Development /services/ecommerce-development]
    S --> S3[Custom Software Development /services/custom-software-development]
    S --> S4[ERP & Business Solutions /services/erp-business-solutions]
    S --> S5[UI/UX Design /services/ui-ux-design]
    S --> S6[Maintenance & IT Support /services/maintenance-it-support]

    P --> PC[Project Category /portfolio/category/[category]]
    P --> PD[Project Detail /portfolio/[project-slug]]
    PD --> CS[Case Study /portfolio/[project-slug]/case-study]

    I --> IC[Blog Category /insights/category/[category]]
    I --> ID[Blog Detail /insights/[article-slug]]
    ID --> RA[Related Articles]

    H --> PP[Privacy Policy /privacy-policy]
    H --> T[Terms & Conditions /terms-conditions]
    H --> E[404 /404]

    S1 --> C
    S2 --> C
    S3 --> C
    S4 --> C
    S5 --> C
    S6 --> C
    PD --> C
    ID --> S
```

## URL & Indexing Rules

| Kelompok | URL | Indexing | Catatan |
| --- | --- | --- | --- |
| Navigasi utama | `/`, `/services`, `/portfolio`, `/about`, `/insights`, `/contact` | Index | Enam halaman yang selalu tersedia di header. |
| Detail layanan | `/services/[service-slug]` | Index | Satu halaman unik untuk setiap layanan. |
| Portofolio | `/portfolio/[project-slug]` | Index hanya jika proyek boleh dipublikasikan | Gunakan kategori sebagai filter/landing page jika kontennya cukup. |
| Case study | `/portfolio/[project-slug]/case-study` | Index hanya jika substansi berbeda dan tervalidasi | Gabungkan dengan Project Detail jika kontennya tipis. |
| Insights | `/insights/[article-slug]` | Index | Kategori hanya diindeks bila memiliki deskripsi dan kumpulan artikel bermakna. |
| Utilitas | `/faq`, `/privacy-policy`, `/terms-conditions`, `/404` | FAQ/Legal index; 404 noindex | Footer untuk legal dan FAQ; 404 tidak masuk navigasi. |

## Catatan Konten Bersyarat

- Project Detail dan Case Study hanya dibuat untuk proyek dengan izin publikasi serta fakta yang dapat diverifikasi.
- Jika belum tersedia portofolio valid, halaman `/portfolio` tetap ada sebagai pengantar kapabilitas dan proses; jangan menampilkan proyek fiktif.
- Testimonials pada Home bukan entitas halaman. Tampilkan hanya setelah ada testimoni asli dengan izin penggunaan.
- Profil founder/tim hanya dimuat bila identitas, peran, dan persetujuannya tersedia.
