import { Footer } from "./components/Footer";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Filtration } from "./components/Filtration";
import { MyLoader } from "./components/Products/Skeleton";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch("https://68be220c227c48698f86132b.mockapi.io/items")
        .then((response) => response.json())
        .then((result) => {
          setItems(result);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>
          <div className="main_container">
            <Filtration />
            <div className="main_content">
              {isLoading
                ? [...new Array(34)].map((_, i) => <MyLoader key={i} />)
                : items.map((value) => <Products key={value.id} {...value} />)}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
