const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-secondary px-5 mt-5">
        <div className="row gx-5">
          <div className="col-lg-8 col-md-6">
            <div className="row gx-5">
              <div className="col-lg-6 col-md-12 pt-5 mb-5">
                <h4 className="text-uppercase text-light mb-4">联系我们</h4>
                <div className="d-flex mb-3">
                  <i className="bi bi-geo-alt text-primary me-2"></i>
                  <p className="mb-0">
                  深圳市福田区振华路飞亚达大厦西座518
                  </p>
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
                <h4 className="text-uppercase text-light mb-4">链接访问</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="d-flex flex-column justify-content-start">
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        首页
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        发送询价
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        FAQ
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
                        产品目录
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        产品展示
                      </a>
                      <a
                        className="text-secondary mb-2"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        关于我们
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-5">
              <h4 className="text-uppercase text-white mb-4">订阅信息</h4>
              <h6 className="text-uppercase text-white mb-4">
                最新资讯，可以推送给您！
              </h6>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-white p-3"
                    placeholder="你的邮箱..."
                  />
                  <button className="btn btn-dark">提交</button>
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
                  粤ICP备13019005号
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
