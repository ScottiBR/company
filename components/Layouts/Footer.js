import React, { Component } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  let currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer-area">
                <div className="footer-heading">
                  <h3>{t('navbar.aboutUs')}</h3>
                </div>

                <p>{t("aboutContent.strong")}</p>

                <ul className="footer-social">
                  <li>
                    <Link href="/#">
                      <a className="bg-3955bc">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-1da1f2">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-004dff">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-0273af">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-item-area">
                <div className="footer-heading">
                  <h3>{t("footer.links")}</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about-us">
                      <a>{t('navbar.aboutUs')}</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact">
                      <a>{t('navbar.contact')}</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="mb-30">
                <div className="footer-heading">
                  <h3>{t('navbar.contact')}</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3>{t('footer.phone')}</h3>
                  <span>+55(xx) xxxxx-xxxx</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>contact@tdl.com.br</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-animation">
          <div className="shape-img1">
            <img src="/images/shape/12.svg" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/13.svg" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/14.png" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/15.png" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/2.png" alt="image" />
          </div>
        </div>
      </footer>

      {/* Copyright footer */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p>© {currentYear} TDL. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
