function Item({ name, isPacked }) {
  return (
    //jsx can be be used inside curly braces in react components.

    //a way to usually use conditional rendering in jsx 
    <li className="item">
       
      {name} {isPacked && '✅'} 
    </li>
  );
}

export function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}

//export default can be imported without curly braces and the regular export needs to be imported with curly braces as destructuring.
//only one default export is allowed in a file, but you can have multiple named exports in a file.