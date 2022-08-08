import Styles from "./App.module.scss";
import ProductList from "./containers/ProductList/ProductList";
import FeaturedProductList from "./containers/FeaturedProductList/FeaturedProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import ProductPage from "./containers/ProductPage/ProductPage";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <main className={Styles.Main}>
                            <div>
                                <h1>WAD || It's time to redefine ourselves</h1>
                            </div>
                            <div>
                                <ProductList />
                            </div>
                            <div>
                                <h2>Find our featured products below</h2>
                            </div>
                            <div>
                                <FeaturedProductList />
                            </div>
                        </main>
                    }
                ></Route>
                <Route path="/products/:id" element={<ProductPage />}></Route>
                {/* <Route path="/cart" element={<CartPage />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
