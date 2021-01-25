import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import classes from "./Tour.module.css";
import {Promotion} from '../EshetToursPromotions/EshetToursPromotions'

export interface ITourProps {
    promotion: Promotion
}
  

function Tour({promotion}:ITourProps){
    const longTitle = promotion.title;
    let shortTitle = longTitle;

    if (longTitle.length > 22) {
        shortTitle = '...'+longTitle.substring(0, 22);
    }
    return (
        <div className={classes.Tour}> 
            <div className={classes.ImageContainer}>
                <img className={classes.Image} src={promotion.imgLink}  alt="Img link failed"/>
            </div>
            <Tooltip title={longTitle} placement="bottom-end">
                <div className={classes.Title}>
                    {shortTitle}
                </div>
            </Tooltip>
                
        </div>
    ) 
  }
  
export default Tour;