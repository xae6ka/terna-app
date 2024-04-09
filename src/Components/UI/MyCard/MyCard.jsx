import './css/MyCard.css';

function MyCard({card, addToBusket}) {
    const { title, text, price } = card

    // console.log(addToBusket)

    return (
        <div className="card">
            <h1 className="card__title">{ title }</h1>

            <p className="card__text">{ text }</p>

            <span className="card__price">Price: { price }$</span>

            <button onClick={() => {addToBusket(card)}}>ewgweg</button>
        </div>
    );
}

export default MyCard;
