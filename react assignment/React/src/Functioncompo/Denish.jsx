import React, { useEffect, useLayoutEffect, useState } from "react";

const Denish = () => {
  const [count, setCount] = useState(0);
  const [del, setDel] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, [del]);

  return (
    <>
      <h1>denish</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>{del}</p>
      <button onClick={() => setDel(del - 1)}>Del</button>
    </>
  );
};

export default Denish;
