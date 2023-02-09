import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
Task React
My first react project
  • Call My Name
  • My Address
*/

function MainHeader() {
  return(
  <h1>Tutorial React</h1>
  ) 
      
}

function SubHeader(){
  return(
    <p>this will be an exciting course</p>
  ) 
}

function Header(){
  return(
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  )
}

function MainBody() {
  return (
    <div>
      <h3>My first react project</h3>
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
      <h3>Biodata</h3>
      <ul>
        <li>
          <span>Name : </span><span>Faisal</span>
        </li>
        <li><span>Address : </span> <span>Kemang</span></li>
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <p>Happy Coding !</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <MainBody />
    <Dummy />
    <Footer />
  </div>
);
