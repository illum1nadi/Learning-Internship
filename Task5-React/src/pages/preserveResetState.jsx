import { useState } from 'react';

export default function PreserveResetState() {
    return(
        <>
            <App3></App3>
            <App4></App4>
        </>
    )
}

function App3() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    // this will reset state as react expects the same component on both branches at a level
    <div>
        <p className="font-bold italic underline">Will reset upon taking a break :</p>
      {isPaused ? (
        <Counter invisible={false} />
      ) : (
        <Counter1 invisible={true} />
      )}
      <label>
        <input
          type="checkbox"
          checked={isPaused}
          onChange={e => {
            setIsPaused(e.target.checked)
          }}
        />
        Take a break
      </label>
    </div>
  );
}

function App4() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    // this will not reset state as react finds the same component on both branches at a level.
    <div>
        <p className="font-bold italic underline">Will not reset upon taking a break :</p>
      {isPaused ? (
        <Counter invisible={false} />
      ) : (
        <Counter invisible={true} />
      )}
      <label>
        <input
          type="checkbox"
          checked={isPaused}
          onChange={e => {
            setIsPaused(e.target.checked)
          }}
        />
        Take a break
      </label>
    </div>
  );
}

function Counter({ invisible }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (!invisible) {
        className += ' invisible';
    }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
function Counter1({ invisible }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
        className += ' hover';
    }
    if (!invisible) {
        className += ' invisible';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}
