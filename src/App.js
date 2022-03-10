import "./styles.css";
import { useWishlist } from "./wishlist-context";

export default function App() {
  // const [value, setValue] = useState([]);
  // const [user, setUser] = useState("");

  const { state, dispatch } = useWishlist();

  return (
    <div className="App">
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 42 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        -
      </button>

      {wishlistFunction(dispatch, state)}
    </div>
  );
}

function wishlistFunction(dispatch, state) {
  return (
    <div>
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
      {state.wishlist.map((val, index) => {
        return (
          <div style={{ marginTop: "0.5rem" }} key={index}>
            <span>{val}</span>
            <button
              style={{ marginLeft: "0.5rem" }}
              onClick={() => dispatch({ type: "DELETE_WISH", payload: val })}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
