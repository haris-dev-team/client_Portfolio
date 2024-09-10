// ProjectsSection.js
import React from "react";
import { Container, Typography, List, ListItem, Paper } from "@mui/material";
import { Project_Carousel } from "../../components";
import Image1 from "../../../assets/main_Carousel/image1.png";
import Image2 from "../../../assets/main_Carousel/image2.png";
import Image3 from "../../../assets/main_Carousel/image3.png";
import Image4 from "../../../assets/main_Carousel/image4.png";
import Image5 from "../../../assets/main_Carousel/image5.png";
import Image6 from "../../../assets/main_Carousel/image6.png";
import Image7 from "../../../assets/main_Carousel/image7.png";
import "./style.css";
const Index = () => {
  const projectsData = [
    {
      title: "Gold and Base Metal Exploration (1995 - 2008)",
      imageUrl: Image1,
    },
    {
      title: "Base Metal Exploration (2008 - 2010)",
      imageUrl: Image2,
    },
    {
      title: "Mineral Investigation Reports (Post-2010))",
      imageUrl: Image3,
    },
    {
      title: "Lecturing and Training (2011 - 2016)",
      imageUrl: Image4,
    },
    {
      title: "Gold and Rare Earth Elements Exploration (2016 - 2021)",
      imageUrl: Image5,
    },
    {
      title: "Director of Research and Training Division (July 2021 onwards)",
      imageUrl: Image6,
    },
    {
      title: "Transfer to NER, Itanagar (September 2023 onwards)",
      imageUrl: Image7,
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          align="start"
          sx={{ paddingY: "20px", fontWeight: "bold" }}
        >
          Projects
        </Typography>
        <div className="hr_line"></div>
        <Project_Carousel image={projectsData} />
      </Container>
    </section>
  );
};

export default Index;
