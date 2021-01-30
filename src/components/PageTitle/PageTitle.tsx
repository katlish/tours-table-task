import React from "react";
import classes from "./PageTitle.module.css";

export interface ITitleProps {
  title: string;
}

const PageTitle = ({ title }: ITitleProps) => (
  <div className={classes.PageTitle}>{title}</div>
);

export default PageTitle;
