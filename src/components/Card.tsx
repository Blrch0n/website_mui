import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type CardType = {
  label?: string;
  img?: string;
  price?: string;
};

export default function ActionAreaCard(props: CardType) {
  const {
    label = "Өглөөний хоол",
    img = "card_img1.svg",
    price = "4,800₮",
  } = props;
  return (
    <Card sx={{ maxWidth: 282, maxHeight: 253 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`./${img}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
