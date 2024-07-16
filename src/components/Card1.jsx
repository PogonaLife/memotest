/* eslint-disable react/prop-types */
import { useState } from "react"
import "./card.css"

function Card({id, image, isFlipped, handleClick}) {
    const [flipped, setFlipped] = useState(false)
    
    function handleClickCard() {
        if(!isFlipped) {
            handleClick(id)
            setFlipped(true)
        }
    } 

    return(
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClickCard}>
        <img src={flipped ? image : "back"}/>
    </div>
)}

export default Card



{/*
const handleClick = (id) => {
    setValues((prevValues) => {
      const newValues = prevValues.map((card) =>
        card.id === id ? { ...card, isSelected: !card.isSelected } : card
      );
      const clickedCard = newValues.find((card) => card.id === id);
      const isMatch = checkObj(clickedCard);

      if(isMatch) {
        setSelectedCards([...selectedCards, id])
      }
      return newValues;
    });
  };

  function checkObj(card) {
    if (obj.value1 === null) {
      obj.value1 = card.pares;
    } else if (obj.value2 === null) {
      obj.value2 = card.pares;
    }
  
    if (obj.value1 !== null && obj.value2 !== null) {
      const isMatch = obj.value1 === obj.value2;
      obj.value1 = null;
      obj.value2 = null;
      return isMatch;
    }
    return false;
  }

  function checkGameOver() {
    if(matchedPairs === 10) {
      setIsGameOver()
    }
  }
  */}