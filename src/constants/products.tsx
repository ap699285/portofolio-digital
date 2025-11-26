import regarmarket from "public/images/project/regarmarket.png";
import regarmarket2 from "public/images/project/regarmarket2.png";
import tisb from "public/images/project/tisb.png";
import tisb2 from "public/images/project/tisb2.png";
import regarcareer from "public/images/project/regarcareer.png";
import regarcareer2 from "public/images/project/regarcareer.png";
import pointix from "public/images/project/pointix.png";
import pointix2 from "public/images/project/pointix2.png";
import customdesainnet from "public/images/project/customdesainnet.png";
import customdesainnet2 from "public/images/project/customdesainnet2.png";
import regarmarketapi from "public/images/project/regarmarketapi.png";
import regarmarketapi2 from "public/images/project/regarmarketapi2.png";
import legal from "public/images/project/legal.png";
import legal2 from "public/images/project/legal2.png";
import smansawur from "public/images/project/smansawur.png";
import smansawur2 from "public/images/project/smansawur2.png";
import brominemedia from "public/images/project/brominemedia.png";
import brominemedia2 from "public/images/project/brominemedia2.png";
import { features } from "process";

export const products = [
  {
    href: "https://regarmarket.id",
    title: "Regarmarket",
    restricted: false,
    description:
      "Platform e-commerce yang menjual produk custom dari Regarsport",
    thumbnail: regarmarket,
    images: [regarmarket, regarmarket2],
    stack: ["Nextjs", "Tailwindcss"],
    responsibility: ["Backend Developer"],
    slug: "regarmarket",
    features: [
      "Katalog Produk Custom",
      "Desain Produk Interaktif",
      "Proses Pemesanan Mudah",
      "Integrasi Pembayaran Aman",
      "3D Preview Produk",
    ],
    content: (
      <div>
        <p>
          Regarmarket menyediakan berbagai produk custom seperti jersey,
          jaket, celana, dan aksesoris lainnya yang dapat disesuaikan dengan
          kebutuhan pelanggan. Dengan antarmuka yang user-friendly dan fitur
          kustomisasi yang lengkap, Regarmarket memudahkan pelanggan untuk
          mendesain produk sesuai keinginan mereka.
        </p>
      </div>
    ),
  },
  {
    href: "https://tisb.id",
    title: "TISB",
    restricted: false,
    description:
      "Platform analisis untuk pelanggan, yang di gunakan untuk mengelola bisnis mereka dengan lebih efisien.",
    thumbnail: tisb,
    images: [tisb, tisb2],
    stack: ["Laravel", "Tailwindcss"],
    responsibility: ["Fullstack Developer"],
    slug: "tisb",
    features: [
      "Dashboard Analisis Data",
      "Laporan Kinerja Bisnis",
      "Pemantauan Real-time",
      "Rekomendasi Strategi Bisnis",
    ],
    content: (
      <div>
        <p>
          Platform ini berisi berbagai fitur analisis data yang membantu pelanggan
          dalam mengambil keputusan bisnis yang lebih baik. Dengan antarmuka yang
          intuitif dan laporan yang komprehensif, TISB memungkinkan pelanggan
          untuk memantau kinerja bisnis mereka secara real-time dan mengidentifikasi
          peluang pertumbuhan.
        </p>
      </div>
    ),
  },
  {
    href: "https://regarcareer.com",
    title: "RegarCareer",
    restricted: false,
    description:
      "Platform job portal yang menghubungkan pencari kerja dengan perusahaan.",
    thumbnail: regarcareer,
    images: [regarcareer, regarcareer2],
    stack: ["Laravel", "Bootstrap"],
    responsibility: ["Fullstack Developer"],
    slug: "regarcareer",
    features: [
      "Pencarian Lowongan Kerja",
      "Filter Berdasarkan Kategori",
      "Sistem ERP Lowongan Kerja",
      "Notifikasi Email",
    ],
    content: (
      <div>
        <p>
          Regarcareer menyediakan berbagai fitur untuk memudahkan pencari kerja dalam
          menemukan lowongan yang sesuai dengan keahlian dan minat mereka. Dengan
          antarmuka yang user-friendly dan sistem pencarian yang canggih, Regarcareer
          membantu pencari kerja untuk menjelajahi berbagai peluang karir dan
          menghubungkan mereka dengan perusahaan yang sedang mencari talenta baru.
        </p>
      </div>
    ),
  },
  {
    href: "https://customdesain.net",
    title: "CustomDesain",
    restricted: true,
    description:
      "Platform web untuk pengerjaan desain grafis sesuai permintaan pelanggan.",
    thumbnail: customdesainnet,
    images: [customdesainnet, customdesainnet2],
    stack: ["Laravel", "Bootstrap"],
    responsibility: ["Fullstack Developer"],
    slug: "customdesain",
    features: [
      "Layanan Desain Grafis",
      "Komunikasi dengan Desainer",
      "Revisi Desain",
      "Sistem ERP Desain",
    ],
    content: (
      <div>
        <p>
          CustomDesain adalah platform web yang memungkinkan pelanggan untuk memesan
          desain grafis sesuai dengan kebutuhan mereka. Dengan berbagai pilihan layanan
          desain seperti logo, brosur, poster, dan materi pemasaran lainnya, CustomDesain
          menyediakan solusi desain yang profesional dan kreatif. Pelanggan dapat
          berkomunikasi langsung dengan desainer untuk memastikan hasil akhir sesuai
          dengan harapan mereka.
        </p>
      </div>
    ),
  },
  {
    href: "https://api.regarmarket.id/",
    title: "Sandbox Regarmarket API",
    restricted: true,
    description:
      "Platform API sandbox untuk integrasi dengan Regarmarket.",
    thumbnail: regarmarketapi,
    images: [regarmarketapi, regarmarketapi2],
    stack: ["NodeJs", "ExpressJs"],
    responsibility: ["Database Design", "Backend Developer"],
    slug: "sandbox-regarmarket-api",
    features: [
      "Lingkungan Pengujian Terisolasi",
      "Dokumentasi API Lengkap",
      "Simulasi Endpoint API",
      "Pengujian Fungsionalitas Integrasi",
    ],
    content: (
      <div>
        <p>
          Adalah platform API sandbox yang dirancang untuk memudahkan pengembang dalam
          mengintegrasikan aplikasi mereka dengan Regarmarket. Dengan menyediakan
          lingkungan pengujian yang aman dan terisolasi, pengembang dapat mencoba
          berbagai endpoint API, menguji fungsionalitas, dan memastikan integrasi
          berjalan lancar sebelum diterapkan pada sistem produksi.
        </p>
      </div>
    ),
  },
  {
    href: "https://brominemedia.com/",
    title: "Bromine Media",
    restricted: false,
    description:
      "Platform berita terkini seputar teknologi dan bisnis digital.",
    thumbnail: brominemedia,
    images: [brominemedia, brominemedia2],
    stack: ["Laravel", "Bootstrap"],
    responsibility: ["Fullstack Developer"],
    slug: "bromine-media",
    features: [
      "Berita Teknologi Terkini",
      "Ulasan Produk Digital",
      "Wawancara Eksklusif",
      "Kategori Berita Beragam",
    ],
    content: (
      <div>
        <p>
          Adalah platform portal berita yang menyajikan informasi terkini seputar
          dunia teknologi dan bisnis digital. Dengan berbagai artikel, ulasan,
          dan wawancara eksklusif, Bromine Media bertujuan untuk menjadi sumber
          terpercaya bagi para profesional dan penggemar teknologi dalam mengikuti
          perkembangan terbaru di industri ini.
        </p>
      </div>
    ),
  },
  {
    href: "https://legal.rsii.id/",
    title: "Legal",
    restricted: true,
    description:
      "Platform manajemen dokumen legal perusahaan",
    thumbnail: legal,
    images: [legal, legal2],
    stack: ["NodeJs", "ExpressJs", "VueJs"],
    responsibility: ["Database Design", "Backend Developer", "Frontend Developer"],
    slug: "legal-rsii",
    features: [
      "Penyimpanan Dokumen Terpusat",
      "Pelacakan Revisi Dokumen",
      "Akses Berbasis Peran",
      "Notifikasi dan Pengingat",
    ],
    content: (
      <div>
        <p>
          Adalah platform manajemen dokumen legal yang dirancang untuk membantu perusahaan
          dalam mengelola berbagai dokumen hukum mereka secara efisien. Dengan fitur-fitur
          seperti penyimpanan terpusat, pelacakan revisi, dan akses berbasis peran,
          platform ini memastikan bahwa semua dokumen legal perusahaan terorganisir dengan baik
          dan mudah diakses oleh pihak yang berwenang.
        </p>
      </div>
    ),
  },
  {
    href: "https://pointix.web.id",
    title: "Pointix",
    restricted: false,
    description:
      "Platform web yang digunakan untuk distributor barang dalam mengelola inventaris, pesanan, dan pelanggan mereka secara efisien.",
    thumbnail: pointix,
    images: [pointix, pointix2],
    stack: ["Laravel", "Tailwindcss"],
    responsibility: ["Fullstack Developer"],
    slug: "pointix",
    features: [
      "Manajemen Inventaris",
      "Pelacakan Pesanan",
      "Manajemen Pelanggan",
      "Laporan Penjualan",
    ],
    content: (
      <div>
        <p>
          Pointix adalah aplikasi web yang dirancang khusus untuk distributor barang agar dapat
          mengelola inventaris, pesanan, dan pelanggan mereka dengan lebih efisien.
          Dengan fitur-fitur seperti pelacakan stok real-time, manajemen pesanan,
          dan analisis penjualan, Pointix membantu distributor dalam mengoptimalkan
          operasional bisnis mereka dan meningkatkan kepuasan pelanggan.
        </p>
      </div>
    ),
  },
  {
    href: "https://smansawur/",
    title: "Smansawur",
    restricted: false,
    description:
      "Platform website resmi untuk SMAN 1 Wuryantoro",
    thumbnail: smansawur,
    images: [smansawur, smansawur2],
    stack: ["Laravel", "Tailwindcss"],
    responsibility: ["Fullstack Developer"],
    slug: "smansawur",
    features: [
      "Informasi Profil Sekolah",
      "Program Akademik",
      "Kegiatan Ekstrakurikuler",
      "Berita Terbaru",
    ],
    content: (
      <div>
        <p>
          Adalah platform website resmi yang dirancang untuk SMAN 1 Wuryantoro. Website ini
          menyediakan informasi lengkap tentang sekolah, termasuk profil sekolah,
          program akademik, kegiatan ekstrakurikuler, dan berita terbaru. Dengan
          antarmuka yang menarik dan mudah dinavigasi, website ini bertujuan untuk
          meningkatkan komunikasi antara sekolah, siswa, orang tua, dan masyarakat luas.
        </p>
      </div>
    ),
  },
];
