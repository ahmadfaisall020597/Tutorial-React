import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/styles.css"

/* 
Task React
My first react project
  • Call My Name
  • My Address
*/

function MainHeader() {
  return (
    <h1 className='heading1'>Tutorial React</h1>
  )
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray"
}

function SubHeader() {
  return (
    <p style={subHeaderStyle}>this will be an exciting course</p>
  )
}

function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  )
}

function MainBody() {
  const whatWeWillLearn = "React JS";

  return (
    <div>
      <h3>In this, we will learn { whatWeWillLearn } by building faisal</h3>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding !</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
