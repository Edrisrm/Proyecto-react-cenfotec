import React from "react";
import { Link } from "react-router-dom";
import profile from "../../../assets/user.png";
import logo from "../../../assets/My_agenda.png";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            className="rounded-circle img-logo"
            alt="my_agenda"
          />
          <em className="ms-3">My agenda</em>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown dropstart mr-5">
                <Link
                  className="nav-link m-2 btn btn-primary btn-lg text-white"
                  to="/agendar"
                >
                  Agendar
                </Link>
              </li>
              <li className="nav-item dropdown dropstart mr-5">
                <Link
                  className="dropdown-toggle profile-image"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={profile}
                    width="50"
                    className="rounded-circle"
                    alt="image_profile"
                  />
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/register">
                      Register
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
