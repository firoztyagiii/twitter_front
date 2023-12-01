import styles from "./Input.module.css";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      autoComplete="on"
      type={type}
      placeholder={placeholder}
      className={styles.input}
    ></input>
  );
};

export default Input;
