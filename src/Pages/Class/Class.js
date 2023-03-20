import { useEffect, useState } from "react";
import Hero from "./components/Hero";

const cnInfo = [
  "*型号",
  "*品牌",
  "数量",
  "目标价格",
  "备注",
  "姓名",
  "公司",
  "邮箱",
  "电话",
  "留言信息",
  "询价",
];

const enInfo = [
  "*Model number",
  "*brand",
  "quantity",
  "Target price",
  "remarks",
  "name",
  "company",
  "mailbox",
  "telephone",
  "message",
  "Make an inquiry",
];

const ClassApp = (props) => {
  const { lang } = props;
  const [langInfo, setLangInfo] = useState(cnInfo);
  useEffect(() => {
    setLangInfo(lang === "cn" ? cnInfo : enInfo);
  }, [lang]);

  return (
    <>
      <Hero lang={lang} />
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
                      {langInfo[0]}
                    </label>
                    <input className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: "#FB5B21" }}>
                      {langInfo[1]}
                    </label>
                    <input className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: "#FB5B21" }}>
                      {langInfo[2]}
                    </label>
                    <input className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: "#FB5B21" }}>
                      {langInfo[3]}
                    </label>
                    <input className="form-control" />
                  </div>
                  <div className="col-12">
                    <label className="form-label" style={{ color: "#FB5B21" }}>
                      {langInfo[4]}
                    </label>
                    <input className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: "#FB5B21" }}>
                      {langInfo[5]}
                    </label>
                    <input className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: "#FB5B21" }}>
                      {langInfo[6]}
                    </label>
                    <input className="form-control" />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" style={{ color: "#FB5B21" }}>
                      {langInfo[7]}
                    </label>
                    <input className="form-control" />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" style={{ color: "#FB5B21" }}>
                      {langInfo[8]}
                    </label>
                    <input className="form-control" />
                  </div>
                  <div className="col-6">
                    <label className="form-label" style={{ color: "#FB5B21" }}>
                      {langInfo[9]}
                    </label>
                    <input className="form-control" />
                  </div>
                  <div
                    className="col-12"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <button type="submit" className="btn btn-outline-primary">
                      {langInfo[10]}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassApp;
