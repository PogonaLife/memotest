/* eslint-disable react/prop-types */
function Score({ attempts, matchedPairs }) {
    return (
      <div className="score">
        <p>Intentos: {attempts}</p>
        <p>Pares encontrados: {matchedPairs}</p>
      </div>
    );
}

export default Score