import React, { useState, useEffect } from 'react';
import { MoonIcon } from '@heroicons/react/24/solid';
import { SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import Image from 'next/image';

type Props = {};

export default function Navbar({}: Props) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleClick = (e: any) => {
    let destination = e.target.hash;
    let elementDestination = document.querySelector(destination);
    window.scrollTo({
      top: elementDestination.offsetTop - 180,
      behavior: 'smooth',
    });
    setMenuToggle(!menuToggle);
    e.preventDefault();
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav>
      <div className="nav-content">
        <div className="leftSide">
          <a href="#" className="logo">
            Muhammad
          </a>
        </div>
        <div className="rightSide">
          <ul className={menuToggle ? 'active' : ''}>
            <li onClick={(e) => handleClick(e)}>
              <a href="#home">Home</a>
            </li>
            <li onClick={(e) => handleClick(e)}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={(e) => handleClick(e)}>
              <a href="#about">About</a>
            </li>
            <li onClick={(e) => handleClick(e)}>
              <a href="#resume">Resume</a>
            </li>
            <li onClick={(e) => handleClick(e)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="darkMode">
            {!mounted ? null : currentTheme === 'dark' ? (
              <button className="themeModeButton">
                <SunIcon
                  width={28}
                  height={28}
                  onClick={() => setTheme('light')}
                />
              </button>
            ) : (
              <button className="themeModeButton">
                <MoonIcon
                  width={28}
                  height={28}
                  onClick={() => setTheme('dark')}
                />
              </button>
            )}
          </div>
          <div
            className="menuToggle"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <div
              style={{
                display: 'block',
                position: 'relative',
              }}
              className={!menuToggle ? 'bars active' : 'bars'}
            >
              <Image
                src="/images/icons/bars.svg"
                width={30}
                height={30}
                layout="responsive"
                alt="barsIcon"
              />
            </div>
            <div
              style={{
                display: 'block',
                position: 'relative',
              }}
              className={!menuToggle ? 'cross' : 'cross active'}
            >
              <Image
                src="/images/icons/cross.svg"
                width={30}
                height={30}
                layout="responsive"
                alt="crossIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}