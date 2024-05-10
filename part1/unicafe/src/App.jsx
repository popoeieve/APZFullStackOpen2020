import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const ListUsed = (props) => (
  <div>
    {props.name} {props.timesUsed}
  </div>
)

const Total = (props) => {
  const total = props.good+props.neutral+props.bad
  return(
    <p>All {total}</p>
  )

}

const Average = (props) => {
  const average = (props.good+props.bad)/(props.good+props.neutral+props.bad)
  return(
    <p>All {average}</p>
  )

}

const Positive = (props) => {
  const positive = props.good/(props.good+props.neutral+props.bad)*100
  return(
    <p>Positive {positive}</p>
  )

}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={'give feedback'}/>
      <Button text={'good'} handleClick={()=>setGood(good+1)}></Button>
      <Button text={'neutral'} handleClick={()=>setNeutral(neutral+1)}></Button>
      <Button text={'bad'} handleClick={()=>setBad(bad+1)}></Button>
      <Header text={'Statictics'}/>
      <ListUsed name={'good'} timesUsed={good}></ListUsed>
      <ListUsed name={'neutral'} timesUsed={neutral}></ListUsed>
      <ListUsed name={'bad'} timesUsed={bad}></ListUsed>
      <Total good={good} neutral={neutral} bad={bad}></Total>
      <Average good={good} neutral={neutral} bad={bad}></Average>
      <Positive good={good} neutral={neutral} bad={bad}></Positive>
    </div>
  )
}

export default App