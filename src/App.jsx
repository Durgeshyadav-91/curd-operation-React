import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Create } from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <div className="w-full flex flex-col gap-6 px-28 py-10 h-screen bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
