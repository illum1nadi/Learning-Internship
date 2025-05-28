//arrays are just like another type of object in javascript.
//using filter, map, reduce, slice, splice, concat, reverse, sort etc. will return a new array.
//so that can be used to update the array immutably.


//can use the spread operator as well in the start or end of the array to add new items.
// setArtists( // Replace the state
//   [ // with a new array
//     ...artists, // that contains all the old items
//     { id: nextId++, name: name } // and one new item at the end
//   ]
// );

import { useState } from 'react';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function ListsArray() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  //this is to insert at a certain point in the array, using the spread operator.
  function handleClick() {
    const insertAt = 2; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}


//can be done using immer as well.
// updateMyTodos(draft => {
//   const artwork = draft.find(a => a.id === artworkId);
//   artwork.seen = nextSeen;
// });