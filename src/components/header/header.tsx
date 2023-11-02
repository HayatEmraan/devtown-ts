import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className={`flex-none text-gray-600 dark:text-gray-400 text-2xl font-bold  bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent`}
            aria-label="Brand"
          >
            KiddoCraze
          </a>
          <div className="flex items-center justify-end w-full lg:w-2/5 lg:justify-around">
            <div className="flex sm:hidden">
              <button
                onClick={handleMenu}
                type="button"
                className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <nav className="sm:flex sm:justify-center sm:items-center mt-4 hidden">
            <div className="flex flex-col sm:flex-row">
              <a href="/">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Home
                </a>
              </a>
              <a href="/">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Shop
                </a>
              </a>
              <a href="/">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  About
                </a>
              </a>
            </div>
          </nav>
        </div>
        <nav className={`${menuOpen ? "" : "hidden"} sm:hidden mt-4 `}>
          <div className="flex flex-col sm:flex-row">
            <a href="/">
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                Home
              </a>
            </a>
            <a href="/">
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                Shop
              </a>
            </a>
            <a href="/">
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                About
              </a>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
