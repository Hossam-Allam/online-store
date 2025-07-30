import { useState } from "react";

function Card({ product, AddToCart, RemoveFromCart }) {
    const { images, title, price, id } = product;
    const [icon, setIcon] = useState("+")

    const handleIconClick = () => {
        if (icon == "+") {
            setIcon("-")
            AddToCart(product)
        } else {
            setIcon("+")
            RemoveFromCart(product)
        }
    }
    return (
        <div className="card">
            <div className="card-img one">
                <img src={images[1]} alt="penguin" className="item-img" referrerPolicy="no-referrer" />
            </div>
            <div className="card-img two">
                <img src={images[2]} alt={"API broke, bruh"} className="item-img" referrerPolicy="no-referrer" />
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