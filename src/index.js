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
import {KhataCreateUpdateForm} from "./apps/upchakbandi/generated/forms/khata";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(


       //   <AppWithoutLogin title={ChakbandiSettings().title} sidebaritems={ChakbandiSettings().sidebaritems}/>
      //  <ComponentTester/>
     <AppWithLogin title={ChakbandiSettings().title} sidebaritems={ChakbandiSettings().sidebaritems} time={Date.now()/1000}/>
        //  <KhataCreateUpdateForm khatauni_id={"61c34677-b1f4-4185-8361-7a3162b5b8db"}/>

,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
