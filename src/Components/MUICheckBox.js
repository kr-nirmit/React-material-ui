import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React from "react";

function MUICheckBox() {
  return (
    <div>
      <h1>React Material Ui CheckBoxes</h1>
      <div>
        <Checkbox color="success" />
        <Checkbox checked />
        <Checkbox disabled />
        <Checkbox disabled checked />
      </div><hr />
      <div>
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
      </div>
    </div>
  );
}

export default MUICheckBox;
