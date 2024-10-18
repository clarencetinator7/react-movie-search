import myImage from "../assets/images/me.jpg";
import { Box, Container, Grid2, Link, Typography } from "@mui/material";

export default function AboutDeveloper() {
  return (
    <Container className="section about-section">
      <Grid2
        container
        sx={{ marginTop: 10 }}
        alignItems="center"
        justifyItems="center"
      >
        <Grid2 item size={6}>
          <img className="about-img" src={myImage} alt="Me" />
        </Grid2>
        <Grid2 item size={6} sx={{ padding: 5 }}>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                marginBottom: 10,
                fontWeight: "bold",
                color: "#a7c6cf",
              }}
            >
              ABOUT THE DEVELOPER
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginBottom: 5, fontSize: 25, fontWeight: "bold" }}
            >
              Hi, I’m Clarence Joseph Dimafelix 👋🏽
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, fontSize: 18 }}>
              As a dedicated developer, I find joy in bringing ideas to life
              through the power of code. Curiosity fuels my journey, pushing me
              to explore new technologies and embrace the ever-evolving
              landscape of the tech industry.
            </Typography>
            {/* MY PORTFOLIO LINK */}
            <Link
              href="https://www.spadesdev.tech/#projects"
              target="_blank"
              variant="button"
              underline="hover"
              rel="noopener noreferrer"
              sx={{ fontSize: 18, fontWeight: "bold" }}
            >
              My Works →
            </Link>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
