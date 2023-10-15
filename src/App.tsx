import { Routes, Route } from "react-router-dom";
import { Home, Pokemon } from "./pages";
import { NotFound } from "./components";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemon" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
