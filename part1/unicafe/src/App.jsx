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

const StatisticLine = ({ text, value }) => {
  if(text==="Total"||text==="Average"||text==="Positive"){
      return (
      <tr>
        <td>{text}</td><td> {value}</td>
      </tr>
    );
  }else{
    return (
      <tr>
        <td>{text}</td><td> {value}</td>
      </tr>
    );
  }
}

const Statictics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={positive} />
      </tbody>
    </table>
  );
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
      <Statictics good={good} neutral={neutral} bad={bad}></Statictics>

    </div>
  )
}

export default App