import React, { useState } from "react";
import {
  Button1,
  Button2,
  Button3,
  Button4,
} from "../Reusable/ui/button/Button1";
import Header from "../Router/Header";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Testt from "../testt";
import { Handle_Final_Submit } from "../Redux/action/actionTypes";
import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";
import axios from "axios";
const Feedback = () => {
  const [take, setTake] = useState(false);
  const [form, setForm] = useState({
    name: "",
    age: "",
    contact: "",
    feedback: "",
  });
  const [arr, setArr] = useState([
    { id: 1, i: 0, check: false },
    { id: 2, i: 1, check: false },
    { id: 3, i: 2, check: false },
    { id: 4, i: 3, check: false },
  ]);

  const handlecontrol = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("gege");
    // var res = axios({
    //   method: "post",
    //   url: "https://compucom-project-default-rtdb.firebaseio.com/feedback.json",
    //   data: form, // you are sending body instead
    //   headers: {
    //     // 'Authorization': `bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    // });
    var res = axios
      .post(
        "https://compucom-project-default-rtdb.firebaseio.com/bookmark.json",
        form
      )
      .then((res) =>
        res.status == 200
          ? setForm({ name: "", age: "", contact: "", feedback: "" })
          : console.log("no")
      )
      .catch((res) => res);
  };
  return (
    <>
      <Header />
      <div
        style={{ backgroundColor: "#7a30b3", width: "100%", height: "100vh" }}
      >
        <div
          style={{
            paddingTop: 42,
          }}
        >
          <h3 style={{ color: "white", marginTop: 5, textAlign: "center" }}>
            Share Your Experience{" "}
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // backgroundColor: "orange",
              paddingTop: 50,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#fbfaff",
                padding: 40,
                paddingBottom: 40,
                borderRadius: 5,
              }}
            >
              <form style={{}} onSubmit={handleSubmit}>
                <br />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      display: "flex",
                    }}
                  >
                    Name:-
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="text"
                      name="name"
                      style={{
                        marginBottom: 20,
                        padding: 4,
                      }}
                      value={form.name}
                      onChange={(e) => handlecontrol(e)}
                      placeholder="Enter Your Name"
                    ></input>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    marginTop: 5,
                  }}
                >
                  <div style={{ width: "100px" }}>Age:-</div>
                  <input
                    type="text"
                    name="age"
                    value={form.age}
                    style={{ marginBottom: 20, padding: 4 }}
                    placeholder="Enter Your Age"
                    onChange={(e) => handlecontrol(e)}
                  ></input>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    marginTop: 5,
                  }}
                >
                  <div style={{ width: "100px" }}>Contact No:-</div>
                  <input
                    type="text"
                    value={form.contact}
                    name="contact"
                    style={{ marginBottom: 20, padding: 4 }}
                    placeholder="Enter Your Contact No"
                    onChange={(e) => handlecontrol(e)}
                  ></input>
                </div>{" "}
                <div
                  style={{
                    width: "100%",
                    display: "flex",

                    marginTop: 5,
                  }}
                >
                  <div style={{ width: "100px" }}>Feedback:</div>
                  <input
                    type="text"
                    value={form.feedback}
                    style={{ marginBottom: 20, padding: 4 }}
                    placeholder="Enter Your Feedback"
                    name="feedback"
                    onChange={(e) => handlecontrol(e)}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    style={{
                      padding: 4,
                      // borderRadius: 5,
                      outline: "none",
                      boxShadow: "0 0 8px 2px rgb(179 90 22 / 80%)",
                      height: 35,
                      width: 100,
                      backgroundColor: "#fbfaff",
                      fontSize: 12,
                      border: "none",
                      color: "black",
                      // marginLeft: 10,
                      borderRadius: 10,
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feedback;
