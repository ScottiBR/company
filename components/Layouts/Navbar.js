import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import SidebarModal from "./SidebarModal";
import { useTranslation } from 'react-i18next';

const NavLink = () => {
  const { t } = useTranslation();

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link href="/about-us" activeClassName="active">
          <a className="nav-link">{t("navbar.aboutUs")}</a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/contact" activeClassName="active">
          <a className="nav-link">{t("navbar.contact")}</a>
        </Link>
      </li>
    </ul>
  );
};

class Navbar extends Component {
  // Sidebar Modal
  state = {
    sidebarModal: false,
  };
  toggleModal = () => {
    this.setState({
      sidebarModal: !this.state.sidebarModal,
    });
  };

  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="neemo-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <NavLink />

                </div>
              </nav>
            </div>
          </div>
        </div>

       
      </>
    );
  }
}

export default Navbar;
