import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import Modal from "react-modal";
import Table from "./ui/table/table";
// import Modal from "./ui/modal/modal";
Modal.setAppElement("#root");
const Card = (props) => {
  const [modalshow, setModalshow] = useState(false);
  const hadle = () => {
    setModalshow(false);
  };
  return (
    <>
      <div className="cardcardhandle">
        <h1>NIMCET {props.number}</h1>
        {/* {modalshow ? <Modal show={modalshow} modalClosed={hadle} /> : null} */}
        <Modal
          isOpen={modalshow}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setModalshow(false)}
          style={{
            overlay: {
              backgroundColor: "grey",
            },
            content: {
              backgroundColor: "orange",
              margin: 0,
              padding: 0,
            },
          }}
        >
          <div className="cardscrollctrl">
            <div
              style={{
                width: "15%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
              }}
            >
              <button
                style={{
                  width: 70,
                  height: 25,
                  borderRadius: 5,
                  border: "none",
                }}
                onClick={() => setModalshow(false)}
              >
                Back
              </button>
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
              }}
            >
              <h1>instruction</h1>
            </div>
            <div
              style={{
                width: "15%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  width: 70,
                  height: 25,
                  borderRadius: 5,
                  border: "none",
                }}
              >
                <Link
                  to={`/nimcet/${props.number}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Confirm
                </Link>
              </button>
            </div>
          </div>
          <div>
            <Table />
          </div>
        </Modal>

        <button
          onClick={() => {
            setModalshow(true);
          }}
        >
          VIEW EXAM
        </button>
      </div>
    </>
  );
};
export default Card;
