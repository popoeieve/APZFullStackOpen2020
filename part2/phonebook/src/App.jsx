import React, { useState } from 'react'

const Name = ({ id, name, number }) => {
  return (
    <div key={id}>
      {name.content} {number}
    </div>
  );
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    const isNameDuplicate = persons.some(person => person.content === newName);
    event.preventDefault()
    if(isNameDuplicate){
      alert(newName+' is already added to the phonebook')            
    }else{
      const namePerson = {
        content: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons([...persons, namePerson])
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    console.log("has escrito el numero "+newNumber)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        Name: <input value={newName} onChange={handleNameChange} />
      </form>
      <form>
        Number: <input value={newNumber} onChange={handleNumberChange} />
      </form>
      <form onSubmit={addName}>
        <button type="submit">save</button>
      </form>
        
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Name key={person.id} name={person} number={person.number} />
        )}
      </ul>
    </div>
  );
}

export default App;