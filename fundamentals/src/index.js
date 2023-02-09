import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
Task React
My first react project
  • Call My Name
  • My Address
*/

function MainBody() {
  return (
    <div>
      <h1>My first react project</h1>
      <ul>
        <li>Call My Name</li>
        <li>My address</li>
      </ul>
    </div>
  )
}

function Dummy() {
  return (
    <div>
      <h1>Biodata</h1>
      <ul>
        <li>
          <span>Name : </span><span>Faisal</span>
        </li>
        <li><span>Address : </span> <span>Kemang</span></li>
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MainBody />
    <Dummy />
  </div>
);
