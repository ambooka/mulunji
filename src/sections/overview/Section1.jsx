import handsImg from "/assets/images/icons/hands.png";
import heartImg from "/assets/images/icons/heart.png";
import receiveImg from "/assets/images/icons/receive.png";
import scholarshipImg from "/assets/images/icons/scholarship.png";

function Section1() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 text-center mx-auto">
            <h2 className="mb-5">Welcome to Kind Heart Charity</h2>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="/#volunter-section" className="d-block">
                <img
                  src={handsImg}
                  sizes="100vw"
                  alt="Kind Heart Charity"
                  className="featured-block-image img-fluid"
                />

                <p className="featured-block-text">
                  Become a <strong>volunteer</strong>
                </p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img
                  src={heartImg}
                  sizes="100vw"
                  alt="Kind Heart Charity"
                  className="featured-block-image img-fluid"
                />

                <p className="featured-block-text">
                  <strong>Caring</strong> Earth
                </p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="/donate" className="d-block">
                <img
                  src={receiveImg}
                  sizes="100vw"
                  alt="Kind Heart Charity"
                  className="featured-block-image img-fluid"
                />
                <p className="featured-block-text">
                  Make a <strong>Donation</strong>
                </p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img
                  src={scholarshipImg}
                  sizes="100vw"
                  alt="Kind Heart Charity"
                  className="featured-block-image img-fluid"
                />
                <p className="featured-block-text">
                  <strong>Scholarship</strong> Program
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
