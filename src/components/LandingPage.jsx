
function LandingPage() {
    return <div className="flex justify-evenly pt-20 bg-sky-100 pb-10">
      <section className="bg-sky-100 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-3xl xl:text-6xl dark:text-white">Hey,<br></br>I am <span className="text-cyan-400">Mighty Shambel</span> <br></br><span className="text-4xl">Full Stack Web Devloper</span></h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I am a website devloper specializing in building (and occasonally designing) exceptional digital experiences.Currently,I am focused on building web using React and Wordpress.</p>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-cyan-400 hover:bg-cyan-950 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Read more
                </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className="h-auto max-w-lg  duration-300 rounded-lg  filter  hover:grayscale rounded-full w-96 h-96" src="mightypic.jpg"  alt="mockup" />
            </div>                
        </div>
    </section>
       
     </div>
}

export default LandingPage;