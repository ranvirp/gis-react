import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ChakbandiSettings from "./apps/upchakbandi/settings";
import AppWithoutLogin from './components/AppWithoutLogin';
import {ComponentTester} from "./components/ComponentTester";
import AppWithLogin from "./components/AppWithLogin";
import {BrowserRouter} from "react-router-dom";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(

<BrowserRouter>
      {
       //   <AppWithoutLogin title={ChakbandiSettings().title} sidebaritems={ChakbandiSettings().sidebaritems}/>
      //  <ComponentTester/>
     <AppWithLogin title={ChakbandiSettings().title} sidebaritems={ChakbandiSettings().sidebaritems}/>
      }
</BrowserRouter>
,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
