import MyCard from '../UI/MyCard/MyCard';
import './css/Cards.css';

function Cards({cards, addToBusket}) {

    return (
        <section className="cards">
            {
                cards.map((card) =>
                    <MyCard addToBusket={addToBusket} card={card} />
                )
            }
        </section>
    );
}

export default Cards;
