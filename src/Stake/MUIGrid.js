import { Box, Grid, Typography, ButtonBase } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function MUIGrid() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              width: 60,
              height: 50,
              backgroundColor: "primary.light",
            }}
          ></Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              width: 50,
              height: 50,
              backgroundColor: "primary.light",
            }}
          ></Box>
        </Grid>
      </Grid>
      <p>
        <hr />
      </p>
      <Grid container spacing={2} maxWidth={500}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="Profile"
              src="/home/mohak/Desktop/React-material-ui/public/img/Profile.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MUIGrid;
