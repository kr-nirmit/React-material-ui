import { Checkbox } from "@mui/material";
import React from "react";

function MUICheckBox() {
  return (
    <div>
      <h1>React Material Ui</h1>
      <div>
        <Checkbox color="success" />
        <Checkbox checked />
        <Checkbox disabled />
        <Checkbox disabled checked />
      </div><hr />
    </div>
  );
}

export default MUICheckBox;
