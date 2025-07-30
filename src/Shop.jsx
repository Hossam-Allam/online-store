import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function Shop() {
    const [category, setCategory] = useState("clothes");
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)
    useEffect(() => {
        // map “clothes” → 1, “shoes” → 4
        const categoryMap = { clothes: 1, shoes: 4 };
        const catId = categoryMap[category];

        fetch(`https://api.escuelajs.co/api/v1/categories/${catId}/products`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => setItems(data))
            .catch(err => console.error("Fetch failed:", err));
    }, [category]);

    const handleAddToCart = item => {
        setCart(prev => {
            if (prev.find(i => i.id === item.id)) return prev;
            return [...prev, item];
        });
    };

    const handleRemoveFromCart = item => {
        setCart(prevCart =>
            prevCart.filter(i => i.id !== item.id)
        );
    };

    return (
        <>
            <Header />
            <div className="main">
                <div className="category-buttons">
                    <button
                        onClick={() => setCategory("clothes")}
                        className={`ac_btn ${category === "clothes" ? "active" : ""}`}
                    >
                        <h2>Clothes</h2>
                        <div className="ring one" />
                        <div className="ring two" />
                        <div className="ring three" />
                    </button>

                    <button
                        onClick={() => setCategory("shoes")}
                        className={`ac_btn ${category === "shoes" ? "active" : ""}`}
                    >
                        <h2>Shoes</h2>
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
