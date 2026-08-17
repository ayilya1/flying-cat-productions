class FCPHeader extends HTMLElement {

    connectedCallback() {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        const isNews =
            currentPage === "news.html";

        const isSlate =
            currentPage === "slate.html";

        const isMagazine =
            currentPage === "magazine.html";


        this.innerHTML = `

            <header class="fcp-site-header">

                <a
                    href="index.html"
                    class="fcp-home-logo"
                    aria-label="Flying Cat Productions home"
                >

                    <img
                        src="assets/homepage/flying-cat-logo.png"
                        alt="Flying Cat Productions"
                    >

                </a>


                <div class="fcp-header-right">


                    <!-- DESKTOP NAV -->

                    <nav
                        class="fcp-main-nav"
                        aria-label="Main navigation"
                    >

                        <a
                            href="news.html"
                            class="${isNews ? "active" : ""}"
                        >
                            News
                        </a>

                        <a
                            href="slate.html"
                            class="${isSlate ? "active" : ""}"
                        >
                            Slate
                        </a>

                        <a
                            href="magazine.html"
                            class="${isMagazine ? "active" : ""}"
                        >
                            Magazine
                        </a>

                    </nav>


                    <!-- MOBILE MENU BUTTON -->

                    <button
                        class="fcp-menu-toggle"
                        type="button"
                        aria-label="Open menu"
                        aria-expanded="false"
                    >

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>


                    <p class="fcp-header-manifesto">
                        Long story short, we like movies so we make movies,
                        about all sorts of things. Join the fun.
                    </p>

                </div>


                <!-- MOBILE MENU -->

                <nav
                    class="fcp-mobile-menu"
                    aria-label="Mobile navigation"
                >

                    <a
                        href="news.html"
                        class="${isNews ? "active" : ""}"
                    >
                        News
                    </a>

                    <a
                        href="slate.html"
                        class="${isSlate ? "active" : ""}"
                    >
                        Slate
                    </a>

                    <a
                        href="magazine.html"
                        class="${isMagazine ? "active" : ""}"
                    >
                        Magazine
                    </a>

                </nav>

            </header>
        `;


        const toggle =
            this.querySelector(
                ".fcp-menu-toggle"
            );


        const menu =
            this.querySelector(
                ".fcp-mobile-menu"
            );


        const mobileLinks =
            this.querySelectorAll(
                ".fcp-mobile-menu a"
            );


        /* OPEN / CLOSE MENU */

        toggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    menu.classList.toggle(
                        "open"
                    );


                toggle.classList.toggle(
                    "open",
                    isOpen
                );


                toggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );


                toggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close menu"
                        : "Open menu"
                );

            }
        );


        /* CLOSE MENU AFTER CLICKING A LINK */

        mobileLinks.forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        menu.classList.remove(
                            "open"
                        );


                        toggle.classList.remove(
                            "open"
                        );


                        toggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        toggle.setAttribute(
                            "aria-label",
                            "Open menu"
                        );

                    }
                );

            }
        );

    }

}


customElements.define(
    "fcp-header",
    FCPHeader
);