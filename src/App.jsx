// App.js
import React from "react";
import "./App.css";
import {
  About,
  Contact,
  Home,
  Projects,
  Publications,
  Skills,
} from "./src/Layouts";
import { Footer, Navbar } from "./src/components";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Grid container>
        <Grid item xs={12}>
          <Home />
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Skills />
        </Grid>
        <Grid item xs={12}>
          <Projects />
        </Grid>
        <Grid item xs={12}>
          <Publications />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
