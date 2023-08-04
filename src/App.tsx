import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Web from "./pages/Web";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/web" element={<Web></Web>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
