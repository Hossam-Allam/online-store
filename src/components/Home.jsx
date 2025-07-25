import penguin from "../assets/penguin.jpeg"
function Home() {

    return (
        <>
            <div className="home-content">
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>We believe everyone deserves to be seen, not lost in the crowd.</p>
                    <p>At Lune, we design clothing that empowers your unique voice.</p>
                    <p>Our pieces blend effortless edge with refined simplicity—so you stand out.</p>
                    <p>Wear your confidence. Shine your story.</p>
                </div>
                <img src={penguin} alt="aura penguin" className="penguins" />
            </div>
        </>
    )
}

export default Home