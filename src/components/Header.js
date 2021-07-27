import React from 'react'

const Header = () => {
    return (
        <header className="App-header">
            <section className="top-header">
                <p>🔥 Garansi Pengembalian Barang 100% Tanpa Repot!🔥</p>
            </section>
            <section className="header-wrap">
                <div className="nav-wrap">
                    <button className="header-icon menu-icon" aria-expanded="false" aria-label="Open navigation" data-action="open-drawer">
                        <svg class="icon icon-nav" role="presentation" viewBox="0 0 20 14">
                            <path d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
                <div className="logo-wrap">
                    <a href="/"><span>Logo</span></a>
                </div>
                <div className="right-menu-wrap">
                    <a href="/cart" className="header-icon cart">
                        <span class="hidden-tablet-and-up">
                            <svg class="icon icon-cart" role="presentation" viewBox="0 0 17 20">
                                <path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </section>
        </header>
    )
}

export default Header
