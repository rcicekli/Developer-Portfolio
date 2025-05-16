import React, { Component } from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGoogle,
  FaJava,
  FaJs,
  FaPhp,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { Button } from "reactstrap";
import TypeWriter from "typewriter-effect";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", mesaj: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    // alert('Gönderilen İsim ' + this.state.name+"\nGönderilen Konu : "+this.state.konu
    // +"\nTelefon :"+this.state.telefon+
    // "\nMail :"+this.state.email+
    // "\nKonu :"+this.state.mesaj);

    alert(
      "İsim :" +
        this.state.name +
        "\nMail :" +
        this.state.email +
        "\nKonu :" +
        this.state.mesaj
    );
    event.preventDefault();
  }
  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <div className="p-5 container">
          <div className=" row container mt-5  text-center  justify-content-center">
            <div
              className=" mb-3 "
              style={{ fontFamily: "Daktilo", color: "#00ff00" }}
            >
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  strings: ["Contact Me"],
                }}
              />
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="mx-auto row p-3 ">
              <input
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  fontFamily: "Daktilo",
                }}
                type="text"
                name="name"
                id="name"
                className="form-control m-2 "
                placeholder="Your Name"
                aria-describedby="helpId"
                onChange={this.handleChange}
              />
              <input
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  fontFamily: "Daktilo",
                }}
                type="text"
                name="email"
                id="email"
                className="form-control m-2"
                placeholder="Your Email"
                aria-describedby="helpId"
                onChange={this.handleChange}
              />

              <textarea
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  fontFamily: "Daktilo",
                }}
                className="form-control m-2"
                id="mesaj"
                name="mesaj"
                rows="3"
                placeholder="Write Me"
                onChange={this.handleChange}
              ></textarea>
              <div>
                <Button
                  type="submit"
                  style={{ fontFamily: "Daktilo", color: "#00ff00" }}
                  className="bg-transparent mt-2 fw-bold"
                >
                  Send
                </Button>
              </div>
            </div>
          </form>

          <div className="">
            <div style={{ color: "#00ff00" }} className="snowflake">
              <FaJava />
            </div>
            <div style={{ color: "#00ff00" }} className="snowflake">
              <FaCss3 />
            </div>
            <div style={{ color: "#00ff00" }} className="snowflake">
              <FaGoogle />
            </div>
            <div style={{ color: "#00ff00" }} className="snowflake">
              <FaJs />
            </div>
            <div style={{ color: "#00ff00" }} className="snowflake">
              <FaPython />
            </div>
            <div style={{ color: "#00ff00" }} className="snowflake">
              <FaGithub />
            </div>
            <div style={{ color: "#00ff00" }} className="snowflake">
              <FaBootstrap />
            </div>
            <div style={{ color: "#00ff00" }} className="snowflake">
              <FaPhp />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
