import React, { useState } from 'react'

const Name = ({ id, name }) => {
  return (
    <div key={id}>
      {name.content}
    </div>
  );
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const namePerson = {
      content: newName,
      id: persons.length + 1,
    };
    setPersons([...persons, namePerson])
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <input value={newName} onChange={handleNameChange} />
        <button type="submit">save</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Name key={person.id} name={person} />
        )}
      </ul>
    </div>
  );
}

export default App;