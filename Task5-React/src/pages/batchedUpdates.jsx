import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        //State variables are not updated until the next render.
        //so result will increase by 1 only.
        setNumber(number + 1);
        setNumber(n => n + 1)
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>

      <h1>{number2}</h1>
      <button onClick={() => {
        //this will increase the number by 2 as arraow function is used. it waits for previous call.
        setNumber2(number2 + 1);
        setNumber2(n => n + 1)
        //but if i add another setNumber2(number2 + 1) it will increase the number by 1 only.
        //setNumber2(number2 + 1);
      }}>+2</button>
    </>
  )
}
