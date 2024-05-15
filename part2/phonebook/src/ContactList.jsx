import React from 'react';

const Name = ({ id, name, number }) => {
    return (
      <div key={id}>
        {name.content} {number}
      </div>
    );
  }

const ContactList = ({ persons }) => {
  return (
    <ul>
      {persons.map(person =>
        <Name key={person.id} name={person} number={person.number} />
      )}
    </ul>
  );
}

export default ContactList;
