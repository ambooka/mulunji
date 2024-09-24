function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">



          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <h2>Get in touch</h2>


            <div className="contact-image-wrap d-flex flex-wrap">
                    <img
                        src="/assets/logo.svg"
                        width="24"
                        height="24"
                        sizes="100vw"
                        alt="Kind Heart Charity"
                        className="img-fluid avatar-image"
                    />

                    <div className="d-flex flex-column contact-det-wrap ">
                      <p className="mb-0">Haroon Msah</p>
                      <p className="mb-0">
                        <strong>Founder</strong>
                      </p>

                    </div>

              <div className="contact-info">
                <p className="d-flex mb-2">
                  <i className="bi-geo-alt me-2"></i>
                  xyz street 20, 0150 Nairobi, Kenya
                </p>

                <p className="d-flex mb-2">
                  <i className="bi-telephone me-2"></i>

                  <a href="tel: 120-240-9600">+254 724 108 076</a>
                </p>

                <p className="d-flex">
                  <i className="bi-envelope me-2"></i>

                  <a href="mailto:info@haroonmusah@yahoo.co.uk">donate@mulunji.org</a>
                </p>

                <div className=" justify-content-center align-items-center mx-auto">
                 </div>


              </div>

            </div>

          </div>

          <div className="col-lg-4 col-md-6 col-12 mx-auto">

            <div className="contact-info">
              <h5 className="mb-3">Contact Infomation</h5>

              <p className="d-flex mb-2">
                <i className="bi-geo-alt me-2"></i>
                xyz street 20, 0150 Nairobi, Kenya
              </p>

              <p className="d-flex mb-2">
                <i className="bi-telephone me-2"></i>

                <a href="tel: 120-240-9600">+254 724 108 076</a>
              </p>

              <p className="d-flex">
                <i className="bi-envelope me-2"></i>

                <a href="mailto:info@haroonmusah@yahoo.co.uk">donate@mulunji.org</a>
              </p>

              <div className=" justify-content-center align-items-center mx-auto">
                <ul className="social-icon">
                  <li className="social-icon-item">
                    <a href="src/layouts/common/Footer#" className="social-icon-link bi-twitter"></a>
                  </li>

                  <li className="social-icon-item">
                    <a href="src/layouts/common/Footer#" className="social-icon-link bi-facebook"></a>
                  </li>

                  <li className="social-icon-item">
                    <a href="src/layouts/common/Footer#" className="social-icon-link bi-instagram"></a>
                  </li>

                  <li className="social-icon-item">
                    <a href="src/layouts/common/Footer#" className="social-icon-link bi-linkedin"></a>
                  </li>

                  <li className="social-icon-item">
                    <a
                        href="https://youtube.com/templatemo"
                        className="social-icon-link bi-youtube"
                    ></a>
                  </li>
                </ul>
              </div>


              <a href="src/sections/about/ContactSection#" className="custom-btn btn mt-3">
                Get Direction
              </a>
            </div>




          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
