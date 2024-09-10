// ExperienceSection.js
import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import "./style.css";
import { Card_Carousel } from "../../components";
import Image1 from "../../../assets/carousel_Images/image1.png";
import Image2 from "../../../assets/carousel_Images/image2.png";
import Image3 from "../../../assets/carousel_Images/image3.png";
import Image4 from "../../../assets/carousel_Images/image4.png";
import Image5 from "../../../assets/carousel_Images/image5.png";
import Image6 from "../../../assets/carousel_Images/image6.png";
import MainImage from "../../../assets/main.png";
const Index = () => {
  const images = [
    {
      title: "Assistant Geologist (May 1994 - 2002)",
      imageUrl: Image1,
    },
    {
      title: "Geologist (Promoted in 2002)",
      imageUrl: Image2,
    },
    {
      title: "Senior Geologist (Promoted in 2008)",
      imageUrl: Image3,
    },
    {
      title:
        "Technical Coordination Division, GSI Training Institute (September 2011 - June 2016)",
      imageUrl: Image4,
    },
    {
      title: "Director, RTD-FTC, Jaipur/Zawar (July 2021)",
      imageUrl: Image5,
    },
    {
      title: "Director, NER, Itanagar (September 2023 - Present)",
      imageUrl: Image6,
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "2rem 2rem",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ marginY: "20px", fontWeight: "bold" }}
        >
          Experienced
        </Typography>
        <div className="hr_line"></div>

        <Card_Carousel image={images} />
      </Container>
    </section>
  );
};

export default Index;
