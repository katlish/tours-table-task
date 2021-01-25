import React from "react";
import classes from "./PageTitle.module.css";


export interface ITitleProps {
    title: string
}
  

function PageTitle({title}:ITitleProps){
    return (
        <div className={classes.PageTitle}> 
            {title}                
        </div>
    ) 
  }
  
export default PageTitle;