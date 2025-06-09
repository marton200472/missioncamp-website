const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
        background-color: rgba(15, 28, 71, .95);
    }

    nav .nav-link {
        color: white;
    }

    nav .nav-link.active {
        text-decoration: underline;
        text-underline-offset: 3pt;
    }

    .navbar-brand {
        font-weight: bold;
    }
  </style>
  <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Europe Mission Camp</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-end">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" href="//www.intercpinternational.org">About<svg style="display: inline-block; margin-left: 3pt; margin-bottom: 3pt;" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/testimonies.html">Testimonies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-outline-light ms-lg-3" target="_blank" href="//tinyurl.com/EuropeMC25">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    //const shadowRoot = this.attachShadow({ mode: 'closed' });

    //shadowRoot.appendChild(headerTemplate.content);
    this.appendChild(headerTemplate.content);

    let links = document.getElementsByClassName("nav-link");
    for (let element of links) {
        if (element.href == window.location.href) {
            element.classList.add("active");
        }
    } 
  }
}

customElements.define('header-component', Header);

  