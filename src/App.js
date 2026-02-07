import { Routes, Route } from "react-router";
import { useState } from "react";

import Home from "./pages/Home";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <main>
          <Routes>
            <Route
              path="/React-pizza"
              element={<Home searchValue={searchValue} />}
            />
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
