type HeaderProps = { headerPosition?: boolean };

const Header: React.FC<HeaderProps> = ({ headerPosition }) => {
  return (
    <header
      className="header_section"
      style={{
        position: headerPosition ? "absolute" : "static",
        backgroundColor: headerPosition ? "" : "#fdd31d",
      }}
    >
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
          data-navbar-on-scroll="data-navbar-on-scroll"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <picture>
                <img src="/img/gallery/logo.png" height="45" alt="logo" />
              </picture>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            <div
              className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                <li className="nav-item px-2">
                  <a className="nav-link" aria-current="page" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#services">
                    Our Services
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#findUs">
                    Find Us
                  </a>
                </li>
              </ul>
              <div className="dropdown d-none d-lg-block">
                <button
                  className="btn bg-soft-warning ms-2"
                  id="dropdownMenuButton1"
                  type="submit"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-search text-warning"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg-end p-0 rounded"
                  aria-labelledby="dropdownMenuButton1"
                  style={{ top: "55px" }}
                >
                  <form>
                    <input
                      className="form-control border-200"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ background: "#FDF1DF" }}
                    />
                  </form>
                </div>
              </div>
              <a
                className="btn btn-primary order-1 order-lg-0 ms-lg-3"
                href="#!"
              >
                Contact Us
              </a>
              <form className="d-flex my-3 d-block d-lg-none">
                <input
                  className="form-control me-2 border-200 bg-light"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
