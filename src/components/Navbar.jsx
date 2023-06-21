import { useState, useEffect, useContext } from 'react';
import Redes from './Redes';
import { logo, close, menu, menuWhite } from '../assets';
import { navLinks } from '../constants';
import { useNavigate, useLocation } from 'react-router-dom';
import NavigationContext from './NavigationContext';

const Navbar = ({ layoutNiveles }) => {
  const [toggle, setToggle] = useState(false);
  const [white, setWhite] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const { setTargetSection } = useContext(NavigationContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 620) {
        setWhite(true);
      } else {
        setWhite(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setImageSrc(toggle ? close : white ? menuWhite : menu);
  }, [toggle, white]);

  const closeNavbar = () => {
    setToggle(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (toggle) {
        setToggle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggle]);

  const navigate = useNavigate();

  const handleNavigation = (sectionId, onClick) => {
    return (event) => {
      event.preventDefault();

      if (onClick) {
        closeNavbar();
      }
      if (location.pathname === '/') {
        setTargetSection(sectionId);
      } else {
        setTargetSection(sectionId);
        navigate('/'); // Redirect to the main page

        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
  };

  return (
    <nav className={toggle ? ' bg-white h-screen' : ''}>
      <div className={`sm:hidden w-full flex flex-col py-8 px-10`}>
        <div className="flex flex-1 items-center justify-between">
          <img
            src={imageSrc}
            alt="menu"
            onClick={() => setToggle((prev) => !prev)}
            className={toggle ? '' : 'mt-[35px]'}
          />
          <img
            src={logo}
            alt="TAE"
            className={`${toggle ? '' : 'hidden'} m-auto`}
          />
          <div className={toggle ? 'hidden' : 'mt-[35px]'}>
            <Redes />
          </div>
        </div>
        <ul className={`mt-10 ${toggle ? '' : 'hidden'}`}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-medium cursor-pointer text-[16px] text-primary flex flex-1 gap-4 mb-8 hover:text-secondary hover:scale-105 duration-300"
            >
              <img src={nav.icon} alt={nav.id} />
              <a onClick={handleNavigation(nav.id, closeNavbar)}>{nav.title}</a>
            </li>
          ))}
          <li>
            <Redes />
          </li>
        </ul>
      </div>

      <div className="sm:flex w-full hidden py-8 px-10 justify-between items-center flex-row">
        <img src={logo} alt="TAE" />
        <ul className="flex flex-row gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-medium cursor-pointer text-[16px] ${
                layoutNiveles ? 'text-primary' : 'text-white'
              } hover:text-secondary hover:scale-105 duration-300`}
            >
              <a onClick={handleNavigation(nav.id)}>{nav.title}</a>
            </li>
          ))}
          <li>
            <Redes white={layoutNiveles ? false : true} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
