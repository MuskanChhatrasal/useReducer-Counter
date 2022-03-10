import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
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
      case "DELETE_WISH":
        return {
          ...state,
          wishlist: state.wishlist.filter((it) => it !== action.payload)
        };
      default:
        break;
    }
    return { ...state, counter: state.counter + action };
  };

  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    user: "",
    wishlist: []
  });

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
