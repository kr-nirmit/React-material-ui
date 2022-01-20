import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

function MUICard() {
  return (
    <div>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader title="Knackroot"></CardHeader>
        <CardContent>
          <Typography color="primary"> Word of the Day</Typography>
          <Typography color="text.primary"> Word of the Day</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MUICard;
