import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography, Button } from "@mui/material";

const Drone_Imagery = () => {
  // State to store the image data retrieved from the API
  const [images, setImages] = useState([]);

  // Function to handle the click event on the "View Images" button
  const handleViewImages = async () => {
    try {
      // Fetch images from the API (replace 'apiEndpoint' with your actual API endpoint)
      const response = await fetch('https://cloud1.webodm.net/public/task/4ae1bb4c-8ff7-41be-bd52-a31bb86e68d7/map/');
      const data = await response.json();
      // Update the images state with the retrieved data
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Drone Imagery</Typography>
        <Button variant="contained" color="primary" onClick={handleViewImages}>
          View Images
        </Button>
        {/* Render images here based on the 'images' state */}
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={`Image ${index}`} />
        ))}
      </Box>
    </Layout>
  );
};

export default Drone_Imagery;











