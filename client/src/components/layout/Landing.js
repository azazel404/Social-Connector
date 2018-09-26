import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './landing.css';
class Landingpage extends Component {

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/dashboard');
  //   }
  // }
  render() {
    return (
      <div>
        <div>
          {/* Navigation */}
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">Connector Social</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <header className="masthead text-center text-white d-flex">
            <div className="container my-auto">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <h1 className="text-uppercase">
                    <strong>Social Connector Network</strong>
                  </h1>
                  <hr />
                </div>
                <div className="col-lg-8 mx-auto">
                  <p className="text-faded mb-5"></p>
                  <Link className="btn btn-primary btn-xl js-scroll-trigger" to="/register">Join Us Now !</Link>
                </div>
              </div>
            </div>
          </header>
          <section className="bg-primary" id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="section-heading text-white">We've got what you need!</h2>
                  <hr className="light my-4" />
                  <p className="text-faded mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>
                  <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                </div>
              </div>
            </div>
          </section>
          <section id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">At Your Service</h2>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fas fa-4x fa-gem text-primary mb-3 sr-icon-1" />
                    <h3 className="mb-3">Sturdy Templates</h3>
                    <p className="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2" />
                    <h3 className="mb-3">Ready to Ship</h3>
                    <p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fas fa-4x fa-code text-primary mb-3 sr-icon-3" />
                    <h3 className="mb-3">Up to Date</h3>
                    <p className="text-muted mb-0">We update dependencies to keep things fresh.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fas fa-4x fa-heart text-primary mb-3 sr-icon-4" />
                    <h3 className="mb-3">Made with Love</h3>
                    <p className="text-muted mb-0">You have to make your websites with love these days!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-dark text-white">
            <div className="container text-center">
              <h2 className="mb-4">What is Lorem Ipsum?</h2>
              <a className="btn btn-light btn-xl sr-button" href="#">See More !</a>
            </div>
          </section>
          <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="section-heading">Let's Get In Touch!</h2>
                  <hr className="my-4" />
                  <p className="mb-5">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 ml-auto text-center">
                  <i className="fas fa-phone fa-3x mb-3 sr-contact-1" />
                  <p>123-456-6789</p>
                </div>
                <div className="col-lg-4 mr-auto text-center">
                  <i className="fas fa-envelope fa-3x mb-3 sr-contact-2" />
                  <p>
                    do you miss me ?
          </p>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    )
  }
}
export default Landingpage;