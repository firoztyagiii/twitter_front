import styles from "./GetVerified.module.css";

import Modal from "../../UI/Modal/Modal";

{
  /* <Modal>
<Modal.Button>
  <button>sign up</button>
</Modal.Button>
<Modal.Window>
  <h1>this is my modal</h1>
</Modal.Window>
</Modal> */
}

const GetVerified = () => {
  return (
    <div className={styles.getVerified}>
      <h2>Get Verified</h2>
      <p>Subscribe to unlock new features</p>
      <button className="secondaryBtn">Get Verified</button>
    </div>
  );
};

export default GetVerified;
