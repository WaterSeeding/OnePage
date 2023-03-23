import { useEffect, useState } from "react";
import Hero from "./components/Hero";

const cnInfo = [
  "公司介绍",
  `深圳佳创伟业科技有限公司是专业化的电子元器件供应商，具有多年集成电路的销售经验，目前拥有大量偏冷门电子原件，产品广泛应用于民用、工业、军事等不同领域,我们拥有一支专业的销售团队，竭诚为客户寻找偏、冷门IC原件．
  专营品牌有AD .BB.MAX.INTEL.HARRIS.NS.CYPRESS.AMD.NS,AMD.MOT.
  MITEL.PHILIPS.LATTICE.TI.等系列产品。本公司所上载的属自己的现货厍存！欢迎查询！`,
  `经营宗旨：原装正品、保证质量、准时交货、价格及优。 公司宗旨：
  诚信 专业 热情 积极。 公司优势：
  公司备有大量现货，并明码标价，不设起订量，可以发送样品。
  公司拥有专业技术人员可依据客户需求参数并推荐型号。
  我公司以薄利多销为经营理念，竭诚为广大用户提供全方位的服务。公司全体员工迎欢您的垂询！`,
];

const enInfo = [
  "Company introduction",
  `ShenZhen JiaChuang WeiYe Technology Co., Ltd is a specialized supplier of electronic components, integrated circuits have many years experience in this filed over 20 years , now has a large number of popular electronic components, products widely used in civil, industrial, military and other various fields.We have reliable source to deal with many famous brands.Welcome you to send enquiry and visit our company !`,
  `ShenZhen JiaChuang WeiYe Technology Co., Ltd is a specialized supplier of electronic components, integrated circuits have many years experience in this filed over 20 years , now has a large number of popular electronic components, products widely used in civil, industrial, military and other various fields.We have reliable source to deal with many famous brands.Welcome you to send enquiry and visit our company !`,
];

const About = (props) => {
  const { lang } = props;
  console.log('Aoubt', lang)
  const [langInfo, setLangInfo] = useState(cnInfo);

  useEffect(() => {
    setLangInfo(lang === "cn" ? cnInfo : enInfo);
  }, [lang]);

  useEffect(() => {
    window.$(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 2000,
      items: 1,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i className="bi bi-arrow-left"></i>',
        '<i className="bi bi-arrow-right"></i>',
      ],
    });
  }, []);
  return (
    <>
      <Hero lang={lang} />
      <div className="container-fluid p-0 my-5">
        <div className="row g-0">
          <div className="col-lg-6" style={{ minHeight: 500 }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src="/static/img/main/about.jpg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 bg-dark p-5">
            <div className="mb-5">
              <h1 className="display-5 text-uppercase text-light mb-0">
                {langInfo[0]}
              </h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item">
                <p
                  className="fs-4 fw-normal text-light mb-4"
                  style={{ height: 260 }}
                >
                  <i className="fa fa-quote-left text-primary me-3"></i>
                  {langInfo[1]}
                </p>
                <div className="d-flex align-items-center"></div>
              </div>
              <div className="testimonial-item">
                <p
                  className="fs-4 fw-normal text-light mb-4"
                  style={{ height: 260 }}
                >
                  <i className="fa fa-quote-left text-primary me-3"></i>
                  {langInfo[2]}
                </p>
                <div className="d-flex align-items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
