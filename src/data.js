import HeroImage from "/assets/my2.svg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/visualstudio.png";
import Tools3 from "/assets/tools/laravel.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/php.png";
import Tools7 from "/assets/tools/csharp.png";
import Tools8 from "/assets/tools/html.png";
import Tools9 from "/assets/tools/css.png";
import Tools10 from "/assets/tools/js.png";
import Tools11 from "/assets/tools/dotnetmvc.png";
import Tools12 from "/assets/tools/dotnetcore.png";
import Tools13 from "/assets/tools/github.png";
import Tools14 from "/assets/tools/gitlab.png";
import Tools15 from "/assets/tools/bitbucket.png";
import Tools16 from "/assets/tools/mysql.png";
import Tools17 from "/assets/tools/sqlserver.png";
import Tools18 from "/assets/tools/crystalreport.png";
import Tools19 from "/assets/tools/canva.png";
import Tools20 from "/assets/tools/figma.png";
import Tools21 from "/assets/tools/linux.webp";
import Tools22 from "/assets/tools/apache.webp";
import Tools23 from "/assets/tools/cloudflare.webp";
import Tools24 from "/assets/tools/search_console.webp";
import Tools25 from "/assets/tools/postman.webp";
import Tools26 from "/assets/tools/vercel.webp";
import Tools27 from "/assets/tools/github_pages.webp";

export const listTools = [
  // --- EDITOR & VERSION CONTROL ---
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    kategori: "Editor & Version Control",
    ket: { id: "Code Editor", en: "Code Editor", ja: "コードエディタ" },
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Visual Studio",
    kategori: "Editor & Version Control",
    ket: { id: "Code Editor", en: "Code Editor", ja: "コードエディタ" },
    dad: "200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Github",
    kategori: "Editor & Version Control",
    ket: { id: "Repository", en: "Repository", ja: "リポジトリ" },
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Gitlab",
    kategori: "Editor & Version Control",
    ket: { id: "Repository", en: "Repository", ja: "リポジトリ" },
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Bitbucket",
    kategori: "Editor & Version Control",
    ket: { id: "Repository", en: "Repository", ja: "リポジトリ" },
    dad: "1500",
  },

  // --- BAHASA PEMROGRAMAN ---
  {
    id: 6,
    gambar: Tools6,
    nama: "PHP",
    kategori: "Bahasa Pemrograman",
    ket: { id: "Language", en: "Language", ja: "プログラミング言語" },
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "C#",
    kategori: "Bahasa Pemrograman",
    ket: { id: "Language", en: "Language", ja: "プログラミング言語" },
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "HTML",
    kategori: "Bahasa Pemrograman",
    ket: { id: "Language", en: "Language", ja: "プログラミング言語" },
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "CSS",
    kategori: "Bahasa Pemrograman",
    ket: { id: "Language", en: "Language", ja: "プログラミング言語" },
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Javascript",
    kategori: "Bahasa Pemrograman",
    ket: { id: "Language", en: "Language", ja: "プログラミング言語" },
    dad: "1000",
  },

  // --- FRAMEWORK ---
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    kategori: "Framework",
    ket: { id: "Framework", en: "Framework", ja: "フレームワーク" },
    dad: "300",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "ASP.NET MVC",
    kategori: "Framework",
    ket: { id: "Framework", en: "Framework", ja: "フレームワーク" },
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "ASP.NET CORE",
    kategori: "Framework",
    ket: { id: "Framework", en: "Framework", ja: "フレームワーク" },
    dad: "1200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    kategori: "Framework",
    ket: { id: "Framework", en: "Framework", ja: "フレームワーク" },
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    kategori: "Framework",
    ket: { id: "Framework", en: "Framework", ja: "フレームワーク" },
    dad: "500",
  },

  // --- DATABASE & REPORTING ---
  {
    id: 16,
    gambar: Tools16,
    nama: "MySQL",
    kategori: "Database & Reporting",
    ket: { id: "Database", en: "Database", ja: "データベース" },
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "SQl Server",
    kategori: "Database & Reporting",
    ket: { id: "Database", en: "Database", ja: "データベース" },
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "SAP Crystal Report",
    kategori: "Database & Reporting",
    ket: { id: "Reporting", en: "Reporting", ja: "レポーティング" },
    dad: "1800",
  },

  // --- SERVER & DEPLOYMENT ---
  {
    id: 21,
    gambar: Tools21,
    nama: "Linux",
    kategori: "Server & Deployment",
    ket: { id: "Server OS", en: "Server OS", ja: "サーバーOS" },
    dad: "2100",
  },
  {
    id: 22,
    gambar: Tools22,
    nama: "Apache 2",
    kategori: "Server & Deployment",
    ket: { id: "Web Server", en: "Web Server", ja: "ウェブサーバー" },
    dad: "2200",
  },
  {
    id: 26,
    gambar: Tools26,
    nama: "Vercel",
    kategori: "Server & Deployment",
    ket: {
      id: "Cloud Hosting",
      en: "Cloud Hosting",
      ja: "クラウドホスティング",
    },
    dad: "2600",
  },
  {
    id: 27,
    gambar: Tools27,
    nama: "GitHub Pages",
    kategori: "Server & Deployment",
    ket: {
      id: "Cloud Hosting",
      en: "Cloud Hosting",
      ja: "クラウドホスティング",
    },
    dad: "2700",
  },
  {
    id: 23,
    gambar: Tools23,
    nama: "Cloudflare",
    kategori: "Server & Deployment",
    ket: {
      id: "DNS & Security",
      en: "DNS & Security",
      ja: "DNSとセキュリティ",
    },
    dad: "2300",
  },

  // --- DESIGN & UTILITIES ---
  {
    id: 19,
    gambar: Tools19,
    nama: "Canva",
    kategori: "Design & Utilities",
    ket: { id: "Design App", en: "Design App", ja: "デザインアプリ" },
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Figma",
    kategori: "Design & Utilities",
    ket: { id: "Design App", en: "Design App", ja: "デザインアプリ" },
    dad: "2000",
  },
  {
    id: 24,
    gambar: Tools24,
    nama: "Search Console",
    kategori: "Design & Utilities",
    ket: { id: "SEO Tools", en: "SEO Tools", ja: "SEOツール" },
    dad: "2400",
  },
  {
    id: 25,
    gambar: Tools25,
    nama: "Postman",
    kategori: "Design & Utilities",
    ket: { id: "API Testing", en: "API Testing", ja: "APIテスト" },
    dad: "2500",
  },
];

