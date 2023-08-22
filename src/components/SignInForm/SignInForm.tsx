import { PropsWithChildren, useState } from "react";

import styles from "./SignInForm.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { useMutation } from "react-query";
import apiLogin from "../../services/apiLogin";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/userSlice";

const SignInForm: React.FC<PropsWithChildren> = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("firoz@test.com");
  const [password, setPassword] = useState("12345678");

  const { mutate, isLoading } = useMutation({
    mutationFn: () => apiLogin(email, password),
    onError: (err: Error) => {
      toast.error(err.message);
      reset();
    },
    onSuccess: (data) => {
      toast.success(data.message || "Logged in successfully");
      disptach(login(data.data.user));
      navigate("/web");
      reset();
    },
  });

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const clickHandler = () => {
    mutate();
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
          {isLoading ? "Logging In" : "Login"}
        </button>
        <Button kind="secondary">Forgot password?</Button>
      </div>
    </div>
  );
};

export default SignInForm;
