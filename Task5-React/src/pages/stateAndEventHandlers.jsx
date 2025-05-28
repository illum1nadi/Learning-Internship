import React, { useState } from 'react';
export default function ButtonApp() {
  return (
    <Toolbar
    //you need to pass as reference without curly braces.
      onPlayMovie={() => alert('Playing!')}
      //you need to pass the function value with curly braces.
        //if you pass the function without curly braces, it will be executed immediately.
      onUploadImage={() => {
        return alert('Uploading!');
      }}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  const[count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
      {/* experiment with state and event handlers */}
      <Button onClick={() => setCount(count + 1)}>
        Count is {count}
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
