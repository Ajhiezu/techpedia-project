# User Flow — Techpedia Project

## Prinsip Alur

Setiap alur membawa pengguna dari pemahaman masalah menuju **Project Inquiry** dengan pilihan yang sedikit, konteks yang cukup, dan CTA yang konsisten. Jalur alternatif selalu tersedia melalui header, breadcrumbs, dan CTA ke Contact; pengguna tidak boleh terjebak pada satu halaman.

## Flow A — Website Inquiry

**Tujuan pengguna:** memahami kecocokan layanan website dan mengirim kebutuhan awal.

```mermaid
flowchart TD
    A[Homepage] --> B[Services]
    B --> C[Website Development]
    C --> D{Butuh bukti pekerjaan?}
    D -->|Ya, konten tersedia| E[Portfolio]
    D -->|Tidak / belum tersedia| F[Website Service CTA]
    E --> G[Project Detail]
    G --> F[Contact]
    F --> H[Inquiry Form: Website preselected]
    H --> I{Validasi berhasil?}
    I -->|Tidak| J[Error inline dan perbaiki field]
    J --> H
    I -->|Ya| K[Confirmation]
```

**CTA:** Hero Home → `Lihat Layanan Kami`; Service Detail → `Diskusikan Project Website Anda`; Portfolio/Project Detail → `Diskusikan Project Anda`; Contact → `Kirim Inquiry`.

## Flow B — Portfolio Exploration

**Tujuan pengguna:** mengevaluasi relevansi contoh pekerjaan sebelum menghubungi.

```mermaid
flowchart TD
    A[Homepage] --> B[Portfolio Overview]
    B --> C[Filter Category]
    C --> D{Ada project yang sesuai?}
    D -->|Ya| E[Project Detail]
    E --> F[Related Service]
    E --> G[Contact]
    F --> G
    D -->|Tidak / filter kosong| H[Empty State: lihat layanan atau hapus filter]
    H --> I[Services]
    I --> G
```

**Aturan:** Filter tidak boleh menyembunyikan seluruh nilai halaman. Jika belum ada portofolio yang valid, tampilkan pendekatan kerja dan jalur ke Services, bukan kartu proyek rekaan.

## Flow C — Custom Software Inquiry

**Tujuan pengguna:** memastikan kebutuhan software kustom layak dibahas dan menyampaikan konteks proses bisnis.

```mermaid
flowchart TD
    A[Homepage] --> B[Custom Software Development]
    B --> C[Solution Details]
    C --> D[Work Process]
    D --> E{Siap mendiskusikan kebutuhan?}
    E -->|Ya| F[Contact]
    E -->|Perlu konteks tambahan| G[FAQ atau Insights terkait]
    G --> B
    F --> H[Inquiry Form: Custom Software preselected]
    H --> I[Confirmation]
```

**Solution Details** menjelaskan masalah, ruang lingkup, dan deliverables secara umum. **Work Process** menjelaskan tahapan discovery sampai pengembangan tanpa mencantumkan durasi, SLA, atau metode yang belum dikonfirmasi.

## Flow D — Blog Discovery

**Tujuan pengguna:** memperoleh jawaban atas pertanyaan digital lalu menemukan layanan yang relevan.

```mermaid
flowchart TD
    A[Homepage] --> B[Insights]
    B --> C[Blog Detail]
    C --> D[Related Articles]
    D --> E{Sudah memahami kebutuhan?}
    E -->|Belum| C
    E -->|Ya| F[Related Service]
    F --> G[Contact]
    G --> H[Inquiry Form]
    H --> I[Confirmation]
```

Related Articles mendukung pembelajaran, sedangkan Related Service menjembatani intent informasional ke intent komersial. Keduanya harus kontekstual dan tidak dipaksakan.

## Pola Navigasi & CTA Lintas Flow

| Konteks | Perilaku pengguna | Rekomendasi UX | CTA utama |
| --- | --- | --- | --- |
| Pengunjung baru | Memindai manfaat dan kategori solusi. | CTA hero mengarah ke Services; header Contact selalu mudah ditemukan. | Konsultasikan Kebutuhan Anda |
| Membandingkan layanan | Membuka beberapa layanan dan kembali ke daftar. | Breadcrumb, card layanan, tautan layanan terkait. | Lihat Detail Layanan |
| Mengevaluasi kredibilitas | Mencari proses, FAQ, contoh pekerjaan. | Tautkan ke About, FAQ, dan Portfolio valid; jangan membuat bukti fiktif. | Diskusikan Project Anda |
| Siap kontak | Ingin mengirim informasi tanpa hambatan. | Service yang dipilih terbawa ke form, field ringkas, privacy notice. | Kirim Inquiry |
| Belum siap | Ingin belajar lebih lanjut. | CTA sekunder menuju Insights/FAQ, bukan memaksa form. | Pelajari Lebih Lanjut |
