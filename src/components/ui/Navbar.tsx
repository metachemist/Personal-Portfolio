"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import StarComponent from "./StarComponent";

const playfair = Playfair_Display({
  weight: ["400", "700", "900"], // Specify the weights you need
  style: ["normal", "italic"], // Define styles if needed
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "700"], // Specify the weights you need
  style: ["normal", "italic"], // Define styles if needed
  subsets: ["latin"], // Add the appropriate subset
  variable: "--font-poppins", // Optional: Use a CSS variable for the font
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`z-50 fixed w-full top-0 transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-baseBrown text-baseGreen shadow-lg h-10"
        : "bg-baseGreen text-baseBeige h-20"
      } ${poppins.className}`}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <div
          className={`flex items-center text-2xl font-bold ${playfair.className}`}
        >
          <span className="mr-2">
            <StarComponent />
          </span>
          Hafsa Shahid
        </div>

        <ul className="flex space-x-10">
          <li>
            <Link href="/HomePage" className="hover:text-yellow-300 transition text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="hover:text-baseYellow transition text-sm"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="/MyProjects"
              className="hover:text-baseYellow transition text-sm"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/GetinTouch"
              className="hover:text-baseYellow transition text-sm"
            >
              <Button>Get in touch!</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
