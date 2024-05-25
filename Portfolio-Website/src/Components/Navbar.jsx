import { Link } from "react-router-dom";

function NavBar() {
    return(
     <> 
	<nav className="relative px-4 py-4 flex justify-between items-center bg-white">

		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><Link to="/" className="text-xl text-gray-400 hover:text-gray-500">Home</Link></li>
			<li><Link to="/" className="text-xl text-gray-400 hover:text-gray-500">About Me</Link></li>
            <li><Link to="/" className="text-xl text-gray-400 hover:text-gray-500">Portfolio</Link></li>
            <li><Link to="/" className="text-xl text-gray-400 hover:text-gray-500">Contact Me</Link></li>			
		</ul>
		
	</nav>
	
</>  
)}

export default NavBar;