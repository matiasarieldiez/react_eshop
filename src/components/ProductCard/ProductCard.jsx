import Styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product, currentFeaturedProduct, index }) => {
    return (
        <div
            className={
                index === currentFeaturedProduct ? Styles.Card : Styles.Active
            }
        >
            <h3 className={Styles.Title}>
                {product.title} ({product.model})
            </h3>
            <img
                className={Styles.Image}
                src={product.imageURL}
                alt={product.title}
            ></img>
            <h4 className={Styles.Price}>AUD ${product.price}0</h4>
            <NavLink to={`/products/${product.id}`} className={Styles.Button}>
                <p>See More</p>
            </NavLink>
        </div>
    );
};

export default ProductCard;
