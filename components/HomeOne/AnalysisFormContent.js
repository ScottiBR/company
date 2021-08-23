import React from "react";
import { useTranslation } from "react-i18next";

const AnalysisFormContent = () => {
  const { t } = useTranslation();
  return (
    <section className="analysis-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="analysis-image">
              <img src="/images/analysis-image.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="analysis-area-content">
              <h3>{t("form.title")}</h3>
              <p>
                {t("form.wannaHire")}
              </p>
            </div>

            <form className="contactForm">
              <div className="row">
                <div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder={t("form.name")}
                    />
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      className="form-control"
                      placeholder="Email *"
                    />
                  </div>
                </div>
              </div>

              <div className="send-btn">
                <button type="submit" className="default-btn-one">
                    {t("form.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisFormContent;
