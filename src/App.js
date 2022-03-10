import "./styles.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };
    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload };
    default:
      break;
  }
  return { ...state, counter: state.counter + action };
};
export default function App() {
  // const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div className="App">
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 42 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        -
      </button>
    </div>
  );
}
