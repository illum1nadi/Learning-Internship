import { Routes, Route, Link } from 'react-router-dom';


import Gallery from './pages/firstComponent.jsx';
import { PackingList } from './pages/jsxComponent.jsx';
import List from './pages/filterAndMap.jsx';
import ButtonApp from './pages/stateAndEventHandlers.jsx';
import Counter from './pages/batchedUpdates.jsx';
import Form from './pages/objectsUpdate.jsx';
import ListsArray from './pages/arrayUpdate.jsx';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/firstComp">Intro</Link> |{" "}
        <Link to="/funcComp">Exports</Link> |{" "}
        <Link to="/listsComp">Lists</Link> |{" "}
        <Link to="/stateAndEventHandlers">State and Event Handlers</Link> |{" "}
        <Link to="/batchedUpdates">Batched Updates</Link> |{" "}
        <Link to="/objectsUpdate">Objects Update</Link>
        <Link to="/arrayUpdate">Array Update</Link>
      </nav>

      <Routes>
        <Route path="/firstComp" element={<Gallery/>} />
        <Route path="/funcComp" element={<PackingList/>} />
        <Route path="/listsComp" element={<List/>} />
        <Route path="/stateAndEventHandlers" element={<ButtonApp/>} />
        <Route path="/batchedUpdates" element={<Counter/>} />
        <Route path="/objectsUpdate" element={<Form/>} />
        <Route path="/arrayUpdate" element={<ListsArray/>} />
      </Routes>
    </div>
  );
}
