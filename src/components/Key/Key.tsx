import "./Key.css";

interface KeyProps {
  number: string;
}

const Key = ({ number }: KeyProps): JSX.Element => {
  return <button className="key">{number}</button>;
};

export default Key;
