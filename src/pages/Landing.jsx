import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function LandingPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  const background = "bg.jpg"; // Define the background variable
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "full",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div style={myStyle}>
      <div className=" p-10">
        <section  className="p-40">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1
                className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-3xl xl:text-6xl text-white"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Hey,I am <br></br>
                <span
                  className="text-pink-500"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  style={{ fontFamily: 'lora, lora' }}
                >
                 Mighty Shambel
                </span>{" "}
                <br></br>
                <span
                  className="text-4xl"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  Full Stack Developer
                </span>
              </h1>

              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Seasoned  Developer with a Bachelor’s degree in
                Software <br />
                Engineering and Experienced in designing, developing, and
                delivering <br /> scalable web applications. My expertise spans
                both front-end and back-end technologies.
              </p>
              
            </div>
          
          </div>
        </section>
        <section className="bg-zinc-800 p-24  text-white">
          <h1 className="text-center">A little about me</h1>
          <p className="text-center mb-6 font-light text-white  lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          As a Full Stack Devloper, I specialize in Website.with One year of experience in Tech, I have had the privilege of working with diverse clients and projects, honing my skills in front-end. Passionate about
          building user attractive UI,I approach every task with creativity,dedication, and a keen eye for detail. My goal is not just to meet expectations but to exceed them,delivering exceptional results that
          drive success for my clients or employers.Lets collaborate and bring your ideas to life.
        </p>
        </section>
      </div>

    </div>
  );
}

export default LandingPage;
