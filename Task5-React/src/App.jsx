import { Routes, Route, Link } from 'react-router-dom';


import Gallery from './pages/firstComponent.jsx';
import { PackingList } from './pages/jsxComponent.jsx';
import List from './pages/filterAndMap.jsx';
import ButtonApp from './pages/stateAndEventHandlers.jsx';
import Counter from './pages/batchedUpdates.jsx';
import Form from './pages/objectsUpdate.jsx';
import ListsArray from './pages/arrayUpdate.jsx';
import SyncedInputs, { FilterableList } from './pages/sharingState.jsx';
import PreserveResetState from './pages/preserveResetState.jsx';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/firstComp">Intro</Link> |{" "}
        <Link to="/funcComp">Exports</Link> |{" "}
        <Link to="/listsComp">Lists</Link> |{" "}
        <Link to="/stateAndEventHandlers">State and Event Handlers</Link> |{" "}
        <Link to="/batchedUpdates">Batched Updates</Link> |{" "}
        <Link to="/objectsUpdate">Objects Update</Link> |{" "}
        <Link to="/arrayUpdate">Array Update</Link> |{" "}
        <Link to="/sharingState">Sharing State</Link> |{" "}
        <Link to="/filterFunction">Filterable List</Link> |{" "}
        <Link to="/preserveResetState">Preserve Reset State</Link>
      </nav>

      <Routes>
        <Route path="/firstComp" element={<Gallery/>} />
        <Route path="/funcComp" element={<PackingList/>} />
        <Route path="/listsComp" element={<List/>} />
        <Route path="/stateAndEventHandlers" element={<ButtonApp/>} />
        <Route path="/batchedUpdates" element={<Counter/>} />
        <Route path="/objectsUpdate" element={<Form/>} />
        <Route path="/arrayUpdate" element={<ListsArray/>} />
        <Route path="/sharingState" element={<SyncedInputs/>} />
        <Route path="/filterFunction" element={<FilterableList/>} />
        <Route path="/preserveResetState" element={<PreserveResetState/>} />
      </Routes>
    </div>
  );
}
