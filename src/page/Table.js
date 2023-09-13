import React, { useCallback, useMemo, useState } from "react";
import Text from "../components/Navbar/Text";

export default function Table() {
  const [state, setState] = useState(1);
  const funClikc = () => {
    setState((prev) => prev + 1)
  }
  let yangi = useMemo(() => {
    return { title: "salom" };
  }, []);
  let yangi1 = useCallback((kok) => {
    return {  kok };
  }, []);

  return (
    <div>
      <h1>son:{state}</h1>
      <button className="sa" onClick={funClikc}>click</button>
      <hr />
      <Text yangi2={yangi1} />
    </div>
  );
}