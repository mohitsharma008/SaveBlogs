import React from "react";
import "./modal.css";
import Backdrop from "../backdrop/backdrop";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      close: null,
    };
  }
  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          <h1>Instructions</h1>
          <h1>Instructions</h1>
          <h1>Instructions</h1>
          <h1>Instructions</h1>
        </div>
      </>
    );
  }
}
export default Modal;
