import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <section class="my-5">
        <div class="container">
          <div className="py-4">
            <h1>About Us</h1>
            <hr />
          </div>
          <div class="row my-5">
            <div class="col-sm-8">
              <h2>CEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum neque quaerat, itaque impedit quia et esse quos voluptas
                deleniti ut accusamus dignissimos cupiditate amet, enim facere
                soluta excepturi voluptate! Aperiam ullam consectetur excepturi
                doloribus neque numquam dignissimos saepe iste veritatis nihil.
                Ex iusto sunt unde numquam deleniti aliquam labore vero.
              </p>
            </div>
            <div class="col-sm-4">
              <div class="float-right">
                <img
                  src="https://pbs.twimg.com/profile_images/425125076938149889/Pn2OZpq3.jpeg"
                  alt=""
                  height="150px"
                  width="150px"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>
          <div class="row my-5">
            <div class="col-sm-8">
              <h2>CTO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                dolores fugit deleniti a earum voluptas laboriosam tempora vero
                ducimus ratione velit reiciendis dignissimos quae, repellendus,
                nulla nostrum saepe? Nulla tempore molestiae, dolores iste
                distinctio velit accusantium dolore, blanditiis corrupti quis,
                eum harum error magni quae? Minus maiores beatae aliquid.
                Explicabo laboriosam sit esse officia.
              </p>
            </div>
            <div class="col-sm-4">
              <div class="float-right">
                <img
                  src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/09/1519909236-aaron-paul-deserves-another-emmy-for-this-weeks-episode-of-breaking-bad-e1456503507758.jpg?crop=0.575xw:0.962xh;0.173xw,0.0145xh&resize=480:*"
                  alt=""
                  height="150px"
                  width="150px"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>
          <div class="row my-5">
            <div class="col-sm-8">
              <h2>CMO</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                quidem, aliquam expedita eveniet, soluta quos consequuntur,
                exercitationem placeat quibusdam quae similique quia vitae?
                Ratione asperiores dolor accusamus repellendus ipsam deserunt
                debitis fugit quae eum iusto optio a harum voluptatem sequi hic
                facere, quis enim corrupti.
              </p>
            </div>
            <div class="col-sm-4">
              <div class="float-right">
                <img
                  src="https://pbs.twimg.com/profile_images/378800000533096678/8ecaf8ab2be20d0ffe70adf83c1a7fed.jpeg"
                  alt=""
                  style={{ borderRadius: "50%" }}
                  height="150px"
                  width="150px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div className="py-5 container">
        <div className="py-4">
          <h1>Contact Us</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-sm">
            <h2 className="mb-4">Our Address</h2>

            <h4>Head office</h4>
            <p>Travelations</p>
            <p>New Delhi, India</p>
            <h4>Branch office</h4>
            <p>Travelation</p>
            <p>Mumbai, India</p>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" rows="3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="py-5 container">
        <div className="py-4">
          <h1>Home</h1>
          <hr />
        </div>

        <div class="row">
          <div class="col-sm">
            <div class="text-center">
              <img
                src="https://iconfree.net/256x256/2017/1/17/parachutist-gliding-travel-icon-7662-512x512.png"
                width="100px"
                height="100px"
              />
            </div>
            <div class="my-4">
              <h3>Lorem, ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti est cum qui maxime, maiores itaque, ab repudiandae
                consequuntur deleniti sunt exercitationem rem natus culpa ipsum?
              </p>
            </div>
          </div>
          <div class="col-sm">
            <div class="text-center">
              <img
                src="https://www.inventicons.com/uploads/iconset/680/wm/512/honeymoon_travel-84.png"
                width="100px"
                height="100px"
              />
            </div>

            <div class="my-4">
              <h3>Nam fuga elit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                adipisci eligendi architecto praesentium. Nam fuga blanditiis
                aperiam inventore labore dicta eaque iusto quo beatae, placeat,
                culpa doloribus sunt.
              </p>
            </div>
          </div>
          <div class="col-sm">
            <div class="text-center">
              <img
                src="https://img.icons8.com/cotton/2x/safety-float-1.png"
                width="100px"
                height="100px"
              />
            </div>
            <div class="my-4">
              <h3>Amet consectetur</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                minima culpa voluptates commodi iusto temporibus!
              </p>
            </div>
          </div>
          <div class="col-sm">
            <div class="text-center">
              <img
                src="https://cdn2.iconfinder.com/data/icons/map-locations-colored-outlined-pixel-perfect/64/pin-map-location-06-512.png"
                width="100px"
                height="100px"
              />
            </div>
            <div class="my-4">
              <h3>Nihil quas elit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos laudantium nihil quas, a perspiciatis temporibus
                repellendus. Cum vel obcaecati adipisci natus?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand mx-5" to="/">
              Travelations
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-item nav-link" to="/">
                  Home
                </Link>
                <Link class="nav-item nav-link" to="/about-us">
                  About Us
                </Link>
                <Link class="nav-item nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>

          <Route path="/" exact={true} component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/contact-us" component={Contact} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
