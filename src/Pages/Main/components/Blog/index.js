import { useEffect, useState } from "react";
import axios from "../../../_axios";

const cnInfo = [
  "库存搜索",
  "联系方式",
  "电话：0755-82806855 /82806939",
  "传真：0755-82806919",
  "QQ：3117541604",
  "手机：+86 13510726338",
  "邮箱：vivi@jcwyic.com",
  "whatsapp：+86 13510726338",
  "Skype：vivi@jcwyic.com",
  "联系人：陈先生",
  "快递查询",
  "FEDEX 快递",
  "SF 快递",
  "DHL 快递",
  "TNT 快递",
  "UPS 快递",
  "EMS 快递",
  "库存型号",
  "品牌",
  "封装",
  "数量",
  "资料超链",
  "年份",
];

const enInfo = [
  "Inventory search",
  "Contact information",
  "telephone：0755-82806855 /82806939",
  "facsimile：0755-82806919",
  "QQ：3117541604",
  "phone：+86 13510726338",
  "email：vivi@jcwyic.com",
  "whatsapp：+86 13510726338",
  "Skype：vivi@jcwyic.com",
  "Contact person: Mr. Chen",
  "Express inquiry",
  "FEDEX Express",
  "SF Express",
  "DHL Express",
  "TNT Express",
  "UPS Express",
  "EMS Express",
  "Part No.",
  "Brand",
  "Package",
  "Qty",
  "Pdf",
  "D/C",
];

const initPageInfo = {
  pageSize: 10,
  currentPage: 1,
  model: "",
};

const initPageData = {
  data: [],
  totalCount: 0,
  totalPage: 0,
};

