import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import Styles from "./ProductPage.module.scss";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
            .then((product) => setProduct(product))
            .finally(() => setLoading(false));
    });

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
                        <form>
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
                                <label className={Styles.FormElement}>
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    className={Styles.Input}
                                ></input>
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
