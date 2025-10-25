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

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Visual Studio",
    ket: "Code Editor",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "PHP",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "C#",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "HTML",
    ket: "Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "CSS",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Javascript",
    ket: "Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "ASP.NET MVC",
    ket: "Framework",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "ASP.NET CORE",
    ket: "Framework",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Github",
    ket: "Repository",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Gitlab",
    ket: "Repository",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Bitbucket",
    ket: "Repository",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "MySQL",
    ket: "Database",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "SQl Server",
    ket: "Database",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "SAP Crystal Report",
    ket: "Reporting",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "Canva",
    ket: "Design App",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Figma",
    ket: "Design App",
    dad: "2000",
  },
];

import Proyek1 from "/assets/proyek/webfik.png";
import Proyek2 from "/assets/proyek/webfb.png";
import Proyek3 from "/assets/proyek/cms.png";
import Proyek4 from "/assets/proyek/portofoliov1.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Fakultas Ilmu Kesehatan Universitas Setia Budi",
    desk: "Website Fakultas Ilmu Kesehatan Universitas Setia Budi adalah portal resmi yang menampilkan profil fakultas, program studi, kegiatan akademik, layanan mahasiswa, penelitian, serta informasi fasilitas. Website ini dirancang responsif, modern, dan informatif, dengan navigasi yang jelas untuk memudahkan mahasiswa, dosen, dan masyarakat dalam mengakses informasi terkait FIK USB.",
    tools: ["Laravel", "Bootstrap", "Mysql", "PHP"],
    dad: "200",
    link: "https://fik.setiabudi.ac.id",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Fakultas Bisnis Universitas Setia Budi",
    desk: "Website Fakultas Bisnis Universitas Setia Budi adalah portal resmi yang menyajikan informasi profil fakultas, program studi, akademik, mahasiswa & alumni, penelitian, serta kerja sama. Website ini menampilkan desain profesional, navigasi yang jelas, dan konten terstruktur untuk mendukung kebutuhan mahasiswa, dosen, dan stakeholder dalam mengakses informasi tentang Fakultas Bisnis USB.",
    tools: ["Laravel", "Bootstrap", "Mysql", "PHP"],
    dad: "300",
    link: "https://fakultasbisnis.setiabudi.ac.id/",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website CMS Universitas Setia Budi",
    desk: "Website CMS Universitas Setia Budi adalah platform manajemen konten yang dirancang untuk memudahkan pengelolaan informasi akademik dan administratif di lingkungan universitas. Website ini menyediakan fitur-fitur seperti pengelolaan berita, artikel, dokumen, serta integrasi dengan sistem akademik lainnya. Dengan antarmuka yang user-friendly, website ini memungkinkan staf dan dosen untuk memperbarui konten secara efisien dan efektif.",
    tools: ["Laravel", "Bootstrap", "Mysql", "PHP"],
    dad: "400",
    link: "https://cms.setiabudi.ac.id/",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Portofolio Versi 1 ",
    desk: "Ini adalah versi pertama dari portofolio saya yang dibuat menggunakan HTML, CSS, dan Bootstrap sebagai framework. Portofolio ini saya buat saat awal belajar web development ",
    tools: ["Html", "CSS", "Bootstrap"],
    dad: "500",
    link: "https://diazill.github.io/",
  },
];
