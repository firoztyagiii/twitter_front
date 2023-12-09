import styles from "./SignUpModal.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import React, { useState } from "react";
import apiSignup from "../../services/apiSignup";
import { useMutation } from "react-query";
import classes from "../../UI/Button/Button.module.css";
import { toast } from "react-toastify";

const SignUpModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const reset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
    setName("");
  };

  const mutationQuery = useMutation({
    mutationFn: async (data) => {
      return apiSignup(data);
    },
    onError: () => {},
    onSuccess: async () => {
      toast.success("Account created successfully, you can login now...");
      reset();
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    mutationQuery.mutate({
      name,
      email,
      password,
      confirmPassword,
      username,
    });
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
        <form className={styles.signUpForm}>
          <Input
            value={name}
            onChange={setName}
            type="text"
            placeholder="Name"
          ></Input>
          <Input
            value={username}
            onChange={setUsername}
            type="text"
            placeholder="Username"
          ></Input>
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
          <button className={classes.primaryBtn} onClick={submitHandler}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
