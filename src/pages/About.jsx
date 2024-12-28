function About() {
  
  return (
    <div className="flex justify-evenly  bg-zinc-800 p-40"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          className="rounded-lg w-96"
          src="studying.png"
          alt="image description"
        />
      </div>
      <div className="mt-5">
        <div className="mb-6">
          <span className="text-4xl mb-6 text-white" style={{ fontFamily: 'lora, lora' }}>About mighty</span>
        </div>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          As a Full Stack Devloper, I specialize in Website.with One year of experience in Tech, I have had the privilege of working with diverse clients and projects, honing my skills in front-end. Passionate about
          building user attractive UI,I approach every task with creativity,dedication, and a keen eye for detail. My goal is not just to meet expectations but to exceed them,delivering exceptional results that
          drive success for my clients or employers.Lets collaborate and bring your ideas to life.
        </p>
       
      </div>
    </div>
  );
}

export default About;
