import React, { Component } from "react";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const {name, email, message } = this.state
    event.preventDefault();
    alert(`
      ____Your Details____\n
      Name : ${name}
      Email : ${email}
      Message : ${message}
    `);
  }
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            
            {/* <=== Start of Contact Form ===> */}
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" onSubmit={this.handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          value={this.state.name}
                          onChange={this.handleChange}
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            {/* <=== End of Contact Form ===> */}

            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"} target="_BLANK">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.facebook : "/"} target="_BLANK">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"} target="_BLANK">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li> */}
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "/"} target="_BLANK">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.whatsapp : "/"} target="_BLANK">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.telegram : "/"} target="_BLANK">
                        <i className="fa fa-paper-plane"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020. Designed by Infosydda Team - {" "}
              <a href="#" target="_BLANK" rel="nofollow">
                Terms &#38; Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
