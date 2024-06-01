import React from 'react';

const Name = ({ id, name, number }) => {
    return (
      <div key={id}>
        {name} {number}
      </div>
    );
  }

const ContactList = ({ persons }) => {
  persons.forEach(person => {
    console.log(person.name); // Log each name
  });
  return (
    <ul>
      {persons.map(person =>
        <Name key={person.id} name={person.name} number={person.number} />
      )}
    </ul>
  );
}

export default ContactList;
