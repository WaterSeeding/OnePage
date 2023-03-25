import { useEffect, useState } from "react";
import axios from "../../../_axios";

const cnInfo = [
  "常见问题",
  "顾客",
  "为什么选择你们？",
  "客服",
  "我们专注于集成电路20多年，是一家专业的电子元器件代理商和渠道分销商。原创产品，有竞争力的价格，快速交货/良好的售后服务是突出的竞争优势。",
  "顾客",
  "你能提供商店中没有列出的其他电子部件吗？",
  "客服",
  "当然，如果你需要，我们可以为你找任何产品。点击“联系供应商”按钮，向我们发送询价信息，包括您需要的零件号和数量。",
  "顾客",
  "你们接受样品订单吗？",
  "客服",
  "是的，我们接受样品订单，请随时与我们联系。",
  "顾客",
  "你们提供BOM清单报价服务吗？我可以把我的BOM清单报价单发给你吗？",
  "客服",
  "当然可以。请联系我们并将您的BOM表报价发送给我们，然后我们将为您报价。",
  "温馨提示",
  "如果您还有不明白的，欢迎向我们提问！",
  "姓名",
  "电话",
  "邮箱",
  "问题",
  "提交问题",
];

const enInfo = [
  "FAQ",
  "Customer",
  "Why choose you?",
  "Servicer",
  "We focus on integrated circuit over 20 years, is a professional electronic component agent and channel distributor. Original products, Competitive price, Fast delivery/Good after-sales services is outstanding and competitive advantages. ",
  "Customer",
  "Can you offer other electronic components that are not listed on your store? ",
  "Servicer",
  `Sure, we can look for any products for you if you need. Click the "Contact Supplier" button and send the inquiry message to us including the part number and the quantity that you need. `,
  "Customer",
  "Do you accept sample order? ",
  "Servicer",
  "Yes, we accept sample order, please feel free to contact us. ",
  "Customer",
  "Do you provide the BOM list Quotation service? Can I send my BOM list Quotation to you? ",
  "Servicer",
  "Yes certainly. Please just contact us and send us your BOM list Quotation and then we'll quote for you. ",
  "Warm Prompt",
  "If you still don't understand, welcome to ask us!",
  "Your Name",
  "Your Phone",
  "Your Email",
  "Your Problem",
  "Submit a question",
];

const initQuestionInfo = {
  name: "",
  email: "",
  phone: "",
  question: "",
};

const DetailStart = (props) => {
  const { lang } = props;
  const [langInfo, setLangInfo] = useState(cnInfo);
  const [questionInfo, setQuestionInfo] = useState(initQuestionInfo);

  useEffect(() => {
    setLangInfo(lang === "cn" ? cnInfo : enInfo);
  }, [lang]);

  const submitQuestionData = (questionInfo) => {
    let isKongKeyValue = false;
    Object.keys(questionInfo).forEach((key) => {
      if (!questionInfo[key]) {
        isKongKeyValue = true;
      }
    });
    if (isKongKeyValue) {
      alert(
        lang === "cn"
          ? "请将问题信息输入完整!"
          : "Please enter the question information completely!"
      );
    } else {
      axios.post("/back-server/api/subscribe", questionInfo).then((data) => {
        console.log("data", data);
      });
    }
  };

  return (
    <div className="container-fluid p-5">
      <div className="row g-5">
        <div className="col-lg-8">
          <div className="mb-5">
            <h3 className="text-uppercase mb-5">{langInfo[0]}</h3>
            <div className="d-flex mb-3">
              <img
                src="/static/img/customer.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">{langInfo[1]}</a>{" "}
                  <small>
                    <i>2022/2/6</i>
                  </small>
                </h6>
                <p>{langInfo[2]}</p>
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
                  <a href="">{langInfo[3]}</a>{" "}
                  <small>
                    <i>2022/2/6</i>
                  </small>
                </h6>
                <p>{langInfo[4]}</p>
              </div>
            </div>
            <div className="d-flex mb-2">
              <img
                src="/static/img/customer.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">{langInfo[5]}</a>{" "}
                  <small>
                    <i>2022/6/8</i>
                  </small>
                </h6>
                <p>{langInfo[6]}</p>
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
                  <a href="">{langInfo[7]}</a>{" "}
                  <small>
                    <i>2022/6/8</i>
                  </small>
                </h6>
                <p>{langInfo[8]}</p>
              </div>
            </div>
            <div className="d-flex mb-2">
              <img
                src="/static/img/customer.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">{langInfo[9]}</a>{" "}
                  <small>
                    <i>2022/8/10</i>
                  </small>
                </h6>
                <p>{langInfo[10]}</p>
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
                  <a href="">{langInfo[11]}</a>{" "}
                  <small>
                    <i>2022/8/10</i>
                  </small>
                </h6>
                <p>{langInfo[12]}</p>
              </div>
            </div>
            <div className="d-flex mb-2">
              <img
                src="/static/img/customer.jpg"
                className="img-fluid rounded"
                style={{ width: 45, height: 45 }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <a href="">{langInfo[13]}</a>{" "}
                  <small>
                    <i>2022/8/10</i>
                  </small>
                </h6>
                <p>{langInfo[14]}</p>
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
                  <a href="">{langInfo[15]}</a>{" "}
                  <small>
                    <i>2022/8/10</i>
                  </small>
                </h6>
                <p>{langInfo[16]}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="mb-5">
            <h3 className="text-uppercase mb-5">{langInfo[17]}</h3>
            <div
              className="bg-dark rounded text-center text-light"
              style={{ padding: 30 }}
            >
              {langInfo[18]}
            </div>
          </div>
          <div className="bg-dark rounded p-4">
            <h3 className="text-light text-uppercase mb-4"></h3>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-white border-0"
                    placeholder={langInfo[19]}
                    style={{ height: 55 }}
                    defaultValue={questionInfo.name}
                    onChange={(e) => {
                      setQuestionInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.name = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="phone"
                    className="form-control bg-white border-0"
                    placeholder={langInfo[20]}
                    style={{ height: 55 }}
                    defaultValue={questionInfo.phone}
                    onChange={(e) => {
                      setQuestionInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.phone = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control bg-white border-0"
                    placeholder={langInfo[21]}
                    style={{ height: 55 }}
                    defaultValue={questionInfo.email}
                    onChange={(e) => {
                      setQuestionInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.email = e.target.value;
                        return newInfo;
                      });
                    }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-white border-0"
                    rows="5"
                    placeholder={langInfo[22]}
                    defaultValue={questionInfo.question}
                    onChange={(e) => {
                      setQuestionInfo((info) => {
                        let newInfo = Object.assign(info);
                        newInfo.question = e.target.value;
                        return newInfo;
                      });
                    }}
                  ></textarea>
                </div>
                <div className="col-12">
                  <a
                    className="btn btn-primary w-100 py-3"
                    onClick={() => submitQuestionData(questionInfo)}
                  >
                    {langInfo[23]}
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailStart;
