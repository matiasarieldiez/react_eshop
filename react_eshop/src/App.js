import "./App.css";
import PageWrapper from "./Containers/PageWrapper/PageWrapper";
import ProductPage from "./Containers/ProductPage/ProductPage";
import HomePage from "./Containers/HomePage/HomePage";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <PageWrapper>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/products/:productId"
                        element={<ProductPage />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </PageWrapper>
    );
}

export default App;
