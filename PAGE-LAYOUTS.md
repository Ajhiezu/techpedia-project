# Page Layouts — Techpedia Project

Setiap halaman memakai Header dan Footer standar dari `WIREFRAME-SPECIFICATION.md`. CTA primer header adalah **Konsultasikan Kebutuhan Anda** menuju Contact. Footer selalu memuat navigasi, legal, serta kanal kontak yang telah dikonfirmasi.

## 1. Homepage (`/`)

**Desktop:** Hero dua kolom (copy 7/12, visual 5/12), kemudian trust strip, grid enam service card 3 kolom, about preview dua kolom, project/method section, tiga value pillar, process horizontal, testimonial bersyarat, FAQ, closing CTA.  
**Tablet:** Hero dan about tetap dua kolom bila terbaca; service card 2 kolom; process menjadi grid 2×2.  
**Mobile:** Hero satu kolom dengan CTA bertumpuk; semua card satu kolom; process vertikal; accordion FAQ.  
**Alasan:** Hero memberi orientasi dan aksi; section berikutnya menjawab “apa”, “mengapa”, “bagaimana”, lalu keberatan sebelum CTA akhir.

## 2. Services Overview (`/services`)

**Desktop:** Intro terpusat, directory enam service card 3 kolom, use-case/pain-point band, work process horizontal, service FAQ, closing CTA.  
**Tablet:** Card 2 kolom; use case dapat menjadi dua kolom.  
**Mobile:** Intro, card, use case, process, FAQ semuanya satu kolom.  
**Alasan:** Directory diletakkan lebih awal agar pengguna dengan kebutuhan yang sudah jelas dapat langsung memilih detail layanan.

## 3–8. Service Detail (template bersama)

**Header/navigation:** Header standar + breadcrumb `Services / [Service]`; active state pada Services.  
**Desktop:** Hero dua kolom; problem card 3 kolom; solution/scope dua kolom; process horizontal; related work atau related insights; FAQ; closing CTA.  
**Tablet:** Hero dapat dua kolom; problem card 2 kolom; scope/solution tetap berdekatan.  
**Mobile:** Semua konten satu kolom, CTA hero bertumpuk, process vertikal, FAQ accordion.  
**Alasan:** Urutan masalah → solusi → scope → proses → bukti/FAQ → CTA mengurangi ketidakpastian sebelum inquiry.

| Halaman | Hero & section khusus | CTA primer |
| --- | --- | --- |
| 3. Website Development | Hero; masalah kehadiran digital; jenis website; scope; process; FAQ. | Diskusikan Project Website Anda |
| 4. E-Commerce Detail | Hero; kebutuhan toko online; capability blocks untuk cart/payment/shipping **hanya sesuai kesiapan**; scope; FAQ. | Diskusikan Kebutuhan E-Commerce Anda |
| 5. Custom Software Detail | Hero; masalah operasional; Solution Details; Work Process; discovery FAQ. | Diskusikan Kebutuhan Sistem Anda |
| 6. ERP Solutions Detail | Hero; inventory/sales/purchasing/operations; process mapping; discovery FAQ. | Jadwalkan Discovery Session |
| 7. UI/UX Design Detail | Hero; user/problem context; wireframe/prototype flow; design deliverables; FAQ. | Diskusikan Kebutuhan UI/UX Anda |
| 8. Maintenance Detail | Hero; issue categories; support scope; informasi aman dibagikan; FAQ. | Diskusikan Kebutuhan Support Anda |

CTA sekunder seluruh Service Detail: **Lihat Semua Layanan**. Related work hanya muncul jika proyek valid dan berizin; jika tidak, tampilkan relevant insights atau FAQ.

## 9. Portfolio Overview (`/portfolio`)

**Desktop:** Intro; category/filter bar; grid project 3 kolom; empty state; method/approach fallback; CTA.  
**Tablet:** Filter dapat wrap dua baris; grid 2 kolom.  
**Mobile:** Filter menjadi horizontal scroll yang dapat diakses atau select; grid satu kolom; clear-filter selalu terlihat.  
**Alasan:** Filter diletakkan sebelum hasil untuk mempercepat evaluasi, namun empty state mengarahkan pengguna ke layanan dan tidak menjadi dead end.

## 10. Portfolio Detail / Case Study (`/portfolio/[slug]`)

**Desktop:** Breadcrumb; overview hero dua kolom (ringkasan/metadata yang diizinkan + visual); Challenge; Approach; Solution; Deliverables; Result/Impact hanya bila tervalidasi; related service; closing CTA.  
**Tablet:** Hero dan section naratif tetap dua kolom bila media mendukung; metadata berpindah di bawah judul jika sempit.  
**Mobile:** Semua satu kolom; visual full width dalam container; metadata ringkas.  
**Alasan:** Narasi kronologis membantu prospek menilai relevansi tanpa memperbesar hasil atau peran.

