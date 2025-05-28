import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  return (
    <>
        {/* and pass the state down to the children components as props. */}
      <Input label="First input" text = {text} setText = {setText}/>
      <Input label="Second input" text = {text} setText = {setText}/>
    </>
  );
}

function Input({ label, text, setText }) {
  //this component can be pushed to parent if we want synced input boxes.
  //const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}

//filtering system sharing state between components.
export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export const foods = [{
  id: 0,
  name: 'Sushi',
  description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
}, {
  id: 1,
  name: 'Dal',
  description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
}, {
  id: 2,
  name: 'Pierogi',
  description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
}, {
  id: 3,
  name: 'Shish kebab',
  description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
  id: 4,
  name: 'Dim sum',
  description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
}];


export function FilterableList() {
  const [query, setQuery] = useState('');
  return (
    <>
      <SearchBar query={query} setQuery={setQuery}/>
      <hr />
      <List items={foods} query={query}/>
    </>
  );
}

function SearchBar({query, setQuery}) {
  

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items, query }) {
  let newItems = items.filter((prod) => {
    //changed to this to make it case insensitive.
    return (prod.name.toLowerCase().includes(query.toLowerCase()))
  })
  return (
    <table>
      <tbody>
        {newItems.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
