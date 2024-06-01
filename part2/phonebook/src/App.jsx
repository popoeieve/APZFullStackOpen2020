import React, { useState,useEffect } from 'react';
import FilterForm from './FilterForm';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch]= useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        console.log(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    const isNameDuplicate = persons.some(person => person.content === newName);
    event.preventDefault()
    if(isNameDuplicate){
      alert(newName+' is already added to the phonebook')
    }else{
      const personData = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons([...persons, personData])
      setNewName('')
      setNewNumber('')
      setNewSearch('')
    }
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const filteredList = persons.filter(person =>
    person.content && person.content.toLowerCase().includes(newSearch.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm value={newSearch} onChange={handleSearchChange} />
      <h2>Add a New</h2>
      <AddContactForm newName={newName} newNumber={newNumber} 
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} 
        handleSubmit={addName} />
      <h2>Numbers</h2>
      <ContactList persons={(newSearch.length > 0 ? filteredList : persons)} />
    </div>
  );
}

export default App;
