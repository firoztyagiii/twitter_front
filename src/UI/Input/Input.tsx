import { PropsWithChildren } from "react";

import styles from "./Input.module.css";
// import useInput from "../../hooks/useInput";
// import validateEmail from "../../utils/validateEmail";

interface Props {
  placeholder: string;
  type: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<PropsWithChildren<Props>> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      value={value}
      onChange={(e: React.FormEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
      type={type}
      placeholder={placeholder}
      className={styles.input}
    ></input>
  );
  // const { value, setValue, setIsTouched, err } = useInput(validateEmail);
  // const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  //   setIsTouched(true);
  // };
  // const blurHandler = () => {
  //   // setIsTouched(false);
  // };
  // let isValid = true;
  // if (err.isTouched) {
  //   isValid = err.value && err.isValidate;
  // }
  // console.log(isValid);
  // return (
  //   <>
  //     <input
  //       value={value}
  //       onChange={changeHandler}
  //       onBlur={blurHandler}
  //       type={type}
  //       placeholder={placeholder}
  //       className={`${styles.input} ${!isValid ? "wrongInput" : ""} ${
  //         err.isTouched && err.isValidate && err.value ? "validInput" : ""
  //       }`}
  //     ></input>
  //     {!isValid && <span className={styles.invalidInput}>Invalid email</span>}
  //   </>
  // );
};

export default Input;
