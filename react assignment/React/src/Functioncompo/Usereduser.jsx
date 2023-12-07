import React from "react";
import { useReducer } from "react";

const initialState = 2;

const reducer = (state, action) => {
  //   console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state * 2;
  }

  return state;
};

const Usereduser = () => {
  //   const [count, setCount] = useState(1);
  //   const [item, setItem] = useState(2);

  const [state, dispatch] = useReducer(reducer, initialState);

  //   const increment = () => {
  //     return setCount(count + 1);
  //   };
  //   const decrement = () => {
  //     return setItem(item - 2);
  //   };

  return (
    <>
      <h1>Usereduser</h1>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <br /> <br />
      {/* <h2>{item}</h2> */}
      <button onMouseOver={() => dispatch({ type: "DECREMENT" })}>
        decrement
      </button>
    </>
  );
};

export default Usereduser;
