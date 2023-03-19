const About = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row gx-5">
        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded"
              src="/static/img/main/RFQ.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="rounded bg-dark p-4">
            <h2
              className="display-4 text-uppercase mb-0"
              style={{ color: "#FB5B21", paddingBottom: 10 }}
            >
              RFQ
            </h2>
            <div className="tab-content">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    *型号
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    *品牌
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    数量
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    目标价格
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-12">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    备注
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    姓名
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    公司
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-md-3">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    邮箱
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-md-3">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    电话
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    留言信息
                  </label>
                  <input className="form-control" />
                </div>
                <div
                  className="col-12"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <button type="submit" className="btn btn-outline-primary">
                    询价
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
