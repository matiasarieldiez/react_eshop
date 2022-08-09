import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import Styles from "./ProductPage.module.scss";
import { updateProductStockById } from "../../services/products";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [addedToCartCount, setAddedToCartCount] = useState(0);

    useEffect(() => {
        getProductById(id)
            .then((product) => setProduct(product))
            .finally(() => setLoading(false));
    }, [id, addedToCartCount]);

    const addToCart = async (id, stock) => {
        await updateProductStockById(id, stock);
        setAddedToCartCount(addedToCartCount + 1);
    };

    return (
        <main className={Styles.ProductPage}>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <div className={Styles.ProductContainer}>
                    <div className={Styles.Image}>
                        <img src={product.imageURL} alt={product.title}></img>
                    </div>
                    <div className={Styles.Details}>
                        <h1 className={Styles.Header}>
                            {product.title} ({product.model}) ||{" "}
                            {product.colour}
                        </h1>
                        <h2>AUD ${product.price}0</h2>
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                addToCart(product.id, product.stock);
                            }}
                        >
                            <div>
                                <label className={Styles.FormElement}>
                                    Size
                                </label>
                                <select
                                    id="size"
                                    name="size"
                                    className={Styles.Input}
                                >
                                    <option value="xs">Extra Small</option>
                                    <option value="s">Small</option>
                                    <option value="m">Medium</option>
                                    <option value="l">Large</option>
                                    <option value="xl">Extra Large</option>
                                </select>
                            </div>
                            <div>
                                <h5>Current Stock: {product.stock}</h5>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Add to Cart"
                                    className={Styles.FormElement}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ProductPage;
