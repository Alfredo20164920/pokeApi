import { Routes, Route } from "react-router-dom";
import { Home, Pokemon } from "./pages";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemon" element={<Pokemon />} />
      </Routes>
    </>
  )
}

export default App
