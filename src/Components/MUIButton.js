import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Delete } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';

function MUIButton() {
  const ButtonClick = () => {
    // alert("Button Click");
    setColor("secondary");
  };
  // function ButtonClick(){
  //   alert('Button Click')
  // }

  const [color, setColor] = useState("primary");

  return (
    <div>
      <h1>React Material Ui</h1>
      <div>
        <button>Click</button>
      </div>
      <p>
        <hr />
      </p>
      <div>
        <Button>Click</Button>
        <Button
          color={color}
          variant="contained"
          onClick={() => {
            ButtonClick();
          }}
        >
          Text
        </Button>
        <Button variant="contained" disabled>
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
      </div>
      <p>
        <hr />
      </p>
      <div>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </div>
      <p>
        <hr />
      </p>
      <div>
        <Button size="small" variant="contained">Small</Button>
        <Button size="medium" variant="contained">Medium</Button>
        <Button size="large" variant="contained">Large</Button>
      </div>
      <p>
        <hr />
      </p>
      <Button variant="outlined" startIcon={<Delete />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
}

export default MUIButton;
