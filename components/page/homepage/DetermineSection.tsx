const DetermineSection = () => {
  return (
    <section className="determine_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="determine_detail-box">
              <h3>Datermine the right for you</h3>
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
          <div className="col-md-6">
            <div className="determine_img-container">
              <picture>
                <img src="images/determine.png" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetermineSection;
