/* eslint-disable react/prop-types */
import Card from "./Card1";
import "./board.css";

function Board({ cards, handleclick }) {
  return (
    <div className="board">
      {cards.map(() => {
        <Card 
            key={cards.key} 
            id={cards.id}
            image={cards.image}
            isFlipped={cards.isFlipped}
            onClick={handleclick} />;
      })}
    </div>
  );
}

export default Board;
