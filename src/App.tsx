import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Web from "./pages/Web";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/web" element={<Web></Web>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
