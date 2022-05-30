import React from "react";
import InputType from "../Reusable/InputType";
import Header from "../Router/Header";
class Login extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <InputType
            name="LOGIN"
            route="/signup"
            showIcon={false}
            haveAccount="Create New Account ?"
          />
        </div>
      </>
    );
  }
}
export default Login;
