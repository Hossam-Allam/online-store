

function Card({ img, name, price }) {
    console.log(img)
    return (
        <div className="card">
            <div className="card-img one">
                <img src={img[1]} alt="penguin" className="item-img" referrerPolicy="no-referrer" />
            </div>
            <div className="card-img two">
                <img src={img[2]} alt={"API broke, bruh"} className="item-img" referrerPolicy="no-referrer" />
            </div>
            <h3 className="margin">{name}</h3>
            <div className="pricecart margin">
                <div>{price}$</div>
                <div className="plus margin">+</div>
            </div>
        </div>
    )
}

export default Card