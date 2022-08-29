import { useState } from "react";
export default function Navbar() {
  return (
    <>
      <header
        className={` fixed bg-white top-0 left-0 w-full flex items-center z-20 shadow-sm`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            {/* LOGO */}
            <div className="px-4">
              <img src="sa.svg" className="w-8 h-8" alt="SA" />
            </div>
            <BurgerButton />
          </div>
        </div>
      </header>
    </>
  );
}

function BurgerButton() {
  const [hamActive, setHamActive] = useState(false);
  return (
    <>
      <div className="flex items-center px-4 ">
        <button
          id="hamburger"
          name="hamburger"
          type="button"
          className={`block absolute right-4  ${
            hamActive ? "hamburger-active" : ""
          } lg:hidden`}
          onClick={() => setHamActive(!hamActive)}
        >
          <span
            className={`hamburger-line  transition duration-300 ease-in-out origin-top-left`}
          ></span>
          <span
            className={`hamburger-line  transition duration-300 ease-in-out`}
          ></span>
          <span
            className={`hamburger-line  transition duration-300 ease-in-out origin-bottom-left`}
          ></span>
        </button>
        <nav
          id="nav-menu"
          className={` absolute ${hamActive ? "" : "hidden"}
            bg-white shadow-lg rounded-lg max-w-[250px] w-full top-full right-8 lg:block lg:static lg:max-w-full lg:bg-transparent lg:shadow-none`}
        >
          <ul className="block lg:flex ">
            <ListItem text="home" />
            <ListItem text="experience" />
            <ListItem text="portfolio" />
            <ListItem text="contact" />
          </ul>
        </nav>
      </div>
    </>
  );
}

function ListItem({ text }) {
  
  return (
    <>
      <li className="group">
        <a
          href={`#${text}`}
          className="flex text-base py-2 mx-8 group-hover:text-primary capitalize"
        >
          {text}
        </a>
      </li>
    </>
  );
}
