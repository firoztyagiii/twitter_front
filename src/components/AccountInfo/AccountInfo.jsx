import { Link } from "react-router-dom";
import style from "./AccountInfo.module.css";
import { IoArrowBackSharp } from "react-icons/io5";
import Input from "../../UI/Input/Input";
import { useState } from "react";
import Button from "../../UI/Button/Button";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import apiGetUserByPass from "../../services/apiGetUserByPass";
import Label from "../../UI/Lable/Label";

const allowedKeys = ["name", "email", "username", "createdAt", "image"];

const AccountInfo = () => {
  const username = useSelector((state) => state.user.user.username);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const confirmMutatation = useMutation({
    mutationFn: async (data) => {
      return apiGetUserByPass(data.password, data.user);
    },
    onError: () => {
      setInvalidPassword(true);
    },
    onSuccess: (data) => {
      setUserInfo(data);
    },
  });

  const [password, setPassword] = useState("");

  const onChangeHandler = (value) => {
    setInvalidPassword(false);
    setPassword(value);
  };

  const onSubmitHandler = () => {
    confirmMutatation.mutate({ password, user: username });
  };

  let data = userInfo ? (
    <div>
      <div className={`${style.accountInfoBack} ${style.pad}`}>
        <Link to="..">
          <IoArrowBackSharp></IoArrowBackSharp>
        </Link>
        <p>Account Information</p>
      </div>
      {allowedKeys.map((key) => {
        if (userInfo[key]) {
          if (key === "createdAt") {
            return (
              <Label key={key} heading={key} data={Date(userInfo[key])}></Label>
            );
          }
          return <Label key={key} heading={key} data={userInfo[key]}></Label>;
        }
      })}
    </div>
  ) : (
    <div className={style.accountInfo}>
      <div className={style.accountInfoBack}>
        <Link to="..">
          <IoArrowBackSharp></IoArrowBackSharp>
        </Link>
        <p>Account Information</p>
      </div>
      <h2>Confirm your Password</h2>
      <p className={style.accountInfoConfirm}>
        Please enter your password in order to get this.
      </p>
      <Input
        type="password"
        placeholder="Confirm your password"
        value={password}
        onChange={onChangeHandler}
      ></Input>
      {invalidPassword && <p className={style.invalid}>Invalid password</p>}
      <div className={style.accountInfoBtn}>
        <Button onclick={onSubmitHandler} kind="primary">
          {confirmMutatation.isLoading ? "Checking..." : "Confirm"}
        </Button>
      </div>
    </div>
  );

  return data;
};

export default AccountInfo;
