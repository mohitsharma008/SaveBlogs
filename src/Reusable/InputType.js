import React from "react";
import { FaEnvelope, FaKey, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import "./inputtype.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Login1, Logout1, SignUp1 } from "../Redux/action/actionTypes";
import { useAlert } from "react-alert";
import firebasedb from "../Firebase/FirebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ErrorSharp } from "@material-ui/icons";
class InputType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eye: false,
      email: "",
      password: "",
    };
  }

  handleAuthentication = (email, password, name) => {
    console.log(email, "======================");
    const authentication = getAuth();
    console.log(name);
    if (name == "SIGN UP") {
      var res = createUserWithEmailAndPassword(authentication, email, password)
        .then((res) =>
          res.user.email != null
            ? this.props.dispatch({
                type: SignUp1,
                payload: { email: res.user.email },
              })
            : alert("Not SignUp Successfully")
        )
        .catch((res) => res);
      console.log(res);
    }
    if (name == "LOGIN") {
      var res = signInWithEmailAndPassword(authentication, email, password)
        .then((res) =>
          res.user.email != null
            ? this.props.dispatch({
                type: Login1,
                payload: { email: res.user.email },
              })
            : alert("Not SignIn Successfully")
        )
        .catch((res) => res);
      console.log(res, "login");
    }
  };
  render() {
    console.log(this.state.eye);
    return (
      <div className="inputfullscreen">
        <div className="inputscreenleft">
          <div style={{ marginTop: 42 }}></div>
        </div>

        <div className="inputloginform">
          <div className="logincardhandle">
            <div className="inputloginset">
              <h3 className="headlinemanage">{this.props.name}</h3>
              <div className="format">
                <div
                  style={{
                    width: 30,
                    backgroundColor: "#fbfaff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaEnvelope
                    size={20}
                    style={{
                      color: "#468cc2",
                      marginLeft: 6,
                      marginRight: 6,
                    }}
                  />
                </div>
                <input
                  type="email"
                  className="emailstyle"
                  placeholder="Enter Email"
                  required
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>

              <br />
              <div className="format">
                <div
                  style={{
                    width: 30,
                    backgroundColor: "#fbfaff",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: 0,
                    alignItems: "center",
                  }}
                >
                  <FaKey
                    size={20}
                    style={{
                      marginTop: 2,
                      marginLeft: 6,
                      marginRight: 6,
                      color: "#468cc2",
                    }}
                  />
                </div>
                <input
                  type={this.state.eye ? "text" : "password"}
                  className="passwordstyle"
                  placeholder="Password"
                  required
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                {this.props.showIcon ? (
                  <div
                    style={{
                      width: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fbfaff",
                    }}
                  >
                    {/* <span
                      onClick={() => {
                        this.setState({ eye: !this.state.eye });
                      }}
                    >
                      {this.state.eye ? (
                        <FaRegEye
                          size={20}
                          style={{ marginRight: 2, marginTop: 2 }}
                        />
                      ) : (
                        <FaRegEyeSlash
                          size={20}
                          style={{ marginRight: 2, marginTop: 2 }}
                        />
                      )}
                    </span> */}
                  </div>
                ) : null}
              </div>
              <br />
              <button
                className="buttonhandle"
                onClick={() =>
                  this.handleAuthentication(
                    this.state.email,
                    this.state.password,
                    this.props.name
                  )
                }
              >
                {this.props.name}
              </button>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.props.history.push(this.props.route);
                }}
              >
                <p
                  style={{
                    textAlign: "end",
                    marginTop: 20,
                    fontFamily: "Nunito",
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    color: "#7a30b3",
                  }}
                >
                  {this.props.haveAccount}
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* <div className="inputscreenright">
          <div style={{ marginTop: 42 }}>
            <button
              onClick={() => {
                this.props.dispatch({ type: Login1 });
              }}
            >
              demologin
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {};
};
export default connect(mapStateToProps, "")(withRouter(InputType));
