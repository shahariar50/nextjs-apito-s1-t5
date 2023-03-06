const AdmissionSection = () => {
  return (
    <section className="admission_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="admission_detail-box">
              <h3>Admission open</h3>
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
            <div className="admission_img-container">
              <picture>
                <img src="/static/images/admission.png" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
