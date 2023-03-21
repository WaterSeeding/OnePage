const Hero = (props) => {
  const { lang } = props
  return (
    <div className="container-fluid bg-primary p-5 bg-hero mb-5">
      <div className="row py-5">
        <div className="col-12 text-center">
          <h1 className="display-2 text-uppercase text-white mb-md-4">
            {lang === 'cn' ? "产品目录" : 'PRODUCTS'}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
