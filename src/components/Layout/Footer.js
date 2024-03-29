import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center",
        bgcolor: "#1A1A19",
        color: "white",
        p: 0.11,
        zIndex: 1000, // Ensure footer is above other elements
      }}
    >
      <Box
        sx={{
          my: 1,
          "& svg": {
            fontSize: "20px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: "goldenrod",
            transform: "translateX(5px)",
            transition: "all 400ms",
          },
        }}
      >
        {/* icons */}
        <InstagramIcon />
        <TwitterIcon />
        <GitHubIcon />
        <YouTubeIcon />
      </Box>
      <Typography
        variant="h5"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "1rem",
          },
          fontSize: "0.95rem",
        }}
      >
        All Rights Reserved &copy; K.Seotsanyana
      </Typography>
    </Box>
  );
};

export default Footer;




