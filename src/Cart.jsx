import Header from "./components/Header"
import Footer from "./components/Footer";
import { useCart } from "./CartContext"
import { Link } from "react-router-dom";
function Cart() {
    const { cart, handleRemoveFromCart } = useCart();

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

            </div>
            <Footer />
        </div>
    )
}

export default Cart