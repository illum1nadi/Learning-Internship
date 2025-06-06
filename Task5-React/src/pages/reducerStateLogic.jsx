// import { useState } from 'react';
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

// export default function TaskApp() {
//   const [tasks, setTasks] = useState(initialTasks);

//   function handleAddTask(text) {
//     setTasks([
//       ...tasks,
//       {
//         id: nextId++,
//         text: text,
//         done: false,
//       },
//     ]);
//   }

//   function handleChangeTask(task) {
//     setTasks(
//       tasks.map((t) => {
//         if (t.id === task.id) {
//           return task;
//         } else {
//           return t;
//         }
//       })
//     );
//   }

//   function handleDeleteTask(taskId) {
//     setTasks(tasks.filter((t) => t.id !== taskId));
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// let nextId = 3;
// const initialTasks = [
//   {id: 0, text: 'Visit Kafka Museum', done: true},
//   {id: 1, text: 'Watch a puppet show', done: false},
//   {id: 2, text: 'Lennon Wall pic', done: false},
// ];


//all the above three functions handleAddTask, handleChangeTask, and handleDeleteTask are 
//using the same state variable and changing it in different ways.
//we can use a reducer to handle this logic in a single function and just call respective updates with dispatchng something called actions, which are js objects with a type property and some data.

import { useReducer, useState } from 'react';

let nextId = 3;

function addTask(tasks, text) {
    return [
        ...tasks,
        {
            id: nextId++,
            text: text,
            done: false,
        },
    ];
}
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];
function tasksReducer(tasks, action) {
  if (action.type === 'added') {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else if (action.type === 'changed') {
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === 'deleted') {
    return tasks.filter((t) => t.id !== action.id);
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    //reducer which handles all the different actions on the tasks state.
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}


function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
        disabled={text.trim() === ''}
      >
        Add
      </button>
    </div>
  );
}

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({ ...task, text: e.target.value });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({ ...task, done: e.target.checked });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  );
}