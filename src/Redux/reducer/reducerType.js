import {
  Login1,
  Logout1,
  SignUp1,
  RadioA,
  RadioB,
  RadioC,
  RadioD,
  Handle_Final_Submit,
  Auto_Save_Local,
} from "../action/actionTypes";
import { myArray } from "../../Components/GlobalArray";
import axios from "axios";
const initialState = {
  token: false,
  myArray: myArray,
  email: null,
};

const reducer = (state = initialState, action) => {
  console.log(action.payload, "++++++++++++++++++++++++++++++++++");
  switch (action.type) {
    case SignUp1:
      return {
        ...state,
        token: true,
        email: action.payload.email,
      };
    case Login1:
      return {
        ...state,
        token: true,
        email: action.payload.email,
      };
    case Logout1:
      return {
        ...state,
        token: false,
        email: null,
      };
    case RadioA:
      return {
        ...state,
        myArray: {
          ...state.myArray,
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].a = true),
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].b = false),

          change: (state.myArray[action.payload.test][
            action.payload.id
          ].c = false),

          change: (state.myArray[action.payload.test][
            action.payload.id
          ].d = false),
        },
      };
    case RadioB:
      return {
        ...state,
        myArray: {
          ...state.myArray,
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].a = false),
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].b = true),

          change: (state.myArray[action.payload.test][
            action.payload.id
          ].c = false),
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].d = false),
        },
      };
    case RadioC:
      return {
        ...state,
        myArray: {
          ...state.myArray,
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].a = false),
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].b = false),
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].c = true),
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].d = false),
        },
      };
    case RadioD:
      return {
        ...state,
        myArray: {
          ...state.myArray,
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].a = false),
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].b = false),
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].c = false),
          change: (state.myArray[action.payload.test][
            action.payload.id
          ].d = true),
        },
      };
    case Handle_Final_Submit: {
      submit(action.payload.answerList);
      return {
        ...state,
        myArray: {
          ...state.myArray,
          change: action.payload.id,
        },
      };
    }

    default:
      return state;
  }
};
const submit = (ac) => {
  axios.post(
    "https://nimcet-complete-default-rtdb.firebaseio.com/result/.json",
    {
      val: "fs",
    }
  );
  localStorage.removeItem("change1");
};

export default reducer;
