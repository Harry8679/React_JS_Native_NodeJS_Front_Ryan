import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
    // const navigate = useNavigate();
  const pathMathRoute = route => {
      if (route === location.pathname) {
          return true;
      }
    };
    /* li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-red-500 ${pathMathRoute('/offers') ? 'text-black': 'text-gray-400 border-b-[3px] border-b-transparent'}`} onClick={() => navigate('/offers')}>
    Offers
    </li>*/
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-primary">
	  <div class="container-fluid ">
		<Link class="navbar-brand text-white" to='/'>Navbar</Link>
		<Link class={`navbar-brand text-white ${pathMathRoute('/') ? 'active': ''}`} to='/'>Home</Link>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		  <ul class="navbar-nav ">
			<li class="nav-item">
			  <Link class={`nav-link text-white ${pathMathRoute('/register') ? 'active': ''}`} to='/register' aria-current="page">Register</Link>
			</li>
			<li class="nav-item">
			  <Link class={`nav-link text-white ${pathMathRoute('/login') ? 'active': ''}`} to='/login'>Login</Link>
			</li>			
		  </ul>		  
		</div>
	  </div>
	</nav>
  )
}

export default Main
