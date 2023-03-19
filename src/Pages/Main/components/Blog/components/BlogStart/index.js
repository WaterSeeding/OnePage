const BlogStart = () => {
  const dataList = Array.from({ length: 10 });
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
                QQ：3117541604
              </a>
              <a
                className="fs-5 fw-bold text-light text-uppercase mb-2"
                href="#"
              >
                <i className="bi bi-arrow-right text-primary me-2"></i>手机：+86
                13342986657
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                联系人：陈先生
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                whatsapp：+86 13342986657
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Skype：vivi@jcwyic.com
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Email：vivi@jcwyic.com
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
          <div className="row g-5 pt-4">
            {dataList.map((value, index) => (
              <div key={index} className="job-item p-4 mt-0 mb-0">
                <div className="row g-4">
                  <div className="col-sm-12 col-md-8 d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid border rounded"
                      src="/static/img/img/com-logo-1.jpg"
                      alt=""
                      style={{ width: 80, height: 80 }}
                    />
                    <div className="text-start ps-4">
                      <h5 className="mb-3">Software Engineer</h5>
                      <span className="text-truncate me-3">
                        <i className="fa fa-map-marker-alt text-primary me-2"></i>
                        New York, USA
                      </span>
                      <span className="text-truncate me-3">
                        <i className="far fa-clock text-primary me-2"></i>Full
                        Time
                      </span>
                      <span className="text-truncate me-0">
                        <i className="far fa-money-bill-alt text-primary me-2"></i>
                        $123 - $456
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div className="d-flex mb-3">
                      <a className="btn btn-light btn-square me-3" href="">
                        <i className="far fa-heart text-primary"></i>
                      </a>
                      <a className="btn btn-primary" href="">
                        Apply Now
                      </a>
                    </div>
                    <small className="text-truncate">
                      <i className="far fa-calendar-alt text-primary me-2"></i>
                      Date Line: 01 Jan, 2045
                    </small>
                  </div>
                </div>
              </div>
            ))}
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
