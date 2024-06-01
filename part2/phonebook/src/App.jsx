import React, { useState, useEffect } from 'react';
import FilterForm from './FilterForm';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import personService from './personService';  // Importa el servicio

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  useEffect(() => {
    console.log('effect');
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled');
        setPersons(initialPersons);
        console.log(initialPersons);
      });
  }, []);

  console.log('render', persons.length, 'persons');

  const addName = (event) => {
    event.preventDefault();
    const isNameDuplicate = persons.some(person => person.name === newName);
    if (isNameDuplicate) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const personData = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      personService
        .create(personData)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
          setNewSearch('');
        });
    }
  };

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const filteredList = persons.filter(person =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  );

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
