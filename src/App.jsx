import { useState, useEffect } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Score from "./components/Score"
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [attemps, setAttemps] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    initializeGame()
  }, [])

  function initializeGame() {
    const initialCards = [
      { id: 1, image: "./assets/image1.jpg", isFlipped: false },
      { id: 2, image: "./assets/image2.jpg", isFlipped: false },
      { id: 3, image: "./assets/image3.jpg", isFlipped: false },
      { id: 4, image: "./assets/image4.jpg", isFlipped: false },
      { id: 5, image: "./assets/image5.jpg", isFlipped: false },
      { id: 6, image: "./assets/image6.jpg", isFlipped: false },
      { id: 7, image: "./assets/image7.jpg", isFlipped: false },
      { id: 8, image: "./assets/image8.jpg", isFlipped: false },
      { id: 9, image: "./assets/image9.jpg", isFlipped: false },
      { id: 10, image: "image10.jpg", isFlipped: false },
    ];
    const initialCardsX2 = [...initialCards, ...initialCards]
    setCards(shuffle(initialCardsX2))
    setFlippedCards([])
    setMatchedPairs(0)
    setAttemps(0)
    setIsGameOver(false)
  }
  
  function shuffle(arr) {
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
  }

  function resetGame() {
    initializeGame()
  }

  function handleClick(cardId){
    if(isGameOver || flippedCards.length === 2) {return}

    const clickedCards = cards.map((card) => {
      if(card.id === cardId) {
        return {...card, isFlipped: true}
      }
      return card
    })
    
    setCards(clickedCards)

    if(flippedCards.length === 1) {
      setFlippedCards([...flippedCards, cardId])
      setAttemps(attemps + 1)
      compareFlippedCards([...flippedCards, cardId], clickedCards)
    } else {
      setFlippedCards([cardId])
    }
  }

  function compareFlippedCards([firstCardId, secondCardId], clickedCards) {
    const firstCard = clickedCards.find((card) => {card.id === firstCard})
    const secondCard = clickedCards.find((card) => {card.id === secondCard})

    if(firstCardId.image === secondCardId.image) {
      setTimeout(() => {
        setMatchedPairs(matchedPairs + 1);
        setFlippedCards([]);
        checkGameOver(matchedPairs + 1);
        }, 1000)
    } else {
      setTimeout(() => {
        setCards(clickedCards.map((card) => {
          if(card.id === firstCardId || card.id === secondCardId) {
            return {...card, isFlipped: false}
          }
          return card
        }))
        setFlippedCards([])
      }, 1000)
    }
  }

  function checkGameOver(matchedPairs) {
    if (matchedPairs === cards.length / 2) {
      setIsGameOver(true);
    }
  }

  return (
    <>
      <Header />
      <Score attemps={attemps} matchedPairs={matchedPairs}/>
      <Board cards={cards} handleClick={handleClick}/>
      <button onClick={resetGame}>Reset Game</button>
    </>
  );
}

export default App;
