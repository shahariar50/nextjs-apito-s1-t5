const ContactSection = () => {
  return (
    <section className="contact_section ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-center d-md-block">
              <h2>Contact Us</h2>
            </div>
            <form action="">
              <div className="contact_form-container">
                <div>
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div className="mt-5">
                    <input type="text" placeholder="Message" />
                  </div>
                  <div className="mt-5">
                    <button type="submit">send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="contact_img-box">
              <picture>
                <img src="/static/images/students.jpg" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
