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
  <nav class="navbar navbar-expand-sm navbar-dark fixed-top">
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
                            <a class="nav-link" href="/about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/testimonies.html">Testimonies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-outline-light ms-lg-3" href="#">Register</a>
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

  