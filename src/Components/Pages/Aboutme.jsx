
function AboutMe() {
    return(
        <div className="relative flex justify-center items-center min-h-screen bg-white-100 overflow-hidden p=2 m-5">
        <div className="m-2 p-2 absolute inset-0 bg-fixed bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(https://www.example.com/background-pattern.png)' }}></div>
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl m-2" >
            <div className="flex justify-center mb-6">
                <img src="../../../public\images\FB_IMGone" alt="Profile" className="w-64 h-64 rounded-full border-4 border-white shadow-md" />
            </div>
            <div className="mb-4 pb-2 text-left">
            <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Hello! I'm Molaligne (Mola) Dafa, a dedicated web developer with a passion for reading, understanding how things work, and creating solutions that make the world a better place. My journey into web development stems from a deep curiosity and a strong desire to develop impactful and innovative solutions.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    I hold a Full Stack Web Development Certificate from the University of Adelaide. My expertise spans modern web technologies, including Express.js, Node.js, React.js, Tailwind CSS, MySQL/NoSQL, and MongoDB.
                </p>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
                <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-4">
                    <li><strong>Phonics Tutoring</strong>: Assisted young learners in developing essential reading skills, fostering their academic growth and literacy.</li>
                    <li><strong>Machine Operator</strong>: Contributed to the efficient operation of sophisticated machinery at some of the world's leading pharmaceutical companies, ensuring high standards of quality and productivity.</li>
                    <li><strong>Forklift Operator</strong>: Oversaw logistics and material handling at a prominent global cosmetics company, optimizing operational efficiency and workflow.</li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed">
                    These experiences have equipped me with a unique skill set, including attention to detail, problem-solving abilities, and a strong work ethic. I bring these qualities to my web development projects, where I focus on creating efficient, user-friendly, and impactful solutions. If you would like to work with me, please find my contact details below; I would love to have a chat.
                </p>

                </div>    

        </div>
    </div>

    );

}

export default AboutMe;