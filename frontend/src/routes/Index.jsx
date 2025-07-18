import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Index;
