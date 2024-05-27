
function AboutMe() {
    return(
        <div className="relative flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(https://www.example.com/background-pattern.png)' }}></div>
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <div className="flex justify-center mb-6">
                <img src="https://via.placeholder.com/150" alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-md" />
            </div>
            <div className="mb-4 border-b pb-2">
                <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita assumenda hic quibusdam, explicabo similique maxime inventore officiis incidunt corporis sint harum adipisci debitis ab aspernatur quas consectetur dignissimos aliquam cumque deserunt dolores natus laudantium nihil porro. Culpa voluptatibus voluptatem maiores sequi minima architecto magnam a iusto! Deserunt beatae reiciendis possimus?
            </p>
        </div>
    </div>

    );

}

export default AboutMe;