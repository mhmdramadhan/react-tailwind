import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [collapse, setCollapse] = useState('hidden');
  const activeMenu = ({ isActive }) => (isActive ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-white': 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-500 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent');

  const toggleCollapse = () => {
    const check = collapse;
    if (check === 'hidden') {
      setCollapse('show');
    } else {
      setCollapse('hidden');
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-full flex flex-wrap items-center justify-around  p-4">
        <a className="flex items-center">
          <img
            src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            className="h-8 mr-3"
          />
          <span className="text-center font-bold whitespace-nowrap dark:text-white">
            Muhammad Ramadhan
          </span>
        </a>
        <button
          coll="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleCollapse}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={collapse + ' w-full md:block md:w-auto'}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className={activeMenu}>
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to="/tentang" className={activeMenu}>
                Tentang
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='hidden xl:block md:block'>
          <button className='text-white bg-red-500 shadow-lg p-2 rounded-md font-medium'>Hubungi Saya</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
