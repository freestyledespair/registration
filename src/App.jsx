import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Registration from "./components/Auth/Registraion/Registration";
import "./App.css"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/auth/'} element={<Login />} />
        <Route path={'/registration/'} element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;