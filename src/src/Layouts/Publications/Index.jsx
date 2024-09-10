import React, { useState } from "react";
import { Container, Grid, List, Paper, Typography, Slide } from "@mui/material";
import "./style.css";

const Index = () => {
  const [national, setNational] = useState(true);
  const [international, setInternational] = useState(false);

  const nationalHandle = () => {
    setInternational(false);
    setNational(true);
  };

  const internationalHandle = () => {
    setNational(false);
    setInternational(true);
  };

  const nationalData = [
    {
      title: "Rao, M.S., Fareeduddin, Godhavari, K.S., Chander, Suresh (2000)",
      description:
        "The carbon-rich meta-exhalite of Dugocha gold prospect, District Udaipur, Rajasthan. Presented at National Symposium on Milestones in Petrology, BHU (2000).",
    },
    {
      title: "Rao, M.S., Fareeduddin, Godhavari, K.S., Chander, Suresh (2000)",
      description:
        "Geochemistry of meta-exhalite of Dugocha gold prospect, District Udaipur, Rajasthan. Presented at National Symposium on Milestones in Petrology, BHU (2000).",
    },
    {
      title:
        "Rao, M.S., Fareeduddin, Godhavari, K.S., Chander, Suresh, et al. (2001)",
      description:
        "Industrial Utility-Potential of the carbonaceous meta-exhalites of Dugocha area, District Udaipur, Rajasthan. Published in Some Aspects of Mineral Development in India, Geological Society of India (2001).",
    },
    {
      title:
        "Sisodia, C.P., Chattopadhyay, A.K., Chander, Suresh, Malhotra, A.K. (2002)",
      description:
        "Airborne geophysical surveys in the exploration for basemetal and gold – case studies from Rajasthan. Published in Geological Survey of India Special Publication No.75 (2002).",
    },
    {
      title: "Chander, Suresh, Malhotra, A.K., Vaid, J.K. (2002)",
      description:
        "Integrated surveys for exploration in Dugocha block, Sanjela-Manpur-Dugocha Metallogenic Belt, Udaipur District, Rajasthan. Geological Survey of India Special Publication No.75 (2002), pp. 197-206.",
    },
    {
      title: "Chander, Suresh, Sisodia, C.P. (2003)",
      description:
        "Gold mineralisation in the lower Proterozoic rocks of Sanjela-Manpur-Dugocha belt, Salumber area, Udaipur District, Rajasthan. Journal Geological Society of India Vol 61 (April 2003), pp. 463-470.",
    },
    {
      title: "Gupta, Dinesh, Chander, Suresh, et al. (2012)",
      description:
        "Aero-electromagnetic signatures over a zinc-nickel prospect in Umarvaniyan Block, Udaipur District, Rajasthan. Published in Journal of Geophysics (2012).",
    },
  ];
  const internationalData = [
    {
      title: "Chander, S., Srivastava, P.K., Kapoor, P., Namdev, Vijay (2022)",
      description:
        "Geochemistry and economic potential of tourmalinites from Salumber-Ghatol Metallogenic Belt, southeastern Rajasthan, India. Published in J Earth Syst Sci 131, 212 (2022). DOI: 10.1007/s12040-022-01958-2",
    },
    {
      title: "Chander, S. (2022)",
      description:
        "Auriferous volcanogenic massive sulfides in Paleoproterozoic volcano-sedimentary sequence of Aravalli Fold Belt in Dugocha Area, Udaipur District, Rajasthan, NW India. Published in J Earth Syst Sci 131, 262 (2022). DOI: 10.1007/s12040-022-01998-8",
    },
    {
      title: "Kumar, S., Chander, S. (2021)",
      description:
        "Tungsten mineralized Neoproterozoic Degana Peraluminous Granite around Rewat Hill, Rajasthan, NW India: Implications from sub-surface data and geochemistry. Published in J Earth Syst Sci 130, 131 (2021). DOI: 10.1007/s12040-021-01605-2",
    },
    {
      title: "Chander, S., Raza, A., Bhattacharjee, S., Das Sanjay (2020)",
      description:
        "Carbonate hosted intermetallic compounds in Paleoproterozoic Salumber Ghatol Metallogenic Belt, Aravalli Craton, Rajasthan, India. Published in J Earth Syst Sci 129, 137 (2020). DOI: 10.1007/s12040-020-01410-3",
    },
    {
      title: "Roy Choudhury, Manideepa, Agarwal, Nikhil, Chander, S. (2020)",
      description:
        "Occurrence of liddicoatite-bearing LCT pegmatites in Sirohi region, northwest India and their rare metal potentiality. Published in Current Science 118(5):809-818.",
    },
  ];

  return (
    <section
      id="publications"
      style={{
        padding: "4rem 2rem",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        minHeight: "100vh",
      }}
    >
      <Container align="start">
        <Typography variant="h4" gutterBottom>
          Publications
        </Typography>
        <div className="hr_line"></div>
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              border: "1px solid black",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
            }}
          >
            <Typography
              sx={{
                all: "unset",
                fontSize: "20px",
                cursor: "pointer",
                width: "100%",
                textAlign: "center",
              }}
              component={"button"}
              variant="h5"
              onClick={nationalHandle}
            >
              National Publications
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                all: "unset",
                fontSize: "20px",
                cursor: "pointer",
                textAlign: "center",
                width: "100%",
              }}
              component={"button"}
              variant="h5"
              onClick={internationalHandle}
            >
              International Publications
            </Typography>
          </Grid>
        </Grid>

        {/* Slide Transition for National Publications */}
        <Slide in={national} direction="right" mountOnEnter unmountOnExit>
          <section>
            <h1 style={{ paddingBottom: "10px" }}>National Publications</h1>
            <div className="hr_line1"></div>
            <List
              sx={{
                height: "450px",
                overflowY: "scroll",
              }}
            >
              {nationalData.map((item, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  style={{
                    padding: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {item.description}
                  </Typography>
                </Paper>
              ))}
            </List>
          </section>
        </Slide>

        {/* Slide Transition for International Publications */}
        <Slide in={international} direction="left" mountOnEnter unmountOnExit>
          <section>
            <h1 style={{ paddingBottom: "10px" }}>
              International Publications
            </h1>
            <List
              sx={{
                height: "450px",
                overflowY: "scroll",
              }}
            >
              {internationalData.map((item, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  style={{
                    padding: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {item.description}
                  </Typography>
                </Paper>
              ))}
            </List>
          </section>
        </Slide>
      </Container>
    </section>
  );
};

export default Index;
