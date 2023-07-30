import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/app" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
