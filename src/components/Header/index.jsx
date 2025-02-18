import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-white border-b border-gray-950/5 dark:border-white/10 py-3 lg:py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">REACT LIST</h1>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className={`font-semibold hover:!text-yellow-800 ${activeLink === '/' ? 'text-yellow-800' : ''}`}
              onClick={() => handleLinkClick('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`font-semibold hover:!text-yellow-800 ${activeLink === '/about' ? 'text-yellow-800' : ''}`}
              onClick={() => handleLinkClick('/about')}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
