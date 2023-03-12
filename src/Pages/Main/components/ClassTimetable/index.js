const XinPianList = [
  "/static/img/main/芯片/1.jpg",
  "/static/img/main/芯片/2.jpg",
  "/static/img/main/芯片/3.jpg",
  "/static/img/main/芯片/4.jpg",
  "/static/img/main/芯片/5.jpg",
  "/static/img/main/芯片/6.jpg",
  "/static/img/main/芯片/7.jpg",
  "/static/img/main/芯片/8.jpg",
];
const IGBTList = [
  "/static/img/main/IGBT/1.jpg",
  "/static/img/main/IGBT/2.jpg",
  "/static/img/main/IGBT/3.jpg",
  "/static/img/main/IGBT/4.jpg",
  "/static/img/main/IGBT/5.jpg",
  "/static/img/main/IGBT/6.jpg",
  "/static/img/main/IGBT/7.jpg",
  "/static/img/main/IGBT/8.jpg",
];
const GuangOuList = [
  "/static/img/main/光耦/1.jpg",
  "/static/img/main/光耦/2.jpg",
  "/static/img/main/光耦/3.jpg",
  "/static/img/main/光耦/4.jpg",
  "/static/img/main/光耦/5.jpg",
  "/static/img/main/光耦/6.jpg",
  "/static/img/main/光耦/7.jpg",
  "/static/img/main/光耦/8.jpg",
];
const DianRongList = [
  "/static/img/main/电容/1.jpg",
  "/static/img/main/电容/2.jpg",
  "/static/img/main/电容/3.jpg",
  "/static/img/main/电容/4.jpg",
  "/static/img/main/电容/5.jpg",
  "/static/img/main/电容/6.jpg",
  "/static/img/main/电容/7.jpg",
  "/static/img/main/电容/8.jpg",
];
const DianZuList = [
  "/static/img/main/电阻/1.jpg",
  "/static/img/main/电阻/2.jpg",
  "/static/img/main/电阻/3.jpg",
  "/static/img/main/电阻/4.jpg",
  "/static/img/main/电阻/5.jpg",
  "/static/img/main/电阻/6.jpg",
  "/static/img/main/电阻/7.jpg",
  "/static/img/main/电阻/8.jpg",
];
const JiGuangList = [
  "/static/img/main/二三极管/1.jpg",
  "/static/img/main/二三极管/2.jpg",
  "/static/img/main/二三极管/3.jpg",
  "/static/img/main/二三极管/4.jpg",
  "/static/img/main/二三极管/5.jpg",
  "/static/img/main/二三极管/6.jpg",
  "/static/img/main/二三极管/7.jpg",
  "/static/img/main/二三极管/8.jpg",
];
const LianJieQiList = [
  "/static/img/main/连接器/1.jpg",
  "/static/img/main/连接器/2.jpg",
  "/static/img/main/连接器/3.jpg",
  "/static/img/main/连接器/4.jpg",
  "/static/img/main/连接器/5.jpg",
  "/static/img/main/连接器/6.jpg",
  "/static/img/main/连接器/7.jpg",
  "/static/img/main/连接器/8.jpg",
];

const ClassTimetable = () => {
  return (
    <div className="container-fluid p-5">
      <div className="mb-5 text-center">
        {/* <h5 className="text-primary text-uppercase">Class Schedule</h5> */}
        <h1 className="display-3 text-uppercase mb-0">合作品牌</h1>
      </div>
      <div className="tab-class text-center">
        <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
          <li className="nav-item">
            <a
              className="nav-link rounded-pill text-white active"
              data-bs-toggle="pill"
              href="#tab-1"
            >
              芯片
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link rounded-pill text-white"
              data-bs-toggle="pill"
              href="#tab-2"
            >
              IGBT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link rounded-pill text-white"
              data-bs-toggle="pill"
              href="#tab-3"
            >
              光耦
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link rounded-pill text-white"
              data-bs-toggle="pill"
              href="#tab-4"
            >
              电容
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link rounded-pill text-white"
              data-bs-toggle="pill"
              href="#tab-5"
            >
              电阻
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link rounded-pill text-white"
              data-bs-toggle="pill"
              href="#tab-6"
            >
              二三极管
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link rounded-pill text-white"
              data-bs-toggle="pill"
              href="#tab-7"
            >
              连接器
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-5">
              {XinPianList.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="rounded py-1 px-1">
                    <img className="img-fluid" src={item} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="tab-2" className="tab-pane fade p-0">
            <div className="row g-5">
              {IGBTList.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="rounded py-1 px-1">
                    <img className="img-fluid" src={item} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="tab-3" className="tab-pane fade p-0">
            <div className="row g-5">
              {GuangOuList.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="rounded py-1 px-1">
                    <img className="img-fluid" src={item} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="tab-4" className="tab-pane fade p-0">
            <div className="row g-5">
              {DianRongList.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="rounded py-1 px-1">
                    <img className="img-fluid" src={item} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="tab-5" className="tab-pane fade p-0">
            <div className="row g-5">
              {DianZuList.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="rounded py-1 px-1">
                    <img className="img-fluid" src={item} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="tab-6" className="tab-pane fade p-0">
            <div className="row g-5">
              {JiGuangList.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="rounded py-1 px-1">
                    <img className="img-fluid" src={item} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="tab-7" className="tab-pane fade p-0">
            <div className="row g-5">
              {LianJieQiList.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="rounded py-1 px-1">
                    <img className="img-fluid" src={item} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassTimetable;
