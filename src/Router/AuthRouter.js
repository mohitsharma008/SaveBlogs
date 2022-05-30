import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Home from "../Components/Home";
import axios from "axios";
import "./AuthRouter.css";
import { useSelector } from "react-redux";
import Logout from "../Authentication/Logout";
import Score from "../Components/Score";
import Feedback from "../Components/Feedback";
import Nimcet from "../Components/Dashboard/Nimcet";

import NimcetFirst from "../Components/Dashboard/nimcet/NimcetFirst";

// lazy loading components here decleared
const LazyLogin = React.lazy(() => import("../Authentication/Login"));

const LazySignup = React.lazy(() => import("../Authentication/Signup"));

const LazyNimcet = React.lazy(() => import("../Components/Dashboard/Nimcet"));

const LazyScore = React.lazy(() => import("../Components/Score"));
const LazyLogout = React.lazy(() => import("../Authentication/Logout"));

const LazyFeedback = React.lazy(() => import("../Components/Feedback"));
const LazyNimcetFirst = React.lazy(() =>
  import("../Components/Dashboard/nimcet/NimcetFirst")
);

// lazy loading components here decleared
const AuthRouter = () => {
  const [token, setToken] = useState(true);
  const auth = useSelector((state) => state.token);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://nimcet-complete-default-rtdb.firebaseio.com/data/.json")
      .then((res) => {
        setData(res.data);
      })
      .catch(console.log("error"));
  }, []);
  return (
    <>
      <Router>
        {auth ? (
          <>
            <Switch>
              <React.Suspense fallback="Loading.........">
                <Route exact path="/" component={Home} />
                <Route exact path="/bookmarks" component={LazyNimcet} />
                {/* <Route path="/score" component={Score} /> */}
                <Route path="/feedback" component={Feedback} />
                <Route path="/logout" component={Logout} />
                <Route exact path="/dashboard/nimcet" component={Nimcet} />
                {data
                  ? data.map((val, i) => {
                      return (
                        <Route
                          path={`/nimcet/${i}`}
                          component={() => NimcetFirst(val)}
                        />
                      );
                    })
                  : null}
                <Redirect to="/" />
              </React.Suspense>
            </Switch>
          </>
        ) : (
          <>
            <Switch>
              <React.Suspense fallback="Loading.........">
                <Route exact path="/" component={Home} />

                <Route path="/signup" component={Signup} />

                <Route path="/login" component={Login} />
                <Redirect to="/" />
              </React.Suspense>
            </Switch>
          </>
        )}
      </Router>
    </>
  );
};

export default AuthRouter;
