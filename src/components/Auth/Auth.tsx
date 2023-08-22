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
    onSuccess: (data) => {
      dispatch(login(data.data));
    },
  });

  return children;
};

export default Auth;
