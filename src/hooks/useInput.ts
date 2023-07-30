import { useState } from "react";

const useInput = (validateFn: (email: string) => boolean) => {
  const [value, setValue] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const isValidate = validateFn(value);

  const err = {
    isValidate,
    isTouched,
    value: value ? true : false,
  };

  return { value, setValue, err, setIsTouched };
};

export default useInput;
