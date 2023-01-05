import { Card, CardContent, CardMedia } from "@material-ui/core";
import React from "react";

export default function CardComponent(props) {
  const { children, height = "140", imgPath } = props;
  return (
    <Card>
      {imgPath && <CardMedia component="img" height={height} image={imgPath} />}
      <CardContent>{children}</CardContent>
    </Card>
  );
}
