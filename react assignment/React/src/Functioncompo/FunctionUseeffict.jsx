import React, { useEffect, useMemo, useState } from "react";

const FunctionUseeffict = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(5);
  useEffect(() => {
    // console.log("useEffect");
    alert("hello")
  });

  const UseMemo = useMemo(
    function denish() {
      console.log("hello");
      return count * 2;
    },
    [count]
  );

  return (
    <>
      <h1>FunctionUseeffict</h1>
      {UseMemo}
      <p>{count}</p>
      <button onClick={() => setCount(count + 2)}>Increment</button>
      <button onClick={() => setItem(item * 2)}>dk</button>
      <p> {item}</p>
      {/* <button onClick={() => setItem("Denish")}>Text</button> */}
    </>
  );
};

export default FunctionUseeffict;
