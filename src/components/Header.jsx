"use client"
import Link from "next/link";
import { useState } from "react";


const Header = () => {
    const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

    return ( 
        <header className="sticky bg-black flex place-content-between p-5">
           <Link href="/">REWU</Link>
            <nav className="bg-black flex items-end">
                <div className="w-8 h-5 cursor-pointer m-4 bg-black" onClick={() => setIsMenuDisplayed(!isMenuDisplayed)}>
                <div
            className={`w-full h-0.5 bg-offwhite transition-all duration-200 ease-linear transfrom ${
              isMenuDisplayed ? "rotate-45  translate-y-0.5" : "mb-1.5"
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-offwhite  transition-all duration-150 ease-linear ${
              isMenuDisplayed ? "opacity-0 " : "opacity-100 mb-1.5"
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-offwhite  transition-all duration-200 ease-linear transform ${
              isMenuDisplayed ? "-rotate-45 translate-y--0.5 " : "mb-1.5"
            }`}
          ></div>
                </div>
                {isMenuDisplayed && (
                <ul className="flex flex-col items-end absolute top-full left-0 z-100 min-h-screen w-screen p-5 bg-black text-3xl">
                    <li> <Link href="/">Home.</Link></li>
                    <li> <Link href="/LineUp">Line Up.</Link></li>
                </ul>
                )}
            </nav>
        </header>
     );
}
 
export default Header;