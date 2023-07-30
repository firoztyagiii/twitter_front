import styles from "./SignUpModal.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import React, { useState } from "react";

const SignUpModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
  };

  return (
    <div className={styles.signInForm}>
      <img className={styles.signInLogo} src="logo.png"></img>
      <h2 className={styles.signInHeading}>Sign in to Twitter</h2>
      <div className={styles.signInButtons}>
        <Button kind="login" img="googleLogo.jpg">
          Sign up with Google
        </Button>
        <Button kind="login" img="appleLogo.png">
          Sign up with Apple
        </Button>
        <div className={styles.divider}></div>
        <form onSubmit={submitHandler} className={styles.signUpForm}>
          <Input
            value={email}
            onChange={setEmail}
            type="text"
            placeholder="Email or username"
          ></Input>
          <Input
            value={password}
            onChange={setPassword}
            type="password"
            placeholder="Password"
          ></Input>
          <Input
            value={confirmPassword}
            onChange={setConfirmPassword}
            type="password"
            placeholder="Password"
          ></Input>
          <Button kind="primary">Sign Up</Button>
        </form>
        {/* <Button kind="secondary">Forgot password?</Button> */}
      </div>
    </div>
  );
};

export default SignUpModal;
