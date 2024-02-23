
function About() {
    return <div class="flex justify-evenly  bg-cyan-950 p-20">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img class="rounded-lg w-96" src="mightypic.jpg" alt="image description" />
        </div>
        <div class="mt-5">
            <div class="mb-6"><span class="text-6xl mb-6 text-white">About me</span></div>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">As a Full Stack Devloper, I specialize in Website.with One year of experience in Tech, I've had the privilege of working with diverse clients and projects,  honing my skills in front-end. Passionate about building user attractive UI,I approach every task with creativity, dedication, and a keen eye for detail. My goal is  not just to meet expectations but to exceed them,delivering exceptional results that drive  success for my clients or employers.Let's collaborate and bring your ideas to life.</p>
            <button class="bg-cyan-400 mt-5 hover:bg-sky-100  font-bold py-2 px-4 rounded">
            Read More
            </button></div>
    </div>
}

export default About;