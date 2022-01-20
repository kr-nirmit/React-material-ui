import { Avatar } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";

function MUIAvatar() {
  return (
    <div>
      <Avatar>NT</Avatar>
      <Avatar sx={{ bgcolor: orange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: orange[500] }}>Nirmit</Avatar>
      <p>
        <hr />
      </p>
      <Avatar src="/home/mohak/Desktop/React-material-ui/public/img/Profile.png"></Avatar>
      <p>
        <hr />
      </p>
      <Avatar sx={{ bgcolor: orange[500] }} variant="square">N</Avatar>
      <p>
        <hr />
      </p>
    </div>
  );
}

export default MUIAvatar;
