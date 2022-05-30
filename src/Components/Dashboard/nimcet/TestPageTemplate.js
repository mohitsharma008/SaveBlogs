import React, { useState, useEffect } from "react";
import { Button1, Button4 } from "../../../Reusable/ui/button/Button1";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useSelector, useDispatch } from "react-redux";
import {
  RadioA,
  RadioB,
  RadioC,
  RadioD,
  Handle_Final_Submit,
} from "../../../Redux/action/actionTypes";
const TestPageTemplate = (props) => {
  const toknw = useSelector((state) => state.myArray);

  const dispatch = useDispatch();
  const [take, setTake] = useState(false);
  const [data, setData] = useState(false);
  const [answer, setAnswer] = useState([]); //use for create 0 no. array
  const [answ, setAnsw] = useState([]); //use for create 0 no. array copy
  const [selectcheckout, setSelectcheckout] = useState(false);

  const [answersave, setAnswerSave] = useState([
    { a: false, b: false, c: false, d: false },
  ]);
  useEffect(() => {
    handleContent(0);
    for (let i in props.arr) {
      answer.push(null);
    }
    setAnsw([...answer]);
  }, []);

  const handlecontrol = (id) => {
    console.log(answ);
    if (selectcheckout) {
      let value = id.props.children[2];
      let newArr = [...props.arr];
      newArr[value].check = true;
      props.setArr(newArr);
      setSelectcheckout(false);

      ///save answer

      let newArray = [...answ];
      // newArr.splice(id.props.children[0], 1, id.props.children[1]);
      // setAnsw(newArr);
      if (answersave[0].a) {
        newArray.splice(id.props.children[2], 1, answersave[0].a);
        setAnsw(newArray);
      }
      if (answersave[0].b) {
        newArray.splice(id.props.children[2], 1, answersave[0].b);
        setAnsw(newArray);
      }
      if (answersave[0].c) {
        newArray.splice(id.props.children[2], 1, answersave[0].c);
        setAnsw(newArray);
      }
      if (answersave[0].d) {
        newArray.splice(id.props.children[2], 1, answersave[0].d);
        setAnsw(newArray);
      }
    }
    if (id.props.children[0] < 2) handleContent(id.props.children[0]);
  };
  console.log(answ);
  const handleContent = (index) => {
    //it depend on the value of array or no. of question
    setData(props.arr[index]);
  };

  const handleAnswer_A = (id) => {
    let ans = [...answersave];
    ans[0].a = id.props.children[1];
    ans[0].c = false;
    ans[0].b = false;
    ans[0].d = false;
    setAnswerSave(ans);
    // console.log(answersave);
    //answer array changes here
    // let newArr = [...answ];
    // newArr.splice(id.props.children[0], 1, id.props.children[1]);
    // console.log(newArr);
    // setAnsw(newArr);
    //radio button chanags below
    dispatch({
      type: RadioA,
      payload: { test: props.valueOfIndex, id: id.props.children[0] },
    });
    setSelectcheckout(true);
  };
  const handleAnswer_B = (id) => {
    let ans = [...answersave];
    ans[0].b = id.props.children[1];
    ans[0].a = false;
    ans[0].c = false;
    ans[0].d = false;
    setAnswerSave(ans);

    console.log(answersave);

    //radio button chanags below

    dispatch({
      type: RadioB,
      payload: { test: props.valueOfIndex, id: id.props.children[0] },
    });
    setSelectcheckout(true);
  };
  const handleAnswer_C = (id) => {
    let ans = [...answersave];
    ans[0].c = id.props.children[1];

    ans[0].a = false;
    ans[0].b = false;
    ans[0].d = false;
    setAnswerSave(ans);
    console.log(answersave); //////

    //radio button chanags below

    dispatch({
      type: RadioC,
      payload: { test: props.valueOfIndex, id: id.props.children[0] },
    });
    setSelectcheckout(true);
  };
  const handleAnswer_D = (id) => {
    let ans = [...answersave];
    ans[0].d = id.props.children[1];

    ans[0].a = false;
    ans[0].b = false;
    ans[0].c = false;
    setAnswerSave(ans);
    console.log(answersave);
    //radio button chanags below
    dispatch({
      type: RadioD,
      payload: { test: props.valueOfIndex, id: id.props.children[0] },
    });

    setSelectcheckout(true);
  };

  const handleFinalSubmit = () => {
    const i = toknw[props.valueOfIndex];
    for (let j = 0; j < 120; j++) {
      i[j] = { a: false, b: false, c: false, d: false };
    }
    toknw[props.valueOfIndex] = i;
    dispatch({
      type: Handle_Final_Submit,
      payload: { id: toknw, answerList: answ },
    });
  };

  return (
    <>
      <div className="nimcettestfullhandle">
        <div
          style={{
            height: 40,
            width: "100%",
            backgroundColor: "aqua",
            position: "fixed",
            top: 0,
            right: 0,
          }}
        >
          <div
            style={{ width: "90%", height: 40, backgroundColor: "azure" }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "70%",
              height: "100vh",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "15vh",
                backgroundColor: "lightgreen",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => {
                  handleFinalSubmit();
                }}
              >
                FINAL SUBMIT
              </button>
            </div>
            <div
              style={{
                width: "100%",
                height: "70vh",
                boxSizing: "border-box",
                backgroundColor: "white",
                overflowY: "auto",
                border: "4px solid red",
              }}
            >
              {data ? (
                <>
                  <div>{data.question}</div>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="position"
                      name="position"
                      defaultValue="top"
                    >
                      <FormControlLabel
                        value={`a${data.a}${data.i}`}
                        control={<Radio color="primary" />}
                        label={data.a}
                        onClick={() =>
                          handleAnswer_A(
                            <>
                              {data.i}
                              {data.a}
                              {answ}
                            </>
                          )
                        }
                        checked={
                          toknw ? toknw[props.valueOfIndex][data.i].a : false
                        }
                      />
                      <FormControlLabel
                        value={`b${data.b}${data.i}`}
                        control={<Radio color="primary" />}
                        label={data.b}
                        onClick={() =>
                          handleAnswer_B(
                            <>
                              {data.i}
                              {data.b}
                              {answ}
                            </>
                          )
                        }
                        checked={
                          toknw ? toknw[props.valueOfIndex][data.i].b : false
                        }
                      />
                      <FormControlLabel
                        value={`c${data.c}${data.i}`}
                        control={<Radio color="primary" />}
                        label={data.c}
                        onClick={() =>
                          handleAnswer_C(
                            <>
                              {data.i}
                              {data.c}
                              {answ}
                            </>
                          )
                        }
                        checked={
                          toknw ? toknw[props.valueOfIndex][data.i].c : false
                        }
                      />
                      <FormControlLabel
                        value={`d${data.d}${data.i}`}
                        control={<Radio color="primary" />}
                        label={data.d}
                        onClick={() =>
                          handleAnswer_D(
                            <>
                              {data.i}
                              {data.d}
                              {answ}
                            </>
                          )
                        }
                        checked={
                          toknw ? toknw[props.valueOfIndex][data.i].d : false
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </>
              ) : null}
            </div>
            <div
              style={{
                width: "100%",
                height: "15vh",
                boxSizing: "border-box",
                border: "5px solid orange",
                overflowY: "auto",
              }}
            >
              <button
                onClick={() => {
                  handlecontrol(
                    <>
                      {data.id},{data.i},{data.check},{data.next}
                    </>
                  );
                }}
              >
                save
              </button>
            </div>
          </div>
          <div
            style={{
              width: "30%",
              height: "100vh",
              backgroundColor: "white",
            }}
          >
            <div style={{ width: "100%", height: "15vh" }}> </div>
            <div
              style={{
                width: "100%",
                height: "60vh",
                boxSizing: "border-box",
                border: "4px solid silver",
                overflowY: "auto",
              }}
            >
              {props.arr.map((id, i) => {
                return (
                  <div key={i}>
                    {id.check ? (
                      <Button4
                        number={id.id}
                        index={i}
                        setTake={setTake}
                        handleContent={handleContent}
                      />
                    ) : (
                      <Button1
                        number={id.id}
                        index={i}
                        setTake={setTake}
                        handleContent={handleContent}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                width: "100%",
                height: "25vh",
                boxSizing: "border-box",
                border: "5px solid aqua",
                overflowY: "auto",
              }}
            >
              <p>dsads</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestPageTemplate;
