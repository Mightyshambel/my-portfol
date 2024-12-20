

function Footer() {
return (
    <div className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 bg-cyan-950">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Mighty Shambel   © 2024 All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 me-4 md:me-6"
                >
                    <i className="fab fa-facebook-f text-white"></i>
                </a>
            </li>
            <li>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 me-4 md:me-6"
                >
                    <i className="fab fa-twitter text-white"></i>
                </a>
            </li>
            <li>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 me-4 md:me-6"
                >
                    <i className="fab fa-linkedin-in text-white"></i>
                </a>
            </li>
            <li>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400"
                >
                    <i className="fab fa-github text-white"></i>
                </a>
            </li>
        </ul>
    </div>
);
}
export default Footer;
