import "./DiceRolls.css";
import Dice from "./Dice";

export default function DiceRolls() {
  return (
    <div className="DiceRoll">
      <h1> Dice Roll </h1>
      <Dice />
      <Dice />
      <Dice />
    </div>
  );
}
