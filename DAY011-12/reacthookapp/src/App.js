import UseStateHook from "./UseStateHook";
import UseReducerHook from "./UseReducerHook";
import UseEffectHook from "./UseEffectHook";

function App() {
  return (
    <div className="App">
      <UseStateHook></UseStateHook>
      <hr></hr>
      <UseReducerHook></UseReducerHook>
      <hr></hr>
      <UseEffectHook></UseEffectHook>
    </div>
  );
}

export default App;
