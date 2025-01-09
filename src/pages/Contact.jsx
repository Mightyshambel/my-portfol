function Contact() {
  return (
    <div className="p-4 sm:p-8 md:p-16 lg:p-40 bg-zinc-800" data-aos="fade-down" data-aos-duration="1000">
      <form>
        <div className="w-full max-w-lg mx-auto border border-gray-300 p-4 sm:p-6">
          <p className="text-2xl sm:text-3xl text-center text-white mb-6" style={{ fontFamily: 'lora, lora'}}>
            Contact me
          </p>
          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mighty Shambel"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Shambelmighty51@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="message"
              required
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-pink-500 mt-5 hover:bg-sky-100 text-white hover:text-cyan-950 font-bold py-2 px-6 rounded transition-colors duration-300">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
