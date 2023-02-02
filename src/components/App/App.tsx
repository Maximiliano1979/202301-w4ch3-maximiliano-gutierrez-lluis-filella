import Actions from "../Actions/Actions";
import Info from "../Info/Info";
import Keyboard from "../Keyboard/Keyboard";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info />
      <main className="phone">
        <Keyboard />
        <Actions />
      </main>
    </div>
  );
};

export default App;
