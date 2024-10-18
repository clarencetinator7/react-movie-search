import { Grid2, Typography } from "@mui/material";
import FindSVG from "../assets/svg/Find.svg";

export default function FindNextMovie() {
  return (
    <Grid2 container justifyContent="center" alignItems="center">
      <Grid2 item size={12}>
        <img className="find-svg" src={FindSVG} alt="" />
      </Grid2>
      <Grid2 item>
        <Typography variant="h4" align="center">
          Find your next movie
        </Typography>
      </Grid2>
    </Grid2>
  );
}
