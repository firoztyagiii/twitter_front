import { PropsWithChildren, useState } from "react";

import styles from "./SignInForm.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { useMutation } from "react-query";
import apiLogin from "../../services/apiLogin";

const SignInForm: React.FC<PropsWithChildren> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: { email: string; password: string }) => apiLogin(data),
    onError: () => {},
    onSuccess: () => {},
  });

  const clickHandler = async () => {
    const data = {
      email,
      password,
    };
    const res = mutate(data);
  };

  // const reset = () => {
  //   setEmail("");
  //   setPassword("");
  // };

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
        <button className="primaryBtn" onClick={clickHandler}>
          Login
        </button>
        <Button kind="secondary">Forgot password?</Button>
      </div>
    </div>
  );
};

export default SignInForm;
