import Actions from "../Actions/Actions";
import Info from "../Info/Info";
import Keyboard from "../Keyboard/Keyboard";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info />
      <Keyboard />
      <Actions />
    </div>
  );
};

export default App;
