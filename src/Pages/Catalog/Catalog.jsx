import Cards from '../../Components/Cards/Cards';

function Catalog() {
    const basket = []

    const addToBusket = (data) => {
        if (!basket.includes(data)) {
            basket.push(data);
        };

        console.log('Basket: ', basket)
    };

    const cards = [
        { title: 'title1', text: 'text1', price: 550 },
        { title: 'title2', text: 'text2', price: 100 },
        { title: 'title3', text: 'text3', price: 400 },
        { title: 'title4', text: 'text4', price: 1500 }
    ];

    return (
        <section className="catalog">
            <h1>Catalog</h1>

            <Cards cards={cards} addToBusket={addToBusket}/>

            В консоли Basket
        </section>
    );
}

export default Catalog;
