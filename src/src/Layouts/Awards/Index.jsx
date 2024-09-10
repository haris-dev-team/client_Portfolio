import React from "react";
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Index = () => {
  const awards = [
    {
      title: "National Mineral Award",
      year: "2006",
      description:
        "Awarded for significant contributions to mineral discovery, specifically in gold and base metal exploration.",
    },
    {
      title: "Geological Excellence Award",
      year: "2015",
      description:
        "Recognized for outstanding performance in leading geophysical survey projects.",
    },
    // Add more awards as needed
  ];

  return (
    <Box id="awards" sx={{ padding: "60px 20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Awards & Recognition
      </Typography>
      <Paper
        elevation={3}
        sx={{ padding: "40px", maxWidth: "800px", margin: "auto" }}
      >
        <List>
          {awards.map((award, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <StarIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={`${award.title} (${award.year})`}
                secondary={award.description}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Index;
