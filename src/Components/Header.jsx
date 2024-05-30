import NavBar from "./Navbar"


function Header() {
return (    
<>   
<div className="relative h-[250px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
    <div className="flex flex-col gap-1 pt-6 items-center w-full h-full px-3 md:px-0">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"> Mola Dafa </h1>
        <p className="text-gray-300"> Full Stack Developer</p>
        
    </div>
    
</div>
<NavBar />

</>
);
}

export default Header;