import Styles from "./ProductList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);

    useEffect(() => {
        const wrapper = async () => {
            const products = await getProducts();
            setProducts(products);
            setLoadingProducts(false);
        };

        wrapper();
    }, []);

    return (
        <section className={Styles.Grid}>
            {loadingProducts ? (
                <h1>Loading...</h1>
            ) : (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </section>
    );
};

export default ProductList;
