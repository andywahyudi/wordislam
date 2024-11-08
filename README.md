# WordIslam

![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)
![Astro](https://img.shields.io/badge/Astro-v1.0.x-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.x-blueviolet)
![License](https://img.shields.io/badge/License-MIT-blue)

## Daftar Isi
- [Tentang App](#tentang-app)
- [Kontribusi](#kontribusi)
- [Dukungan](#dukungan)
- [Lisensi](#lisensi)

## Tentang Web

WordIslam adalah proyek open source yang bertujuan mengumpulkan konten Islami dari berbagai sumber sehingga bisa memberikan kebermanfaatan terhadap umat.

### Kode Perintah/Commands

Setelah mendownload kode ini, Anda dapat melakukan instalasi dependencies-nya terlebih dahulu. Setelah selesai, Anda dapat menjalankannya di local server. Periksa file package.json apakah scripts dibawah ini sudah tersedia.

| Command           | Action                                                                                                         |
| :---------------- | :------------------------------------------------------------------------------------------------------------- |
| `nvm use ...`     | [Instal Node.js](https://nodejs.org/en/download/) Anda perlu menggunakan versi Node.js 20.3.0 atau lebih baru. |
| `npm install`     | Menginstal dependensi                                                                                          |
| `npm run dev`     | Menjalankan server pengembangan lokal di `localhost:4321`                                                      |
| `npm run build`   | Mem-build site ke `./dist/`                                                                                    |
| `npm run preview` | Mempreview build Anda di-lokal, sebelum melakukan deploy                                                       |

### Struktur Folder

Didalam kode sumber ini, nda akan menemukan folder dan files berikut:

```plaintext
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── blocks/
│   │   │   └── ...
│   │   └── ui/
│   │       └── ...
│   ├── config/
│   │   └── ...
│   ├── content/
│   │   └── blog/
│   │       └── ...
│   ├── data/
│   │   └── ...
│   ├── icons/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   ├── page-sections/
│   │   └── home/
│   │       └── ...
│   └── pages/
│       └── ...
└── package.json
```

| Direktori/File             | Deskripsi                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `public/`                  | Berisi aset statis seperti gambar dan favicon. Files ini disajikan langsung di URL root.                                        |
| `src/assets/`              | Berisi semua gambar dan aset yang digunakan dalam project.                                                                      |
| `src/components/`          | Berisi komponen yang dapat digunakan kembali untuk web. Direktori ini dibagi menjadi `ui` untuk komponen UI dan `blocks` untuk blok bagian. |
| `src/components/blocks/`   | Berisi blok bagian yang digunakan di seluruh web.                                                                               |
| `src/components/ui/`       | Berisi komponen UI individual.                                                                                                  |
| `src/config/`              | Berisi file konfigurasi untuk project dalam format TypeScript.                                                                  |
| `src/content/`             | Menyimpan data, seperti posting blog.                                                                                           |
| `src/content/blog/`        | Berisi posting blog individual dalam format markdown.                                                                           |
| `src/data/`                | Berisi berkas JSON dan md dengan data konten (seperti fitur, testimonial, dll).                                                 |
| `src/icons/`               | Berisi semua ikon yang digunakan dalam proyek, bersumber dari [Heroicons](https://heroicons.com/).                              |
| `src/layouts/`             | Berisi komponen layout yang mendefinisikan struktur keseluruhan halaman.                                                        |
| `src/pages/`               | Berisi file `.astro` untuk setiap halaman. Setiap file di sini diekspos sebagai rute berdasarkan nama file-nya.                 |
| `package.json`             | Mencantumkan dependensi dan skrip untuk project, termasuk metadata dan berbagai persyaratan package.                            |

## Konfigurasi Theme

Anda dapat menemukan file konfigurasi di direktori `src/config`. File konfigurasi ditulis dalam TypeScript dan berisi berbagai pengaturan untuk theme, seperti informasi dasar, bilah navigasi, navigasi footer, analitik, dan tautan sosial. Anda dapat menyesuaikan pengaturan ini agar sesuai dengan kebutuhan spesifik Anda.

| File Konfigurasi                  | Deskripsi                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `src/config/config.ts`            | Termasuk pengaturan konfigurasi dasar termasuk SEO, mode, dan animasi gulir.                         |
| `src/config/navigationBar.ts`     | Termasuk opsi menu untuk bilah navigasi.                                                             |
| `src/config/footerNavigation.ts`  | Termasuk opsi menu untuk navigasi footer.                                                            |
| `src/config/analytics.ts`         | Termasuk kode yang diperlukan untuk Google Analytics, Google Tag Manager, dan Google Search Console. |
| `src/config/socialLinks.ts`       | Berisi data tautan sosial untuk situs web.                                                  |

### Pengaturan Konfigurasi Dasar

Dalam berkas `src/config/config.ts`, Anda dapat menemukan pengaturan konfigurasi dasar. Ini termasuk pengaturan SEO default:

- `siteTitle`: Judul default halaman web.
- `siteDescription`: Deskripsi default halaman web.
- `ogImage`: Gambar open graph untuk halaman web.
- `logo`: Logo untuk situs web.
- `canonical`: Opsi untuk menggunakan canonical link untuk halaman web.
- `noindex`: Mencegah mesin pencari mengindeks halaman web jika diatur ke true.

Default pengaturan situs:

- `mode`: Mode default untuk situs web. Dapat diatur ke 'auto', 'light', atau 'dark'. Mode auto akan secara otomatis beralih antara mode terang dan gelap berdasarkan pengaturan sistem pengguna, sementara 'light'...

## Kontribusi

Jika Anda bersedia dan berkeinginan untuk berkontribusi dalam proyek ini, dengan senang hati kami menerima bantuan berupa dukungan teknis & konten melalui:

A. Kontribusi teknis melalui [Github](https://github.com/andywahyudi/wordislam)
1. Fork repositori ini.
2. Buat branch baru.
3. Melakukan perubahan pada kode dan konten.
4. Submit pull request.


## Dukungan

Jika Anda menyukai proyek ini dan ingin mendukung keberlangsungan website ini, dengan senang hati kami menerima bantuan berupa dukungan finansial melalui: 

1. Melalui [Buy Me Coffee](https://www.buymeacoffee.com/andywahyudi).
2. Melalui [Paypal](https://paypal.me/andywahyudi).
3. Melalui QRIS [Saweria](https://saweria.co/andyweb).


## Lisensi

Ini adalah proyek open-source dan tersedia dengan lisensi [MIT License](LICENSE).