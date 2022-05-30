import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Route1 from "./Route1";
import Route2 from "./Route2";
import Route3 from "./Route3";
class AllRoute extends React.Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Link to="/score">Score</Link>
        <Switch>
          <Route exact path="/" component={Route1} />
          <Route path="/test" component={Route2} />
          <Route path="/score" component={Route3} />
        </Switch>
      </Router>
    );
  }
}
export default AllRoute;
