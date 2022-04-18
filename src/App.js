import "./App.css";
import Counter from "./Counter";
import ReducerTutorial from "./ReducerTutotrial";
import UseEffectTutorial from "./UseEffectTutorial";
import UseRef from "./UseRef";

function App() {
  return (
    <div className="App">
      <h1>Pedro tech Hooks tutorial</h1>
      {/* <ReducerTutorial /> */}
      {/* <UseEffectTutorial /> */}
      <a href="file.pdf" download="resume.pdf">
        Download PDF
      </a>

      <UseRef />

      <Counter />
    </div>
  );
}

export default App;
