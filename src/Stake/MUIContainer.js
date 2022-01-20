import { Box, Container } from "@mui/material";
import React from "react";

function MUIContainer() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "900px" }} />
      </Container>
    </div>
  );
}

export default MUIContainer;
