const WhySection = () => {
  return (
    <section className="why_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="why_img-container">
              <picture>
                <img src="/static/images/why.png" alt="" />
              </picture>
            </div>
          </div>
          <div className="col-md-6">
            <div className="why_detail-box">
              <h3>Why learn on Fanadesh</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <div className="">
                <a href="" className="call_to-btn btn_white-border">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
