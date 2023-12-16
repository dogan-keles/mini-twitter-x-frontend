import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Form from "./components/Form";
import SingleTweetPage from "./components/SingleTweetPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/tweet/:id" element={<SingleTweetPage />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
