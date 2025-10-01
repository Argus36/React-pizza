import { Footer } from "./components/Footer";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Filtration } from "./components/Filtration";
import items from "./pizza.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>
          <div className="main_container">
            <Filtration />
            <div className="main_content">
              {items.map((value) => {
                return <Products key={value.id} {...value} />;
              })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
