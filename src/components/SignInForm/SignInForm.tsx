import { PropsWithChildren } from "react";

import styles from "./SignInForm.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const SignInForm: React.FC<PropsWithChildren> = () => {
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
        <Input type="text" placeholder="Email or username"></Input>
        <Button kind="primary">Next</Button>
        <Button kind="secondary">Forgot password?</Button>
      </div>
    </div>
  );
};

export default SignInForm;
