function CartCard() {
    return (
        <div className="cart-card">
            <div className="cc-left">
                <div className="cart-card-img"></div>
                <h2>Item Name</h2>
            </div>
            <div className="cc-right">
                <h4>34$</h4>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default CartCard