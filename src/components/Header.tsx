'use client'

import { useState, useEffect } from "react"
import { TbSquareRoundedLetterMFilled } from "react-icons/tb"
import { Button } from "@/components/ui/buttons"
import { Link } from "react-scroll"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const handleLinkClick = (item: string) => {
    setIsOpen(false)
    // You can add additional logic here if needed
    console.log(`Navigating to ${item}`)
  }

  return (
    <header className="relative z-10 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <TbSquareRoundedLetterMFilled className="w-8 h-8 text-primary-foreground ml-2" />
          </div>
          <h2 className="text-2xl font-bold text-primary ">ohamed Mujtaba</h2>
        </div>
        
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 relative w-10 h-10 text-primary focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav
          className={`fixed top-0 right-0 w-64 h-full bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:h-auto md:w-auto md:shadow-none md:translate-x-0`}
        >
          <ul className="flex flex-col items-start justify-center h-full space-y-8 p-8 md:flex-row md:space-y-0 md:space-x-8 md:p-0">
            {["projects", "skills", "contact"].map((item) => (
              <li key={item} className="w-full md:w-auto">
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start text-lg md:text-base font-medium text-primary hover:text-primary/80 hover:bg-primary/10 transition-colors"
                  onClick={() => handleLinkClick(item)}
                >
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
        )}
      </div>
    </header>
  )
}