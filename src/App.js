import "./styles.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };
    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload };
    case "USER_VALUE":
      return { ...state, user: action.payload };
    case "ADD_USER":
      return { ...state, wishlist: [...state.wishlist, state.user] };
    default:
      break;
  }
  return { ...state, counter: state.counter + action };
};

export default function App() {
  // const [value, setValue] = useState([]);
  // const [user, setUser] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    user: "",
    wishlist: []
  });

  return (
    <div className="App">
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 42 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        -
      </button>

      <h2>Wishlist</h2>
      <label>
        Your Wish:
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "USER_VALUE", payload: e.target.value })
          }
        ></input>
      </label>
      <button onClick={() => dispatch({ type: "ADD_USER" })}>Add</button>
      {state.wishlist.map((val) => {
        return <p key={val}>{val}</p>;
      })}
    </div>
  );
}
