import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./store/configureStore";
import { Provider } from "react-redux";
import ScrollToTop from "./app/utils/ScrollToTop";
import { INCREMENT_COUNTER } from "./feature/testarea/testActions";
import ReduxToastr from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

//create store
const store = configureStore();
store.dispatch({ type: INCREMENT_COUNTER });
store.dispatch({ type: INCREMENT_COUNTER });
const rootEl = document.getElementById("root");

//provide store
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ReduxToastr
          timeOut={5000}
          newestOnTop={true}
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

//set hot-reload
if (module.hot) {
  module.hot.accept("./app/App", () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
