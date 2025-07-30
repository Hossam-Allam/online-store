import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { useCart } from "./CartContext";
function Shop() {
    // "clothes" will map to "mens-shirts", "shoes" to "womens-dresses" this is to keep CSS compatibility
    const [category, setCategory] = useState("clothes");
    const [items, setItems] = useState([]);
    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();

    useEffect(() => {
        // map our category keys to DummyJSON category names
        const categoryMap = {
            clothes: "mens-shirts",
            shoes: "tops"
        };
        const catSlug = categoryMap[category];

        fetch(`https://dummyjson.com/products/category/${catSlug}`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                setItems(data.products);
            })
            .catch(err => console.error("Fetch failed:", err));
    }, [category]);


    return (
        <>
            <Header cart={cart} cIcon={true} />
            <div className="main">
                <div className="category-buttons">
                    <button
                        onClick={() => setCategory("clothes")}
                        className={`ac_btn ${category === "clothes" ? "active" : ""}`}
                    >
                        <h2>Men's Shirts</h2>
                        <div className="ring one" />
                        <div className="ring two" />
                        <div className="ring three" />
                    </button>

                    <button
                        onClick={() => setCategory("shoes")}
                        className={`ac_btn ${category === "shoes" ? "active" : ""}`}
                    >
                        <h2>Women's Dresses</h2>
                        <div className="ring one" />
                        <div className="ring two" />
                        <div className="ring three" />
                    </button>
                </div>

                <div className="items">
                    {items.map(item =>
                        item.images && item.images[1] && (
                            <Card
                                key={item.id}
                                product={item}
                                AddToCart={handleAddToCart}
                                RemoveFromCart={handleRemoveFromCart}
                            />
                        )
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Shop;

