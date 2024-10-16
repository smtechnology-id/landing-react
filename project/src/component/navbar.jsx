import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header>
            <div id="sticky-header" className="tg-header__area transparent-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-nav-toggler"><i className="flaticon-menu-1"></i></div>
                            <div className="tgmenu__wrap">
                                <nav className="tgmenu__nav">
                                    <div className="logo">
                                        <a href="index.html" className="light-logo">
                                            <img src="/assets/img/logo/nerko-light.svg" alt="Nerko"/>
                                        </a>
                                        <a href="index.html" className="dark-logo">
                                            <img src="/assets/img/logo/nerko-dark.svg" alt="Nerko"/>
                                        </a>
                                    </div>
                                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className="active menu-item-has-children"><a href="#home" className="section-link">Home</a>
                                                <ul className="sub-menu">
                                                    <li className="active"><a href="index.html">Home One</a></li>
                                                    <li><a href="index-2.html">Home Two</a></li>
                                                    <li><a href="index-3.html">Home Three</a></li>
                                                    <li><a href="index-4.html">Home Four</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#minting" className="section-link">Minting</a></li>
                                            <li><a href="#about" className="section-link">About</a></li>
                                            <li><a href="#collection" className="section-link">Collection</a></li>
                                            <li><a href="#roadmap" className="section-link">Roadmap</a></li>
                                            <li className="menu-item-has-children"><a href="blog.html">Blog</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog.html">Our Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tgmenu__action">
                                        <ul className="list-wrap">
                                            <li className="header-social">
                                                <a href="#" className="d-none d-sm-block">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                                        </path>
                                                    </svg>
                                                </a>
                                                <a href="#"><i className="fab fa-discord"></i></a>
                                                <a href="#" className="d-blcok d-xl-none" data-bs-toggle="modal" data-bs-target="#connectModal"><i className="fas fa-wallet"></i></a>
                                            </li>
                                            <li className="header-btn"><button className="btn border-btn" data-bs-toggle="modal" data-bs-target="#connectModal">Connect wallet</button></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                            <div className="tgmobile__menu">
                                <nav className="tgmobile__menu-box">
                                    <div className="close-btn"><i className="flaticon-close-1"></i></div>
                                    <div className="nav-logo">
                                        <a href="index.html" className="light-logo">
                                            <img src="/assets/img/logo/nerko-light.svg" alt="Nerko"/>
                                        </a>
                                        <a href="index.html" className="dark-logo">
                                            <img src="/assets/img/logo/nerko-dark.svg" alt="Nerko"/>
                                        </a>
                                    </div>
                                    <div className="tgmobile__menu-outer">
                                    </div>
                                    <div className="social-links">
                                        <ul className="list-wrap">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li>
                                                <a href="#">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.33192 5.92804L13.5438 0H12.3087L7.78328 5.14724L4.16883 0H0L5.46575 7.78353L0 14H1.2351L6.01407 8.56431L9.83119 14H14L8.33192 5.92804ZM6.64027 7.85211L6.08648 7.07704L1.68013 0.909771H3.57718L7.13316 5.88696L7.68694 6.66202L12.3093 13.1316H10.4123L6.64027 7.85211Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-discord"></i></a></li>
                                            <li><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="tgmobile__menu-backdrop"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="connect__modal">
                <div className="modal fade" id="connectModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal__wrapper">
                                <div className="modal__header">
                                    <h2 className="title">Connect Wallet</h2>
                                    <button data-bs-dismiss="modal" aria-label="Close">
                                        <i className="flaticon-close-1"></i>
                                    </button>
                                </div>
                                <div className="modal__body text-center">
                                    <p>Please select a wallet to connect for start Minting your NFTs</p>
                                    <div className="connect__section">
                                        <ul className="list-wrap">
                                            <li>
                                                <a href="#" className="connect-meta"><img src="/assets/img/icons/metamask.svg" alt="Metamask" />MetaMask</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="/assets/img/icons/bitgo.svg" alt="BitGo"/>BitGo</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="/assets/img/icons/trust.svg" alt="Trust"/>Trust Wallet</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="/assets/img/icons/coinbase.svg" alt="Coinbase"/>Coinbase</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="privacy-text">By connecting your wallet, you agree to our <a href="#">Terms of Service</a> and our <a href="#">Privacy Policy</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar;