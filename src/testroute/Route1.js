import React from "react";
import { Link } from "react-router-dom";
import Header from "../Router/Header";
import { Redirect, withRouter } from "react-router-dom";
class Route1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: false,
    };
  }
  handlechange = () => {
    this.setState({ page: true });
  };
  handle = () => {
    if (this.state.page) {
      return <Redirect to="/score" />;
    }
  };
  render() {
    return (
      <>
        <div>
          <h1>cgfhfgh</h1>
          <h1>cgfhfgh</h1>
        </div>
      </>
    );
  }
}
export default withRouter(Route1);
