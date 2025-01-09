
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faElementor, faGithub, faSlack, faFigma, faGitlab,  } from '@fortawesome/free-brands-svg-icons';

function About() {
  const skills = [
      { icon: <FontAwesomeIcon icon="fa-brands fa-aws" />, name: "AWS" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-js" />, name: "JavaScript" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-node" />, name: "Node.js" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-react" />, name: "React" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-github" />, name: "Git" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-python" />, name: "Python" },
      { icon: <FontAwesomeIcon icon="fa-solid fa-database" />, name: "MongoDB" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-html5" />, name: "HTML" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-css3-alt" />, name: "CSS" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-sass" />, name: "Sass" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-bootstrap" />, name: "Bootstrap" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-tailwind" />, name: "Tailwind" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-angular" />, name: "Angular" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-vuejs" />, name: "Vue.js" },
      { icon: <FontAwesomeIcon icon="fa-brands fa-npm" />, name: "NPM" },
  ];

  return (
    <div className="bg-zinc-800 min-h-screen w-full lg:p-24">
      <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2">
        <img
          className="w-full max-w-md mx-auto lg:ml-32 pt-5"
          src="studying.png"
          alt="image description"
        />
        </div>
        <div className="lg:w-1/2 text-left lg:mr-7 lg:text-left">
        <div className="mb-6">
          <span className="text-3xl md:text-4xl mb-6 text-pink-500" style={{ fontFamily: 'lora, lora' }}>About mighty</span>
        </div>
        <p className="mb-6 font-light text-gray-400 text-base md:text-lg lg:text-xl">
          As a Full Stack Devloper, I specialize in Website Development. I have had the privilege of working with diverse clients and projects, honing my skills in front-end and back end.
            </p>
            <p className="mb-6 font-light text-gray-400 text-base md:text-lg lg:text-xl">
            Experienced in  working  diverse teams spanning Ethiopia and Italy, which has helped me develop strong cross-cultural communication and collaboration skills. 
            </p>
            <ul>
            <li className="mb-6 font-light text-gray-400 text-base md:text-lg lg:text-xl">My soft skills include being a team player, making sound decisions under pressure, fostering creativity in problem-solving, and adapting quickly to new challenges and environments</li>
            </ul>
        
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
        Professional <span className="text-pink-500">Skillset</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
          key={index}
          className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-zinc-800 border border-pink-500 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:bg-pink-500 hover:text-white hover:border-white"
          >
          {skill.icon}
          <p className="mt-2 text-xs md:text-sm text-white">{skill.name}</p>
          </div>
        ))}
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
        Tools <span className="text-pink-500">I used</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {[faFigma, faGitlab, faSlack, faElementor, faGithub].map((icon, index) => (
          <li key={index} className="text-white hover:text-pink-500">
            <FontAwesomeIcon icon={icon} style={{ fontSize: '3rem', '@media (min-width: 768px)': { fontSize: '5rem' } }} />
          </li>
          ))}
        </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
