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
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00am - 8.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Power Lifting</h5>
                  <p className="text-uppercase text-secondary mb-0">John Deo</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00am - 10.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Body Building</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Taylor
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    10.00am - 12.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Cardio Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jack Sparrow
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    12.00pm - 2.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Weight Loose</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Robert Smith
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    2.00pm - 4.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Fitness Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Adam Phillips
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    4.00pm - 6.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Crossfit Class
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Alien
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00pm - 8.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Muscle Building
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Petter John
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00pm - 10.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Yoga Class</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jessy Reo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-2" className="tab-pane fade p-0">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00am - 8.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Power Lifting</h5>
                  <p className="text-uppercase text-secondary mb-0">John Deo</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00am - 10.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Body Building</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Taylor
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    10.00am - 12.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Cardio Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jack Sparrow
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    12.00pm - 2.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Weight Loose</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Robert Smith
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    2.00pm - 4.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Fitness Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Adam Phillips
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    4.00pm - 6.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Crossfit Class
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Alien
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00pm - 8.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Muscle Building
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Petter John
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00pm - 10.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Yoga Class</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jessy Reo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-3" className="tab-pane fade p-0">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00am - 8.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Power Lifting</h5>
                  <p className="text-uppercase text-secondary mb-0">John Deo</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00am - 10.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Body Building</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Taylor
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    10.00am - 12.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Cardio Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jack Sparrow
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    12.00pm - 2.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Weight Loose</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Robert Smith
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    2.00pm - 4.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Fitness Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Adam Phillips
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    4.00pm - 6.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Crossfit Class
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Alien
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00pm - 8.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Muscle Building
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Petter John
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00pm - 10.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Yoga Class</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jessy Reo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-4" className="tab-pane fade p-0">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00am - 8.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Power Lifting</h5>
                  <p className="text-uppercase text-secondary mb-0">John Deo</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00am - 10.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Body Building</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Taylor
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    10.00am - 12.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Cardio Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jack Sparrow
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    12.00pm - 2.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Weight Loose</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Robert Smith
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    2.00pm - 4.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Fitness Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Adam Phillips
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    4.00pm - 6.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Crossfit Class
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Alien
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00pm - 8.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Muscle Building
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Petter John
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00pm - 10.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Yoga Class</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jessy Reo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-5" className="tab-pane fade p-0">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00am - 8.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Power Lifting</h5>
                  <p className="text-uppercase text-secondary mb-0">John Deo</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00am - 10.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Body Building</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Taylor
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    10.00am - 12.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Cardio Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jack Sparrow
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    12.00pm - 2.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Weight Loose</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Robert Smith
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    2.00pm - 4.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Fitness Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Adam Phillips
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    4.00pm - 6.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Crossfit Class
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Alien
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00pm - 8.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Muscle Building
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Petter John
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00pm - 10.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Yoga Class</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jessy Reo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-6" className="tab-pane fade p-0">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00am - 8.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Power Lifting</h5>
                  <p className="text-uppercase text-secondary mb-0">John Deo</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00am - 10.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Body Building</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Taylor
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    10.00am - 12.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Cardio Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jack Sparrow
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    12.00pm - 2.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Weight Loose</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Robert Smith
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    2.00pm - 4.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Fitness Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Adam Phillips
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    4.00pm - 6.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Crossfit Class
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Alien
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00pm - 8.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Muscle Building
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Petter John
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00pm - 10.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Yoga Class</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jessy Reo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-7" className="tab-pane fade p-0">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00am - 8.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Power Lifting</h5>
                  <p className="text-uppercase text-secondary mb-0">John Deo</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00am - 10.00am
                  </h6>
                  <h5 className="text-uppercase text-primary">Body Building</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Taylor
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    10.00am - 12.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Cardio Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jack Sparrow
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    12.00pm - 2.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Weight Loose</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Robert Smith
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    2.00pm - 4.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Fitness Program
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Adam Phillips
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    4.00pm - 6.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Crossfit Class
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    James Alien
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    6.00pm - 8.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">
                    Muscle Building
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Petter John
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="bg-dark rounded text-center py-5 px-3">
                  <h6 className="text-uppercase text-light mb-3">
                    8.00pm - 10.00pm
                  </h6>
                  <h5 className="text-uppercase text-primary">Yoga Class</h5>
                  <p className="text-uppercase text-secondary mb-0">
                    Jessy Reo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassTimetable;
