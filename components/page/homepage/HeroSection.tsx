const HeroSection = () => {
  return (
    <div className="top_container">
      <section className="hero_section ">
        <div className="hero-container container">
          <div className="hero_detail-box">
            <h1>Best way to fund your study abroad</h1>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam
            </p>
            <div className="hero_btn-continer">
              <a href="" className="call_to-btn btn_white-border">
                Read More
              </a>
            </div>
          </div>
          <div className="hero_img-container">
            <div>
              <picture>
                <img
                  src="/static/images/hero.png"
                  alt=""
                  className="img-fluid"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
