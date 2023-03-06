const ClientSection = () => {
  return (
    <section className="client_section layout_padding">
      <h2 className="">Testimonial</h2>
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-3">
                  <div className="client_img-box">
                    <picture>
                      <img src="/static/images/client.png" alt="" />
                    </picture>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="client_detail-box">
                    <h5>Alex Du</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3">
                  <div className="client_img-box">
                    <picture>
                      <img src="/static/images/client.png" alt="" />
                    </picture>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="client_detail-box">
                    <h5>Alex Du</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3">
                  <div className="client_img-box">
                    <picture>
                      <img src="/static/images/client.png" alt="" />
                    </picture>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="client_detail-box">
                    <h5>Alex Du</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
