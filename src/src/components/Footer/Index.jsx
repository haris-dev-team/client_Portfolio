// Footer.js
import React from "react";
import { Container, Typography } from "@mui/material";

const Index = () => {
  return (
    <footer
      style={{ backgroundColor: "#333", color: "white", padding: "1rem 0" }}
    >
      <Container align="center">
        <Typography variant="body2">
          &copy; 2024 Suresh Chander - All Rights Reserved
        </Typography>
      </Container>
    </footer>
  );
};

export default Index;
