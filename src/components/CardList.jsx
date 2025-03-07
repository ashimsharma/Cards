import { useState } from "react";
import cardTable from "../assets/card-table.jpg";
import Card from "./Card";

export default function CardList({ selectedCards, setSelectedCards, cards, setCards }) {
    const [pickedCard, setPickedCard] = useState(null);

    return (
        <div className="card-list">
            <div className="card-table">
                <img src={cardTable} alt="Card Table" className="card-table-image" />
            </div>

            <div className="card-container">
                {
                    selectedCards.map((card, index) => {
                        return <Card card={card} selectedCards={selectedCards} setSelectedCards={setSelectedCards} cards={cards} setCards={setCards} pickedCard={pickedCard} setPickedCard={setPickedCard} key={index}/>
                    })
                }
            </div>
        </div>
    )
}