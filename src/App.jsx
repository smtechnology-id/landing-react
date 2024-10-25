import { useState } from "react";
import Layouts from "./layouts";
import DataTable from 'react-data-table-component';

function App() {

  const columns = [
    {
      name: 'Nomor Tiket',
      selector: (row) => row.nomor_tiket,
    }, 
    {
      name: 'Tanggal',
      selector: (row) => row.tanggal,
    },
    {
      name: 'Pemohon',
      selector: (row) => row.pemohon,
    },
    {
      name: 'Kategori',
      selector: (row) => row.kategori,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
    }
  ];

  const data = [
    {
      id: 1,
      nomor_tiket: 'T202410240230',
      email: 'example@example.com',
      tanggal: '2024-10-24',
      pemohon: 'Kecamatan Bojongmangu',
      kategori: 'Aplikasi',
      status: 'MENUNGGU DISETUJUI',
    },
    {
      id: 1,
      nomor_tiket: 'T202410210229',
      tanggal: '21 Oct 2024	',
      pemohon: 'Dinas Pemadam Kebakaran',
      kategori: 'VPS/VM',
      status: 'MENUNGGU DISETUJUI',
    },
    {
      id: 1,
      nomor_tiket: 'T202410240230',
      tanggal: '2024-10-24',
      pemohon: 'Kecamatan Bojongmangu',
      kategori: 'Aplikasi',
      status: 'MENUNGGU DISETUJUI',
    }
  ];

  const [records, setRecord] = useState(data);

  const handleFilter = (event) => { // Added arrow function syntax
    const newData = records.filter(row => 
      row.nomor_tiket.toLowerCase().includes(event.target.value.toLowerCase()) || // Check nomor_tiket
      row.tanggal.toLowerCase().includes(event.target.value.toLowerCase()) || // Check tanggal
      row.pemohon.toLowerCase().includes(event.target.value.toLowerCase()) || // Check pemohon
      row.kategori.toLowerCase().includes(event.target.value.toLowerCase()) || // Check kategori
      row.status.toLowerCase().includes(event.target.value.toLowerCase()) // Check status
    );
    setRecord(newData);
  };


  return (
    <>
      <Layouts>
        <main id="home" className="fix">
          <div className="gradient-position">
            <img
              src="/assets/img/others/gradient-circle.svg"
              style={{ left: "-4%", top: "-4%" }} // Corrected style prop
              width="500"
              alt="circle"
            />
            <img
              src="/assets/img/others/gradient-circle.svg"
              style={{ right: "-4%", bottom: "-4%" }} // Corrected style prop
              width="500"
              alt="circle"
            />
          </div>
          <section className="banner-area banner-padding position-relative">
            <div className="banner__background-wrap">
              <div
                className="background"
                data-background="assets/img/bg/gradient_bg01.png"
              ></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="banner__content"
                    data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                  >
                    <h2 className="title">BEKASI BIKIN APLIKASI</h2>
                    <p className="desc">
                      Layanan Rekayasa Perangkat Lunak Diskominfosantik
                      Kabupaten Bekasi.
                    </p>
                    <div className="button-box d-flex gap-3" >
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="banner__btn btn gradient-btn"
                    >
                      <span>Lihat layanan</span>
                      <i className="unicon-arrow-right"></i>
                    </a>
                    <button className="btn banner__btn" data-bs-toggle="modal" data-bs-target="#connectModal">Login</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="banner__images"
                    data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
                  >
                    <svg
                      style={{ top: "-17%", opacity: 0.3 }}
                      className="shape"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#77f20b"
                        d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z"
                        transform="translate(100 100)"
                      ></path>
                    </svg>

                    <div className="banner__images-grid">
                      {/* <div className="left">
                        <img src="assets/img/vektor1.png" alt="artwork" />
                      </div> */}
                      <div className="right">
                        <img src="assets/img/vektor2.png" alt="artwork" />
                      </div>
                    </div>

                    <a
                      className="tg-circle-text"
                      href="https://opensea.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="tg-circle-text-path tg-animation-spin"
                        viewBox="0 0 100 100"
                        width="120"
                        height="120"
                      >
                        <defs>
                          <path
                            id="circle"
                            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          ></path>
                        </defs>
                        <text fontSize="11.75">
                          <textPath xlinkHref="#circle">
                            BEKASI BIKIN APLIKASI • BEKASI BIKIN APLIKASI •
                          </textPath>
                        </text>
                      </svg>
                      <i className="unicon-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="brand-area section-pb-65"
            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-12">
                  <h6 className="brand__title">Amazing Our Partners:</h6>
                  <div className="brand__list">
                    <div className="brand__item">
                      <img
                        src="assets/img/logo/logo.png"
                        className="has-active-light"
                        alt="brand"
                      />
                      <img
                        src="assets/img/logo/logo.png"
                        className="has-active-dark"
                        alt="brand"
                      />
                    </div>
                    <div className="brand__item">
                      <img
                        src="assets/img/logo/logo.png"
                        className="has-active-light"
                        alt="brand"
                      />
                      <img
                        src="assets/img/logo/logo.png"
                        className="has-active-dark"
                        alt="brand"
                      />
                    </div>
                    <div className="brand__item">
                      <img
                        src="assets/img/logo/logo.png"
                        className="has-active-light"
                        alt="brand"
                      />
                      <img
                        src="assets/img/logo/logo.png"
                        className="has-active-dark"
                        alt="brand"
                      />
                    </div>
                    <div className="brand__item">
                      <img
                        src="assets/img/logo/logo.png"
                        className="has-active-light"
                        alt="brand"
                      />
                      <img
                        src="assets/img/logo/logo.png"
                        className="has-active-dark"
                        alt="brand"
                      />
                    </div>
                    <div className="brand__item">
                      <img
                        src="assets/img/logo/logo.png"
                        className="has-active-light"
                        alt="brand"
                      />
                      <img
                        src="assets/img/logo/logo.png"
                        className="has-active-dark"
                        alt="brand"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-divider"
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 100;"
          >
            <img src="assets/img/others/divider-01.svg" alt="divider" />
          </div>
          <section
            id="minting"
            className="mint-area section-pt-80 section-pb-50"
          >
            <div className="container">
              <div
                className="row justify-content-center"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
              >
                <div className="col-xl-8 col-lg-10">
                  <div className="section__title text-center title-mb-80">
                    <h2 className="title">Layanan</h2>
                  </div>
                </div>
              </div>
              <div
                className="mint__lits-wrapper"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
              >
                <img
                  className="shape"
                  width="16"
                  src="assets/img/objects/circle-01.png"
                  alt="Object"
                  style={{ top: "-16%", left: "8%" }}
                />
                <img
                  className="shape"
                  width="24"
                  src="assets/img/objects/circle-02.png"
                  alt="Object"
                  style={{ bottom: "16%", right: "-8%" }}
                />
                <img
                  className="shape"
                  width="28"
                  src="assets/img/objects/x.png"
                  alt="Object"
                  style={{ bottom: "16%", left: "-8%" }}
                />

                <div
                  className="row justify-content-center"
                  data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);"
                >
                  <div className="col-md-6 col-sm-9">
                    <div className="mint__item">
                 
                      <div className="mint__content">
                        <h3 className="title">Aplikasi</h3>
                        <p className="desc">
                          <ul class="list-group">
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Pengajuan
                              Kebutuhan Aplikasi
                            </li>
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Perubahan
                              Aplikasi
                            </li>
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Laporan
                              Kendala
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-9">
                    <div className="mint__item">
                    
                      <div className="mint__content">
                        <h3 className="title">E-Mail
                        </h3>
                        <p className="desc">
                          <ul class="list-group">
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Pengajuan Akun E-mail Bekasikab
                            </li>
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Lupa Password E-mail
                            </li>
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Laporan Kendala
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-9">
                    <div className="mint__item">
                   
                      <div className="mint__content">
                        <h3 className="title">Cloud</h3>
                        <p className="desc">
                          <ul class="list-group">
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Pengajuan Akun Cloud Bekasikab
                            </li>
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Lupa Password Cloud
                            </li>
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Laporan Kendala
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-9">
                    <div className="mint__item">
                    
                      <div className="mint__content">
                        <h3 className="title">Sub Domain</h3>
                        <p className="desc">
                          <ul class="list-group" >
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Pengajuan Sub Domain Bekasikab
                            </li>
                            <li class="list-group-item" style={{border: "none"}}>
                              <i class="fas fa-check fa-fw me-4"></i>Laporan Kendala
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </section>
          <div
            className="section-divider"
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 100;"
          >
            <img src="assets/img/others/divider-01.svg" alt="divider" />
          </div>

          <section
            id="about"
            className="about-area section-pt-70 section-pb-80"
          >
            <div className="container">
              <div
                className="row justify-content-center"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
              >
                <div className="col-xl-8 col-lg-10">
                  <div className="section__title text-center title-mb-80">
                    
                    
                  </div>
                </div>
              </div>
              <div className="about__row-reverse">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div
                      className="about__content"
                      data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                    >
                      <div className="section__title text-start">
                        <h2 className="title">Status Tiket</h2>
                        <DataTable
                            columns={columns}
                            data={data}
                            width="100%"
                            pagination
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
         
          <div
            className="section-divider"
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
          >
            <img src="assets/img/others/divider-01.svg" alt="divider" />
          </div>
          <div
            className="section-divider"
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
          >
            <img src="assets/img/others/divider-01.svg" alt="divider" />
          </div>
          <section className="faq-area section-py-80">
            <div className="container">
              <div
                className="row justify-content-center"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
              >
                <div className="col-xl-8 col-lg-10">
                  <div className="section__title text-center title-mb-75">
                    <h2 className="title">Asked Questions</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xxl-7 col-xl-9 col-lg-10">
                  <div
                    className="faq__wrapper"
                    data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                  >
                    <div className="accordion" id="accordionFaq">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What is Nerko's NFT Collection?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionFaq"
                        >
                          <div className="accordion-body">
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat
                              proident.
                            </p>
                            <p>
                              Voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat
                              proident.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How we can buy and invest NFT?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionFaq"
                        >
                          <div className="accordion-body">
                            <p>
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor reprehenderit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Why we should choose Nerko's NFT?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionFaq"
                        >
                          <div className="accordion-body">
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat
                              proident.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Where we can buy and sell NFts?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionFaq"
                        >
                          <div className="accordion-body">
                            <p>
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor reprehenderit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How secure is this token?
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionFaq"
                        >
                          <div className="accordion-body">
                            <p>
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor reprehenderit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            What is your contract address?
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionFaq"
                        >
                          <div className="accordion-body">
                            <p>
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor reprehenderit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="team-area section-py-80">
            <div className="container">
              <div
                className="row justify-content-center"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
              >
                <div className="col-xl-8 col-lg-10">
                  <div className="section__title text-center title-mb-75">
                    <h2 className="title">Meet the Teams</h2>
                  </div>
                </div>
              </div>
              <div
                className="team__grid-wrapper"
                data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -400; delay: anime.stagger(100);"
              >
                <div className="team__item text-center">
                  <div className="team__item-thumb">
                    <img src="assets/img/team/02.png" alt="team" />
                  </div>
                  <div className="team__item-content">
                    <h4 className="name">Steps Jobs</h4>
                    <span className="designation">Artist</span>
                    <ul className="team__social-list list-wrap">
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
                    </ul>
                  </div>
                </div>
                <div className="team__item text-center">
                  <div className="team__item-thumb">
                    <img src="assets/img/team/03.png" alt="team" />
                  </div>
                  <div className="team__item-content">
                    <h4 className="name">Andry Moray</h4>
                    <span className="designation">Blockchain</span>
                    <ul className="team__social-list list-wrap">
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
                    </ul>
                  </div>
                </div>
                <div className="team__item text-center">
                  <div className="team__item-thumb">
                    <img src="assets/img/team/01.png" alt="team" />
                  </div>
                  <div className="team__item-content">
                    <h4 className="name">Zaid Ed</h4>
                    <span className="designation">Developer</span>
                    <ul className="team__social-list list-wrap">
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
                    </ul>
                  </div>
                </div>
                <div className="team__item text-center">
                  <div className="team__item-thumb">
                    <img src="assets/img/team/04.png" alt="team" />
                  </div>
                  <div className="team__item-content">
                    <h4 className="name">Laila Ed</h4>
                    <span className="designation">Artist</span>
                    <ul className="team__social-list list-wrap">
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
                    </ul>
                  </div>
                </div>
                <div className="team__item text-center">
                  <div className="team__item-thumb">
                    <img src="assets/img/team/05.png" alt="team" />
                  </div>
                  <div className="team__item-content">
                    <h4 className="name">Almaktari</h4>
                    <span className="designation">Artist</span>
                    <ul className="team__social-list list-wrap">
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layouts>
    </>
  );
}

export default App;
