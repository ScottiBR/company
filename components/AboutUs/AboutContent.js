import React from "react";
import { useTranslation } from "next-i18next";

const AboutContent = () => {
  const { t } = useTranslation("common");
  return (
    <section className="about-section pt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src="/images/about-image.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-area-content">
              <span>{t("navbar.aboutUs")}</span>
              <h3>{t("aboutContent.subTitle")}</h3>
              <strong>{t("aboutContent.strong")}</strong>
              <p>{t("aboutContent.paragraph")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
