import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Web from "./pages/Web";
import ProfilePage from "./pages/Profile";

import Auth from "./components/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store from "./store/store";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Auth>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/web" element={<Web></Web>}></Route>
              <Route
                path="/:user"
                element={<ProfilePage></ProfilePage>}
              ></Route>
            </Routes>
          </BrowserRouter>
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
        </Auth>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
