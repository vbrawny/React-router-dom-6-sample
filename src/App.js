import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Users from "./Users";
import Home from "./Home";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
