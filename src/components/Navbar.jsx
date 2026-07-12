import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = (i18n.language || 'id').substring(0, 2);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  const getFlagUrl = (lang) => {
    switch (lang) {
      case 'id': return 'https://flagcdn.com/w20/id.png';
      case 'en': return 'https://flagcdn.com/w20/gb.png';
      case 'ja': return 'https://flagcdn.com/w20/jp.png';
      default: return 'https://flagcdn.com/w20/id.png';
    }
  };

  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo flex-1 md:flex-none">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white inline-block">
          Portofolio
        </h1>
      </div>
      <ul
        className={`menu flex sm:gap-10 gap-4 items-center md:static fixed
              left-1/2 -translate-x-1/2 md:translate-x-0
              md:opacity-100 bg-white/30 backdrop-blur-md p-4
              rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all  md:transition-none z-40
              ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li>
          <a href="#beranda" className="sm:text-lg text-base font-medium whitespace-nowrap">
            {t("navbar.home")}
          </a>
        </li>
        <li>
          <a href="#tentang" className="sm:text-lg text-base font-medium whitespace-nowrap">
            {t("navbar.about")}
          </a>
        </li>
        <li>
          <a href="#proyek" className="sm:text-lg text-base font-medium whitespace-nowrap">
            {t("navbar.projects")}
          </a>
        </li>
        <li>
          <a href="#kontak" className="sm:text-lg text-base font-medium whitespace-nowrap">
            {t("navbar.contact")}
          </a>
        </li>
        <li className="lang-switcher relative">
          <button 
            onClick={() => setLangOpen(!langOpen)}
            className="bg-zinc-800 text-white px-2 py-2 sm:px-3 rounded-md border border-zinc-600 hover:border-violet-500 cursor-pointer flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
          >
            <img src={getFlagUrl(currentLang)} alt="flag" className="w-4 sm:w-5 h-auto rounded-sm" />
            <span className="uppercase font-semibold hidden sm:inline">{currentLang === 'ja' ? 'JP' : currentLang}</span>
            <i className={`ri-arrow-down-s-line transition-transform ${langOpen ? 'rotate-180' : ''}`}></i>
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-24 sm:w-28 bg-zinc-800 border border-zinc-600 rounded-md shadow-lg z-50 overflow-hidden">
              <button 
                onClick={() => changeLanguage('id')} 
                className="w-full text-left px-3 py-2 hover:bg-violet-700 flex items-center gap-2 text-sm transition-colors"
              >
                <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-5 h-auto rounded-sm" />
                ID
              </button>
              <button 
                onClick={() => changeLanguage('en')} 
                className="w-full text-left px-3 py-2 hover:bg-violet-700 flex items-center gap-2 text-sm transition-colors"
              >
                <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-5 h-auto rounded-sm" />
                EN
              </button>
              <button 
                onClick={() => changeLanguage('ja')} 
                className="w-full text-left px-3 py-2 hover:bg-violet-700 flex items-center gap-2 text-sm transition-colors"
              >
                <img src="https://flagcdn.com/w20/jp.png" alt="JA" className="w-5 h-auto rounded-sm" />
                JP
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
