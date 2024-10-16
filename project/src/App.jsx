import Layouts from "./layouts";
function App() {
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
                    <img
                      src="assets/img/objects/ethereum-01.png"
                      width="44"
                      alt="object"
                      style={{ top: "-25%", left: "38%" }}
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                    />
                    <img
                      src="assets/img/objects/circle-01.png"
                      width="16"
                      alt="object"
                      style={{ top: "14%", left: "-12%" }}
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;"
                    />
                    <img
                      src="assets/img/objects/circle-03.png"
                      width="24"
                      alt="object"
                      style={{ bottom: "-16%", left: "12%" }}
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;"
                    />

                    <h2 className="title">Supercharge your NFT Adventure</h2>
                    <p className="desc">
                      Find the right NFT collections to buy within the platform.
                    </p>
                    <a
                      href="https://opensea.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="banner__btn btn gradient-btn"
                    >
                      <span>View in OPENSEA</span>
                      <i className="unicon-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="banner__images"
                    data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
                  >
                    <img
                      src="assets/img/objects/bitcoin-01.png"
                      width="44"
                      className="shape"
                      alt="object"
                      style={{ top: "67%", left: "-21%" }}
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 460;"
                    />
                    <img
                      src="assets/img/objects/x.png"
                      width="28"
                      className="shape"
                      alt="object"
                      style={{ top: "-4%", right: "16%" }}
                      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 480;"
                    />

                    <img
                      className="shape dashed-line has-active-light"
                      width="300"
                      src="assets/img/others/blob-dashed.svg"
                      alt="Blog dashed"
                      style={{
                        top: "-10%",
                        right: "17%",
                        fill: "transparent",
                        opacity: 0.1,
                      }}
                    />
                    <img
                      className="shape dashed-line has-active-dark"
                      width="300"
                      src="assets/img/others/blob-dashed-light.svg"
                      alt="Blog dashed"
                      style={{
                        top: "-10%",
                        right: "17%",
                        fill: "transparent",
                        opacity: 0.1,
                      }}
                    />

                    <svg
                      style={{ top: "-17%", opacity: 0.3 }}
                      className="shape"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#F796FF"
                        d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z"
                        transform="translate(100 100)"
                      ></path>
                    </svg>

                    <div className="banner__images-grid">
                      <div className="left">
                        <img src="assets/img/artwork/05.jpg" alt="artwork" />
                      </div>
                      <div className="right">
                        <img src="assets/img/artwork/13.jpg" alt="artwork" />
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
                            view in opensea • view in opensea •
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
                  <h6 className="brand__title">
                    POWERED BY AMAZING INVESTORS:
                  </h6>
                  <div className="brand__list">
                    <div className="brand__item">
                      <img
                        src="assets/img/wallets/wallet-01.svg"
                        className="has-active-light"
                        alt="brand"
                      />
                      <img
                        src="assets/img/wallets/wallet-light-01.svg"
                        className="has-active-dark"
                        alt="brand"
                      />
                    </div>
                    <div className="brand__item">
                      <img
                        src="assets/img/wallets/wallet-02.svg"
                        className="has-active-light"
                        alt="brand"
                      />
                      <img
                        src="assets/img/wallets/wallet-light-02.svg"
                        className="has-active-dark"
                        alt="brand"
                      />
                    </div>
                    <div className="brand__item">
                      <img
                        src="assets/img/wallets/wallet-03.svg"
                        className="has-active-light"
                        alt="brand"
                      />
                      <img
                        src="assets/img/wallets/wallet-light-03.svg"
                        className="has-active-dark"
                        alt="brand"
                      />
                    </div>
                    <div className="brand__item">
                      <img
                        src="assets/img/wallets/wallet-04.svg"
                        className="has-active-light"
                        alt="brand"
                      />
                      <img
                        src="assets/img/wallets/wallet-light-04.svg"
                        className="has-active-dark"
                        alt="brand"
                      />
                    </div>
                    <div className="brand__item">
                      <img
                        src="assets/img/wallets/wallet-05.svg"
                        className="has-active-light"
                        alt="brand"
                      />
                      <img
                        src="assets/img/wallets/wallet-light-05.svg"
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
                    <h2 className="title">How to mint</h2>
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
                      <div className="mint__icon">
                        <img src="assets/img/icons/mint-01.png" alt="icon" />
                      </div>
                      <div className="mint__content">
                        <h3 className="title">Connect your wallet</h3>
                        <p className="desc">
                          Use Trust Wallet, Metamask or any wallet to connect to
                          the app.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-9">
                    <div className="mint__item">
                      <div className="mint__icon">
                        <img src="assets/img/icons/mint-02.png" alt="icon" />
                      </div>
                      <div className="mint__content">
                        <h3 className="title">Select your quantity</h3>
                        <p className="desc">
                          Upload your NFTs and set a title, description and
                          price.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-9">
                    <div className="mint__item">
                      <div className="mint__icon">
                        <img src="assets/img/icons/mint-03.png" alt="icon" />
                      </div>
                      <div className="mint__content">
                        <h3 className="title">Confirm transaction</h3>
                        <p className="desc">
                          Earn ETH and BIT for all your NFTs that you sell on
                          our marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-9">
                    <div className="mint__item">
                      <div className="mint__icon">
                        <img src="assets/img/icons/mint-04.png" alt="icon" />
                      </div>
                      <div className="mint__content">
                        <h3 className="title">Receive your NFTs</h3>
                        <p className="desc">
                          Latin professor at Hampden-Sydney College in Virginia.
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
          <section className="fact-area section-pt-60 section-pb-30">
            <div className="container">
              <div className="fact__items-wrap position-relative">
                <img
                  className="shape"
                  src="assets/img/objects/bitcoin-01.png"
                  width="32"
                  alt="Object"
                  style={{ bottom: "-32%", left: "30%" }}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;"
                />
                <img
                  className="shape"
                  src="assets/img/objects/ethereum-01.png"
                  width="24"
                  alt="Object"
                  style={{ top: "-25%", right: "25%" }}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;"
                />

                <div
                  className="row justify-content-center"
                  data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);"
                >
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="fact__item text-center">
                      <h2 className="fact__count tg-text-gradient">4,000+</h2>
                      <span className="meta">Wallets Connected</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="fact__item text-center">
                      <h2 className="fact__count tg-text-gradient">20,000+</h2>
                      <span className="meta">
                        Collections Indexed every 5 mins.
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="fact__item text-center">
                      <h2 className="fact__count tg-text-gradient">2.5x</h2>
                      <span className="meta">
                        Difference in Floor & Estimated Value
                      </span>
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
                    <h2 className="title">About the platform</h2>
                  </div>
                </div>
              </div>
              <div className="about__row-reverse">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div
                      className="about__img"
                      data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
                    >
                      <img src="assets/img/others/features-03.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="about__content"
                      data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                    >
                      <div className="section__title text-start">
                        <span className="sub-title tg-text-gradient">
                          Create and Invest
                        </span>
                        <h2 className="title">
                          Create your <br /> own NFT
                        </h2>
                      </div>
                      <p>
                        Multiple Chains, One Home. Stack up all your NFTs from
                        across blockchains.
                      </p>
                      <div className="about__facts-list">
                        <div className="about__fact-item">
                          <h3 className="count">4,500+</h3>
                          <p>
                            Collections Indexed <br /> every 5mins.
                          </p>
                        </div>
                        <div className="about__fact-item">
                          <h3 className="count">2.5x</h3>
                          <p>Difference in Floor & Estimated NFT Value</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div
                      className="about__img"
                      data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                    >
                      <img src="assets/img/others/features-02.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="about__content"
                      data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
                    >
                      <div className="section__title text-start">
                        <span className="sub-title tg-text-gradient">
                          Sync and Track
                        </span>
                        <h2 className="title">Multiple Chains, One Home</h2>
                      </div>
                      <p>
                        We make it easy to Discover, Invest and manage all your
                        NFTs at one place, looked up one of the more obscure.
                        Find the right NFT collections to buy within the
                        platform.
                      </p>
                      <div className="about__facts-list">
                        <div className="about__icon-box">
                          <div className="icon">
                            <i className="unicon-select-02"></i>
                          </div>
                          <p>Collections Indexed every 5mins.</p>
                        </div>
                        <div className="about__icon-box">
                          <div className="icon">
                            <i className="unicon-select-window"></i>
                          </div>
                          <p>Difference in Floor & Estimated Value</p>
                        </div>
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
                    <h2 className="title">About the platform</h2>
                  </div>
                </div>
              </div>
              <div className="about__row-reverse">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div
                      className="about__img"
                      data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
                    >
                      <img src="assets/img/others/features-03.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="about__content"
                      data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                    >
                      <div className="section__title text-start">
                        <span className="sub-title tg-text-gradient">
                          Create and Invest
                        </span>
                        <h2 className="title">
                          Create your <br /> own NFT
                        </h2>
                      </div>
                      <p>
                        Multiple Chains, One Home. Stack up all your NFTs from
                        across blockchains.
                      </p>
                      <div className="about__facts-list">
                        <div className="about__fact-item">
                          <h3 className="count">4,500+</h3>
                          <p>
                            Collections Indexed <br /> every 5mins.
                          </p>
                        </div>
                        <div className="about__fact-item">
                          <h3 className="count">2.5x</h3>
                          <p>Difference in Floor & Estimated NFT Value</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div
                      className="about__img"
                      data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                    >
                      <img src="assets/img/others/features-02.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="about__content"
                      data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
                    >
                      <div className="section__title text-start">
                        <span className="sub-title tg-text-gradient">
                          Sync and Track
                        </span>
                        <h2 className="title">Multiple Chains, One Home</h2>
                      </div>
                      <p>
                        We make it easy to Discover, Invest and manage all your
                        NFTs at one place, looked up one of the more obscure.
                        Find the right NFT collections to buy within the
                        platform.
                      </p>
                      <div className="about__facts-list">
                        <div className="about__icon-box">
                          <div className="icon">
                            <i className="unicon-select-02"></i>
                          </div>
                          <p>Collections Indexed every 5mins.</p>
                        </div>
                        <div className="about__icon-box">
                          <div className="icon">
                            <i className="unicon-select-window"></i>
                          </div>
                          <p>Difference in Floor & Estimated Value</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="section-divider"
            data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
          >
            <img src="assets/img/others/divider-01.svg" alt="divider" />
          </div>

          <section id="collection" className="collection-area section-py-80">
            <div className="container">
              <div
                className="row justify-content-center"
                data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;"
              >
                <div className="col-xl-8 col-lg-10">
                  <div className="section__title text-center title-mb-65">
                    <h2 className="title">Latest artworks</h2>
                  </div>
                </div>
              </div>
              <div
                className="row collection__items-list"
                data-anime="targets: > * > *; opacity:[0, 1]; translateY:[48, 0]; onview: -400; delay: anime.stagger(100);"
              >
                <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                  <div className="collection__item">
                    <div className="collection__item-thumb">
                      <a href="#">
                        <img src="assets/img/artwork/06.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="collection__item-content">
                      <h4 className="name">
                        <a href="#">#Metaverse</a>
                      </h4>
                      <span className="author">
                        By <a href="#">TheSalvare</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                  <div className="collection__item">
                    <div className="collection__item-thumb">
                      <a href="#">
                        <img src="assets/img/artwork/07.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="collection__item-content">
                      <h4 className="name">
                        <a href="#">#Polly Doll</a>
                      </h4>
                      <span className="author">
                        By <a href="#">TheNative</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                  <div className="collection__item">
                    <div className="collection__item-thumb">
                      <a href="#">
                        <img src="assets/img/artwork/16.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="collection__item-content">
                      <h4 className="name">
                        <a href="#">#Alec Art</a>
                      </h4>
                      <span className="author">
                        By <a href="#">GeorgZvic</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                  <div className="collection__item">
                    <div className="collection__item-thumb">
                      <a href="#">
                        <img src="assets/img/artwork/11.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="collection__item-content">
                      <h4 className="name">
                        <a href="#">#Toxic Poeth</a>
                      </h4>
                      <span className="author">
                        By <a href="#">YazoiLup</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                  <div className="collection__item">
                    <div className="collection__item-thumb">
                      <a href="#">
                        <img src="assets/img/artwork/01.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="collection__item-content">
                      <h4 className="name">
                        <a href="#">#Saphyre</a>
                      </h4>
                      <span className="author">
                        By <a href="#">CryptoX</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                  <div className="collection__item">
                    <div className="collection__item-thumb">
                      <a href="#">
                        <img src="assets/img/artwork/13.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="collection__item-content">
                      <h4 className="name">
                        <a href="#">#Charcuterie</a>
                      </h4>
                      <span className="author">
                        By <a href="#">Texira</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                  <div className="collection__item">
                    <div className="collection__item-thumb">
                      <a href="#">
                        <img src="assets/img/artwork/12.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="collection__item-content">
                      <h4 className="name">
                        <a href="#">#Paradise</a>
                      </h4>
                      <span className="author">
                        By <a href="#">CryptoX</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                  <div className="collection__item">
                    <div className="collection__item-thumb">
                      <a href="#">
                        <img src="assets/img/artwork/10.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="collection__item-content">
                      <h4 className="name">
                        <a href="#">#HighTown</a>
                      </h4>
                      <span className="author">
                        By <a href="#">TheSalvare</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="collection__btn text-center"
                data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;"
              >
                <a
                  href="https://opensea.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn gradient-btn"
                >
                  <span>View more in OPENSEA</span>{" "}
                  <i className="unicon-arrow-right"></i>
                </a>
              </div>
            </div>
          </section>

          <div
            className="section-divider"
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
          >
            <img src="assets/img/others/divider-01.svg" alt="divider" />
          </div>

          <section
            id="roadmap"
            className="roadmap-area section-pt-60 section-pb-60"
          >
            <div className="container">
              <div
                className="row justify-content-center"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
              >
                <div className="col-xl-8 col-lg-10">
                  <div className="section__title text-center title-mb-75">
                    <h2 className="title">Nerko's Roadmap</h2>
                  </div>
                </div>
              </div>

              <div
                className="roadmap__wrapper"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
              >
                <div className="swiper roadmap__active">
                  <div
                    className="swiper-wrapper"
                    data-anime="targets: > * > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -400; delay: anime.stagger(200);"
                  >
                    <div className="swiper-slide">
                      <div className="roadmap__card">
                        <div className="roadmap__percent">
                          <span>0</span>%
                        </div>
                        <div className="roadmap__step">
                          <span className="tg-text-gradient d-inline-flex">
                            Phase 01
                          </span>
                        </div>
                        <h3 className="roadmap__heading">Planning</h3>
                        <p>
                          Quality comes first. We took our time to plan out
                          everything and build our production pipeline for good
                          quality artworks.
                        </p>
                        <ul className="roadmap__lists list-wrap">
                          <li>
                            <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                            Release website and logo
                          </li>
                          <li>
                            <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                            Grow community
                          </li>
                          <li>
                            <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                            Launch the project
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="roadmap__card">
                        <div className="roadmap__percent">
                          <span>25</span>%
                        </div>
                        <div className="roadmap__step">
                          <span className="tg-text-gradient d-inline-flex">
                            Phase 02
                          </span>
                        </div>
                        <h3 className="roadmap__heading">Production</h3>
                        <p>
                          Quality comes first. We took our time to plan out
                          everything and build our production pipeline for good
                          quality artworks.
                        </p>
                        <ul className="roadmap__lists list-wrap">
                          <li>
                            <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                            Release website and logo
                          </li>
                          <li>
                            <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                            Grow community
                          </li>
                          <li>
                            <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                            Launch the project
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Continue with Phases 03 to 06 similarly */}
                  </div>
                </div>

                <div className="tg-swiper-scrollbar"></div>

                <a aria-label="Prev" href="#prev" className="tg-swiper-prev">
                  <i className="fas fa-chevron-left"></i>
                </a>
                <a aria-label="Next" href="#next" className="tg-swiper-next">
                  <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </section>
          <div
            className="section-divider"
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
          >
            <img src="assets/img/others/divider-01.svg" alt="divider" />
          </div>
          <div className="section-divider" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;">
              <img src="assets/img/others/divider-01.svg" alt="divider" />
          </div>
          <section className="faq-area section-py-80">
              <div className="container">
                  <div className="row justify-content-center" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                      <div className="col-xl-8 col-lg-10">
                          <div className="section__title text-center title-mb-75">
                              <h2 className="title">Asked Questions</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-xxl-7 col-xl-9 col-lg-10">
                          <div className="faq__wrapper" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                              <div className="accordion" id="accordionFaq">
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingOne">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              What is Nerko's NFT Collection?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFaq">
                                          <div className="accordion-body">
                                              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                              <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingTwo">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              How we can buy and invest NFT?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFaq">
                                          <div className="accordion-body">
                                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingThree">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Why we should choose Nerko's NFT?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaq">
                                          <div className="accordion-body">
                                              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingFour">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              Where we can buy and sell NFts?
                                          </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFaq">
                                          <div className="accordion-body">
                                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingFive">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                              How secure is this token?
                                          </button>
                                      </h2>
                                      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFaq">
                                          <div className="accordion-body">
                                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingSix">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                              What is your contract address?
                                          </button>
                                      </h2>
                                      <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionFaq">
                                          <div className="accordion-body">
                                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
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
                    <h2 className="title">Meet the artists</h2>
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
