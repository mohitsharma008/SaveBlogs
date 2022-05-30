import React, { useState, useEffect } from "react";
import "./nimceton.css";
import TestPageTemplate from "./TestPageTemplate";
import { Button1, Button4 } from "../../../Reusable/ui/button/Button1";
const NimcetSecond = () => {
  const [arr, setArr] = useState([
    {
      id: 1,
      i: 0,
      check: false,
      question: "question 1",
      a: 15,
      b: 20,
      c: 58,
      d: 60,
    },
    {
      id: 2,
      i: 1,
      check: false,
      question: "question 2",
      a: 15,
      b: 20,
      c: 58,
      d: 60,
    },
    {
      id: 3,
      i: 2,
      check: false,
      question: "question 3",
      a: 15,
      b: 20,
      c: 58,
      d: 60,
    },
    {
      id: 4,
      i: 3,
      check: false,
      question: "question 4",
      a: 15,
      b: 20,
      c: 58,
      d: 60,
    },
  ]);
  useEffect(() => {
    const data = localStorage.getItem("change");
    if (data) {
      setArr(JSON.parse(data));
    }
    return () => {};
  }, []);
  useEffect(() => {
    localStorage.setItem("change", JSON.stringify(arr));

    return () => {};
  }, [arr]);

  return (
    <>
      <TestPageTemplate arr={arr} setArr={setArr} valueOfIndex={1} />
    </>
  );
};
export default NimcetSecond;
