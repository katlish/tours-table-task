import React from "react";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import classes from "./Tour.module.css";
import { Promotion } from "../containers/EshetToursPromotions/EshetToursPromotions";

export interface ITourProps {
  promotion: Promotion;
}

const TourCard = ({ promotion }: ITourProps) => {
  const renderTooltip = (props: any) => <Tooltip {...props}>{props}</Tooltip>;

  return (
    <Card className={classes.Tour}>
      <Card.Img
        className={classes.Image}
        variant="top"
        src={promotion.imgLink}
      />
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip(promotion.title)}
      >
        <Card.Text className={classes.Title}>{promotion.title}</Card.Text>
      </OverlayTrigger>
    </Card>
  );
};

export default TourCard;
