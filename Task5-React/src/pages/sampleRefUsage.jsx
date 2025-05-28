import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const textRef = useRef(text);
  //if i would use the same text to show the text in the alert if i would change
  //the text in the input field it would show the old value of the text
    //because the text is a state and it would not be updated in the alert
    //so i use a ref to store the current value of the text
    //and use it in the alert to show the current value of the text

  function handleChange(e) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  return (
    <>
        <h1>Type something, click send, and change it before the alert :</h1>
      <input
        value={text}
        onChange={handleChange}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
