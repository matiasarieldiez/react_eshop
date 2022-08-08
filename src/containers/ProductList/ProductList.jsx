import Styles from "./ProductList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const products = await getProducts();
            setProducts(products);
        };

        wrapper();
    }, []);

    return (
        <section className={Styles.Grid}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductList;
