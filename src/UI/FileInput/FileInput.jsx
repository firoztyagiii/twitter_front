import React, { Children } from "react";
import styles from "./FileInput.module.css";

const FileInput = ({ children, changeHandler, blob }) => {
  return (
    <div>
      <input
        onChange={(e) => {
          const imgUrl = URL.createObjectURL(e.target.files[0]);
          blob(e.target.files[0]);
          changeHandler(imgUrl);
        }}
        className={styles.input}
        id="fileImg"
        type="file"
      ></input>
      <label htmlFor="fileImg">{Children.only(children)}</label>
    </div>
  );
};

export default FileInput;
