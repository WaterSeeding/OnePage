const ContactStart = () => {
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
            <h5 className="text-uppercase text-primary mb-4">地址</h5>
            <p className="text-secondary mb-2">深圳市佳创伟业科技有限公司</p>
            <p className="text-secondary mb-0">深圳市福田区振华路飞亚达大厦西座518</p>
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
            <h5 className="text-uppercase text-primary mb-4">电话</h5>
            <p className="text-secondary mb-2">陈先生/李小姐/陈小姐</p>
            <p className="text-secondary mb-0">0755-82806855 /82806929 /+86 13342986657</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactStart;
