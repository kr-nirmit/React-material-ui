import { Button, ButtonGroup } from "@mui/material";
import React from "react";

function MUIButtonGroup() {
  return (
    <div>
      <ButtonGroup
        // variant="outlined"
        orientation="vertical"
        color="primary"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

export default MUIButtonGroup;
