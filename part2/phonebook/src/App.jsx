import React, { useState, useEffect } from 'react';
import FilterForm from './FilterForm';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import personService from './personService';

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
    const isNameDuplicate = persons.find(person => person.name === newName);

    if (isNameDuplicate) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)) {
        const updatedPerson = { ...isNameDuplicate, number: newNumber };

        console.log('Existing person:', isNameDuplicate);
        console.log('Updated person:', updatedPerson);

        personService
          .update(isNameDuplicate.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== isNameDuplicate.id ? person : returnedPerson));
            setNewName('');
            setNewNumber('');
            setNewSearch('');
          })
          .catch(error => {
            console.error(`Failed to update person with id ${isNameDuplicate.id}:`, error);
          });
      }
    } else {
      const personData = {
        name: newName,
        number: newNumber,
        id: (persons.length + 1).toString(),
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
      <ContactList persons={(newSearch.length > 0 ? filteredList : persons)} setPersons={setPersons} />
    </div>
  );
}

export default App;
