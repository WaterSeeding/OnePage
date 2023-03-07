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
            <img
              class="img-thumbnail"
              style={{ width: 160, height: "auto" }}
              src="/static/img/main/logo.jpg"
              alt=""
            ></img>
          </a>
        </div>
        <div className="col-lg-9">
          <div className="row gx-0 bg-secondary d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i class="bi bi-geo-alt text-primary me-2"></i>
                <h6 className="mb-0 font-weight-bold">深圳市佳创伟业科技有限公司</h6>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a className="btn btn-light btn-square rounded-circle me-2">
                  <img
                    class="img-thumbnail"
                    style={{ width: 24, height: "auto" }}
                    src="/static/img/main/chinese.gif"
                    alt=""
                  ></img>
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2">
                  <img
                    class="img-thumbnail"
                    style={{ width: 24, height: "auto" }}
                    src="/static/img/main/english.gif"
                    alt=""
                  ></img>
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
                  className={`nav-item nav-link font-weight-bold ${
                    activeItem === "Main" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Main")}
                >
                  首页
                </a>
                <a
                  className={`nav-item nav-link font-weight-bold ${
                    activeItem === "About" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("About")}
                >
                  产品目录
                </a>
                <a
                  className={`nav-item nav-link font-weight-bold ${
                    activeItem === "Classes" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Classes")}
                >
                  发送询价
                </a>
                <a
                  className={`nav-item nav-link font-weight-bold ${
                    activeItem === "Team" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Team")}
                >
                  产品展示
                </a>
                <a
                  className={`nav-item nav-link font-weight-bold ${
                    activeItem === "Blog" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Blog")}
                >
                  关于我们
                </a>
                <a
                  className="nav-item nav-link font-weight-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("Contact")}
                >
                  FAQ
                </a>
              </div>
              <a
                className="btn btn-primary font-weight-bold py-md-3 px-md-5 d-none d-lg-block"
                style={{ cursor: "pointer" }}
                onClick={() => console.log("Join Us")}
              >
                联系我们
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
