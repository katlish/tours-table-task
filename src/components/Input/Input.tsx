import React from "react";
import classes from "./Input.module.css";

export interface IInputProps {
  text: string;
  changeHandler: (event: any) => void;
  label: string;
}

const Input = ({ text, changeHandler, label }: IInputProps) => (
  <div className={classes.Input}>
    <input
      type="text"
      placeholder="חיפוש"
      value={text}
      onChange={e => {
        changeHandler(e.target.value);
      }}
    />
    {label}
  </div>
);

export default Input;
