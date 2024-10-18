import { Container, Typography } from "@mui/material";
import { useState } from "react";
import SearchBar from "./SearchBar";
import axiosInstance, { API_KEY } from "../utils/axios";
import MovieDetails from "./MovieDetails";
import FindNextMovie from "./FindNextMovie";

export default function MovieSearch() {
  const [movieData, setMovieData] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchHandler = (searchFields) => {
    try {
      setIsLoading(true);
      setNotFound(false);
      axiosInstance
        .get(
          `?apikey=${API_KEY}&t=${searchFields.title}&y=${searchFields.year}&plot=${searchFields.plot}`
        )
        .then((res) => res.data)
        .then((data) => {
          if (data.Response === "False") {
            setNotFound(true);
            setIsLoading(false);
            setMovieData({});
            return;
          }
          setMovieData(data);
          setIsLoading(false);
        });
    } catch {
      console.log("Error");
    }
  };

  return (
    <Container className="section">
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{ marginBottom: 5, paddingTop: 5 }}
        >
          Movie Search App
        </Typography>
      </Container>
      <Container maxWidth="md" sx={{ marginBottom: 5 }}>
        <SearchBar onSearchHandler={onSearchHandler} />
      </Container>
      <Container maxWidth="xl">
        {isLoading && (
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: 5 }}
          >
            Loading...
          </Typography>
        )}
        {notFound && (
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: 5 }}
          >
            Movie not found.
          </Typography>
        )}
        {Object.keys(movieData).length > 0 ? (
          <MovieDetails movieData={movieData} />
        ) : (
          <FindNextMovie />
        )}
      </Container>
    </Container>
  );
}
