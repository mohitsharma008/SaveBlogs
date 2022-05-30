import React from "react";
import "./Signup.css";
import InputType from "../Reusable/InputType";
import Header from "../Router/Header";
class Signup extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <InputType
            name="SIGN UP"
            route="/login"
            showIcon={true}
            haveAccount="Already Have An Account ?"
          />
        </div>
      </>
    );
  }
}
export default Signup;
