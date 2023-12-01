import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import apiAboutMe from "../../services/apiAboutMe";
import { login } from "../../store/slices/userSlice";

const Auth = ({ children }) => {
  const dispatch = useDispatch();

  useQuery({
    queryFn: apiAboutMe,
    queryKey: ["user"],

    onSuccess: (user) => {
      dispatch(login(user));
    },
  });

  return children;
};

export default Auth;
