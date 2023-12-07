import React, { useMemo, useState } from "react";

const Functionmemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  const UseMemo = useMemo(
    function denish() {
      console.log("hello");
      return count * 2;
    },
    [count]
  );

  return (
    <>
      <h1>Functionmemo</h1>
      <h2>{UseMemo}</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 2)}>Increment</button>
      <p> {item}</p>
      <button onClick={() => setItem("Denish")}>Text</button>
    </>
  );
};

export default Functionmemo;
