import React, { useState, useEffect } from "react";
import "./nimceton.css";
import { Button1, Button4 } from "../../../Reusable/ui/button/Button1";
import TestPageTemplate from "./TestPageTemplate";
const NimcetFirst = (val) => {
  console.log(val, "+++++++++");
  const [arr, setArr] = useState(val);
  console.log(arr);
  useEffect(() => {
    const data = localStorage.getItem("change1");
    if (data) {
      setArr(JSON.parse(data));
    }
    return () => {};
  }, []);
  useEffect(() => {
    localStorage.setItem("change1", JSON.stringify(arr));

    return () => {};
  }, [arr]);

  return (
    <>
      <TestPageTemplate arr={arr} setArr={setArr} valueOfIndex={0} />
    </>
  );
};
export default NimcetFirst;
