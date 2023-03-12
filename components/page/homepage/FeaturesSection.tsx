import { useState } from "react";
import Rodal from "rodal";

const FeaturesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="featureSection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="card bg-dark text-white py-4 py-sm-0"
              style={{ cursor: "pointer" }}
            >
              <picture>
                <img
                  className="w-100"
                  src="/img/gallery/video.png"
                  alt="video"
                />
              </picture>
              <div className="card-img-overlay bg-dark-gradient d-flex flex-column flex-center">
                <picture>
                  <img
                    src="/img/icons/play.png"
                    width="80"
                    alt="play"
                    onClick={() => setIsOpen(true)}
                  />
                </picture>
                <h5 className="text-primary">FASTEST DELIVERY</h5>
                <p className="text-center">
                  You can get your valuable item in the fastest period of
                  <br className="d-none d-sm-block" />
                  time with safety. Because your emergency
                  <br className="d-none d-sm-block" />
                  is our first priority.
                </p>
                <Rodal
                  visible={isOpen}
                  onClose={() => setIsOpen(false)}
                  customStyles={{
                    maxWidth: "800px",
                    width: "100%",
                    padding: "0",
                    height: "min-content",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                >
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                      <div className="modal-header p-0">
                        <div
                          className="ratio ratio-16x9"
                          id="exampleModalLabel"
                        >
                          <iframe
                            src="https://www.youtube.com/embed/TlcP2aTOp-Q"
                            title="YouTube video"
                            allowFullScreen={true}
                          ></iframe>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setIsOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Rodal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
