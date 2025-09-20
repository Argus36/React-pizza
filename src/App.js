import { Footer } from "./components/Footer";
import { Product } from "./components/Product";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>
          <div className="main_container">
            <div className="content_top">
              <div className="categories">
                <button className="active">Все</button>
                <button>Мясные</button>
                <button>Вегетарианская</button>
                <button>Гриль</button>
                <button>Острые</button>
                <button>Закрытые</button>
              </div>
              <div className="sort">
                <select name="sort" id="select_sort">
                  <option value="">Популярности</option>
                  <option value="">Цене</option>
                  <option value="">Алфавиту</option>
                </select>
              </div>
            </div>
            <div className="main_content">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
