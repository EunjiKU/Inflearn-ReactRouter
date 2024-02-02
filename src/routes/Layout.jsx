// import { Outlet, Link } from "react-router-dom"
import { Outlet, NavLink } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <h1>Basic Example</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/nothing-here">Nothing Here</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/logout">Logout</NavLink></li>
          <li><NavLink to="/team/123">Team 123</NavLink></li>
          <li><NavLink to="/team/new">New Team</NavLink></li>
          <li><NavLink to="/team/123/task/456">Team 123 Task 456</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}