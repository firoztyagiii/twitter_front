import styles from "./YourAccount.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineKey } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";

const YourAccount = () => {
  return (
    <div className={styles.yourAccount}>
      <h2>Your Account</h2>
      <p className={styles.yourAccountPara}>
        See information about your account, download an archive of your data, or
        learn about your account deactivation options
      </p>
      <div className={styles.yourAccountLinks}>
        <div className={styles.yourAccountLink}>
          <span>
            <AiOutlineUser></AiOutlineUser>
          </span>
          <div className={styles.yourAcoountLinkText}>
            <p className={styles.yourAccountTextHead}>Account Information</p>
            <p className={styles.yourAccountTextPara}>
              Set your account information like name, number, email etc.
            </p>
          </div>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
        <div className={styles.yourAccountLink}>
          <span>
            <AiOutlineKey></AiOutlineKey>
          </span>{" "}
          <div className={styles.yourAcoountLinkText}>
            <p className={styles.yourAccountTextHead}>Change your password</p>
            <p className={styles.yourAccountTextPara}>
              Change your password at any time.
            </p>
          </div>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
        <div className={styles.yourAccountLink}>
          <span>
            <AiOutlineUserDelete></AiOutlineUserDelete>
          </span>{" "}
          <div className={styles.yourAcoountLinkText}>
            <p className={styles.yourAccountTextHead}>
              Deactivate your account
            </p>
            <p className={styles.yourAccountTextPara}>
              Find out how to deactivate your account.
            </p>
          </div>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
      </div>
    </div>
  );
};

export default YourAccount;
