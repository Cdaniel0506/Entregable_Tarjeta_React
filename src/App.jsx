import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json";
import Particles from "./components/Particles";

//fuera del componente se crean cosas que nunca van a cambiar como por el ejemplo el arrayColor
/*Se crea array de color para llamarlos y hacer el cambio de colores en la cart,*/
const arrayColors = [
  "#00c6ab",
  "#6aa3b4",
  "#009d71",
  "#4fa8fb",
  "#68da3e",
  "#062863",
  "#ff0534",
  "#fa4b00",
  "#353432",
  "#940533",
  "#0a8967",
  "#1693a7",
  "#a04b26",
  "#ff0099",
  "#4b3e4d",
  "#1f0441",
  "#4c264b",
  "#8e033d",
  "#03001c"
];

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};
function App() {
  const [quote, setQuote] = useState(getRandom(db));
  const [color, setcolor] = useState(getRandom(arrayColors));

  const newQuote = () => {
    setQuote(getRandom(db));
    setcolor(getRandom(arrayColors));
  };

  console.log(getRandom(db));

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <QuoteBox quote={quote} newQuote={newQuote} color={color} />
      <Particles />
    </div>
  );
}

export default App;
