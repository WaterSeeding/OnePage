import { useEffect, useState } from "react";

const cnInfo = [
  "联系我们",
  "深圳市福田区振华路飞亚达大厦西座518",
  "链接访问",
  "首页",
  "发送询价",
  "FAQ",
  "产品目录",
  "产品展示",
  "关于我们",
  "订阅信息",
  "最新资讯，可以推送给您！",
  "你的邮箱...",
  "提交",
  "粤ICP备13019005号",
];

const enInfo = [
  "Contact us",
  "深圳市福田区振华路飞亚达大厦西座518",
  "Link access",
  "Home",
  "Send RFQ",
  "FAQ",
  "Products",
  "Product Pictures",
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
  return (
    <>
      <div className="container-fluid bg-dark text-secondary px-5 mt-5">
        <div className="row gx-5">
          <div className="col-lg-8 col-md-6">
            <div className="row gx-5">
              <div className="col-lg-6 col-md-12 pt-5 mb-5">
                <h4 className="text-uppercase text-light mb-4">{langInfo[0]}</h4>
                <div className="d-flex mb-3">
                  <i className="bi bi-geo-alt text-primary me-2"></i>
                  <p className="mb-0">{langInfo[1]}</p>
                </div>
                <div className="d-flex mb-3">
                  <i className="bi bi-envelope-open text-primary me-2"></i>
                  <p className="mb-0">0755-82806855 /82806929</p>
                </div>
                <div className="d-flex mb-3">
                  <i className="bi bi-telephone text-primary me-2"></i>
                  <p className="mb-0">+86 13342986657</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5">
                <h4 className="text-uppercase text-light mb-4">{langInfo[2]}</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="d-flex flex-column justify-content-start">
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {langInfo[3]}
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {langInfo[4]}
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
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
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {langInfo[6]}
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {langInfo[7]}
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
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
          <div className="col-lg-4 col-md-6">
            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-5">
              <h4 className="text-uppercase text-white mb-4">{langInfo[9]}</h4>
              <h6 className="text-uppercase text-white mb-4">
              {langInfo[10]}
              </h6>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-white p-3"
                    placeholder={langInfo[11]}
                  />
                  <button className="btn btn-dark">{langInfo[12]}</button>
                </div>
              </form>
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
