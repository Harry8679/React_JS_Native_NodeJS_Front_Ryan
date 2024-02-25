import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { Link, useLocation } from 'react-router-dom';
import { removeFromLocalStorage } from '../../helpers/auth.helper';

const Main = () => {
    const location = useLocation();
    // const navigate = useNavigate();
  const pathMathRoute = route => {
      if (route === location.pathname) {
          return true;
      }
    };

	// Context
	const [auth, setAuth] = useContext(AuthContext);

	const logout = () => {
		setAuth(null);
		removeFromLocalStorage();
	}
	
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-primary">
	  <div className="container-fluid ">
		<Link className="navbar-brand text-white" to='/'>Navbar</Link>
		<Link className={`navbar-brand text-white ${pathMathRoute('/') ? 'active': ''}`} to='/'>Home</Link>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		{auth !== null && auth !== undefined ? (
			<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						{auth?.user?.name}
					</button>
					<ul class="dropdown-menu">
						{/* <li className="nav-item">
							<Link className={`dropdown-item nav-link text-black ${pathMathRoute('/login') ? 'active': ''}`} to='/login' onClick={logout}>Logout</Link>
						</li> */}
						<li><Link className="dropdown-item" to="/login" onClick={logout}>Logout</Link></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
				{/* <ul className="navbar-nav ">
				<li className="nav-item">
					<Link className={`nav-link text-white ${pathMathRoute('/login') ? 'active': ''}`} to='/login' onClick={logout}>Logout</Link>
				</li>			
				</ul>		   */}
			</div>
		):(
			<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
				<ul className="navbar-nav ">
					<li className="nav-item">
					<Link className={`nav-link text-white ${pathMathRoute('/register') ? 'active': ''}`} to='/register' aria-current="page">Register</Link>
					</li>
					<li className="nav-item">
					<Link className={`nav-link text-white ${pathMathRoute('/login') ? 'active': ''}`} to='/login'>Login</Link>
					</li>			
				</ul>		  
			</div>
		)}
	  </div>
	</nav>
  )
}

export default Main
