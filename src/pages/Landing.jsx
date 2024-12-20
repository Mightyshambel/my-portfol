function LandingPage() {
  return (
      <div>
          <div className="flex justify-evenly pt-20 bg-sky-100 pb-10">
      <section className="bg-sky-100 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-3xl xl:text-6xl dark:text-white">
              Hey,<br></br>I am{" "}
              <span className="text-cyan-400">Mighty Shambel</span> <br></br>
              <span className="text-4xl">Full Stack Devloper</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                          Seasoned Full Stack Developer with a Bachelor’s degree in Software <br/>
                          Engineering and Experienced in designing, developing, and delivering <br/> scalable web applications. My expertise spans both front-end and back-end technologies.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-cyan-400 hover:bg-cyan-950 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Read more
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="max-w-lg  duration-300 rounded-lg  filter  hover:grayscale w-96 h-96"
              src="mightypic.jpg"
              alt="mockup"
            />
            </div>
                  
        </div>
      </section>
          </div>
          <div className="flex justify-evenly  bg-cyan-950 p-20">
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          className="rounded-lg w-96"
          src="mightypic.jpg"
          alt="image description"
        />
      </div>
      <div className="mt-5">
        <div className="mb-6">
          <span className="text-6xl mb-6 text-white">About me</span>
        </div>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          As a Full Stack Devloper, I specialize in Website.with One year of
          experience in Tech, I have had the privilege of working with diverse
          clients and projects, honing my skills in front-end. Passionate about
          building user attractive UI,I approach every task with creativity,
          dedication, and a keen eye for detail. My goal is not just to meet
          expectations but to exceed them,delivering exceptional results that
          drive success for my clients or employers.Lets collaborate and bring
          your ideas to life.
        </p>
        <button className="bg-cyan-400 mt-5 hover:bg-sky-100  font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
      <div className="bg-sky-100 text-4xl font-semibold p-20">
      <div>
        <h1 className="text-center text-6xl mb-10 mt-10">My Projects</h1>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="m-5 max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64 object-cover"
            src="helpdesk.jpg"
            alt="help desk"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Help Desk</div>
            <p className="text-gray-700 text-base">
              This is a project I built in my internship for Tahses ICT and
              Consultancy using Vue.js and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64  object-cover"
            src="autism.jpg"
            alt="autism"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Autos</div>
            <p className="text-gray-700 text-base">
              This is a final year project which is basically a social media
              platform for the autism society. I used Vue.js and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64  object-cover"
            src="ttspm.jpg"
            alt="helpdesk"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">TTSP</div>
            <p className="text-gray-700 text-base">
              This project is a website for Total Tech
              Solution Provider PLC.
            </p>
          </div>
        </div>
        <button className="bg-cyan-400 mt-5 hover:bg-sky-100  font-bold py-2 px-4 rounded ">
          Read More
        </button>
      </div>
          </div>
          <form className="mb-6 md:grid-cols-2 p-40 bg-cyan-950">
      <div className="max-w-lg mx-auto ">
        <p className="text-3xl text-center text-white">Contact me</p>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mighty"
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium  text-gray-500 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Shambel"
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium  text-gray-500 dark:text-white"
          >
            Message
          </label>
          <textarea
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="message"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-cyan-400 mt-5 hover:bg-sky-100 text-white hover:text-cyan-950 font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
      </div>
    </form>

    </div>
  );
}

export default LandingPage;
