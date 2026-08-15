class FCPHeader extends HTMLElement {

    connectedCallback() {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();

        const isNews =
            currentPage === "news.html";

        const isMagazine =
            currentPage === "magazine.html";

        const isHome =
            currentPage === "" ||
            currentPage === "index.html";

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
                            href="${isHome ? "#films" : "index.html#films"}"
                        >
                            Work
                        </a>

                        <a
                            href="magazine.html"
                            class="${isMagazine ? "active" : ""}"
                        >
                            Magazine
                        </a>

                    </nav>


                    <p class="fcp-header-manifesto">
                        Long story short, we like movies so we make movies,
                        about all sorts of things. Join the fun.
                    </p>

                </div>

            </header>
        `;

    }

}

customElements.define(
    "fcp-header",
    FCPHeader
);