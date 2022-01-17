import React from "react";
import Button from "@mui/material/Button";

function MUIButton() {
  const ButtonClick = () => {
    alert("Button Click");
  };
  // function ButtonClick(){
  //   alert('Button Click')
  // }

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
          variant="text"
          onClick={() => {
            ButtonClick();
          }}
        >
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" disabled>
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
    </div>
  );
}

export default MUIButton;
