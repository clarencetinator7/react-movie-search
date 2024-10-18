import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function SearchBar({ onSearchHandler }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [plot, setPlot] = useState("short");

  function handleSearch() {
    onSearchHandler({
      title,
      year,
      plot,
    });
  }

  return (
    <Grid2
      container
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <TextField
          id="title"
          label="Title"
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>
      <Box>
        <TextField
          id="year"
          label="Year"
          variant="standard"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </Box>
      <FormControl variant="standard" sx={{ minWidth: 200 }}>
        <InputLabel id="plot-select">Plot</InputLabel>
        <Select
          labelId="plot-select"
          id="plot"
          label="Plot"
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
        >
          <MenuItem value="short">Short</MenuItem>
          <MenuItem value="full">Full</MenuItem>
        </Select>
      </FormControl>
      <Box>
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Grid2>
  );
}
