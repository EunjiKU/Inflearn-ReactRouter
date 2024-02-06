// import { Outlet, Link } from "react-router-dom"
import { Outlet, NavLink, Link, useResolvedPath, useMatch } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <h1>Basic Example</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li>
            <NavLink to="/about"
              className={({ isActive }) => (isActive ? "activeClass" : "")}
            >About</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard"
              style={({ isActive }) => ({
                color: isActive ? "pink" : ""
              })}
            >Dashboard</NavLink>
          </li>
          <li><NavLink to="/nothing-here">Nothing Here</NavLink></li>
          <li>
            {/* <Link to="/login">Login</Link> */}
            <CustomLink to="/login">Login</CustomLink>
          </li>
          <li><NavLink to="/logout">Logout</NavLink></li>
          <li>
            <NavLink to="/team/123" end>{({ isActive }) => {
              if (isActive) {
                return "Team 123 (active)"
              }
              return "Team 123";
            }}</NavLink>
          </li>
          <li><NavLink to="/team/new" caseSensitive>New Team</NavLink></li>
          <li><NavLink to="/team/New" caseSensitive>New Team</NavLink></li>
          <li><NavLink to="/team/123/task/456">Team 123 Task 456</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

// eslint-disable-next-line react/prop-types
// 컴포넌트
function CustomLink({children, to, ...props}) {
  const resolved = useResolvedPath(to);
  const match = useMatch({path: resolved.pathname, end: true});

  return (
    <div>
      <Link to={to} {...props}>
        {children}
      </Link>
      {match && "(mathch!)"}
    </div>
  )
}