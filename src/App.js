import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Basket from "./pages/Basket";
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
            <Route path="/React-pizza" element={<Home />} />
            <Route path="/React-pizza/Basket" element={<Basket />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
