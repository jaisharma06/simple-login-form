import "./Button.css";
import React from "react";

const Button = (props) => {
  var classes = ["button"];
  if(props.classes){
      classes = [...props.classes, "button"];
  }

  return (
    <div className={classes.join(' ')}>
      <button type={props.type} className="button__item" onClick={props.onClick}>{props.children}</button>
    </div>
  );
};

export default Button;
