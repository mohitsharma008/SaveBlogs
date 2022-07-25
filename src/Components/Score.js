import React, { useState, useEffect } from "react";
import Header from "../Router/Header";
import IdleTimer from "react-idle-timer";
import { Redirect, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Score = () => {
  return (
    <>
      <Header />
      <div
        style={{ backgroundColor: "#468cc2", width: "100%", height: "100vh" }}
      >
        <div style={{ paddingTop: 42 }}>
          <h1>SCORE PAGE</h1>
        </div>
      </div>
    </>
  );
};
export default withRouter(Score);
