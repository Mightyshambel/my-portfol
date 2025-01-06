
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {

return (
    <div className=" bottom-0 left-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 bg-zinc-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Mighty Shambel © 2024 All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a
                    href="https://www.facebook.com/people/Mightys-Shambel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 me-4 md:me-6"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com/almighty__shambel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 me-4 md:me-6  "
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/mighty-shambel-4410a01b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 me-4 md:me-6"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/Mightyshambel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
        </ul>
    </div>
);
}
export default Footer;
