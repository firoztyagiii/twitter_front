import { Link } from "react-router-dom";
import styles from "./ChangePassword.module.css";
import { IoArrowBackSharp } from "react-icons/io5";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const ChangePassword = () => {
  return (
    <div className={styles.changePassword}>
      <div className={styles.accountInfoBack}>
        <Link to="..">
          <IoArrowBackSharp></IoArrowBackSharp>
        </Link>
        <p>Account Information</p>
      </div>
      <Input type="password" placeholder="Current password"></Input>
      <div className={styles.border}>
        <span></span>
        <Input type="password" placeholder="New password"></Input>
        <Input type="password" placeholder="Confirm your new password"></Input>
      </div>
      <div className={styles.changePasswordConfirm}>
        <Button kind="primary">Change</Button>
      </div>
    </div>
  );
};

export default ChangePassword;
