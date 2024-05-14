const Header = ({ course }) => <h1>{course}</h1>

//const Total = ({ sum }) => <p>Number of exercises {sum}</p>

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

const Course=({course,parts})=>{
  return(
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
    {
      name: 'Extra',
      exercises: 12
    },
    {
      name: 'Test',
      exercises: 15
    }
  ]

  return (
    <div>
      <Course course={course} parts={parts}/>
    </div>
  )
}

export default App