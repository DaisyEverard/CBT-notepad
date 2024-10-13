import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav id="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mood">Mood Tracker</Link>
          </li>
          <li>
            <Link to="/">Cycle</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavBar;