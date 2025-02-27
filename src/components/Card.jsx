import { useState } from "react"

export default function Card({ card, setSelectedCards, setCards, cards, selectedCards, pickedCard, setPickedCard }) {
    const pickCard = (e) => {
        if (!pickedCard) {
            setPickedCard(card);
            card.picked = true; 
            return;
        }
    
        let newCardsArray = [...selectedCards];
    
        const secondSelectedSuit = card.suit;
        const secondSelectedValue = card.value;
        const pickedCardSuit = pickedCard.suit;
        const pickedCardValue = pickedCard.value;
    
        newCardsArray = newCardsArray.map((newCard) => {
            if ((newCard.suit === secondSelectedSuit) && (newCard.value === secondSelectedValue)) {
                return {
                    ...newCard, 
                    suit: pickedCardSuit,
                    value: pickedCardValue,
                };
            } else if ((newCard.suit === pickedCardSuit) && (newCard.value === pickedCardValue)) {
                return {
                    ...newCard, 
                    suit: secondSelectedSuit,
                    value: secondSelectedValue,
                    picked: false, 
                };
            }
    
            return newCard; 
        });
    
        setPickedCard(null);
        setSelectedCards(newCardsArray);
    };
    
    

    return (
        <div className={`${card.picked && 'picked-card'} card`} onClick={(e) => pickCard(e)}>{card.suit}: {card.value}</div>
    )
}