import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdDarkMode, MdLightMode, MdVideogameAsset, MdGamepad, MdDangerous } from "react-icons/md";
import { TbHandLoveYou } from 'react-icons/tb';
import { BsFire } from 'react-icons/bs';
import { Link } from 'react-scroll';
import useToggle from '../customHooks/useToggle';

const icons = [<MdVideogameAsset />, <MdGamepad />, <MdDangerous />, <TbHandLoveYou />, <BsFire />];

export default function Navbar({ showIcons, setShowIcons }) {
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  // const [showIcons, setShowIcons] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    let intervalId;

    if (showIcons) {
      intervalId = setInterval(() => {
        setCurrentIcon((prevIcon) => (prevIcon + 1) % icons.length);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [showIcons]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClickCount(0);
    }, 5000);

    return () => clearTimeout(timer);
  }, [clickCount]);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount === 3) {
      setShowIcons(false);
      setClickCount(0);
      // return 0;
      return;
    } else if (clickCount === 2) {
      setShowIcons(true);
    }
    console.log(clickCount);
    // return clickCount
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#17191A] text-[#E5E5E5]'>
      <div
        onClick={handleClick}
        className={`font-bold text-2xl font-sans`}
      >
        {showIcons ? icons[currentIcon] : 'SK'}
      </div>
      {/* Menü für die Navigation */}
      {!showIcons && (
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500} className='px-4 py-4 rounded-md hover:bg-[#0099CC]'>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500} className='px-4 py-4 rounded-md hover:bg-[#0099CC]'>
              About
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500} className='px-4 py-4 rounded-md hover:bg-[#0099CC]'>
              Skills
            </Link>
          </li>
          <li>
            <Link to='resume' smooth={true} duration={500} className='px-4 py-4 rounded-md hover:bg-[#0099CC]'>
              Resume
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500} className='px-4 py-4 rounded-md hover:bg-[#0099CC]'>
              Contact
            </Link>
          </li>
        </ul>
      )}
      {/* Links zu externen Seiten */}
      <div className='hidden lg:flex fixed flex-col top-[20%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#525151]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/cesc-33' target='_blank' rel="noopener noreferrer">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0099CC]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='mailto:sample@mail.com?subject=Kontakt via Portfolio'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li onClick={toggleDarkMode} className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#525151] cursor-pointer'>
            <div className='flex justify-between items-center w-full text-gray-300'>
              Theme {isDarkMode ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