## 11. About Us (`/about`)

**Desktop:** Intro dua kolom; Vision & Mission; Brand Values lima item; Expertise yang tervalidasi; Our Process preview; Founder/Team bersyarat; CTA.  
**Tablet:** Value/Expertise 2 kolom; team card 2 kolom.  
**Mobile:** Narasi satu kolom; value card satu kolom atau list; proses vertikal.  
**Alasan:** Identitas dan nilai muncul sebelum profil agar kepercayaan tidak bergantung pada asumsi ukuran tim/kantor.

## 12. Our Process (`/process` atau anchor di `/about`)

**Keputusan IA:** jadikan anchor `#our-process` pada About pada fase awal; URL mandiri hanya dibuat bila kontennya cukup kaya.  
**Desktop:** Intro; timeline lima tahap Discovery → Planning → Development → Testing/Launch → Support sesuai kebijakan; per tahap memiliki tujuan/input/output yang disetujui; FAQ; CTA.  
**Tablet:** Timeline 2–3 kolom atau zig-zag sederhana.  
**Mobile:** Timeline vertikal bernomor.  
**Alasan:** Process dipisahkan secara visual untuk menjawab kekhawatiran scope/progres tanpa menciptakan halaman tidak perlu.

## 13. Insights Overview (`/insights`)

**Desktop:** Intro; category chips; featured article area bila artikel valid tersedia; article grid 3 kolom; CTA.  
**Tablet:** Featured area dua kolom; grid 2 kolom.  
**Mobile:** Chips horizontal scroll/select; featured dan cards satu kolom.  
**Alasan:** Kategori berada dekat awal untuk mendukung discovery; featured tidak ditampilkan jika belum ada artikel.

## 14. Blog Detail (`/insights/[slug]`)

**Desktop:** Breadcrumb; artikel container 8/12; judul/meta; hero image opsional; body dengan H2; inline related-service CTA; related articles 3 kolom; final CTA.  
**Tablet:** Article body 8 kolom; related card 2 kolom.  
**Mobile:** Body penuh dengan ukuran teks nyaman; related satu kolom; CTA tidak menginterupsi paragraf.  
**Alasan:** Prioritaskan pembacaan; promosi layanan hanya muncul setelah insight bermakna diberikan.

## 15. Contact (`/contact`)

**Desktop:** Intro; dua kolom—form 7/12 dan contact/WhatsApp/privacy helper 5/12; FAQ ringkas; footer.  
**Tablet:** Form dan helper dapat tetap dua kolom jika field nyaman, atau helper turun.  
**Mobile:** Form satu kolom; helper sebelum atau setelah form; tombol submit full width.  
**Alasan:** Form menjadi fokus utama; informasi alternatif dan privasi tersedia tanpa mengalihkan tindakan utama.

## 16. FAQ (`/faq`)

**Desktop:** Intro; topik/anchor navigation; accordion FAQ dalam container baca; closing CTA.  
**Tablet/Mobile:** Satu kolom; anchor dapat menjadi select atau horizontal scroll; accordion dengan target sentuh besar.  
**Alasan:** Pengelompokan topik menurunkan waktu pencarian jawaban dan menjaga halaman ringkas.

## 17. Privacy Policy (`/privacy-policy`)

**Desktop:** Breadcrumb; judul + last updated bila informasi resmi tersedia; table of contents kiri 3/12 dan isi 8/12; contact legal.  
**Tablet:** TOC menjadi bar di atas isi.  
**Mobile:** TOC collapsible; isi satu kolom.  
**Alasan:** Struktur legal panjang tetap mudah dipindai. Materi wajib ditinjau pihak berwenang sebelum tayang.

## 18. Terms & Conditions (`/terms-conditions`)

Gunakan struktur, header/footer, dan pola responsif yang sama dengan Privacy Policy: breadcrumb, judul, last updated bila tersedia, table of contents, isi legal, tautan Contact. Ini mengurangi beban kognitif pada halaman legal.

## 19. 404 Page (`/404`)

**Desktop/Tablet/Mobile:** Header sederhana; block konten terpusat dengan `404`, H1 informatif, penjelasan singkat, CTA primer **Kembali ke Home**, CTA sekunder **Lihat Layanan Kami**, lalu footer.  
**Alasan:** Membantu pemulihan cepat tanpa elemen dekoratif atau navigasi berlebihan. Halaman harus mengembalikan status HTTP 404 dan noindex saat implementasi.
