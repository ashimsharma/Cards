import { useState } from 'react'
import { Card, CardList, OverturnedDeck } from './components'
import { cards as initialCards} from './utils/cards.js';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [cards, setCards] = useState([...initialCards]);

  return (
    <>
      <header><h1>CARDS</h1></header>
      <div className='deck-container'>
        <OverturnedDeck setSelectedCards={setSelectedCards} selectedCards={selectedCards} cards={cards} setCards={setCards}/>
      </div>

      <CardList selectedCards={selectedCards} setSelectedCards={setSelectedCards} cards={cards} setCards={setCards}/>
    </>
  )
}

export default App
