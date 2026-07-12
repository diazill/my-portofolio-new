import React, { useState, useMemo } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useTranslation } from "react-i18next";

const LightboxModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white bg-zinc-800 hover:bg-violet-600 rounded-full w-10 h-10 flex items-center justify-center z-10 transition-colors"
        onClick={onClose}
      >
        <i className="ri-close-line ri-xl"></i>
      </button>
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image} 
          alt="Preview" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ proyek, index, onImageClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'id';

  // Mendapatkan teks bahasa yang sesuai
  const nama = proyek.nama[currentLang] || proyek.nama.id;
  const desk = proyek.desk[currentLang] || proyek.desk.id;

  const maxLength = 130;
  const isLongText = desk.length > maxLength;
  const hasMultipleImages = proyek.gambar.length > 1;

  const nextImage = (e) => {
    e.stopPropagation(); // Mencegah modal terbuka saat klik tombol panah
    setCurrentImageIndex((prev) => (prev === proyek.gambar.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? proyek.gambar.length - 1 : prev - 1));
  };

  return (
    <div
      className="bg-zinc-800 rounded-md flex flex-col overflow-hidden h-full"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={index * 200} // Delay dinamis berdasarkan urutan
      data-aos-once="true"
    >
      <div className="relative group overflow-hidden">
        <img
          src={proyek.gambar[currentImageIndex]}
          alt="proyek image"
          loading="lazy"
          className="w-full h-48 object-cover object-top shrink-0 cursor-pointer transition-transform duration-500 group-hover:scale-105"
          onClick={() => onImageClick(proyek.gambar[currentImageIndex])}
        />
        
        {/* Overlay hover icon untuk preview hint */}
        <div 
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none"
        >
          <div className="bg-violet-600/80 p-3 rounded-full text-white backdrop-blur-sm">
            <i className="ri-search-eye-line ri-xl"></i>
          </div>
        </div>

        {/* Carousel Controls */}
        {hasMultipleImages && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {proyek.gambar.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${i === currentImageIndex ? 'bg-violet-500' : 'bg-white/50'}`}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h1 className="text-2xl font-bold mb-3">{nama}</h1>
        
        {/* Fitur Truncate Text */}
        <div className="mb-4 text-zinc-300">
          <p className="text-base/loose inline">
            {isExpanded || !isLongText
              ? desk
              : `${desk.substring(0, maxLength)}...`}
          </p>
          {isLongText && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-violet-400 hover:text-violet-300 ml-1 font-medium underline-offset-4 hover:underline"
            >
              {isExpanded ? t("projects.showLess") : t("projects.readMore")}
            </button>
          )}
        </div>

        {/* mt-auto memastikan Tools & Button selalu rata bawah */}
        <div className="mt-auto flex flex-col gap-5 pt-4">
          <div className="flex flex-wrap gap-2">
            {proyek.tools.map((tool) => (
              <p
                className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold text-sm"
                key={`tool-${tool}`}
              >
                {tool}
              </p>
            ))}
          </div>
          <div className="text-center">
            <a
              href={proyek.link}
              className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              {t("projects.visitWebsite")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'id';
  const totalProyek = listProyek.length;
  
  // State untuk Lightbox Preview Gambar
  const [previewImage, setPreviewImage] = useState(null);

  const pengalaman = useMemo(() => {
    // Perbaikan bug Timezone: Format angka (Tahun, Bulan-Index, Tanggal)
    // 6 = Juli (karena index bulan dimulai dari 0)
    const startDate = new Date(2022, 6, 11);
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    if (today.getDate() < startDate.getDate()) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  }, []);

  return (
    <>
      <LightboxModal image={previewImage} onClose={() => setPreviewImage(null)} />

      {/* --- START HERO SECTION --- */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <q>{t("hero.quote")}</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Aditya Diaz Illyasa</h1>
          <p className="text-base/loose mb-6 opacity-50">
            {t("hero.desc")}
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="https://drive.google.com/file/d/1mFyMsMhvg3Ix8RFe9wy01kpoym5NBwFx/view?usp=sharing"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-400"
              target="_blank"
              rel="noreferrer"
            >
              {t("hero.downloadCv")} <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-400"
            >
              {t("hero.viewProjects")} <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s rounded-md"
          loading="lazy"
        />
      </div>
      {/* --- END HERO SECTION --- */}

      {/* --- START TENTANG SECTION --- */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="images"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            {t("about.desc")}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  {totalProyek}<span className="text-violet-500">+</span>
                </h1>
                <p>{t("about.projectsCompleted")}</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  {pengalaman.years}<span className="text-violet-500">+</span>
                </h1>
                <p>{t("about.yearsExperience")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {t("about.toolsTitle")}
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            {t("about.toolsDesc")}
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => {
              const ket = tool.ket[currentLang] || tool.ket.id;
              return (
                <div
                  className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                  data-aos-once="true"
                >
                  <img
                    src={tool.gambar}
                    alt="Tools Images"
                    className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold">{tool.nama}</h4>
                    <p className="opacity-50">{ket}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* --- END TENTANG SECTION --- */}

      {/* --- START PROYEK SECTION --- */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t("projects.title")}
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t("projects.desc")}
        </p>
        
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-stretch">
          {[...listProyek]
            .sort((a, b) => a.seq - b.seq)
            .map((proyek, index) => (
              <ProjectCard 
                key={proyek.id} 
                proyek={proyek} 
                index={index} 
                onImageClick={setPreviewImage} 
              />
            ))}
        </div>
      </div>
      {/* --- END PROYEK SECTION --- */}

      {/* --- START KONTAK SECTION --- */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t("contact.title")}
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t("contact.desc")}
        </p>
        <form
          action="https://formsubmit.co/diaz.illyasa1006@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">{t("contact.fullName")}</label>
              <input
                type="text"
                name="nama"
                placeholder={t("contact.enterName")}
                className="border border-zinc-500 p-2 rounded-md bg-zinc-900 text-white"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">{t("contact.email")}</label>
              <input
                type="email"
                name="email"
                placeholder={t("contact.enterEmail")}
                className="border border-zinc-500 p-2 rounded-md bg-zinc-900 text-white"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                {t("contact.message")}
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder={`${t("contact.message")} ...`}
                className="border border-zinc-500 p-2 rounded-md bg-zinc-900 text-white"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600 transition-colors duration-300"
              >
                {t("contact.sendMessage")}
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* --- END KONTAK SECTION --- */}

      <SpeedInsights />
    </>
  );
}

export default App;