function Card({ img, name, price }) {
    return (
        <div className="card">
            <div className="card-img">
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