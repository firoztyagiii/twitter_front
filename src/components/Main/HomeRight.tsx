import { PropsWithChildren } from "react";

import Modal from "../../UI/Modal/Modal";
import styles from "./HomeRight.module.css";
import Button from "../../UI/Button/Button";
import SignInForm from "../SignInForm/SignInForm";
import SignUpModal from "../SIgnUpModal/SIgnUpModal";

const HomeRight: React.FC<PropsWithChildren> = () => {
  return (
    <div className={styles.homeRight}>
      <div className={styles.homeRightImgContainer}>
        <img className={styles.homeRightImg} src="logo.png"></img>
      </div>
      <div>
        <h1 className={`${styles.homeRightHeading} heading`}>Happening now</h1>
        <h3 className={`${styles.homeRightSubHeading} heading`}>
          Join Twitter today.
        </h3>
        <div className={styles.homeRightButtons}>
          <Button kind="login" img="googleLogo.jpg">
            Sign up with Google
          </Button>
          <Button kind="login" img="appleLogo.png">
            Sign up with Apple
          </Button>
          <div className={styles.divider}></div>
          <Modal>
            <Modal.Button>
              <div className="center">
                <button className="primaryBtn">Create Account</button>
              </div>
            </Modal.Button>
            <Modal.Window>
              <SignUpModal></SignUpModal>
            </Modal.Window>
          </Modal>
          <p className={styles.homeRightTerms}>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
          <div className={styles.homeRightSignIn}>
            <p className={styles.homeRightSignInText}>
              Already have an account?
            </p>
            <Modal>
              <Modal.Button>
                <button className="primaryBtn">Sign In</button>
              </Modal.Button>
              <Modal.Window>
                <SignInForm></SignInForm>
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
