import { Link } from "react-router-dom";

function NavBar() {
    return(
     <> 
	<nav className="relative px-4 py-4 flex justify-between items-center bg-white w-full">

		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:flex lg:mx-auto md:flex md:items-center md:w-auto md:space-x-6">
			<li><Link to="/" className="text-xl text-gray-400 hover:text-gray-500 m-1">About Me</Link></li>
            <li><Link to="/portfolio" className="text-xl text-gray-400 hover:text-gray-500">Portfolio</Link></li>
            <li><Link to="/contactme" className="text-xl text-gray-400 hover:text-gray-500">Contact Me</Link></li>			
		</ul>
		
	</nav>
	
</>  
)}

export default NavBar;