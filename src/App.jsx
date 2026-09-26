import React, { useState, useMemo } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useTranslation } from "react-i18next";

// --- MODAL PREVIEW GAMBAR ---
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
        <img src={image} alt="Preview" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

// --- MODAL DAFTAR PROYEK BERDASARKAN TOOLS ---
const ToolProjectsModal = ({ tool, onClose, currentLang }) => {
  if (!tool) return null;

  // Filter proyek yang menggunakan tool ini (Case-Insensitive)
  const relatedProjects = listProyek.filter((p) =>
    p.tools.some((tName) => tName.toLowerCase() === tool.toLowerCase()),
  );

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl p-6 md:p-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-violet-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          onClick={onClose}
        >
          <i className="ri-close-line ri-lg"></i>
        </button>

        <h2 className="text-2xl font-bold mb-2">
          Proyek dengan <span className="text-violet-400">{tool}</span>
        </h2>
        <p className="text-sm text-zinc-400 mb-6 border-b border-zinc-700 pb-4">
          Berikut adalah daftar proyek yang saya kembangkan menggunakan {tool}.
        </p>

        {relatedProjects.length === 0 ? (
          <div className="text-center py-10">
            <i className="ri-folder-forbid-line text-4xl text-zinc-600 mb-2 block"></i>
            <p className="text-zinc-500">
              Belum ada proyek yang dipublikasikan dengan tool ini.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {relatedProjects.map((p) => (
              <div
                key={p.id}
                className="flex gap-4 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 items-center hover:border-violet-500 transition-colors"
              >
                <img
                  src={p.gambar[0]}
                  className="w-20 h-20 md:w-28 md:h-28 object-cover object-top rounded-md flex-shrink-0"
                  alt="thumbnail"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg md:text-xl line-clamp-2 leading-tight mb-2">
                    {p.nama[currentLang] || p.nama.id}
                  </h4>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-violet-400 text-sm hover:text-violet-300 transition-colors inline-flex items-center gap-1 font-medium"
                  >
                    Kunjungi Website <i className="ri-external-link-line"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ proyek, index, onImageClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "id";

  const nama = proyek.nama[currentLang] || proyek.nama.id;
  const desk = proyek.desk[currentLang] || proyek.desk.id;

  const maxLength = 130;
  const isLongText = desk.length > maxLength;
  const hasMultipleImages = proyek.gambar.length > 1;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === proyek.gambar.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? proyek.gambar.length - 1 : prev - 1,
    );
  };

  return (
    <div
      className="bg-zinc-800 rounded-md flex flex-col overflow-hidden h-full border border-zinc-700/50 hover:border-violet-500/50 transition-colors"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={index * 100}
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

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="bg-violet-600/80 p-3 rounded-full text-white backdrop-blur-sm">
            <i className="ri-search-eye-line ri-xl"></i>
          </div>
        </div>

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
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {proyek.gambar.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === currentImageIndex ? "bg-violet-500" : "bg-white/50"}`}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h1 className="text-2xl font-bold mb-3">{nama}</h1>

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

        {/* Tools Section dihapus dari sini agar UI Card lebih bersih */}
        <div className="mt-auto pt-4">
          <a
            href={proyek.link}
            className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 transition-colors duration-300 text-center"
            target="_blank"
            rel="noreferrer"
          >
            {t("projects.visitWebsite")}
          </a>
        </div>
      </div>
    </div>
  );
};

function App() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "id";

  const [previewImage, setPreviewImage] = useState(null);

  // State untuk Modal Tools
  const [modalToolInfo, setModalToolInfo] = useState(null);

  // State untuk tab kategori tools (Vertikal)
  const [activeCategoryTab, setActiveCategoryTab] = useState(null);

  // State untuk tab kategori Proyek (Horizontal)
  const [activeProjectTab, setActiveProjectTab] = useState("Semua");

  const pengalaman = useMemo(() => {
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

  const groupedTools = useMemo(() => {
    const groups = {};
    listTools.forEach((tool) => {
      const category = tool.kategori || "Lainnya";
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(tool);
    });
    return groups;
  }, []);

  // Ekstrak list kategori unik dari Proyek
  const projectCategories = useMemo(() => {
    const cats = new Set(listProyek.map((p) => p.kategori).filter(Boolean));
    return ["Semua", ...Array.from(cats)];
  }, []);

  // Filter proyek berdasarkan tab kategori horizontal yang aktif
  const filteredProjects = useMemo(() => {
    let sorted = [...listProyek].sort((a, b) => a.seq - b.seq);
    if (activeProjectTab !== "Semua") {
      return sorted.filter((p) => p.kategori === activeProjectTab);
    }
    return sorted;
  }, [activeProjectTab]);

  const totalProyek = listProyek.length;

  return (
    <>
      <LightboxModal
        image={previewImage}
        onClose={() => setPreviewImage(null)}
      />

      {/* Modal yang muncul saat klik Tools */}
      <ToolProjectsModal
        tool={modalToolInfo}
        onClose={() => setModalToolInfo(null)}
        currentLang={currentLang}
      />

      {/* --- START HERO SECTION --- */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <q>{t("hero.quote")}</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Aditya Diaz Illyasa</h1>
          <p className="text-base/loose mb-6 opacity-50">{t("hero.desc")}</p>
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
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-400 transition-colors"
            >
              {t("hero.viewProjects")}{" "}
              <i className="ri-arrow-down-line ri-lg"></i>
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
          <p className="text-base/loose mb-10">{t("about.desc")}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  {totalProyek}
                  <span className="text-violet-500">+</span>
                </h1>
                <p>{t("about.projectsCompleted")}</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  {pengalaman.years}
                  <span className="text-violet-500">+</span>
                </h1>
                <p>{t("about.yearsExperience")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- START TOOLS SECTION --- */}
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
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w3/4 w-full text-base/loose opacity-50 mb-14"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            {t("about.toolsDesc")} (Klik salah satu tool untuk melihat proyek
            terkait).
          </p>

          <div className="flex flex-col md:flex-row gap-8 min-h-[400px]">
            {/* Sidebar Tabs (Kiri) */}
            <div
              className="md:w-1/3 w-full flex flex-col gap-2 border-l-2 border-zinc-700/50 pl-4"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {Object.keys(groupedTools).map((category, index) => {
                const isActiveTab =
                  activeCategoryTab === category ||
                  (!activeCategoryTab && index === 0);

                return (
                  <button
                    key={`tab-${category}`}
                    onClick={() => setActiveCategoryTab(category)}
                    className={`text-left px-4 py-3 rounded-r-lg transition-all duration-300 relative font-semibold
                      ${
                        isActiveTab
                          ? "text-violet-400 bg-violet-900/20 translate-x-2"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                      }`}
                  >
                    {isActiveTab && (
                      <span className="absolute left-[-18px] top-0 bottom-0 w-[4px] bg-violet-500 rounded-r-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
                    )}
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Konten Tools Area (Kanan) */}
            <div
              className="md:w-2/3 w-full relative"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {Object.entries(groupedTools).map(([category, tools], index) => {
                const isActiveTab =
                  activeCategoryTab === category ||
                  (!activeCategoryTab && index === 0);

                return (
                  <div
                    key={`content-${category}`}
                    className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out
                      ${
                        isActiveTab
                          ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                          : "opacity-0 translate-y-4 pointer-events-none z-0"
                      }`}
                  >
                    <div className="tools-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                      {tools.map((tool) => {
                        const ket = tool.ket[currentLang] || tool.ket.id;

                        return (
                          <div
                            onClick={() => setModalToolInfo(tool.nama)}
                            className="flex items-center gap-3 p-3 bg-zinc-800/50 border border-zinc-700 rounded-md cursor-pointer hover:bg-zinc-700 hover:border-violet-500 transition-all duration-300 group"
                            key={tool.id}
                          >
                            <img
                              src={tool.gambar}
                              alt={tool.nama}
                              className="w-12 h-12 object-contain bg-zinc-900 rounded-md p-1 group-hover:scale-110 transition-transform"
                              loading="lazy"
                            />
                            <div>
                              <h4 className="font-bold text-white group-hover:text-violet-300 transition-colors">
                                {tool.nama}
                              </h4>
                              <p className="text-xs opacity-60 mt-1">{ket}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* --- END TOOLS SECTION --- */}
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
          className="text-base/loose text-center opacity-50 mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          {t("projects.desc")}
        </p>

        {/* Tab Horizontal Kategori Proyek */}
        <div
          className="flex flex-nowrap md:flex-wrap gap-2 md:justify-center overflow-x-auto pb-4 mb-8 snap-x"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveProjectTab(cat)}
              className={`snap-center whitespace-nowrap px-5 py-2 rounded-full border font-medium transition-all duration-300 
                ${
                  activeProjectTab === cat
                    ? "bg-violet-600 border-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                    : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Daftar Proyek dengan Key Berdasarkan Tab (Animasi Sinkron & Mulus) */}
        <div
          key={activeProjectTab}
          className="transition-opacity duration-500 animate__animated animate__fadeIn"
        >
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-zinc-800/50 rounded-xl border border-zinc-700">
              <i className="ri-folder-forbid-line text-6xl text-zinc-500 mb-4 inline-block"></i>
              <h3 className="text-xl font-semibold mb-2">Belum ada proyek</h3>
              <p className="text-zinc-400">
                Belum ada proyek di kategori {activeProjectTab}.
              </p>
            </div>
          ) : (
            <div className="proyek-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-stretch">
              {filteredProjects.map((proyek, index) => (
                <ProjectCard
                  key={proyek.id}
                  proyek={proyek}
                  index={index}
                  onImageClick={setPreviewImage}
                />
              ))}
            </div>
          )}
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
                className="border border-zinc-500 p-2 rounded-md bg-zinc-900 text-white focus:outline-none focus:border-violet-500 transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">{t("contact.email")}</label>
              <input
                type="email"
                name="email"
                placeholder={t("contact.enterEmail")}
                className="border border-zinc-500 p-2 rounded-md bg-zinc-900 text-white focus:outline-none focus:border-violet-500 transition-colors"
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
                className="border border-zinc-500 p-2 rounded-md bg-zinc-900 text-white focus:outline-none focus:border-violet-500 transition-colors"
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
