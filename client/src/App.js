import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<h1>Signup Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/products" element={<h1>Products Page</h1>} />
        <Route path="/pricing" element={<h1>Pricing Page</h1>} />
        <Route path="/support" element={<h1>Support Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
