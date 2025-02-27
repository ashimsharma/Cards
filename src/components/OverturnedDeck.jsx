import overturnedDeck from '../assets/overturned-deck.png';

export default function OverturnedDeck({setSelectedCards, selectedCards, cards, setCards}){
    const selectRandomCard = () => {
        if(cards.length === 0){
            return
        };

        const randomIndex = Math.floor(Math.random() * cards.length);

        setSelectedCards([...selectedCards, {...cards[randomIndex], picked: false}]);

        let newCards = cards.filter(card => {
            return card !== cards[randomIndex];
        });

        setCards(newCards);
    }

    return (
        <div className="overturned-deck" onClick={selectRandomCard}>
            {cards.length !== 0 ? <img src={overturnedDeck} alt="Deck" className='deck-image'/> : <div className='no-card-msg'>No cards Left</div>}
        </div>
    )
}