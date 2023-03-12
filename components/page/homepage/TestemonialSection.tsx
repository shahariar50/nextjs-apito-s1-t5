import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TestemonialSection = () => {
  return (
    <section className="py-7">
      <div className="container-fluid">
        <div className="row flex-center">
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(assets/img/gallery/quote.png)",
              backgroundPosition: "top",
              backgroundSize: "auto",
              marginLeft: "-270px",
              marginTop: "-45px",
            }}
          ></div>

          <div className="col-md-8 col-lg-5 text-center">
            <h5 className="text-danger">TESTIMONIAL</h5>
            <h2>Our Awesome Clients</h2>
          </div>
        </div>
        <div
          className="carousel slide pt-6"
          id="carouselExampleDark"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Pagination]}
              pagination={true}
              style={{ paddingBottom: "50px" }}
            >
              <SwiperSlide>
                <div className="row h-100">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 card-span p-3">
                      <div className="card-body">
                        <h5 className="mb-0 text-primary">
                          Fantastic service!
                        </h5>
                        <p className="card-text pt-3">
                          I purchased a phone from an e-commerce site, and this
                          courier service provider assisted me in getting it
                          delivered to my home. I received my phone within one
                          day, and I was really satisfied with their service
                          when I received it.{" "}
                        </p>
                        <div className="d-xl-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                          </div>
                          <div className="d-flex align-items-center">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/icons/avatar.png"
                                alt=""
                              />
                            </picture>
                            <div className="flex-1 ms-3">
                              <h6 className="mb-0 fs--1 text-1000 fw-medium">
                                Yves Tanguy
                              </h6>
                              <p className="fs--2 fw-normal mb-0">
                                Chief Executive, DLF
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 card-span p-3">
                      <div className="card-body">
                        <h5 className="mb-0 text-primary">
                          Fantastic service!
                        </h5>
                        <p className="card-text pt-3">
                          I purchased a phone from an e-commerce site, and this
                          courier service provider assisted me in getting it
                          delivered to my home. I received my phone within one
                          day, and I was really satisfied with their service
                          when I received it.
                        </p>
                        <div className="d-xl-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                          </div>
                          <div className="d-flex align-items-center">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/icons/avatar.png"
                                alt=""
                              />
                            </picture>
                            <div className="flex-1 ms-3">
                              <h6 className="mb-0 fs--1 text-1000 fw-medium">
                                Kim Young Jou
                              </h6>
                              <p className="fs--2 fw-normal mb-0">
                                Chief Executive, DLF
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 card-span p-3">
                      <div className="card-body">
                        <h5 className="mb-0 text-primary">
                          Fantastic service!
                        </h5>
                        <p className="card-text pt-3">
                          I purchased a phone from an e-commerce site, and this
                          courier service provider assisted me in getting it
                          delivered to my home. I received my phone within one
                          day, and I was really satisfied with their service
                          when I received it. .
                        </p>
                        <div className="d-xl-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                          </div>
                          <div className="d-flex align-items-center">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/icons/avatar.png"
                                alt=""
                              />
                            </picture>
                            <div className="flex-1 ms-3">
                              <h6 className="mb-0 fs--1 text-1000 fw-medium">
                                Yves Tanguy
                              </h6>
                              <p className="fs--2 fw-normal mb-0">
                                Chief Executive, DLF
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row h-100">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 card-span p-3">
                      <div className="card-body">
                        <h5 className="mb-0 text-primary">
                          Fantastic service!
                        </h5>
                        <p className="card-text pt-3">
                          I purchased a phone from an e-commerce site, and this
                          courier service provider assisted me in getting it
                          delivered to my home. I received my phone within one
                          day, and I was really satisfied with their service
                          when I received it.{" "}
                        </p>
                        <div className="d-xl-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                          </div>
                          <div className="d-flex align-items-center">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/icons/avatar.png"
                                alt=""
                              />
                            </picture>
                            <div className="flex-1 ms-3">
                              <h6 className="mb-0 fs--1 text-1000 fw-medium">
                                Yves Tanguy
                              </h6>
                              <p className="fs--2 fw-normal mb-0">
                                Chief Executive, DLF
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 card-span p-3">
                      <div className="card-body">
                        <h5 className="mb-0 text-primary">
                          Fantastic service!
                        </h5>
                        <p className="card-text pt-3">
                          I purchased a phone from an e-commerce site, and this
                          courier service provider assisted me in getting it
                          delivered to my home. I received my phone within one
                          day, and I was really satisfied with their service
                          when I received it.{" "}
                        </p>
                        <div className="d-xl-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                          </div>
                          <div className="d-flex align-items-center">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/icons/avatar.png"
                                alt=""
                              />
                            </picture>
                            <div className="flex-1 ms-3">
                              <h6 className="mb-0 fs--1 text-1000 fw-medium">
                                Kim Young Jou
                              </h6>
                              <p className="fs--2 fw-normal mb-0">
                                Chief Executive, DLF
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 card-span p-3">
                      <div className="card-body">
                        <h5 className="mb-0 text-primary">
                          Fantastic service!
                        </h5>
                        <p className="card-text pt-3">
                          I purchased a phone from an e-commerce site, and this
                          courier service provider assisted me in getting it
                          delivered to my home. I received my phone within one
                          day, and I was really satisfied with their service
                          when I received it. .
                        </p>
                        <div className="d-xl-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                          </div>
                          <div className="d-flex align-items-center">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/icons/avatar.png"
                                alt=""
                              />
                            </picture>
                            <div className="flex-1 ms-3">
                              <h6 className="mb-0 fs--1 text-1000 fw-medium">
                                Yves Tanguy
                              </h6>
                              <p className="fs--2 fw-normal mb-0">
                                Chief Executive, DLF
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row h-100">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 card-span p-3">
                      <div className="card-body">
                        <h5 className="mb-0 text-primary">
                          Fantastic service!
                        </h5>
                        <p className="card-text pt-3">
                          I purchased a phone from an e-commerce site, and this
                          courier service provider assisted me in getting it
                          delivered to my home. I received my phone within one
                          day, and I was really satisfied with their service
                          when I received it.{" "}
                        </p>
                        <div className="d-xl-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                          </div>
                          <div className="d-flex align-items-center">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/icons/avatar.png"
                                alt=""
                              />
                            </picture>
                            <div className="flex-1 ms-3">
                              <h6 className="mb-0 fs--1 text-1000 fw-medium">
                                Yves Tanguy
                              </h6>
                              <p className="fs--2 fw-normal mb-0">
                                Chief Executive, DLF
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 card-span p-3">
                      <div className="card-body">
                        <h5 className="mb-0 text-primary">
                          Fantastic service!
                        </h5>
                        <p className="card-text pt-3">
                          “I purchased a phone from an e-commerce site, and this
                          courier service provider assisted me in getting it
                          delivered to my home. I received my phone within one
                          day, and I was really satisfied with their service
                          when I received it.{" "}
                        </p>
                        <div className="d-xl-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                          </div>
                          <div className="d-flex align-items-center">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/icons/avatar.png"
                                alt=""
                              />
                            </picture>

                            <div className="flex-1 ms-3">
                              <h6 className="mb-0 fs--1 text-1000 fw-medium">
                                Kim Young Jou
                              </h6>
                              <p className="fs--2 fw-normal mb-0">
                                Chief Executive, DLF
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 card-span p-3">
                      <div className="card-body">
                        <h5 className="mb-0 text-primary">
                          Fantastic service!
                        </h5>
                        <p className="card-text pt-3">
                          I purchased a phone from an e-commerce site, and this
                          courier service provider assisted me in getting it
                          delivered to my home. I received my phone within one
                          day, and I was really satisfied with their service
                          when I received it. .
                        </p>
                        <div className="d-xl-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                            <i className="fas fa-star text-primary me-1"></i>
                          </div>
                          <div className="d-flex align-items-center">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/icons/avatar.png"
                                alt=""
                              />
                            </picture>
                            <div className="flex-1 ms-3">
                              <h6 className="mb-0 fs--1 text-1000 fw-medium">
                                Yves Tanguy
                              </h6>
                              <p className="fs--2 fw-normal mb-0">
                                Chief Executive, DLF
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestemonialSection;
