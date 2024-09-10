// ContactSection.js
import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import "./style.css";
import { Animated_Button } from "../../components";
import { FaShareFromSquare } from "react-icons/fa6";
import emailjs from "emailjs-com";

const Index = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const onchangeHandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0pvr8la",
        "template_1j60y1e",
        e.target,
        "DZVashCuJjXw9vpjT"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#003366",
        color: "white",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container align="center">
        <Typography variant="h4" sx={{ color: "white" }} gutterBottom>
          Contact
        </Typography>
        <div className="hr_line"></div>
        <form onSubmit={handleSubmit} className="main_form">
          <div className="main_div">
            <div>
              <input
                onChange={onchangeHandle}
                placeholder="Name*"
                type="text"
                className="inp"
                name="name"
                value={data.name}
                required
              />
            </div>
            <div>
              <input
                required
                onChange={onchangeHandle}
                value={data.email}
                placeholder="Email*"
                type="text"
                className="inp"
                name="email"
              />
            </div>
          </div>
          <div className="main_1">
            <textarea
              required
              onChange={onchangeHandle}
              value={data.message}
              placeholder="Message*"
              rows={5}
              name="message"
              className="text_Area"
            />
          </div>
          <div className="main_btn">
            <Animated_Button
              front={"SEND MESSAGE"}
              back={<FaShareFromSquare />}
            />
          </div>
        </form>
        <div></div>
      </Container>
    </section>
  );
};

export default Index;
