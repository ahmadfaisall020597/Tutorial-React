import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import CyclPediaClassPage from './CyclPediaClassPage';
import CyclPediaFuncPage from './CyclPediaFuncPage';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-center">Class Component</span>
        <CyclPediaClassPage />
      </div>
      <div className="col-6">
        <span className="h1 text-warning text-center">Func Component</span>
        <CyclPediaFuncPage />
      </div>
    </div>
  </div>
);

