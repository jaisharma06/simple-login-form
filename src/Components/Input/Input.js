import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Input.css";

const Input = (props) => {

    const icon = props.type.includes("password") ? faKey : faEnvelope; 

  return (
    <div className="input">
      <FontAwesomeIcon className="input__icon" icon={icon}/>
      <input className="input__field"
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
