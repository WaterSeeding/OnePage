import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const cnInfo = [
  "深圳市佳创伟业科技有限公司",
  "首页",
  "发送询价",
  "产品展示",
  "产品目录",
  "FAQ",
  "关于我们",
  "联系我们",
];

const enInfo = [
  "ShenZhen JiaChuang WeiYe Technology Co.,Ltd",
  "Home",
  "Send RFQ",
  "Product Pictures",
  "Products",
  "FAQ",
  "About",
  "Contact US",
];

const Header = (props) => {
  const { lang, setLang } = props;
  const [langInfo, setLangInfo] = useState(cnInfo);
  const [activeItem, setActiveItem] = useState("Main");

  useEffect(() => {
    setLangInfo(lang === "cn" ? cnInfo : enInfo);
  }, [lang]);

  const navigate = useNavigate();
  const location = useLocation();

  const gotoPage = (name) => {
    navigate("/" + name);
  };

  useEffect(() => {
    let name = location.pathname.replace("/", "")
    setActiveItem(name);
  }, [location]);

  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0">
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
            <img
              className="img-thumbnail"
              style={{ width: 160, height: "auto", border: 0, backgroundColor: 'transparent' }}
              src="/static/img/main/logo.jpg"
              alt=""
            ></img>
          </a>
        </div>
        <div className="col-lg-9">
          <div className="row gx-0 bg-white d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <h4 className="mb-0 font-weight-bold">{langInfo[0]}</h4>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a
                  className={`btn ${
                    lang === "cn" ? "btn-light" : ""
                  } btn-square rounded-circle me-2`}
                  onClick={() => setLang("cn")}
                >
                  <img
                    className="img-thumbnail"
                    style={{ width: 24, height: "auto" }}
                    src="/static/img/main/chinese.gif"
                    alt=""
                  ></img>
                </a>
                <a
                  className={`btn ${
                    lang === "en" ? "btn-light" : ""
                  } btn-square rounded-circle me-2`}
                  onClick={() => setLang("en")}
                >
                  <img
                    className="img-thumbnail"
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
              <img
                className="img-thumbnail"
                style={{ width: 80, height: "auto" }}
                src="/static/img/main/logo.jpg"
                alt=""
              ></img>
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
                    activeItem === "" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("")}
                >
                  {langInfo[1]}
                </a>
                <a
                  className={`nav-item nav-link font-weight-bold ${
                    activeItem === "RFQ" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("RFQ")}
                >
                  {langInfo[2]}
                </a>
                <a
                  className={`nav-item nav-link font-weight-bold ${
                    activeItem === "PICTURES" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("PICTURES")}
                >
                  {langInfo[3]}
                </a>
                <a
                  className={`nav-item nav-link font-weight-bold ${
                    activeItem === "PRODUCTS" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("PRODUCTS")}
                >
                  {langInfo[4]}
                </a>
                <a
                  className="nav-item nav-link font-weight-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("FAQ")}
                >
                  {langInfo[5]}
                </a>
                <a
                  className={`nav-item nav-link font-weight-bold ${
                    activeItem === "ABOUT" && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotoPage("ABOUT")}
                >
                  {langInfo[6]}
                </a>
              </div>
              <a
                className="btn btn-primary font-weight-bold py-md-3 px-md-5 d-none d-lg-block"
                style={{ cursor: "pointer" }}
                onClick={() => gotoPage("CONTACT")}
              >
                {langInfo[7]}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
