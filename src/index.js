import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import store from "./store";

import "./index.scss";
import "animate.css";

ReactDOM.render(
	<Provider store={store}><App/></Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
