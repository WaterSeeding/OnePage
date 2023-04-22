import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cnInfo = [
  "联系我们",
  "深圳市福田区振华路飞亚达大厦西座518",
  "链接访问",
  "首页",
  "发送询价",
  "FAQ",
  "产品展示",
  "产品目录",
  "关于我们",
  "订阅信息",
  "最新资讯，可以推送给您！",
  "你的邮箱...",
  "提交",
  "粤ICP备13019005号",
];

const enInfo = [
  "Contact us",
  "518, West Building, Feiyada Building, Zhenhua Road, Futian District, Shenzhen",
  "Link access",
  "Home",
  "Send RFQ",
  "FAQ",
  "Product Pictures",
  "Products",
  "About",
  "Subscription information",
  "The latest information can be pushed to you！",
  "Your email...",
  "Submit",
  "粤ICP备13019005号",
];

const Footer = (props) => {
  const { lang } = props;
  const [langInfo, setLangInfo] = useState(cnInfo);
  useEffect(() => {
    setLangInfo(lang === "cn" ? cnInfo : enInfo);
  }, [lang]);

  const navigate = useNavigate();
  const gotoPage = (name) => {
    navigate("/" + name);
    window.$("html, body").animate({ scrollTop: 0 }, 300, "easeInOutExpo");
  };

  return (
    <>
      <div className="container-fluid bg-dark text-secondary px-5 mt-5">
        <div className="row gx-5">
          <div className="col-lg-7 col-md-6">
            <div className="row">
              <div className="col-lg-6 col-md-12 pt-5 mb-5">
                <h4 className="text-uppercase text-light mb-4">
                  {langInfo[0]}
                </h4>
                <div className="d-flex mb-3">
                  <i className="bi bi-geo-alt text-primary me-2"></i>
                  <p className="mb-0">{langInfo[1]}</p>
                </div>
                <div className="d-flex mb-3">
                  <i className="bi bi-envelope-open text-primary me-2"></i>
                  <p className="mb-0">0755-82806855 /82806939</p>
                </div>
                <div className="d-flex mb-3">
                  <i className="bi bi-telephone text-primary me-2"></i>
                  <p className="mb-0">+86 13510726338</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5">
                <h4 className="text-uppercase text-light mb-4">
                  {langInfo[2]}
                </h4>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="d-flex flex-column justify-content-start">
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => gotoPage("")}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {langInfo[3]}
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => gotoPage("RFQ")}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {langInfo[4]}
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => gotoPage("FAQ")}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {langInfo[5]}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="d-flex flex-column justify-content-start">
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => gotoPage("PICTURES")}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {langInfo[6]}
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => gotoPage("PRODUCTS")}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {langInfo[7]}
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => gotoPage("ABOUT")}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {langInfo[8]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="d-flex flex-row align-items-center justify-content-between text-center h-100 bg-primary p-5">
              <img
                className="rounded"
                src="/static/img/main/weixin.png"
                style={{ width: 200, height: 200, objectFit: "cover" }}
              />
              <img
                className="rounded"
                src="/static/img/main/whatsapp.png"
                style={{ width: 200, height: 200, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-4 py-lg-0 px-5"
        style={{ background: " #111111" }}
      >
        <div className="row gx-5">
          <div className="col-lg-12">
            <div className="py-lg-4 text-center">
              <p className="text-secondary mb-0">
                &copy;{" "}
                <a className="text-light fw-bold" style={{ cursor: "pointer" }}>
                  {langInfo[13]}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
