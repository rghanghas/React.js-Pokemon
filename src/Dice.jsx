import "./Dice.css";

export default function Dice() {
  const num = Math.floor(Math.random() * 6) + 1;
  return <h3 className="Dice"> Dice Roll: {num} </h3>;
}