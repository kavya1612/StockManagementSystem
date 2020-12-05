import React from "react";
import ReactDOM from "react-dom";
import { HashRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main";
import "./index.css";


 
ReactDOM.render(
  <HashRouter>
  <Main/>
  </HashRouter>,
  document.getElementById("root")
);
