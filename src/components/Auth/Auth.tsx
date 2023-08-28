import { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import apiAboutMe from "../../services/apiAboutMe";
import { login } from "../../store/slices/userSlice";

const Auth: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();

  useQuery({
    queryFn: apiAboutMe,
    queryKey: ["user"],

    onSuccess: (user) => {
      dispatch(login(user));
    },

    onError: (err: Error) => {
      console.log(err, "ERROR FROM AUTH FILE");
    },
  });

  return children;
};

export default Auth;
