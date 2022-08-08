import Styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className={Styles.Card}>
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
                See More
            </NavLink>
        </div>
    );
};

export default ProductCard;
