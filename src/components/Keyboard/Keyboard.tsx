import Key from "../Key/Key";
import "./Keyboard.css";

const Keyboard = (): JSX.Element => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number, index) => (
          <li key={index}>
            <Key number={number} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Keyboard;
