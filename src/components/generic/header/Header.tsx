import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import AuthButton from './AuthButton';
import { URL_FRONT_HOME } from '../../../utils/urls/urlFront';

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const location = useLocation();

  const navBarComponent = [
    {
      title: 'Concept',
      url: '/about',
    },
    {
      title: 'Archetypes',
      url: '/archetypes',
    },
    {
      title: 'Banlist',
      url: '/banlist',
    },
    {
      title: 'RoadMap',
      url: '/roadmap',
    },
  ];

  const url = location.pathname;

  return (
    <header className="flex flex-col justify-center">
      {/* Desktop View */}
      <nav className="hidden lg:flex flex-row justify-between items-center border-b h-[60px] px-2 w-full m-auto max-w-containerSize">
        <div className="flex flex-row items-center flex-1">
          <Link to={URL_FRONT_HOME} className="block pr-5" aria-label="Accueil">
            <img
              src={`${process.env.PUBLIC_URL || ''}/assets/ab_logo.png`}
              alt="Archetype Battle Logo"
              className="w-1/2"
            />
          </Link>

          <ul className="flex flex-row justify-start px-3 font-bold text-lg">
            {navBarComponent.map(component => {
              const isActive =
                url === component.url ||
                (component.url && url.startsWith(component.url));

              return (
                <li key={component.title}>
                  <Link
                    to={component.url || URL_FRONT_HOME}
                    className={`${
                      isActive ? 'text-red-400' : 'text-gray-600'
                    } pr-8 hover:text-red-400 transition-colors`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {component.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <AuthButton isMobile={false} />
      </nav>

      {/* Mobile and tablet View */}
      <div className="lg:hidden">
        <nav className="flex lg:hidden flex-row justify-between items-center border-b h-[50px] px-2 w-full">
          <Link to={URL_FRONT_HOME} className="block" aria-label="Accueil">
            <img
              src={`${process.env.PUBLIC_URL || ''}/assets/ab_logo.png`}
              alt="Archetype Battle Logo"
              className="w-1/2"
            />
          </Link>

          <button
            className="p-2 text-gray-600 hover:text-red-400 transition-colors"
            onClick={() => setDisplayNav(!displayNav)}
            aria-label={displayNav ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={displayNav}
          >
            {displayNav ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </nav>

        {displayNav && (
          <nav
            className="flex lg:hidden flex-col shadow-md bg-white"
            aria-label="Navigation mobile"
          >
            <ul className="flex flex-col">
              {navBarComponent.map(component => {
                const isActive =
                  url === component.url ||
                  (component.url && url.startsWith(component.url));

                return (
                  <li key={component.title}>
                    <Link
                      to={component.url || '/'}
                      className={`${
                        isActive ? 'text-red-400 bg-red-50' : 'text-gray-600'
                      } my-2 px-4 py-2 hover:text-red-400 hover:bg-red-50 transition-colors block border-t border-gray-200`}
                      onClick={() => setDisplayNav(false)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {component.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="px-4 py-2 border-t border-gray-200">
              <AuthButton isMobile={true} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
