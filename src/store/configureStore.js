import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "../app/firebase/firebase";

const rrfConfig = {
  attachAuthIsReady: true
};

export const configureStore = () => {
  const middlewares = [thunk.withExtraArgument({ getFirebase })];
  const composeEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebase, rrfConfig)
  );
  const store = createStore(rootReducer, composeEnhancer);
  return store;
};
