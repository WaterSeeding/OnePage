import { useEffect, useState } from "react";
import axios from "../../../_axios";

const cnInfo = [
  "常见问题",
  "顾客",
  "为什么选择我们？",
  "客服",
  "我们专注于集成电路20多年，是一家专业的电子元器件代理商和渠道分销商。我们公司提供原装正品的电子元器件，产品种类繁多。我们在定价方面具有竞争优势，同时拥有稳定可靠的供应链。我们的售后服务非常出色，我们拥有一支经验丰富的专业团队，在电子元器件行业拥有丰富的知识和专业知识。",
  "顾客",
  "你能提供商店里没有列出的其他电子元件吗？",
  "客服",
  "当然，如果您需要，我们可以为您寻找任何产品。点击“发送询价”按钮，向我们发送询价信息，包括零件号和您需要的数量。",
  "顾客",
  "你们接受样品订单吗？",
  "客服",
  "是的，我们接受样品订单，请随时与我们联系。",
  "顾客",
  "你们提供BOM表报价服务吗？",
  "客服",
  "当然可以。请联系我们并将您的BOM表发送给我们，然后我们会为您报价。",
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
  "Why choose us?",
  "Servicer",
  "We focus on integrated circuit over 20 years, is a professional electronic component agent and channel distributor.Our company offers original and authentic electronic components, with a wide variety of products available. We have a competitive advantage in pricing, along with a stable and reliable supply chain. Our after-sales service is excellent, and we have a highly experienced professional team with extensive knowledge and expertise in the electronic components industry.",
  "Customer",
  "Can you offer other electronic components that are not listed on your store?",
  "Servicer",
  `Sure, we can look for any products for you if you need. Click the "Send RFQ " button and send the inquiry message to us including the part number and the quantity that you need. `,
  "Customer",
  "Do you accept sample order?",
  "Servicer",
  "Yes, we accept sample order, please feel free to contact us.",
  "Customer",
  "Do you provide the BOM list Quotation service? ",
  "Servicer",
  "Yes certainly. Please just contact us and send us your BOM list and then we'll quote for you.",
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
      axios.post("/back-server/api/question", questionInfo).then((data) => {
        console.log("data", data);
        alert(
          lang === "cn"
            ? "您的问题已经提交，稍后有人会与你联系!"
            : "Your question has been submitted and someone will contact you later!"
        );
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
