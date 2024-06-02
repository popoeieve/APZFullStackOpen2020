import React from 'react';
import personService from './personService';

const Name = ({ id, name, number }) => {
    return (
      <div key={id}>
        {name} {number}
      </div>
    );
  }

const ContactList = ({ persons, setPersons }) => {
  const handleDeleteClick = (id) => {
    console.log(`Delete button clicked for id: ${id}`);
    personService.remove(id);
    setPersons(persons.filter(person => person.id !== id));
  };
  return (
    <ul>
      {persons.map(person => (
        <li key={person.id} style={{ display: 'flex', alignItems: 'center' }}>
          <Name name={person.name} number={person.number} />
          <button style={{ marginLeft: '10px' }} onClick={() => handleDeleteClick(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
