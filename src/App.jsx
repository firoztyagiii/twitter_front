import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";

import store from "./store/store";
import Home from "./pages/Home";
import Web from "./pages/Web";
import ProfilePage from "./pages/ProfilePage";
import Auth from "./components/Auth/Auth";
import Settings from "./pages/Settings";
import YourAccount from "./components/SettingsOptions/YourAccount/YourAccount";
import Security from "./components/SettingsOptions/Security/Security";
import TweetInfo from "./components/TweetInfo/TweetInfo";
import UserTweet from "./components/Profile/UserTweet/UserTweet";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Auth>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/web" element={<Web></Web>}>
                <Route
                  path=":username/tweet/:tweetId"
                  element={<TweetInfo></TweetInfo>}
                ></Route>
              </Route>
              <Route path="/settings" element={<Settings></Settings>}>
                <Route
                  path="account"
                  element={<YourAccount></YourAccount>}
                ></Route>
                <Route path="security" element={<Security></Security>}></Route>
                <Route path="privacy" element={<p>privacy</p>}></Route>
                <Route
                  path="notification"
                  element={<p>notification</p>}
                ></Route>
              </Route>
              <Route path="/:user" element={<ProfilePage></ProfilePage>}>
                <Route path="posts" element={<UserTweet></UserTweet>}></Route>
                <Route path="replies" element={<p>replies</p>}></Route>
                <Route path="media" element={<p>media</p>}></Route>
                <Route path="likes" element={<p>likes</p>}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Auth>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
