import { useEffect, useState } from "react";

const cnInfo = [
  "地址",
  "深圳市佳创伟业科技有限公司",
  "深圳市福田区振华路飞亚达大厦西座518",
  "电话",
  "陈先生/李小姐/陈小姐",
];

const enInfo = [
  "Address",
  "ShenZhen JiaChuang WeiYe Technology Co.,Ltd",
  "518, West Building, Feiyada Building, Zhenhua Road, Futian District, Shenzhen",
  "Telephone",
  "Mr. Chen/Miss Li/Miss Chen",
];

const ContactStart = (props) => {
  const { lang } = props;
  const [langInfo, setLangInfo] = useState(cnInfo);

  useEffect(() => {
    setLangInfo(lang === "cn" ? cnInfo : enInfo);
  }, [lang]);
  return (
    <div className="container-fluid p-5">
      <div className="row g-5 mb-5">
        <div className="col-lg-6">
          <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-map-marker-alt fs-4 text-white"></i>
            </div>
            <h5 className="text-uppercase text-primary mb-4">{langInfo[0]}</h5>
            <p className="text-secondary mb-2">{langInfo[1]}</p>
            <p className="text-secondary mb-0">{langInfo[2]}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone fs-4 text-white"></i>
            </div>
            <h5 className="text-uppercase text-primary mb-4">{langInfo[3]}</h5>
            <p className="text-secondary mb-2">{langInfo[4]}</p>
            <p className="text-secondary mb-0">
              0755-82806855 /82806939 /+86 13510726338
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-map-marker-alt fs-4 text-white"></i>
            </div>
            <h5 className="text-uppercase text-primary mb-4">QQ/Hathcole</h5>
            <p className="text-secondary mb-2">QQ: 3117541604</p>
            <p className="text-secondary mb-0">Hathcole: 13510726338</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone fs-4 text-white"></i>
            </div>
            <h5 className="text-uppercase text-primary mb-4">Whatsapp/Skype</h5>
            <p className="text-secondary mb-2">Whatsapp: +86 13510726338</p>
            <p className="text-secondary mb-0">Skype: vivi@jcwyic.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactStart;
