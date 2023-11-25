import "../styles/about.css";
import "../styles//aboutmedia.css";
import Header from "../main/header";
import Footer from "../main/footer";

function About() {
  return (
    <div>
      <Header></Header>
      {/*  main */}
      <main>
        {/* section */}
        <section className="section11">
          <div className="container">
            <ul className="about-main">
              <li className="about-name">About Us</li>
              <li className="about-text">
                Coffeeroasters began its journey of exotic discovery in 1999,
                highlighting stories of coffee from around the world. We have
                since been dedicated to bring the perfect cup - from bean to
                brew - in every shipment.
              </li>
            </ul>
          </div>
        </section>
        {/*  section end */}
        {/*  section2 */}
        <section className="section22">
          <div className="container">
            <div className="aboutinfo-main">
              <img
                className="aboutinfo-img"
                width="485"
                height="606"
                src="/images/about/about2.png"
                alt="about2"
              />
              <ul className="aboutinfo">
                <li className="aboutinfo-name">Our commitment</li>
                <li className="aboutinfo-text">
                  We’re built on a simple mission and a commitment to doing good
                  along the way. We want to make it easy for you to discover and
                  brew the world’s best coffee at home. It all starts at the
                  source. To locate the specific lots we want to purchase, we
                  travel nearly 60 days a year trying to understand the
                  challenges and opportunities in each of these places. We
                  collaborate with exceptional coffee growers and empower a
                  global community of farmers through with well above fair-trade
                  benchmarks. We also offer training, support farm community
                  initiatives, and invest in coffee plant science. Curating only
                  the finest blends, we roast each lot to highlight tasting
                  profiles distinctive to their native growing region.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*  section2 end */}

        {/*  section3  */}
        <div className="section33">
          <div className="container">
            <div className="extrainfo-main">
              <ul className="extrainfo">
                <li className="extrainfo-name">Uncompromising quality</li>
                <li className="extrainfo-text">
                  Although we work with growers who pay close attention to all
                  stages of harvest and processing, we employ, on our end, a
                  rigorous quality control program to avoid over-roasting or
                  baking the coffee dry. Every bag of coffee is tagged with a
                  roast date and batch number. Our goal is to roast consistent,
                  user-friendly coffee, so that brewing is easy and enjoyable.
                </li>
              </ul>
              <img
                className="extrainfo-img"
                src="/images/about/extrainfo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/*  section3 end  */}

        {/* section44 */}
        <section className="section44">
          <div className="container">
            <div className="bottominfo-main">
              <h2 className="bottominfo-name">Our headquarters</h2>
              <ul className="bottominfo">
                <li className="bottominfo-list">
                  <img
                    className="bottominfo-img"
                    src="/images/about/Combined Shape.png"
                    alt=""
                  />
                  <h2 className="bt-name">United Kingdom</h2>
                  <p className="bt-text">
                    68 Asfordby Rd
                    <br />
                    Alcaston
                    <br />
                    SY6 1YA
                    <br />
                    +44 1241 918425
                  </p>
                </li>
                <li className="bottominfo-list">
                  <img
                    className="bottominfo-img"
                    src="/images/about/Combined Shape (1).png"
                    alt=""
                  />
                  <h2 className="bt-name">Canada</h2>
                  <p className="bt-text">
                    1528 Eglinton Avenue
                    <br />
                    Toronto
                    <br />
                    Ontario M4P 1A6
                    <br />
                    +1 416 485 2997
                  </p>
                </li>
                <li className="bottominfo-list">
                  <img
                    className="bottominfo-img"
                    src="/images/about/Combined Shape (2).png"
                    alt=""
                  />
                  <h2 className="bt-name">Australia</h2>
                  <p className="bt-text">
                    36 Swanston Street
                    <br />
                    Kewell
                    <br />
                    Victoria
                    <br />
                    +61 4 9928 3629
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* section44 end*/}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default About;
