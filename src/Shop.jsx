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
                        className={`men-btn ac_btn ${category === "men" ? "active" : ""}`}
                        id="men-button"
                    >
                        <h2>Men’s</h2>
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                    </button>

                    <button
                        onClick={() => setCategory("wmn")}
                        className={`wmn-btn ac_btn ${category === "wmn" ? "active" : ""}`}
                        id="wmn-button"
                    >
                        <h2>Women’s</h2>
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                    </button>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Shop