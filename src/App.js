import logo from './logo.svg';
import './App.css';
import React from 'react';
import Collapsible from 'react-collapsible';
import MyComponent from "./Village";
import DependentForm from "./forms/dependent";
import Form1 from "./forms/form2";
import PrimarySearchAppBar from "./toolbar/toolbar1";
import PermanentDrawerLeft from "./sidebar/sidebar1";
import TestDrawerLeft from "./sidebar/sidebar2";
function App() {

  return (
    <div className="App">

        <PrimarySearchAppBar/>

         <PermanentDrawerLeft  mainc={MyComponent}/>


    </div>
  );
}

export default App;
