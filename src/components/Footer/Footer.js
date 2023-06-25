import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { pink } from "@mui/material/colors";
import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleClic = (source) => {
    if (source === "linkedin") {
      window.open("https://www.linkedin.com/in/nataschastocco", "_blank");
    }
    window.open("https://github.com/nataschastocco", "_blank");
  };
  return (
    <Box className="container-footer bg-dark">
      <Box className="logo-footer">
        <img
          src="https://www.nataschastocco.com/assets/img/banner2.jpg"
          alt="logo"
          className="h-9"
        />
        <Typography>Natascha Stocco Videoclips</Typography>
        <Box>
          <IconButton onClick={() => handleClic("linkedin")}>
            <Tooltip title="Visita">
              <LinkedInIcon sx={{ width: 35, height: 35, color: pink[600], marginRight: 2 }} />
            </Tooltip>
          </IconButton>
          <IconButton onClick={handleClic}>
            <Tooltip title="Ver">
              <GitHubIcon sx={{ width: 35, height: 35, color: pink[600], marginLeft: 2 }} />
            </Tooltip>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
