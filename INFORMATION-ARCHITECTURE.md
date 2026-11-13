# Information Architecture — Techpedia Project

## 1. Model Informasi

Arsitektur informasi mengikuti alur pengambilan keputusan calon pelanggan:

```text
Memahami kebutuhan → Menemukan layanan → Memvalidasi kecocokan → Menghubungi → Discovery proyek
       Home              Services          Portfolio / About        Contact
                                               / Insights / FAQ
```

Konten dikelompokkan dalam lima domain:

| Domain | Entitas | Fungsi pengguna |
| --- | --- | --- |
| Brand | Home, About Us | Memahami siapa Techpedia Project dan cara berpikirnya. |
| Services | Services, enam Service Detail | Menemukan solusi sesuai masalah. |
| Proof | Portfolio, Project Detail, Case Study, Testimonials bersyarat | Menilai relevansi dan kredibilitas. |
| Knowledge | Insights, Categories, Article Detail, FAQ | Memahami topik sebelum inquiry. |
| Conversion & trust | Contact, Privacy Policy, Terms & Conditions | Mengirim kebutuhan dengan rasa aman. |

## 2. Content Hierarchy

### Tingkat 1 — Entry points

Home, Services, Portfolio, About Us, Insights, dan Contact. Semua tersedia di header dan dirancang sebagai halaman pilar.

### Tingkat 2 — Decision pages

Enam detail layanan, project detail, blog detail, serta FAQ. Konten ini membantu pengguna menjawab “apakah solusi ini cocok?”

### Tingkat 3 — Supporting pages

Project category, blog category, case study, Privacy Policy, dan Terms & Conditions. Halaman ini memberi konteks, bukan menambah pilihan utama dalam navigasi.

## 3. Content Types & Metadata

| Tipe | Field minimum | Hubungan |
| --- | --- | --- |
| Service | Nama, ringkasan, masalah, solusi, deliverables, proses, FAQ, CTA | Related services, relevant insights, Contact. |
| Project | Nama/anonim bila perlu, kategori, layanan, scope yang diizinkan, visual, CTA | Category, Case Study bila valid. |
| Case Study | Tantangan, peran/scope, pendekatan, hasil tervalidasi, izin publikasi | Satu Project Detail. |
| Article | Judul, ringkasan, kategori, tanggal publikasi/updated, penulis bila tersedia, isi, related articles | Category, services yang relevan. |
| FAQ item | Pertanyaan, jawaban, domain topik | FAQ hub atau Service Detail. |

Metadata tidak boleh mengisi angka, hasil, nama klien, atau atribusi yang belum diverifikasi.

## 4. Taksonomi yang Direkomendasikan

### Portfolio categories

Gunakan kategori berdasarkan **jenis solusi** terlebih dahulu: Website, E-Commerce, Custom Software, ERP & Business Solutions, UI/UX, dan Maintenance & IT Support. Kategori industri hanya ditambahkan setelah terdapat beberapa proyek valid agar filter tidak kosong.

### Insights categories

- Digital Business
- Website & E-Commerce
- Software & Operations
- UI/UX
- Technology & Maintenance

Setiap artikel memiliki satu kategori utama. Tag bersifat opsional dan harus dikendalikan agar tidak menghasilkan arsip tipis.

## 5. Aturan Konten & Kepercayaan

- Portfolio dan testimonial bukan kewajiban visual; kosong lebih baik daripada fiktif.
- Case study harus membedakan fakta pelanggan, scope Techpedia Project, dan hasil yang dapat dibuktikan.
- Contact form mengumpulkan informasi yang cukup untuk discovery, tanpa meminta data sensitif yang tidak diperlukan.
- Kebijakan privasi dan syarat perlu ditinjau secara legal/operasional sebelum dipublikasikan.

## 6. Prinsip SEO & Findability

- Satu halaman layanan menargetkan satu intent utama dan menggunakan istilah layanan pada judul, H1, URL, serta internal link secara natural.
- Home menargetkan intent brand dan general commercial; jangan dipaksa menargetkan semua kata kunci layanan.
- Insights menjawab informational intent dan menautkan pembaca ke service detail yang relevan.
- Gunakan judul serta meta description unik; hindari halaman kategori/filter dengan konten duplikat atau tipis.
