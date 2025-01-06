import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


function LandingPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  const background = "gfff.png"; // Define the background variable
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "full",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div style={myStyle} className="min-h-screen">
      <div>
        <section className="p-6 md:p-24">
           <div className="container mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 gap -8 flex justify-center">
                  <h1 className="text-3xl md:text-4xl xl:text-6xl font-extrabold leading-tight mb-4 text-white"
                      data-aos="fade-right"
                      data-aos-duration="1000">
                  Hey, I am <br />
                  <span className="text-pink-500"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        style={{ fontFamily: 'lora, lora' }}>
                    Mighty Shambel
                  </span>{" "}
                  <br />
                  <span className="text-2xl md:text-4xl"
                        data-aos="fade-up"
                        data-aos-delay="1000">
                    Full Stack Developer
                  </span>
                </h1>
              </div>
              
              <div className="md:col-span-6 flex justify-center">
                <img className="w-full max-w-md"
                     src="laptop wave.png"
                     alt="Developer illustration" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 p-6 md:p-24 text-white">
          <div className="container mx-auto">
            
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 flex justify-center">
                <img className="w-full max-w-md"
                     src="waving doorway.png"
                     alt="Developer illustration"
                     data-aos="fade-left" />
              </div>
              <div className="md:col-span-6 text-center md:text-left">
                <h1 className="text-pink-500 pb-5 font-bold"style={{ fontFamily: 'lora, lora' }} >A little about me</h1>
               
                <ul>
                  <li className="text-base md:text-lg lg:text-xl text-white">Graduated from Bahir Dar University with a Bachelors degree in Software Engineering .</li>
                  <li className="text-base md:text-lg lg:text-xl text-white pt-5">I am highly interested in  Artificial Intelligence and Machine Learning.</li>
                  <li className="text-base md:text-lg lg:text-xl text-white pt-5">My expertise spans both front-end and back-end,Using Technologies such as Javascript frameworks  Angular and React js,Typescript,Node js and MongoDB.</li>
                  <li className="text-base md:text-lg lg:text-xl text-white pt-5"> I joined ALX Africa in 2022 during my internship, where I participated in an intensive 8-month program. Through this experience, I gained in-depth knowledge and became proficient in Git, Python, and C.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section  className=" p-6 md:p-24 text-white">
          <h1 className="text-pink-500 pb-5 font-bold text-center" style={{ fontFamily: 'lora, lora' }} >Find me On</h1>
          <p className="text-white pb-5 text-center text-xl">Feel free to connect with me </p>
          <ul className="flex justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                      <li>
                          <a
                              href="https://www.facebook.com/people/Mightys-Shambel"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-pink-500 me-4 md:me-6"
                          >
                              <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '2rem' }} />
                          </a>
                      </li>
                      <li>
                          <a
                              href="https://www.instagram.com/almighty__shambel"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-pink-500 me-4 md:me-6  "
              >
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '2rem' }} />
                
                          </a>
                      </li>
                      <li>
                          <a
                              href="https://www.linkedin.com/in/mighty-shambel-4410a01b5"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-pink-500 me-4 md:me-6"
                          >
                              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '2rem' }}/>
                          </a>
                      </li>
                      <li>
                          <a
                              href="https://github.com/Mightyshambel"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-pink-500"
                          >
                              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2rem' }} />
                          </a>
                      </li>
                  </ul>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
