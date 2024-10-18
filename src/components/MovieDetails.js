/* eslint-disable react/prop-types */
import { Box, Chip, Container, Grid2, Typography } from "@mui/material";

export default function MovieDetails({ movieData }) {
  return (
    <Container maxWidth="lg" sx={{ padding: 5 }}>
      <Grid2 container justifyContent="center" spacing={5}>
        {/* IMAGE CENTERED */}
        <Grid2 item>
          <img
            className="poster-img"
            src={movieData.Poster}
            alt={movieData.Title}
          />
        </Grid2>
        <Grid2 item size={7}>
          <Box sx={{ marginTop: 2, marginBottom: 2 }}>
            <Typography variant="h4">{movieData.Title}</Typography>
            <Grid2 container spacing={2}>
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "capitalize" }}
              >
                {movieData.Type}
              </Typography>
              |
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "capitalize" }}
              >
                {movieData.Year}
              </Typography>
              |
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "capitalize" }}
              >
                {movieData.Rated}
              </Typography>
            </Grid2>
          </Box>
          <Typography variant="body1">{movieData.Plot}</Typography>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="subtitle1">Ratings:</Typography>
            <Typography variant="h6">
              {/* make the rating bold / 10 */}
              <span className="movie-rating">{movieData.imdbRating}</span> / 10
            </Typography>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="subtitle1">Genre:</Typography>
            {/* Badge Genre */}
            {movieData.Genre.split(", ").map((genre) => (
              <Chip key={genre} label={genre} sx={{ margin: 0.5 }} />
            ))}
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
