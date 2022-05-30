import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import AuthRouter from "./Router/AuthRouter";
import reducer from "./Redux/reducer/reducerType";

import AllRoute from "./testroute/AllRoute";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AuthRouter />
        </PersistGate>
      </Provider>
      {/* <Provider store={store}>
        <AllRoute />
      </Provider> */}
    </div>
  );
}

export default App;
