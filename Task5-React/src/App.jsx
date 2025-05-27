import { Routes, Route, Link } from 'react-router-dom';


import Gallery from './pages/firstComponent.jsx';
import { PackingList } from './pages/jsxComponent.jsx';
import List from './pages/filterAndMap.jsx';


export default function App() {
  return (
    <div>
      <nav>
        <Link to="/firstComp">Intro</Link> |{" "}
        <Link to="/funcComp">Exports</Link> |{" "}
        <Link to="/listsComp">Lists</Link> |{" "}
        
      </nav>

      <Routes>
        <Route path="/firstComp" element={<Gallery/>} />
        <Route path="/funcComp" element={<PackingList/>} />
        <Route path="/listsComp" element={<List/>} />

      </Routes>
    </div>
  );
}
