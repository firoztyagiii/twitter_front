import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Web from "./pages/Web";
import ProfilePage from "./pages/ProfilePage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store from "./store/store";

import { QueryClient, QueryClientProvider } from "react-query";
import Auth from "./components/Auth/Auth";
import Settings from "./pages/Settings";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Auth>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/web" element={<Web></Web>}></Route>
              <Route path="/settings" element={<Settings></Settings>}>
                <Route path="account" element={<p>account</p>}></Route>
                <Route path="privacy" element={<p>privacy</p>}></Route>
                <Route path="security" element={<p>security</p>}></Route>
                <Route
                  path="notification"
                  element={<p>notification</p>}
                ></Route>
              </Route>
              <Route path="/:user" element={<ProfilePage></ProfilePage>}>
                <Route path="posts" element={<p>tweets</p>}></Route>
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
