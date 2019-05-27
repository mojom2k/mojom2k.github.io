import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-5" href="index.html">Travelations</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="index.html">Home <span
              className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="about.html">About Us</a>
            <a className="nav-item nav-link" href="contact.html">Contact Us</a>
          </div>
        </div>
      </nav>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img className="d-block w-100"
              src="https://www.tribeglobal.net/var/www/storage/images/www/laptop/blog/what-do-we-mean-by-luxury-travel-today/44377-1-eng-GB/What-do-we-mean-by-Luxury-Travel-today_1200.jpg"
              alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://pbs.twimg.com/media/Dw2ZU2jX0AA2qMz.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100"
              src="https://www.tribeglobal.net/var/www/storage/images/www/laptop/blog/buying-travel-isn-t-what-it-used-to-be-nor-are-travel-buyers/43827-7-eng-GB/Buying-Travel-Isn-t-What-It-Used-To-Be-Nor-Are-Travel-Buyers_1200.jpg"
              alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

class Features1 extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <div className="text-center">
          <img src="https://iconfree.net/256x256/2017/1/17/parachutist-gliding-travel-icon-7662-512x512.png"
            width="100px" height="100px" />
        </div>

        <div className="my-4">
          <h3>Lorem, ipsum dolor</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti est cum qui maxime,
              maiores itaque, ab repudiandae consequuntur deleniti sunt exercitationem rem natus culpa ipsum?</p>
        </div>
      </div>
    );
  }
}

class Features2 extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <div className="text-center">
          <img src="https://www.inventicons.com/uploads/iconset/680/wm/512/honeymoon_travel-84.png"
            width="100px" height="100px" />
        </div>

        <div className="my-4">
          <h3>Nam fuga elit</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci eligendi architecto
              praesentium. Nam fuga blanditiis aperiam inventore labore dicta eaque iusto quo beatae, placeat, culpa doloribus sunt.</p>
        </div>
      </div>
    );
  }
}

class Features3 extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <div className="text-center">
          <img src="https://img.icons8.com/cotton/2x/safety-float-1.png" width="100px" height="100px" />
        </div>

        <div className="my-4">
          <h3>Amet consectetur</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima culpa voluptates commodi iusto temporibus!</p>
        </div>
      </div>
    );
  }
}

class Features4 extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <div className="text-center">
          <img src="https://cdn2.iconfinder.com/data/icons/map-locations-colored-outlined-pixel-perfect/64/pin-map-location-06-512.png"
            width="100px" height="100px" />
        </div>

        <div className="my-4">
          <h3>Nihil quas</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium nihil quas, a perspiciatis temporibus repellendus. Cum vel obcaecati adipisci natus?</p>
        </div>
      </div>
    );
  }
}

class FeaturesBody extends React.Component {
  render() {
    return (
      <div className="row">
        <Features1 />
        <Features2 />
        <Features3 />
        <Features4 />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <Header />
          <Slider />
        </header>
        <div className="container my-5 py-5">
          <FeaturesBody />
        </div>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
