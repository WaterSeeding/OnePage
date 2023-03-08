const BlogStart = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row g-5">
        <div className="col-lg-4">
          <div className="mb-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-3"
                placeholder="库存搜索"
              />
              <button className="btn btn-primary px-4">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">联系方式</h3>
            <div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
              <a
                className="fs-5 fw-bold text-light text-uppercase mb-2"
                href="#"
              >
                <i className="bi bi-arrow-right text-primary me-2"></i>
                TEL：0755-82806855 /82806929
              </a>
              <a
                className="fs-5 fw-bold text-light text-uppercase mb-2"
                href="#"
              >
                <i className="bi bi-arrow-right text-primary me-2"></i>
                FAX：0755-82806919
              </a>
              <a
                className="fs-5 fw-bold text-light text-uppercase mb-2"
                href="#"
              >
                <i className="bi bi-arrow-right text-primary me-2"></i>
                QQ：408444540
              </a>
              <a
                className="fs-5 fw-bold text-light text-uppercase mb-2"
                href="#"
              >
                <i className="bi bi-arrow-right text-primary me-2"></i>手机：86
                18312533779
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                联系人：陈小姐
              </a>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">快递查询</h3>
            <div className="bg-dark rounded p-4">
              <div className="d-flex justify-content-between overflow-hidden mb-3 bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/fedex.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  联邦快递（ FedEx）
                </a>
              </div>
              <div className="d-flex justify-content-between overflow-hidden mb-3 bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/sf.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  联邦快递（ FedEx）
                </a>
              </div>
              <div className="d-flex justify-content-between overflow-hidden mb-3 bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/ddh.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  联邦快递（ FedEx）
                </a>
              </div>
              <div className="d-flex justify-content-between overflow-hidden mb-3 bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/tnt.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  联邦快递（ FedEx）
                </a>
              </div>
              <div className="d-flex justify-content-between overflow-hidden mb-3 bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/ups.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  联邦快递（ FedEx）
                </a>
              </div>
              <div className="d-flex justify-content-between overflow-hidden bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/ems.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  联邦快递（ FedEx）
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row g-5">
            <div className="col-md-6">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="/static/img/blog-1.jpg"
                    alt=""
                  />
                </div>
                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                    <span>01</span>
                    <h6 className="text-light text-uppercase mb-0">January</h6>
                    <span>2045</span>
                  </div>
                  <a className="h5 text-uppercase text-light" href="">
                    Sed amet tempor amet sit kasd sea lorem
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="/static/img/blog-2.jpg"
                    alt=""
                  />
                </div>
                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                    <span>01</span>
                    <h6 className="text-light text-uppercase mb-0">January</h6>
                    <span>2045</span>
                  </div>
                  <a className="h5 text-uppercase text-light" href="">
                    Sed amet tempor amet sit kasd sea lorem
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="/static/img/blog-3.jpg"
                    alt=""
                  />
                </div>
                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                    <span>01</span>
                    <h6 className="text-light text-uppercase mb-0">January</h6>
                    <span>2045</span>
                  </div>
                  <a className="h5 text-uppercase text-light" href="">
                    Sed amet tempor amet sit kasd sea lorem
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="/static/img/blog-1.jpg"
                    alt=""
                  />
                </div>
                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                    <span>01</span>
                    <h6 className="text-light text-uppercase mb-0">January</h6>
                    <span>2045</span>
                  </div>
                  <a className="h5 text-uppercase text-light" href="">
                    Sed amet tempor amet sit kasd sea lorem
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="/static/img/blog-2.jpg"
                    alt=""
                  />
                </div>
                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                    <span>01</span>
                    <h6 className="text-light text-uppercase mb-0">January</h6>
                    <span>2045</span>
                  </div>
                  <a className="h5 text-uppercase text-light" href="">
                    Sed amet tempor amet sit kasd sea lorem
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="/static/img/blog-3.jpg"
                    alt=""
                  />
                </div>
                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                    <span>01</span>
                    <h6 className="text-light text-uppercase mb-0">January</h6>
                    <span>2045</span>
                  </div>
                  <a className="h5 text-uppercase text-light" href="">
                    Sed amet tempor amet sit kasd sea lorem
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="/static/img/blog-1.jpg"
                    alt=""
                  />
                </div>
                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                    <span>01</span>
                    <h6 className="text-light text-uppercase mb-0">January</h6>
                    <span>2045</span>
                  </div>
                  <a className="h5 text-uppercase text-light" href="">
                    Sed amet tempor amet sit kasd sea lorem
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-item">
                <div className="position-relative overflow-hidden rounded-top">
                  <img
                    className="img-fluid"
                    src="/static/img/blog-2.jpg"
                    alt=""
                  />
                </div>
                <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                    <span>01</span>
                    <h6 className="text-light text-uppercase mb-0">January</h6>
                    <span>2045</span>
                  </div>
                  <a className="h5 text-uppercase text-light" href="">
                    Sed amet tempor amet sit kasd sea lorem
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-lg justify-content-start m-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="bi bi-arrow-left"></i>
                      </span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogStart;
