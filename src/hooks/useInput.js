import { useState } from "react";

const useInput = (validateFn) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValidate = validateFn(value);

  const err = {
    isValidate,
    isTouched,
    value: value ? true : false,
  };

  return { value, setValue, err, setIsTouched };
};

export default useInput;
