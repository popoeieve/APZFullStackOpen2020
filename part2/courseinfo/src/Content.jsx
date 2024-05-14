import React from "react";

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  var totalAmount=parts.reduce((sum,part)=>sum+part.exercises,0)
  var partList = parts.map((part, index) => (
    <Part key={index} part={part}></Part>
  ));
  return (
    <div>
      {partList}
      <p>Total of {totalAmount} exercises</p>
    </div>
  );
}

const Course=({courses})=>{
    var courseList=courses.map((course,id) => (
      <div key={id}>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
      </div>
    ));
    return(
      <div>
        {courseList}
      </div>
    );
  }

  export default Course