import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"

function Shop() {
    const [category, setCategory] = useState("men")
    useEffect(() => {
        if (category === "men") {
            console.log("hello")
        }
    }, [category])
    return (
        <>
            <Header />
            <div className="main">
                <div className="category-buttons">
                    <button
                        onClick={() => setCategory("men")}
                        className={`men-btn ${category === "men" ? "active" : ""}`}>
                        <h2>Men's</h2>
                    </button>
                    <button
                        onClick={() => setCategory("wmn")}
                        className={`wmn-btn ${category === "wmn" ? "active" : ""}`}>
                        <h2>Women's</h2>
                    </button>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Shop