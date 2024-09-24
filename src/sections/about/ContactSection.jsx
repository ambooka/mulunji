
function ContactSection() {
  return (
    <section className="contact-section section-padding" id="section_6">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
            <div className="contact-info-wrap">
              <h2>Get in touch</h2>

              <div className="contact-image-wrap d-flex flex-wrap">
                <img
                  src="assets/logo.svg"
                  width="24"
                  height="24"
                  sizes="100vw"
                  alt="Kind Heart Charity"
                  className="img-fluid avatar-image"
                />

                <div className="d-flex flex-column justify-content-center ms-3">
                  <p className="mb-0">Haroon Msah</p>
                  <p className="mb-0">
                    <strong>Office Manager</strong>
                  </p>
                </div>
              </div>

              <div className="contact-info">
                <h5 className="mb-3">Contact Infomation</h5>

                <p className="d-flex mb-2">
                  <i className="bi-geo-alt me-2"></i>
                  Starehe 20, 0150 Nairobi, Kenya
                </p>

                <p className="d-flex mb-2">
                  <i className="bi-telephone me-2"></i>

                  <a href="tel: +254-724-108-076">+254-724-108-076</a>
                </p>

                <p className="d-flex">
                  <i className="bi-envelope me-2"></i>

                  <a href="mailto:info@yourgmail.com">donate@mulunji.org</a>
                </p>

                <a href="src/sections/about/ContactSection#" className="custom-btn btn mt-3">
                  Get Direction
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 mx-auto">
            <form
              className="custom-form contact-form"
              action="src/sections/about/ContactSection#"
              method="post"
              role="form"
            >
              <h2>Contact form</h2>

              <p className="mb-4">
                Or, you can just send an email:
                <a href="src/sections/about/ContactSection#">info@mulunji.org</a>
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="form-control"
                    placeholder="Jack"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="form-control"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <input
                type="email"
                name="email"
                id="email"
                pattern="[^ @]*@[^ @]*"
                className="form-control"
                placeholder="Jackdoe@gmail.com"
                required
              />

              <textarea
                name="message"
                rows="5"
                className="form-control"
                id="message"
                placeholder="What can we help you?"
              ></textarea>

              <button type="submit" className="form-control">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
