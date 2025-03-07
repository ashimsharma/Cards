import { useState } from "react"
import ClubsImage from "../assets/Clubs.png";
import DiamondsImage from "../assets/Diamonds.png";
import HeartsImage from "../assets/Hearts.png";
import SpadesImage from "../assets/Spades.png";

export default function Card({ card, setSelectedCards, setCards, cards, selectedCards, pickedCard, setPickedCard }) {
    const suitsImages = {
        Clubs: ClubsImage,
        Hearts: HeartsImage,
        Diamonds: DiamondsImage,
        Spades: SpadesImage
    }

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
        <div className={`${card.picked && 'picked-card'} card ${card.suit+'-color'}`} onClick={(e) => pickCard(e)}>
            <div className="card-left"><p>{card.value}</p></div>

            <div className="suit">
                <div className={`suit`}>
                    <img src={suitsImages[card.suit]} alt={`${card.suit} Image`} className="suit-image" />
                </div>
            </div>
            
            <div className="card-right"><p>{card.value}</p></div>
        </div>
    )
}