import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Main");
  const navigate = useNavigate();
  const gotoPage = (name) => {
    navigate("/" + name);
    setActiveItem(name);
  };
  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0">
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
            <h1 className="m-0 display-4 text-primary text-uppercase">
              Gymster
            </h1>
          </a>
        </div>
        <div className="col-lg-9">
          <div className="row gx-0 bg-secondary d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <h6 className="mb-0">info@example.com</h6>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                <h6 className="mb-0">+012 345 6789</h6>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a className="btn btn-light btn-square rounded-circle me-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
            <a className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 display-4 text-primary text-uppercase">
                Gymster
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <a
                  className={`nav-item nav-link ${
                    activeItem === "Main" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Main")}
                >
                  Home
                </a>
                <a
                  className={`nav-item nav-link ${
                    activeItem === "About" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("About")}
                >
                  About
                </a>
                <a
                  className={`nav-item nav-link ${
                    activeItem === "Classes" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Classes")}
                >
                  Classes
                </a>
                <a
                  className={`nav-item nav-link ${
                    activeItem === "Team" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Team")}
                >
                  Trainers
                </a>
                <a
                  className={`nav-item nav-link ${
                    activeItem === "Blog" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Blog")}
                >
                  Blog Grid
                </a>
                <a
                  className={`nav-item nav-link ${
                    activeItem === "Detail" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Detail")}
                >
                  Blog Detail
                </a>
                <a
                  className={`nav-item nav-link ${
                    activeItem === "Testimonial" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Testimonial")}
                >
                  Testimonial
                </a>
                <a
                  className="nav-item nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Contact")}
                >
                  Contact
                </a>
              </div>
              <a
                className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block"
                style={{ cursor: "pointer" }}
                onClick={() => console.log("Join Us")}
              >
                Join Us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
