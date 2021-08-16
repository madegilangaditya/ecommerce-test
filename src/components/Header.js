import React from 'react'
import { useState } from 'react'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const menuClicked = ()=>{
        setOpenMenu(!openMenu)
    }

    return (
        <header className="App-header">
            <section className="top-header">
                <div className="top-header-row">
                    <p>🔥 Garansi Pengembalian Barang 100% Tanpa Repot!🔥</p>
                </div>
            </section>

            {/* Sidebar Menu */}
            <section id="sidebar-menu" className="mobile-sidebar-menu">
                <div className="sidebar-menu-wrap">
                    <header>
                        <button className="header-icon">
                            <svg className="Icon icon-close" role="presentation" viewBox="0 0 16 14">
                                <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
                            </svg>
                        </button>
                    </header>
                    <div className="menu-wrap">
                        <div className="menu-container">
                            <nav className="primary-menu">
                                <div className="menu-item"><a href="/terbaru" className="menu-item-btn heading">Terbaru</a></div>
                                <div className="menu-item">
                                    <button className="menu-item-btn heading" aria-expanded="false">Atasan <span className="plus-icon"></span></button>
                                    <div className="submenu-wrap">
                                        <div className="menu-item heading"><a href="/collections">Lihat Semua</a></div>
                                        <div className="menu-item heading"><a href="/collections">T-Shirt</a></div>
                                        <div className="menu-item heading"><a href="/collections">T-Shirt Graphic</a></div>
                                        <div className="menu-item heading"><a href="/collections">Kemeja</a></div>
                                        <div className="menu-item heading"><a href="/collections">Jaket</a></div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <button className="menu-item-btn heading" aria-expanded="false">Bawahan <span className="plus-icon"></span></button>
                                    <div className="submenu-wrap">
                                        <div className="menu-item heading"><a href="/collections">Lihat Semua</a></div>
                                        <div className="menu-item heading"><a href="/collections">Celana Pendek</a></div>
                                        <div className="menu-item heading"><a href="/collections">Celana Panjang</a></div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <button className="menu-item-btn heading" aria-expanded="false">Aksesoris <span className="plus-icon"></span></button>
                                    <div className="submenu-wrap">
                                        <div className="menu-item heading"><a href="/collections">Lihat Semua</a></div>
                                        <div className="menu-item heading"><a href="/collections">Tas</a></div>
                                        <div className="menu-item heading"><a href="/collections">Sepatu</a></div>
                                        <div className="menu-item heading"><a href="/collections">Sandal</a></div>
                                    </div>
                                </div>
                                <div className="menu-item"><a href="/terbaru" className="menu-item-btn heading">Cuci Gudang</a></div>
                                <div className="menu-item"><a href="/terbaru" className="menu-item-btn heading">Konfirmasi Pembayaran</a></div>
                                <div className="menu-item"><a href="/terbaru" className="menu-item-btn heading">Kontak</a></div>
                            </nav>
                            <nav className="secondary-menu">
                                <ul className="sc-menu">
                                    <li className="sc-menu-item"><a href="/account">Account</a></li>
                                    <li className="sc-menu-item"><a href="/account" data-action="open-modal">Search</a></li>
                                </ul>
                            </nav>
                            <aside className="footer-menu">
                                <ul className="social">
                                    <li className="social-item">
                                        <a href="/social">
                                            <span className="icon-wrapper">
                                                <svg className="icon icon-facebook" viewBox="0 0 9 17">
                                                    <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="social-item">
                                        <a href="/social">
                                            <span className="icon-wrapper">
                                                <svg className="icon icon-instagram" role="presentation" viewBox="0 0 32 32">
                                                <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <section className="header-wrap">
                <div className="header-wrap-row">
                    <div className="nav-wrap">
                        <button onClick={menuClicked} className="header-icon menu-icon" aria-expanded={openMenu} aria-label="Open navigation" data-action="open-drawer">
                            <svg className="icon icon-nav" role="presentation" viewBox="0 0 20 14">
                                <path d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="logo-wrap">
                        <a href="/"><span>Logo</span></a>
                    </div>
                    <div className="right-menu-wrap">
                        <a href="/cart" className="header-icon cart">
                            <span>
                                <svg className="icon icon-cart" role="presentation" viewBox="0 0 17 20">
                                    <path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>    
            </section>

            <section className="banner">
                <div className="banner-img-wrap">
                    <img src="./img/1_x800.jpeg" alt="banner" />
                </div>
                <div className="btn-wrap">
                    <a href="/collections" className="btn btn-banner">👉Produk Terbaru👈</a>
                </div>
            </section>
        </header>
    )
}

export default Header
