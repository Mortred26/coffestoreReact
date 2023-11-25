import Footer from "./footer";
import Header from "./header";
import "../styles/media.css";
import "../styles/style.css";

function Main() {
  return (
    <div>
      <Header></Header>
      {/*  main */}
      <main>
        {/* <!-- section--> */}
        <section className="section">
          <div className="container">
            <div className="header-img">
              <div className="header-main-text">
                <h1 className="header-h1">
                  Great coffee <br />
                  made simple.
                </h1>
                <p className="header-text">
                  Start your mornings with the world’s best coffees. Try our
                  expertly curated artisan coffees from our best roasters
                  delivered directly to your door, at your schedule.
                </p>
                <div className="media-btn">
                  <a className="header-btn-link" href="#">
                    Create your plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- section end --> */}

        {/* <!-- section2 --> */}
        <section className="section2">
          <div className="container">
            <ul className="products-main">
              <li className="product">
                <img src="/images/kopi1 copy.png" alt="" width="255" />
                <div>
                  <h2 className="product-name">Gran Espresso</h2>
                  <p className="product-text">
                    Light and flavorful blend with cocoa and black pepper for an
                    intense experience.
                  </p>
                </div>
              </li>
              <li className="product">
                <img src="/images/kopi1 copy.png" alt="" width="255" />
                <div>
                  <h2 className="product-name">Planalto</h2>
                  <p className="product-text">
                    Brazilian dark roast with rich and velvety body, and hints
                    of fruits and nuts.
                  </p>
                </div>
              </li>
              <li className="product">
                <img src="/images/kopi1 copy.png" alt="" width="255" />
                <div className="product-main-text">
                  <h2 className="product-name">Piccollo</h2>
                  <p className="product-text">
                    Mild and smooth blend featuring notes of toasted almond and
                    dried cherry.
                  </p>
                </div>
              </li>
              <li className="product">
                <img src="/images/kopi1 copy.png" alt="" width="255" />
                <div>
                  <h2 className="product-name">Danche</h2>
                  <p className="product-text">
                    Ethiopian hand-harvested blend densely packed with vibrant
                    fruit notes.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- section2 end --> */}

        {/* <!-- section3 --> */}
        <section className="section3">
          <div className="container">
            <div className="info-main">
              <div className="info-text-main">
                <h2 className="info-name">Why choose us?</h2>
                <p className="info-text">
                  A large part of our role is choosing which particular coffees
                  will be featured in our range. This means working closely with
                  the best coffee growers to give you a more impactful
                  experience on every level.
                </p>
                <ul className="info-ul">
                  <li className="info-li">
                    <img
                      className="info-img"
                      src="/images/coffee-bean.png"
                      alt=""
                    />
                    <div>
                      <h2 className="infoli-name">Best quality</h2>
                      <p className="infoli-text">
                        Discover an endless variety of the world’s best artisan
                        coffee from each of our roasters.
                      </p>
                    </div>
                  </li>
                  <li className="info-li">
                    <img
                      className="info-img"
                      src="/images/Combined Shape (1).png"
                      alt=""
                    />
                    <div>
                      <h2 className="infoli-name">Exclusive benefits</h2>
                      <p className="infoli-text">
                        Special offers and swag when you subscribe, including
                        30% off your first shipment.
                      </p>
                    </div>
                  </li>
                  <li className="info-li">
                    <img
                      className="info-img"
                      src="/images/Combined Shape (2).png"
                      alt=""
                    />
                    <div>
                      <h2 className="infoli-name">Free shipping</h2>
                      <p className="infoli-text">
                        We cover the cost and coffee is delivered fast. Peak
                        freshness: guaranteed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- sections3 end --> */}

        {/* <!-- section4 --> */}
        <section className="section4">
          <div className="container">
            <div className="instruction-main">
              <h2 className="instr-name">How it works</h2>
              <div className="instuction-line">
                <svg
                  className="instr-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <circle
                    cx="15.5"
                    cy="15.5"
                    r="14.5"
                    fill="#FEFCF7"
                    stroke="#0E8784"
                    stroke-width="2"
                  />
                </svg>
                <svg
                  className="instr-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <circle
                    cx="15.5"
                    cy="15.5"
                    r="14.5"
                    fill="#FEFCF7"
                    stroke="#0E8784"
                    stroke-width="2"
                  />
                </svg>
                <svg
                  className="instr-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <circle
                    cx="15.5"
                    cy="15.5"
                    r="14.5"
                    fill="#FEFCF7"
                    stroke="#0E8784"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <ul className="instr-main-info">
                <li className="instr-info">
                  <p className="inumber">01</p>
                  <h2 className="instinfo-name">
                    Pick your <br />
                    coffee
                  </h2>
                  <p className="instinfo-text">
                    Select from our evolving range of artisan coffees. Our beans
                    are ethically sourced and we pay fair prices for them. There
                    are new coffees in all profiles every month for you to try
                    out.
                  </p>
                </li>
                <li className="instr-info">
                  <p className="inumber">02</p>
                  <h2 className="instinfo-name">Choose the frequency</h2>
                  <p className="instinfo-text">
                    Customize your order frequency, quantity, even your roast
                    style and grind type. Pause, skip or cancel your
                    subscription with no commitment through our online portal.
                  </p>
                </li>
                <li className="instr-info">
                  <p className="inumber">03</p>
                  <h2 className="instinfo-name">Receive and enjoy!</h2>
                  <p className="instinfo-text">
                    We ship your package within 48 hours, freshly roasted. Sit
                    back and enjoy award-winning world-className coffees curated
                    to provide a distinct tasting experience.
                  </p>
                </li>
              </ul>
              <div className="media-btn">
                <a className="instr-link" href="#">
                  Create your plan
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- section4 end--> */}
      </main>
      {/*  main end */}
      <Footer></Footer>
    </div>
  );
}

export default Main;
