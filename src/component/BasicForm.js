import "./BasicForm.css";
import logo from "../assests/logos.png";
// import useInput from "../hooks/use-input";
import { useState } from "react";

const BasicForm = () => {
  const UserName = "test";
  const password = "12345678";
  // const {
  //   value: enteredName,
  //   isValid: enteredNameIsValid,
  //   hasError: nameInputhaserror,
  //   valueChangeHandler: nameChangeHandler,
  //   inputBlurHandler: nameBlurHandler,
  //   reset: resetNameInput,
  // } = useInput(value => value === UserName);

  // const {
  //   value: enteredPassword,
  //   isValid: enteredPasswordIsValid,
  //   hasError: passwordInputHasError,
  //   valueChangeHandler: passwordChangeHandler,
  //   inputBlurHandler: passwordBlurHandler,
  //   reset: resetPasswordInput,
  // } = useInput(value => value === password);

  // const formSubmissionHandler = (event) => {
  //   event.preventDefault();

  //   if (!enteredNameIsValid || !enteredPasswordIsValid){
  //     return;
  //   }
  //   console.log("LoggedIn");

  //   resetNameInput();
  //   resetPasswordInput();
  // };

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName !== UserName) {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    if (enteredPassword !== password) {
      setEnteredPasswordIsValid(false);
      return;
    }
    setEnteredPasswordIsValid(true);

    console.log("loggedIn!!!!!!!!!!!!!!");

    setEnteredName("");
    setEnteredPassword("");
  };

  const nameInputIsInvalid = !enteredNameIsValid;
  const passwordInputIsInvalid = !enteredPasswordIsValid;

  return (
    <div className="container">
      <h1>Welcome Back!</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum reiciendis
        minus atque mollitia natus accusamus.
      </p>
      <img src={logo} alt="study" className="logo" />

      <div className="form-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={formSubmitHandler}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                id="name"
                onChange={nameChangeHandler}
                // onBlur={nameBlurHandler}
                value={enteredName}
              />

              {nameInputIsInvalid && (
                <p className="error-text">Invalid UserName</p>
              )}
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={passwordChangeHandler}
                // onBlur={passwordBlurHandler}
                value={enteredPassword}
              />

              {passwordInputIsInvalid && (
                <p className="error-text">Invalid Password</p>
              )}
            </div>
            <input type="submit" className="btn solid" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
