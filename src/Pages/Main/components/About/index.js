import { useEffect, useState } from "react";
import axios from "../../../_axios";

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

const testConsultationInfo = {
  model: "MC14094BDTR2G",
  brand: "ON",
  quantity: "20",
  target_price: "500",
  remark: "国产的",
  name: "张先生",
  company: "腾讯",
  email: "13826506407@139.com",
  phone: "13826506407",
  message: "要购买",
};

const initConsultationInfo = {
  model: "",
  brand: "",
  quantity: "",
  target_price: "",
  remark: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

const ClassApp = (props) => {
  const { lang } = props;
  const [langInfo, setLangInfo] = useState(cnInfo);
  const [consultationInfo, setConsultationInfo] =
    useState(initConsultationInfo);

  useEffect(() => {
    setLangInfo(lang === "cn" ? cnInfo : enInfo);
  }, [lang]);

  const reqConsultationData = (consultationInfo) => {
    let isKongKeyValue = false;
    Object.keys(consultationInfo).forEach((key) => {
      if (!consultationInfo[key]) {
        isKongKeyValue = true;
      } else if (key === "target_price") {
        consultationInfo[key] = Number(consultationInfo[key]);
      }
    });
    if (isKongKeyValue) {
      alert(
        lang === "cn"
          ? "请将询价信息输入完整!"
          : "Please enter the inquiry information completely!"
      );
    } else {
      axios.post("/back-server/api/enquiry", consultationInfo).then((data) => {
        console.log("data", data);
        alert(
          lang === "cn"
            ? "您的询价已经提交，稍后有人会与你联系!"
            : "Your RFQ has been submitted and someone will contact you later!"
        );
      });
    }
  };

  return (
    <div className="container-fluid p-5">
      <div className="row gx-5">
        <div className="col-lg-6 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded"
              src="/static/img/carousel-1.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6">
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
                  <input
                    className="form-control"
                    defaultValue={consultationInfo.model}
                    onChange={(e) => {
                      setConsultationInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.model = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    {langInfo[1]}
                  </label>
                  <input
                    className="form-control"
                    defaultValue={consultationInfo.brand}
                    onChange={(e) => {
                      setConsultationInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.brand = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    {langInfo[2]}
                  </label>
                  <input
                    className="form-control"
                    defaultValue={consultationInfo.quantity}
                    onChange={(e) => {
                      setConsultationInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.quantity = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    {langInfo[3]}
                  </label>
                  <input
                    className="form-control"
                    defaultValue={consultationInfo.target_price}
                    onChange={(e) => {
                      setConsultationInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.target_price = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    {langInfo[4]}
                  </label>
                  <input
                    className="form-control"
                    defaultValue={consultationInfo.remark}
                    onChange={(e) => {
                      setConsultationInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.remark = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    {langInfo[5]}
                  </label>
                  <input
                    className="form-control"
                    defaultValue={consultationInfo.name}
                    onChange={(e) => {
                      setConsultationInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.name = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    {langInfo[6]}
                  </label>
                  <input
                    className="form-control"
                    defaultValue={consultationInfo.company}
                    onChange={(e) => {
                      setConsultationInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.company = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    {langInfo[7]}
                  </label>
                  <input
                    className="form-control"
                    defaultValue={consultationInfo.email}
                    onChange={(e) => {
                      setConsultationInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.email = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    {langInfo[8]}
                  </label>
                  <input
                    className="form-control"
                    defaultValue={consultationInfo.phone}
                    onChange={(e) => {
                      setConsultationInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.phone = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label" style={{ color: "#FB5B21" }}>
                    {langInfo[9]}
                  </label>
                  <input
                    className="form-control"
                    defaultValue={consultationInfo.message}
                    onChange={(e) => {
                      setConsultationInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.message = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div
                  className="col-12"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <a
                    className="btn btn-outline-primary"
                    onClick={() => reqConsultationData(consultationInfo)}
                  >
                    {langInfo[10]}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassApp;
