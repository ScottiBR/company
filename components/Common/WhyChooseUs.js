import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation("common");
  return (
    <section className="choose-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="choose-content-area">
              <h3>{t("whyChooseUs.section")}</h3>
              <p>{t("whyChooseUs.explanation")}</p>

              <div className="choose-text">
                <i className="flaticon-check-mark"></i>
                <h4>{t('whyChooseUs.0.title')}</h4>
                <p>{t("whyChooseUs.0.description")}</p>
              </div>
              <div className="choose-text">
                <i className="flaticon-check-mark"></i>
                <h4>{t('whyChooseUs.1.title')}</h4>
                <p>{t("whyChooseUs.1.description")}</p>
              </div>

              <div className="choose-text">
                <i className="flaticon-check-mark"></i>
                <h4>{t('whyChooseUs.2.title')}</h4>
                <p>{t("whyChooseUs.2.description")}</p>
              </div>

              <div className="choose-btn">
                <Link href="/about-us">
                  <a className="default-btn-one">{t("whyChooseUs.discover")}</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="choose-image">
              <img src="/images/choose-image.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
