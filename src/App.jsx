import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import CreateToDo from "./components/createToDo";
import OneToDo from "./components/oneToDo";
import EditToDo from "./components/editToDo.jsx";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}>home</Link>
        <Link to={"/create"}>create</Link>
      </nav>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/create"} element={<CreateToDo />}></Route>
        <Route path={"/todo/:id"} element={<OneToDo />}></Route>
        <Route path={"/todo/edit/:id"} element={<EditToDo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