const Blog = (props) => {
  const dataList = Array.from({ length: 10 });
  const { lang } = props;
  const [langInfo, setLangInfo] = useState(cnInfo);
  const [pageInfo, setPageInfo] = useState(initPageInfo);
  const [pageData, setPageData] = useState(initPageData);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setLangInfo(lang === "cn" ? cnInfo : enInfo);
  }, [lang]);

  useEffect(() => {
    searchPageData(pageInfo);
  }, []);

  const searchPageData = (pageInfo) => {
    handlePageData(pageInfo);
  };

  const selectPageData = (pageInfo) => {
    setPageInfo(pageInfo);
    handlePageData(pageInfo);
  };

  const handlePageData = (pageInfo) => {
    axios.post("/back-server/api/inventory", pageInfo).then((data) => {
      if (data.value && Array.isArray(data.value.data)) {
        setPageData(data.value);
      } else if (
        data.value &&
        Object.prototype.toString.call(data.value.data) === "[object Object]"
      ) {
        let pageData = {
          data: [data.value.data],
          totalCount: data.value.totalCount,
          totalPage: data.value.totalPage,
        };
        setPageData(pageData);
      } else {
        setPageData(data.value);
      }
    });
  };

  return (
    <div className="container-fluid p-5">
      <div className="row g-5">
        <div className="col-lg-4">
          <div className="mb-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-3"
                placeholder={langInfo[0]}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                className="btn btn-primary px-4"
                onClick={() =>
                  setPageInfo(() => {
                    let pageInfo = {
                      pageSize: 10,
                      currentPage: 1,
                      model: searchValue,
                    };
                    searchPageData(pageInfo);
                    return pageInfo;
                  })
                }
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">{langInfo[1]}</h3>
            <div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
              <a className="fs-5 fw-bold text-light text-uppercase mb-2">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                {langInfo[2]}
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase mb-2">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                {langInfo[3]}
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase mb-2">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                {langInfo[4]}
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase mb-2">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                {langInfo[5]}
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase mb-2">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                {langInfo[6]}
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase mb-2">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                {langInfo[7]}
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase mb-2">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                {langInfo[8]}
              </a>
              <a className="fs-5 fw-bold text-light text-uppercase" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                {langInfo[9]}
              </a>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">{langInfo[10]}</h3>
            <div className="bg-dark rounded p-4">
              <div className="d-flex overflow-hidden mb-3 bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/fedex.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href="https://www.fedex.com/zh-cn/home.html"
                  target="_blank"
                  style={{ marginLeft: 50 }}
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  {langInfo[11]}
                </a>
              </div>
              <div className="d-flex overflow-hidden mb-3 bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/sf.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href="https://www.sf-express.com/chn/sc"
                  target="_blank"
                  style={{ marginLeft: 50 }}
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  {langInfo[12]}
                </a>
              </div>
              <div className="d-flex overflow-hidden mb-3 bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/ddh.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href="https://www.dhl.com/cn-zh/home.html"
                  target="_blank"
                  style={{ marginLeft: 50 }}
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  {langInfo[13]}
                </a>
              </div>
              <div className="d-flex overflow-hidden mb-3 bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/tnt.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href="https://www.tnt.com/express/zh_cn/site/home.html"
                  target="_blank"
                  style={{ marginLeft: 50 }}
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  {langInfo[14]}
                </a>
              </div>
              <div className="d-flex overflow-hidden mb-3 bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/ups.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href="https://wwwapps.ups.com/ctc/request?loc=zh_CN&gclid=CJL1kYXs_v0CFQQZvAodMq0GmQ&gclsrc=ds"
                  target="_blank"
                  style={{ marginLeft: 50 }}
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  {langInfo[15]}
                </a>
              </div>
              <div className="d-flex overflow-hidden bg-light">
                <img
                  className="img-fluid flex-shrink-0 rounded-start"
                  src="/static/img/main/kuaidi/ems.gif"
                  style={{ width: 140 }}
                  alt=""
                />
                <a
                  href="https://www.ems.com.cn/"
                  target="_blank"
                  style={{ marginLeft: 50 }}
                  className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                >
                  {langInfo[16]}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row g-5 pt-4">
            {Array.isArray(pageData.data) ? (
              <>
                {pageData.data.map((item, index) => (
                  <div key={index} className="job-item p-4 mt-0 mb-0">
                    <div className="row g-4">
                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid border rounded"
                          src={
                            item.photo
                              ? `http://114.132.46.88:8030/back-server/sys/common/static/${item.photo}`
                              : "/static/img/img/com-logo-1.jpg"
                          }
                          alt=""
                          style={{ width: 80, height: 80 }}
                        />
                        <div className="text-start ps-4">
                          <h5 className="mb-3">{`${langInfo[17]}: ${item.model}`}</h5>
                          <span className="text-truncate me-3">{`${langInfo[18]}: ${item.brand}`}</span>
                          <span className="text-truncate me-3">{`${langInfo[19]}: ${item.fengzhuang}`}</span>
                          <span className="text-truncate me-0">{`${langInfo[20]}: ${item.quantity}`}</span>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div className="d-flex mb-3">
                          <a
                            className="btn btn-primary"
                            href={`http://www.alldatasheet.net/view.jsp?Searchword=${item.model}`}
                            target="_blank"
                          >
                            {`${langInfo[21]}`}
                          </a>
                        </div>
                        <small className="text-truncate">
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          {`${langInfo[22]}: ${item.year}`}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-5">
                  <nav aria-label="Page navigation">
                    <ul hidden={true} className="pagination pagination-sm justify-content-start m-0">
                      <li
                        className={`page-item ${
                          pageInfo.currentPage === 1 && "disabled"
                        }`}
                      >
                        <a
                          className="page-link"
                          onClick={() =>
                            selectPageData({
                              pageSize: 10,
                              currentPage: 1,
                              model: pageInfo.model,
                            })
                          }
                        >
                          {lang === "cn" ? "首页" : "First page"}
                        </a>
                      </li>
                      <li
                        className={`page-item ${
                          pageInfo.currentPage - 1 <= 0 && "disabled"
                        }`}
                      >
                        <a
                          className="page-link"
                          aria-label="Previous"
                          onClick={() => {
                            if (pageInfo.currentPage - 1 >= 1) {
                              selectPageData({
                                pageSize: 10,
                                currentPage: pageInfo.currentPage - 1,
                                model: pageInfo.model,
                              });
                            }
                          }}
                        >
                          <span aria-hidden="true">
                            <i className="bi bi-arrow-left"></i>
                          </span>
                        </a>
                      </li>
                      <li
                        className={`page-item ${
                          pageInfo.currentPage + 1 > pageData.totalPage &&
                          "disabled"
                        }`}
                      >
                        <a
                          className="page-link"
                          aria-label="Next"
                          onClick={() => {
                            if (
                              pageInfo.currentPage + 1 <=
                              pageData.totalPage
                            ) {
                              selectPageData({
                                pageSize: 10,
                                currentPage: pageInfo.currentPage + 1,
                                model: pageInfo.model,
                              });
                            }
                          }}
                        >
                          <span aria-hidden="true">
                            <i className="bi bi-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                      <li
                        className={`page-item ${
                          pageInfo.currentPage === pageData.totalPage &&
                          "disabled"
                        }`}
                      >
                        <a
                          className="page-link"
                          onClick={() =>
                            selectPageData({
                              pageSize: 10,
                              currentPage: pageData.totalPage,
                              model: pageInfo.model,
                            })
                          }
                        >
                          {lang === "cn" ? "尾页" : "Last page"}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-7 d-flex align-items-center justify-content-end">
                  {lang === "cn" ? (
                    <div
                      className="text-black fw-bold text-uppercase"
                      style={{ textAlign: "center", fontSize: 16 }}
                    >
                      {`共有库存信息${pageData.totalCount}条 每页10条 第${pageInfo.currentPage}页/共${pageData.totalPage}页`}
                    </div>
                  ) : (
                    <div
                      className="text-black fw-bold text-uppercase"
                      style={{ textAlign: "center", fontSize: 16 }}
                    >
                      {`Total information ${pageData.totalCount} perlist 10  Page ${pageInfo.currentPage} /Total page ${pageData.totalPage}`}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div
                  className="display-6 text-black text-uppercase mb-md-4"
                  style={{ textAlign: "center" }}
                >
                  {`${pageInfo.model}型号：没有库存数据`}
                </div>
                <div className="d-flex mb-3 justify-content-center">
                  <a
                    className="btn btn-primary"
                    onClick={() => {
                      setPageInfo(() => {
                        let pageInfo = {
                          pageSize: 10,
                          currentPage: 1,
                          model: "",
                        };
                        setSearchValue("");
                        searchPageData(pageInfo);
                        return pageInfo;
                      });
                    }}
                  >
                    查看全部库存
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
