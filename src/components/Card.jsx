import { useCart } from "../CartContext";
function Card({ product, AddToCart, RemoveFromCart }) {
    const { images, title, price, id } = product;
    const { cart } = useCart();
    const inCart = cart.some(i => i.id === id);
    let secondImage;
    images[2] ? secondImage = images[2] : secondImage = "https://kirpi.co/wp-content/uploads/2021/09/404-not-found-v2.jpg"
    const handleIconClick = () => {
        if (inCart) RemoveFromCart(product);
        else AddToCart(product);
    }
    const icon = inCart ? "–" : "+";
    return (
        <div className="card">
            <div className="card-img one">
                <img src={images[1]} alt="penguin" className="item-img" referrerPolicy="no-referrer" />
            </div>
            <div className="card-img two">
                <img src={secondImage} alt={"API broke, bruh"} className="item-img" referrerPolicy="no-referrer" />
            </div>
            <h3 className="card-title margin">{title}</h3>
            <div className="pricecart margin">
                <div>{price}$</div>
                <div className={`margin ${icon === "+" ? "plus" : "minus"}`} onClick={handleIconClick}>{icon}</div>
            </div>
        </div>
    )
}

export default Card