import GetVerified from "../GetVerified/GetVerified";
import styles from "./Explore.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Explore = () => {
  return (
    <div className={styles.explore}>
      <div className={styles.exploreInput}>
        <input
          className={styles.exploreInputInput}
          type="text"
          placeholder="Search..."
        ></input>
        <AiOutlineSearch></AiOutlineSearch>
      </div>
      <GetVerified></GetVerified>
    </div>
  );
};
export default Explore;
