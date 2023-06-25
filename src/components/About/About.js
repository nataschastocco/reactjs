import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ maxWidth: 500 }} className="mt-3 bg-dark rounded-4 p-3 shadow text-center container">
      <Typography variant="h5" className="text-center uppercase text-white mb-2">
        Quien soy{" "}
      </Typography>
      <Box sx={{ maxWidth: 500 }} className="bg-light rounded-4 p-3 m-2">
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            alt="About"
            height="300"
            image="https://www.nataschastocco.com/assets/img/IMG_1491.jpg"
          />
        </Card>
        <Box>
          <CardContent className="p-1 mb-1">
            <Typography align="justify" variant="body1">
              Fotografía y videoclips
            </Typography>
            <Typography align="justify" variant="body1">
              Puedes encontrar en mis servicios, el que se ajuste a tus necesidades
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
