const DetailStart = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row g-5">
        <div className="col-lg-8">
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">常见问题</h3>
            <div className="d-flex mb-3">
              <img
                src="/static/img/user.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">顾客</a>{" "}
                  <small>
                    <i>2022/2/6</i>
                  </small>
                </h6>
                <p>为什么选择我们？</p>
              </div>
            </div>
            <div className="d-flex ms-5 mb-4">
              <img
                src="/static/img/user.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">客服</a>{" "}
                  <small>
                    <i>2022/2/6</i>
                  </small>
                </h6>
                <p>
                  我们专注于集成电路20多年，是一家专业的电子元器件代理商和渠道分销商。原创产品，有竞争力的价格，快速交货/良好的售后服务是突出的竞争优势。
                </p>
              </div>
            </div>
            <div className="d-flex mb-2">
              <img
                src="/static/img/user.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">顾客</a>{" "}
                  <small>
                    <i>2022/6/8</i>
                  </small>
                </h6>
                <p>你能提供商店中没有列出的其他电子部件吗？</p>
              </div>
            </div>
            <div className="d-flex ms-5 mb-4">
              <img
                src="/static/img/user.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">客服</a>{" "}
                  <small>
                    <i>2022/6/8</i>
                  </small>
                </h6>
                <p>
                  当然，如果你需要，我们可以为你找任何产品。点击“联系供应商”按钮，向我们发送询价信息，包括您需要的零件号和数量。
                </p>
              </div>
            </div>
            <div className="d-flex mb-2">
              <img
                src="/static/img/user.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">顾客</a>{" "}
                  <small>
                    <i>2022/8/10</i>
                  </small>
                </h6>
                <p>你们接受样品订单吗？</p>
              </div>
            </div>
            <div className="d-flex ms-5 mb-4">
              <img
                src="/static/img/user.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">客服</a>{" "}
                  <small>
                    <i>2022/8/10</i>
                  </small>
                </h6>
                <p>是的，我们接受样品订单，请随时与我们联系。</p>
              </div>
            </div>
            <div className="d-flex mb-2">
              <img
                src="/static/img/user.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">顾客</a>{" "}
                  <small>
                    <i>2022/8/10</i>
                  </small>
                </h6>
                <p>你们提供BOM清单报价服务吗？我可以把我的BOM清单报价单发给你吗？</p>
              </div>
            </div>
            <div className="d-flex ms-5 mb-4">
              <img
                src="/static/img/user.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">客服</a>{" "}
                  <small>
                    <i>2022/8/10</i>
                  </small>
                </h6>
                <p>当然可以。请联系我们并将您的BOM表报价发送给我们，然后我们将为您报价。</p>
              </div>
            </div>
          </div>
          <div className="bg-dark rounded p-5">
            <h3 className="text-light text-uppercase mb-4">咨询提问</h3>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-white border-0"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control bg-white border-0"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control bg-white border-0"
                    placeholder="Website"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-white border-0"
                    rows="5"
                    placeholder="Comment"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Leave Your Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-4">
          <div>
            <h3 className="text-uppercase mb-4">温馨提示</h3>
            <div
              className="bg-dark rounded text-center text-light"
              style={{ padding: 30 }}
            >
              <p>
                如果您有更多不明白的，可以提交问题或者点击获取更多方式联系我们
              </p>
              <a href="" className="btn btn-primary py-2 px-4">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailStart;
