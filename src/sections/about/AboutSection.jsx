import img from "/assets/logo.svg";

function AboutSection() {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-12 ">
            <img
              src={img}

              sizes="100vw"
              alt="Kind Heart Charity"
              className="about-image ms-lg-auto bg-light shadow-lg img-fluid"
            />
          </div>

          <div className="col-lg-5 col-md-7 col-12">
            <div className="custom-text-block">
              <h2 className="mb-0">Haroon Msah</h2>

              <p className="text-muted mb-lg-4 mb-md-4">Fonder</p>

              <p>
                Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                kohm tokito Professional charity theme based
              </p>

              <p>
                Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                kohm tokito Professional charity theme based Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                kohm tokito Professional charity theme based
              </p>

              <ul className="social-icon mt-4">
                <li className="social-icon-item">
                  <a href="src/sections/about/AboutSection#" className="social-icon-link bi-twitter"></a>
                </li>

                <li className="social-icon-item">
                  <a href="src/sections/about/AboutSection#" className="social-icon-link bi-facebook"></a>
                </li>

                <li className="social-icon-item">
                  <a href="src/sections/about/AboutSection#" className="social-icon-link bi-instagram"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
