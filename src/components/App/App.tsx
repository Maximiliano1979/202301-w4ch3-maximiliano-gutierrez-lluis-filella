import Display from "../Display/Display";
import Info from "../Info/Info";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info />

      <Display />
    </div>
  );
};

export default App;
