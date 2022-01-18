import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React, {useState} from "react";

function MUICheckBox() {

    const [game, setGame] = useState([])
    const handleChange = (e) => {
        let data = game;
        data.push(e.target.value)
        console.log(data);
      };

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
      </div><hr />
      <div>
          <Checkbox value='Cricket' onChange={handleChange} />Cricket
          <Checkbox value='FootBall' onChange={handleChange} />FootBall
          <Checkbox value='Table-Tennis' onChange={handleChange} />Table-Tennis
      </div>
    </div>
  );
}

export default MUICheckBox;