import Proyek1 from "/assets/proyek/webfik.webp";
import Proyek2 from "/assets/proyek/webfb.webp";
import Proyek3 from "/assets/proyek/cms.webp";
import Proyek4 from "/assets/proyek/portofoliov1.webp";
import Proyek5 from "/assets/proyek/webmir.webp";
import Proyek6 from "/assets/proyek/webusb.webp";
import Proyek7 from "/assets/proyek/webpmb.webp";
import Proyek8 from "/assets/proyek/sentra-hki.webp";
import Proyek9 from "/assets/proyek/sipegi.webp";

export const listProyek = [
  {
    id: 1,
    gambar: [Proyek5],
    nama: {
      id: "Website MIR Pakan Ternak & Petshop",
      en: "MIR Livestock Feed & Petshop Website",
      ja: "MIR 飼料・ペットショップ ウェブサイト",
    },
    desk: {
      id: "Website MIR Pakan Ternak dibuat sebagai sarana informasi dan katalog digital bagi pelanggan untuk menemukan berbagai jenis pakan ternak, perlengkapan hewan, serta layanan toko seperti pesan antar dan ambil di tempat. Tampilan website dirancang sederhana, cepat diakses, dan mudah dipahami, sehingga memudahkan pengunjung dalam mencari produk dan mengetahui jam operasional maupun opsi layanan yang tersedia.",
      en: "The MIR Livestock Feed website is created as an information medium and digital catalog for customers to find various types of livestock feed, pet supplies, and store services such as delivery and pickup. The website's interface is designed to be simple, fast to access, and easy to understand, making it easier for visitors to find products and know the operating hours and available service options.",
      ja: "MIR 飼料ウェブサイトは、顧客が様々な種類の飼料、ペット用品、配達や店舗受け取りなどのサービスを見つけるための情報媒体およびデジタルカタログとして作成されました。ウェブサイトのインターフェースはシンプルで、アクセスが速く、分かりやすく設計されており、訪問者が製品を見つけ、営業時間や利用可能なサービスオプションを簡単に知ることができます。",
    },
    tools: ["React", "Tailwind CSS", "Vite", "JavaScript", "Vercel", "Git"],
    kategori: "E-Commerce & Publik",
    dad: "200",
    link: "https://mirshop.vercel.app/",
    seq: 6,
  },
  {
    id: 2,
    gambar: [Proyek1],
    nama: {
      id: "Website Fakultas Ilmu Kesehatan Universitas Setia Budi",
      en: "Faculty of Health Sciences Website, Setia Budi University",
      ja: "セティア・ブディ大学 健康科学部ウェブサイト",
    },
    desk: {
      id: "Website Fakultas Ilmu Kesehatan Universitas Setia Budi adalah portal resmi yang menampilkan profil fakultas, program studi, kegiatan akademik, layanan mahasiswa, penelitian, serta informasi fasilitas. Website ini dirancang responsif, modern, dan informatif, dengan navigasi yang jelas untuk memudahkan mahasiswa, dosen, dan masyarakat dalam mengakses informasi terkait FIK USB.",
      en: "The Faculty of Health Sciences Website at Setia Budi University is the official portal displaying faculty profiles, study programs, academic activities, student services, research, and facility information. This website is designed to be responsive, modern, and informative, with clear navigation to make it easier for students, lecturers, and the public to access information related to FIK USB.",
      ja: "セティア・ブディ大学の健康科学部ウェブサイトは、学部プロフィール、学習プログラム、学術活動、学生サービス、研究、施設情報を表示する公式ポータルです。このウェブサイトはレスポンシブでモダン、かつ情報が豊富に設計されており、学生、講師、一般の人々が関連情報に簡単にアクセスできるよう、明確なナビゲーションを備えています。",
    },
    tools: ["Laravel", "Bootstrap", "Mysql", "PHP"],
    kategori: "Portal Akademik",
    dad: "300",
    link: "https://fik.setiabudi.ac.id",
    seq: 3,
  },
  {
    id: 3,
    gambar: [Proyek2],
    nama: {
      id: "Website Fakultas Bisnis Universitas Setia Budi",
      en: "Faculty of Business Website, Setia Budi University",
      ja: "セティア・ブディ大学 ビジネス学部ウェブサイト",
    },
    desk: {
      id: "Website Fakultas Bisnis Universitas Setia Budi adalah portal resmi yang menyajikan informasi profil fakultas, program studi, akademik, mahasiswa & alumni, penelitian, serta kerja sama. Website ini menampilkan desain profesional, navigasi yang jelas, dan konten terstruktur untuk mendukung kebutuhan mahasiswa, dosen, dan stakeholder dalam mengakses informasi tentang Fakultas Bisnis USB.",
      en: "The Faculty of Business Website at Setia Budi University is the official portal presenting information on faculty profiles, study programs, academics, students & alumni, research, and cooperation. This website features a professional design, clear navigation, and structured content to support the needs of students, lecturers, and stakeholders in accessing information about the USB Faculty of Business.",
      ja: "セティア・ブディ大学のビジネス学部ウェブサイトは、学部プロフィール、学習プログラム、学術、学生・卒業生、研究、協力に関する情報を提示する公式ポータルです。このウェブサイトは、学生、講師、利害関係者が情報にアクセスするニーズをサポートするため、プロフェッショナルなデザイン、明確なナビゲーション、構造化されたコンテンツを備えています。",
    },
    tools: ["Laravel", "Bootstrap", "Mysql", "PHP"],
    kategori: "Portal Akademik",
    dad: "400",
    link: "https://fakultasbisnis.setiabudi.ac.id/",
    seq: 5,
  },
  {
    id: 4,
    gambar: [Proyek3],
    nama: {
      id: "Website CMS Universitas Setia Budi",
      en: "CMS Website, Setia Budi University",
      ja: "セティア・ブディ大学 CMSウェブサイト",
    },
    desk: {
      id: "Website CMS Universitas Setia Budi adalah platform manajemen konten yang dirancang untuk memudahkan pengelolaan informasi akademik dan administratif di lingkungan universitas. Website ini menyediakan fitur-fitur seperti pengelolaan berita, artikel, dokumen, serta integrasi dengan sistem akademik lainnya. Dengan antarmuka yang user-friendly, website ini memungkinkan staf dan dosen untuk memperbarui konten secara efisien dan efektif.",
      en: "The Setia Budi University CMS Website is a content management platform designed to facilitate the management of academic and administrative information within the university environment. This website provides features such as news, article, document management, and integration with other academic systems. With a user-friendly interface, this website allows staff and lecturers to update content efficiently and effectively.",
      ja: "セティア・ブディ大学 CMS ウェブサイトは、大学環境内の学術および管理情報の管理を容易にするように設計されたコンテンツ管理プラットフォームです。このウェブサイトは、ニュース、記事、文書管理、他の学術システムとの統合などの機能を提供します。使いやすいインターフェースにより、スタッフや講師は効率的かつ効果的にコンテンツを更新できます。",
    },
    tools: ["Laravel", "Bootstrap", "Mysql", "PHP"],
    kategori: "Sistem Informasi & CMS",
    dad: "500",
    link: "https://cms.setiabudi.ac.id/",
    seq: 4,
  },
  {
    id: 5,
    gambar: [Proyek4],
    nama: {
      id: "Portofolio Versi 1 ",
      en: "Portfolio Version 1",
      ja: "ポートフォリオ バージョン 1",
    },
    desk: {
      id: "Ini adalah versi pertama dari portofolio saya yang dibuat menggunakan HTML, CSS, dan Bootstrap sebagai framework. Portofolio ini saya buat saat awal belajar web development ",
      en: "This is the first version of my portfolio built using HTML, CSS, and Bootstrap as a framework. I created this portfolio when I first started learning web development.",
      ja: "これは、フレームワークとしてHTML、CSS、Bootstrapを使用して構築された私のポートフォリオの最初のバージョンです。Web開発を学び始めた当初に作成しました。",
    },
    tools: ["Html", "CSS", "Bootstrap", "GitHub Pages", "Git"],
    kategori: "E-Commerce & Publik",
    dad: "600",
    link: "https://diazill.github.io/",
    seq: 8,
  },
  {
    id: 6,
    gambar: [Proyek7],
    nama: {
      id: "Website Penerimaan Mahasiswa Baru (PMB) Universitas Setia Budi",
      en: "New Student Admission (PMB) Website, Setia Budi University",
      ja: "セティア・ブディ大学 新入生入学(PMB) ウェブサイト",
    },
    desk: {
      id: "Portal pendaftaran online terintegrasi untuk calon mahasiswa baru. Website ini menyediakan informasi komprehensif mengenai jalur masuk (CBT, Kerjasama, Prestasi), program studi, serta pengumuman kelulusan. Dirancang dengan antarmuka yang intuitif untuk menyederhanakan alur pendaftaran mahasiswa.",
      en: "Integrated online registration portal for prospective new students. This website provides comprehensive information regarding admission paths (CBT, Cooperation, Achievement), study programs, and graduation announcements. Designed with an intuitive interface to simplify the student registration flow.",
      ja: "入学希望者向けの統合型オンライン登録ポータル。このウェブサイトは、入学経路（CBT、協力、成績）、学習プログラム、および合格発表に関する包括的な情報を提供します。学生の登録フローを簡素化するための直感的なインターフェースを備えた設計です。",
    },
    tools: ["Laravel", "Bootstrap", "MySQL", "PHP"],
    kategori: "Sistem Informasi & CMS",
    dad: "700",
    link: "https://pmb.setiabudi.ac.id/",
    seq: 2,
  },
  {
    id: 7,
    gambar: [Proyek6],
    nama: {
      id: "Website Universitas Setia Budi",
      en: "Setia Budi University Website",
      ja: "セティア・ブディ大学 ウェブサイト",
    },
    desk: {
      id: "Website utama dan portal informasi resmi Universitas Setia Budi. Berfungsi sebagai pusat publikasi digital yang menampilkan berita terkini, agenda kampus, layanan akademik, dan testimoni alumni. Dibangun dengan desain responsif untuk memastikan aksesibilitas optimal di berbagai perangkat.",
      en: "The main website and official information portal of Setia Budi University. Functions as a digital publication center displaying the latest news, campus agenda, academic services, and alumni testimonials. Built with a responsive design to ensure optimal accessibility across various devices.",
      ja: "セティア・ブディ大学のメインウェブサイトおよび公式情報ポータル。最新のニュース、キャンパスの議題、学術サービス、および卒業生の体験談を表示するデジタル出版センターとして機能します。さまざまなデバイスで最適なアクセシビリティを確保するためのレスポンシブデザインで構築されています。",
    },
    tools: ["Laravel", "Bootstrap", "MySQL", "PHP"],
    kategori: "Portal Akademik",
    dad: "800",
    link: "https://v2.setiabudi.ac.id/",
    seq: 1,
  },
  {
    id: 8,
    gambar: [Proyek8],
    nama: {
      id: "Website Sentra Kekayaan Intelektual (Sentra KI) Universitas Setia Budi",
      en: "Intellectual Property Center (Sentra KI) Website, Setia Budi University",
      ja: "セティア・ブディ大学 知的財産センター(Sentra KI) ウェブサイト",
    },
    desk: {
      id: "Platform layanan dan informasi resmi untuk Sentra KI Universitas Setia Budi. Menampilkan statistik kekayaan intelektual, prosedur pendaftaran sertifikat, serta publikasi berita. Desain difokuskan pada kejelasan tipografi dan kemudahan navigasi bagi dosen maupun peneliti.",
      en: "Official service and information platform for the Intellectual Property Center of Setia Budi University. Displays intellectual property statistics, certificate registration procedures, and news publications. The design is focused on clear typography and easy navigation for both lecturers and researchers.",
      ja: "セティア・ブディ大学知的財産センターの公式サービスおよび情報プラットフォーム。知的財産統計、証明書登録手続き、ニュースの公開を表示します。デザインは、講師と研究者の両方にとって明確なタイポグラフィと簡単なナビゲーションに焦点を当てています。",
    },
    tools: ["Laravel", "Bootstrap", "MySQL", "PHP"],
    kategori: "Portal Akademik",
    dad: "900",
    link: "https://sentraki.setiabudi.ac.id/",
    seq: 7,
  },
  {
    id: 9,
    gambar: [Proyek9],
    nama: {
      id: "Aplikasi SIPEGI (Sistem Informasi Kepegawaian)",
      en: "SIPEGI (Staff Information System)",
      ja: "SIPEGI (人事情報システム)",
    },
    desk: {
      id: "Aplikasi SIPEGI (Sistem Informasi Kepegawaian) Universitas Setiabudi merupakan suatu aplikasi berbasis web yang digunakan untuk menunjang proses administrasi kepegawaian di Universitas Setia Budi. SIMPEG bertujuan untuk mempermudah para pegawai untuk memonitoring data kepegawaian serta untuk memberikan informasi terkait informasi terbaru tentang kepegawaian.",
      en: "The SIPEGI (Staff Information System) application at Setia Budi University is a web-based application used to support the personnel administration process. It aims to make it easier for employees to monitor personnel data and provide the latest information regarding staffing.",
      ja: "セティア・ブディ大学のSIPEGI（人事情報システム）アプリケーションは、人事管理プロセスをサポートするために使用されるWebベースのアプリケーションです。従業員が人事データを監視しやすくし、人員配置に関する最新情報を提供することを目的としています。",
    },
    tools: ["Laravel", "Bootstrap", "MySQL", "PHP", "Git"],
    kategori: "Sistem Informasi & CMS",
    dad: "1000",
    link: "https://sipegiv2.setiabudi.ac.id/",
    seq: 9,
  },
];
