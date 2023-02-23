import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/styles.css"
import Header from './Header';
import Student from './Student';

/* 
Task React
My first react project
  • Call My Name
  • My Address
*/

function MainBody() {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;

  return (
    <div>
      <h3>In this, we will learn {whatWeWillLearn} by building faisal</h3>
      <p>Total Lecture = {lectureCount}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      <div>
        Enter Task : {" "}
        <input maxLength={8} readOnly={false} placeholder="Enter your input"></input>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='pt-3'>
      <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding !</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Header />
    <MainBody />
    <div className='row'>Students Enrolled</div>
    <Student experience={2} name="Ahmad Faisal" />
    <Student experience={5} name="T. Muller" />
    <Student experience={7} name="Neuer" />
    <Footer />
  </div>
);
