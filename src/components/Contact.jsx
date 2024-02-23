function Contact() {
    return <form class="mb-6 md:grid-cols-2 p-40 bg-cyan-950">
        <div class="max-w-lg mx-auto ">
            <p class="text-3xl text-center text-white">Contact me</p>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium font-light text-gray-500 dark:text-white">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mighty" required></input>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium font-light text-gray-500 dark:text-white">Last name</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shambel" required></input>
            </div>
            <div>
                <label for="company" class="block mb-2 text-sm font-medium font-light text-gray-500 dark:text-white">Message</label>
                <textarea type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="message" required></textarea>
            </div>  
            <div class="flex justify-center">
            <button class="bg-cyan-400 mt-5 hover:bg-sky-100 text-white hover:text-cyan-950 font-bold py-2 px-4 rounded">
            Read More
            </button>
            </div>
        </div>    
    </form>
       
}

export default Contact;