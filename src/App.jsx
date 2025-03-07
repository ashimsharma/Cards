import { useState } from 'react'
import { Card, CardList, OverturnedDeck } from './components'
import { cards as initialCards } from './utils/cards.js';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [cards, setCards] = useState([...initialCards]);
  const [unchangedCards, setUnchangedCards] = useState([...initialCards]);
  const [pickedCard, setPickedCard] = useState(null);

  const selectRandomCard = (cardsDeck) => {
    const randomIndex = Math.floor(Math.random() * cardsDeck.length);

    let newCards = cardsDeck.filter(card => {
      return card !== cardsDeck[randomIndex];
    });

    return [{ ...cardsDeck[randomIndex], picked: false }, newCards];
  }

  const deal = (noOfDeals) => {
    if (selectedCards.length === 0) {
      return;
    }

    let newCards = [...unchangedCards];
    let newSelectedCards = [];

    for (let i = 0; i < noOfDeals; i++) {
      const [randomCard, returnedNewCards] = selectRandomCard(newCards);
      newSelectedCards.push(randomCard);
      console.log(returnedNewCards);
      newCards = returnedNewCards;
    }

    setCards(newCards);
    setSelectedCards(newSelectedCards);
  }

  const reset = () => {
    setCards(unchangedCards);
    setSelectedCards([]);
  }

  const toss = () => {
    if (!pickedCard) {
      return;
    }

    let newSelectedCards = selectedCards.filter(card => {
      return card !== pickedCard;
    });

    setSelectedCards([...newSelectedCards]);
    setPickedCard(null);
  }

  const wildCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);

    setSelectedCards([...selectedCards, { ...unchangedCards[randomIndex], picked: false }]);
  }

  function shuffleArray(array) {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const regroup = () => {
    setSelectedCards([...shuffleArray(selectedCards)]);
  }

  return (
    <>
      <header><h1>CARDS</h1></header>
      <div className='deck-container'>
        <OverturnedDeck setSelectedCards={setSelectedCards} selectedCards={selectedCards} cards={cards} setCards={setCards} />
      </div>

      <div className='btn-container'>
        <button className="btn" onClick={() => deal(5)}>Deal 5</button>
        <button className="btn" onClick={() => deal(7)}>Deal 7</button>
        <button className="btn" onClick={reset}>Reset</button>
        <button className="btn" onClick={wildCard}>WildCard</button>
        <button className="btn" onClick={regroup}>Regroup</button>
        <button className="btn" onClick={toss}>Toss</button>

      </div>
      <CardList selectedCards={selectedCards} setSelectedCards={setSelectedCards} cards={cards} setCards={setCards} pickedCard={pickedCard} setPickedCard={setPickedCard} />
    </>
  )
}

export default App
