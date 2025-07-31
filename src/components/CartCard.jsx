function CartCard({ item, RemoveFromCart }) {
    const { images, title, price } = item;

    return (
        <div className="cart-card">
            <div className="cc-left">
                <div className="cart-card-img">
                    <img src={images[1]} alt={title} className="item-img" />
                </div>
            </div>
            <h2 className="cart-item-name">{title}</h2>
            <div className="cc-right">
                <h4 className="cart-price">{price}$</h4>
                <button
                    className="remove"
                    onClick={() => RemoveFromCart(item)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CartCard;
