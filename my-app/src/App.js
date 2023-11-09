import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from './pages/Error'
import Create from "./pages/Create";
import List from "./pages/List";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/list" element={<List />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
