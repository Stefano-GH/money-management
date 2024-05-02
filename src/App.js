import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Uscite from "./pages/uscite/Uscite";
import Footer from "./components/footer/Footer";

function App() {
  return <BrowserRouter className="App">
    <Navbar />

    <Routes>
      <Route index element={<Home />} />
      <Route path="/uscite" element={<Uscite />} />
    </Routes>
    
    <Footer />
  </BrowserRouter>;
}

export default App;
