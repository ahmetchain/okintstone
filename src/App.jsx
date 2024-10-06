import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Catalog from "./Page/Catalog";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
