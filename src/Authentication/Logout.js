import React from "react";
import { useDispatch } from "react-redux";
import { FaRegUser, FaShareSquare } from "react-icons/fa";

import { Logout1 } from "../Redux/action/actionTypes";
import Header from "../Router/Header";
import InputType from "../Reusable/InputType";
import { connect } from "react-redux";

import "./logout.css";
const Logout = (props) => {
  const dispatch = useDispatch();
  console.log(props.email, "+++++++++++++++++++++++++++++++++++++++");
  return (
    <>
      <Header />
      <div className="logoutfullhandle">
        <div style={{ paddingTop: 0, textAlign: "center" }}>
          {props.email != null ? (
            <p style={{ fontSize: 18, marginBottom: 2, color: "#ccd98f",fontWeight:"bold" }}>
              Email [{props.email}]
            </p>
          ) : null}
          <div className="logoutcardhandle">
            <div className="logouticonbtn">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaRegUser
                  size={80}
                  style={{
                    marginBottom: 20,
                    paddingRight: 30,
                    paddingLeft: 30,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <button
                  className="logoutbtn"
                  onClick={() => {
                    dispatch({ type: Logout1 });
                  }}
                >
                  Logout
                </button>
                <FaShareSquare
                  size={30}
                  style={{
                    marginLeft: 5,
                    marginTop: 4,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    email: state.email,
  };
};

export default connect(mapStateToProps)(Logout);
