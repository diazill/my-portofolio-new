import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className=" flex gap-7">
        <a href="#beranda">{t("navbar.home")}</a>
        <a href="#tentang">{t("navbar.about")}</a>
        <a href="#proyek">{t("navbar.projects")}</a>
      </div>
      <div className=" flex gap-3 items-center">
        <a href="https://github.com/diazill" target="_blank">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/diaz_illyasa" target="_blank">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/adityadiaz/" target="_blank">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a
          href="https://youtube.com/@lavenzatech?si=8rrCbolHS1oYnU_q"
          target="_blank"
        >
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
