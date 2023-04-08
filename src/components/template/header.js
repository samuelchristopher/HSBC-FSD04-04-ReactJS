// import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    function handleClick() {
      const menu = document.querySelector('.mobile-menu');

      menu.classList.toggle('hidden');
    }

    window.document
      .querySelector('button.mobile-menu-button')
      .addEventListener('click', handleClick);
    return () =>
      window.document
        .querySelector('button.mobile-menu-button')
        .removeEventListener('click', handleClick);
  }, []);
  return (
    <header>
      {/* <!-- navbar goes here --> */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-4">
              {/* <!-- primary nav --> */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Beranda
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Kontak
                </a>
              </div>
            </div>

            {/* <!-- mobile button goes here --> */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div className="flex justify-center">
          <div className="mobile-menu hidden md:hidden">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Beranda
            </a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Portfolio
            </a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Kontak
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
