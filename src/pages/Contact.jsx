function Contact() {
  return (
    <div className="mb-6 md:grid-cols-2 p-40 bg-zinc-800 " data-aos="fade-down"
    data-aos-duration="1000">
       <form >
      <div className="max-w-lg mx-auto  border border-gray-300 p-6 ">
        <p className="text-3xl text-center text-white" style={{ fontFamily: 'lora, lora'}}>Get to know me</p>
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
          <button className="bg-pink-500 mt-5 hover:bg-sky-100 text-white hover:text-cyan-950 font-bold py-2 px-6 rounded">
            Send
          </button>
        </div>
      </div>
    </form>
    </div>
   
  );
}

export default Contact;
