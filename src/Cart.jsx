import Header from "./components/Header"
import Footer from "./components/Footer";
import { useCart } from "./CartContext"
import { Link } from "react-router-dom";
import CartCard from "./components/CartCard";
function Cart() {
    const { cart, handleRemoveFromCart } = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    if (cart.length == 0) {
        return (
            <div className="cart-page">
                <Header />
                <div className="no-items">
                    <h1>No items in your cart</h1>
                    <p>Head back to the <Link to={"/shop"}><i>shop</i></Link> and add items</p>
                </div>
                <Footer />
            </div>

        )
    }

    return (
        <div className="cart-page">
            <Header />
            <div className="yes-items">
                {
                    cart.map(item => (
                        <CartCard key={item.id} item={item} RemoveFromCart={handleRemoveFromCart} />
                    ))
                }

            </div>
            <div className="cart-summary">
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
                <button className="checkout-button" onClick={() => alert("NUH UH")}>Checkout</button>
            </div>
            <Footer />
        </div>
    )
}

export default Cart