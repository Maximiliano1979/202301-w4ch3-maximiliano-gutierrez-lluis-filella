import Actions from "../Actions/Actions";
import Info from "../Info/Info";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info />
      <Actions />
    </div>
  );
};

export default App;
