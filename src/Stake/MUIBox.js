import { Box, Button } from "@mui/material";
import React from "react";

function MUIBox() {
  return (
    <div>
      <Box
        sx={{
          width: 50,
          height: 50,
          backgroundColor: "primary.light",
        }}
      ></Box>
      <p>
        <hr />
      </p>
      <Box component="span" sx={{ p: 2, border: "1px solid black" }}>
        <Button>Save</Button>
      </Box>
    </div>
  );
}

export default MUIBox;
