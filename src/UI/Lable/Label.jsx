import styles from "./Lable.module.css";
import { BiRightArrowAlt } from "react-icons/bi";

const Label = ({ heading, data }) => {
  const head =
    heading.split("")[0].toUpperCase() + heading.split("").splice(1).join("");

  return (
    <div className={styles.label}>
      <div className={styles.labelText}>
        <p className={styles.labelTextHeading}>{head}</p>
        <p className={styles.labelTextData}>{data}</p>
      </div>
      <BiRightArrowAlt></BiRightArrowAlt>
    </div>
  );
};

export default Label;
