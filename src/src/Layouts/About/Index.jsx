// AboutSection.js
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import MenImg from "../../../assets/men.png";
import { RiDownload2Fill, RiSendPlaneFill } from "react-icons/ri";

import "./style.css";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaVk,
} from "react-icons/fa";
import { Animated_Button } from "../../components";
import { Link, ScrollLink } from "react-scroll";

const Index = () => {
  return (
    <section
      id="about"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#fff",
        height: "auto",
        minHeight: "100vh",
      }}
    >
      <Container sx={{ height: "100vh" }}>
        <Grid container sx={{ height: "100dvh", width: "100%" }}>
          <Grid item xs={12} sm={12} md={5}>
            <div className="grid_1_main">
              <img className="grid_1_image" src={MenImg} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <div className="grid_2_main">
              <h2 className="grid_2_heading2">
                I AM GEOLOGICAL SURVEY OF INDIA
              </h2>
              <div className="grid_2_hr_line"></div>
              <p className="grid_2_para">
                I am <span style={{ fontWeight: "bold" }}>Suresh Chander</span>{" "}
                is an experienced geologist currently serving as the Director at
                the Geological Survey of India (GSI), North Eastern Region,
                Itanagar. He has over 30 years of experience in geological
                exploration and mineral investigation, beginning his career in
                May 1994 after passing the UPSC Geologist Examination in 1991.
                His expertise spans across mineral exploration, geological
                mapping, geochemical surveys, and aero-geophysical anomaly
                evaluations.
                <br />
                <br />
                Throughout his career, he has worked in various capacities,
                including Assistant Geologist, Geologist, and Senior Geologist.
                He has been involved in major exploration projects for gold,
                base metals (Pb-Zn-Cu), and Rare Earth Elements across multiple
                regions in India, including the NW Aravalli Craton and
                Rajasthan’s Pur-Banera Belt.
              </p>
              <div className="grid_2_icon_main">
                <div className="grid_2_icon_inner_div">
                  <FaFacebookF className="icon" />
                </div>
                <div className="grid_2_icon_inner_div">
                  <FaTwitter className="icon" />
                </div>
                <div className="grid_2_icon_inner_div">
                  <FaInstagram className="icon" />
                </div>
                <div className="grid_2_icon_inner_div">
                  <FaBehance className="icon" />
                </div>
                <div className="grid_2_icon_inner_div">
                  <FaVk className="icon" />
                </div>
              </div>
              <div className="grid_2_btn_main">
                <div>
                  <Link to="contact" smooth={true} duration={500}>
                    <Animated_Button
                      front={"Hire Me"}
                      back={<RiSendPlaneFill />}
                    />
                  </Link>
                </div>
                <div>
                  <a
                    href="/Biodata - modified_181123_copy.pdf" // Path to the CV file in the public folder
                    download="Suresh_Chander_CV.pdf" // Filename for the downloaded file
                    style={{ textDecoration: "none" }}
                  >
                    <Animated_Button
                      front={"Download CV"}
                      back={<RiDownload2Fill />}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Index;
