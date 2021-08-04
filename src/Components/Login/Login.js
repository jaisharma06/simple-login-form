import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG} from "@fortawesome/free-brands-svg-icons";
import "./Login.css";

const Login = (props) => {
  return (
    <div className="login">
      <form className="login__form">
        <div className="login__form__content">
          <div className="login__form__header">
            <h1 className="login__form__header__text">
              Login into your account
            </h1>
          </div>

          <div className="login__form__input">
            <Input type="email" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
          </div>

          <Button type="submit" classes={["login_form__signin"]} onClick={props.onGoogleLogin}>
              Log in
            </Button>

          <div className="login__form__buttons">
            <Button classes={["login__form__buttons__facebook"]} onClick={props.onFacebookLogin}>
              <FontAwesomeIcon
                className="login__form__buttons__facebook__icon"
                icon={faFacebookF}
              />
              Facebook
            </Button>
            <Button classes={["login__form__buttons__google"]} onClick={props.onGoogleLogin}>
              Google
              <FontAwesomeIcon
                className="login__form__buttons__google__icon"
                icon={faGooglePlusG}
              />
            </Button>
          </div>
          <hr className="login__form__content__separator"/>
          <h5 className="login__form__description__text">A simple login form by - <strong>Jai Sharma</strong></h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
