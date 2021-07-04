import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UsersIndex from "./UsersIndex";
import UserProfile from "./UserProfile";
import OwnUserProfile from "./OwnUserProfile";
const Users = () => {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UsersIndex />} />
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
};

export default Users;
