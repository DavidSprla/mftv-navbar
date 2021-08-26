import { BrowserRouter, NavLink } from "react-router-dom"

export default function Root() {
	return (
		<BrowserRouter>
      <nav className="navbar">
				<NavLink exact to="/" className="navbar__link" activeClassName="navbar__link--active">
          Home
        </NavLink>
        <NavLink to="/movies" className="navbar__link" activeClassName="navbar__link--active">
          Movies
        </NavLink>
        <NavLink to="/favourite" className="navbar__link" activeClassName="navbar__link--active">
          Favourite
        </NavLink>
      </nav>
    </BrowserRouter>
	);
}
