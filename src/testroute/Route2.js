import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Feedback from "../Components/Feedback";
import Routess from "./Routess";
const Route2 = () => {
  const [page, setPage] = useState(false);
  const handleSubmit = () => {
    setPage(true);
  };
  const handle = () => {
    if (page) {
      return <Redirect to="/score" />;
    }
  };
  return (
    <>
      <h1>mogi</h1>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        save
      </button>
      {handle()}
    </>
  );
};
export default Route2;
