import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Agree from "./pages/Agree";
import NotFound from "./pages/NotFound";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
