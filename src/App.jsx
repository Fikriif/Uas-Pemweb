import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Profile from "./Component/MenuItem/profile";
import Data from "./Component/MenuItem/Data";
import Tabel from "./Component/MenuItem/Tabel";
import Kesan from "./Component/MenuItem/kesan";
import PrivateRoute from "./Component/PrivateRoute";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/data" element={<Data />} />
          <Route path="/tabel" element={<Tabel />} />
          <Route path="/kesan" element={<Kesan />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
