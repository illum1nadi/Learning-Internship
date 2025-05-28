import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  //objects need to be updated immutably, so we create a new object with the spread operator.
  //we cannot change the object directly as objects are items who can be referenced by other variables.
  //hence a copy of the object is created with the spread operator and then the property is updated.
    //this is called immutability.
  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}

//nested objects can be updated immutably as well.

// const [person, setPerson] = useState({
//   name: 'Niki de Saint Phalle',
//   artwork: {
//     title: 'Blue Nana',
//     city: 'Hamburg',
//     image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//   }
// });

// const nextArtwork = { ...person.artwork, city: 'New Delhi' };
// const nextPerson = { ...person, artwork: nextArtwork };
// setPerson(nextPerson);

//alternate method :
// setPerson({
//   ...person, // Copy other fields
//   artwork: { // but replace the artwork
//     ...person.artwork, // with the same one
//     city: 'New Delhi' // but in New Delhi!
//   }
// });

//with immer library, you can do this more easily:
//you can directly mutate the draft object and it will create a new object for you.

// import { useImmer } from 'use-immer';
// const [person, updatePerson] = useImmer({
//   name: 'Niki de Saint Phalle',
//   artwork: {
//     title: 'Blue Nana',
//     city: 'Hamburg',
//     image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//   }
// });

// updatePerson(draft => {
//   draft.artwork.city = 'Lagos';
// });