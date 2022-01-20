import { Box, Link } from "@mui/material";
import React from "react";

function MUILink() {
  return (
    <div>
      <Box sx={{ m: 5 }}>
        <Link href="#1" margin={2}>
          Link
        </Link>
        <Link href="#2" color="inherit" margin={2} underline="none">
          Link
        </Link>
        <Link href="#3" variant="body1" margin={2} underline="hover">
          Link
        </Link>
        <Link href="#4" variant="body2" margin={2}>
          Link
        </Link>
      </Box>
    </div>
  );
}

export default MUILink;
