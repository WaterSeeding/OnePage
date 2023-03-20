import { useEffect, useState } from "react";

const cnInfo = ["系列"];

const enInfo = ["series"];

const TeamStart = (props) => {
  const dataList = Array.from({ length: 6 });
  const { lang } = props;
  const [langInfo, setLangInfo] = useState(cnInfo);

  useEffect(() => {
    setLangInfo(lang === "cn" ? cnInfo : enInfo);
  }, [lang]);

  return (
    <div className="container-fluid p-5">
      <div className="row g-5">
        {dataList.map((value, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="team-item position-relative">
              <div className="position-relative overflow-hidden rounded">
                <img
                  className="img-fluid w-100"
                  src={`/static/img/main/产品展示/${index + 1}.jpg`}
                  alt=""
                />
              </div>
              <div
                className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                style={{ background: "rgba(34, 36, 41, .9)" }}
              >
                <h5 className="text-uppercase text-light">{index + 1}</h5>
                <p className="text-uppercase text-secondary m-0">{langInfo[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamStart;
