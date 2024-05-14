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
    <>
      <Header course={course.name}/>
      <Content key={id} parts={course.parts}/>
    </>
  ));
  return(
    <div>
      {courseList}
    </div>
  );
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses}/>
    </div>
  )
}

export default App