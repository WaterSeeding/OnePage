import { useEffect, useState } from "react";

const cnInfo = [
  "经营宗旨",
  "原装正品 保证质量 准时交货 价格及优",
  "公司宗旨",
  "诚信 专业 热情 积极",
];

const enInfo = [
  "Business purpose",
  "Original authentic products to ensure quality on time delivery price and excellent",
  "Corporate purpose",
  "Honest, professional, enthusiastic and positive",
];

const Carousel = (props) => {
  const { lang } = props;
  const [langInfo, setLangInfo] = useState(cnInfo);
  useEffect(() => {
    setLangInfo(lang === "cn" ? cnInfo : enInfo);
  }, [lang]);
  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="w-100"
              src="/static/img/carousel-2.jpg"
              alt="Image"
            />
            <div
              className="carousel-caption d-flex flex-column align-items-center justify-content-center"
              style={{ background: "rgba(34, 36, 41, .7)" }}
            >
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h1 className="display-6 text-white text-uppercase mb-md-4">
                  {langInfo[0]}
                </h1>
                <h1 className="display-3 text-white text-uppercase mb-md-5">
                  {langInfo[1]}
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="w-100"
              src="/static/img/carousel-3.jpg"
              alt="Image"
            />
            <div
              className="carousel-caption d-flex flex-column align-items-center justify-content-center"
              style={{ background: "rgba(34, 36, 41, .7)" }}
            >
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h1 className="display-6 text-white text-uppercase mb-md-4">
                  {langInfo[2]}
                </h1>
                <h1 className="display-3 text-white text-uppercase mb-md-5">
                  {langInfo[3]}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
