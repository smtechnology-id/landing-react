import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-area section-py-80">
        <div className="container">
          <div className="footer__wrapper">
            <img
              src="/assets/img/objects/ethereum-01.png"
              width="32"
              alt="object"
              style={{ top: "32%", left: "16%" }}
            />
            <img
              src="/assets/img/objects/x.png"
              width="16"
              alt="object"
              style={{ top: "8%", right: "16%" }}
            />
            <img
              src="/assets/img/objects/circle-01.png"
              width="16"
              alt="object"
              style={{ bottom: "24%", right: "40%" }}
            />
            <img
              src="/assets/img/objects/circle-03.png"
              width="24"
              alt="object"
              style={{ bottom: "-8%", left: "30%" }}
            />
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
                <div className="footer__info text-center">
                  <p>
                    Komplek Perkantoran Pemerintah Kab. Bekasi Desa Sukamahi
                    Kecamatan Cikarang Pusat Kabupaten Bekasi
                  </p>
                  <ul className="list-wrap footer__social">
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-discord"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-telegram-plane"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright__wrapper">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright__text">
                    <p>&copy; 2024 Nerko. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="copyright__menu">
                    <ul className="list-wrap">
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of use</a>
                      </li>
                      <li className="backTop">
                        <a
                          href=""
                          className="scroll-to-target"
                          data-target="html"
                        >
                          <i className="flaticon-arrowhead-up"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
