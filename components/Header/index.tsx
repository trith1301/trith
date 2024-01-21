"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

import logo from "@/assets/images/logo.svg"

const Header = () => {
  const [currentRoute, setCurrentRoute] = useState("")
  const [isHideMenu, setIsHideMenu] = useState(true)


  const pathname = usePathname()

  const toggleMenu = () => {
    setIsHideMenu((currentState) => !currentState)
  }

  useEffect(() => {
    let currentRoute = pathname.split("/")[1]
    setCurrentRoute(() => currentRoute)
  }, [])

  return (
    <header className="z-50 sticky top-0 left-0 right-0 bg-white shadow-shadow-0">
      <div className="relative flex items-center justify-between container h-[60px] mx-auto px-6">
        <div className="max-w-[80px]">
          <Link href="/">
            <Image className="w-full" src={logo} alt="Logo" sizes="100vw" />
          </Link>
        </div>
        <div className={"lg:block lg:static lg:bg-none lg:w-[unset] lg:h-[unset] absolute top-full left-0 md:w-screen md:h-screen  w-screen h-screen bg-white" +  (isHideMenu ? " hidden" : "")}>
          <ul className="flex lg:flex-row flex-col gap-x-8">
            <li
              className={
                "text-sm lg:text-left text-center " +
                (currentRoute === "" ? "font-black" : "hover:font-black")
              }
            >
              <Link
                className="lg:inline block lg:w-[unset] w-full lg:h-[unset] h-full lg:py-0 py-4 lg:border-b-0 border-b-[1px] border-b-slate-100 lg:hover:bg-[unset] hover:bg-slate-50"
                href="/"
              >
                About
              </Link>
            </li>
            <li
              className={
                "text-sm lg:text-left text-center " +
                (currentRoute === "contact" ? "font-black" : "hover:font-black")
              }
            >
              <Link
                className="lg:inline block lg:w-[unset] w-full lg:h-[unset] h-full lg:py-0 py-4 lg:border-b-0 border-b-[1px] border-b-slate-100 lg:hover:bg-[unset] hover:bg-slate-50"
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li
              className={
                "text-sm lg:text-left text-center " +
                (currentRoute === "projects"
                  ? "font-black"
                  : "hover:font-black")
              }
            >
              <Link
                className="lg:inline block lg:w-[unset] w-full lg:h-[unset] h-full lg:py-0 py-4 lg:border-b-0 border-b-[1px] border-b-slate-100 lg:hover:bg-[unset] hover:bg-slate-50"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li
              className={
                "text-sm lg:text-left text-center " +
                (currentRoute === "experiences"
                  ? "font-black"
                  : "hover:font-black")
              }
            >
              <Link
                className="lg:inline block lg:w-[unset] w-full lg:h-[unset] h-full lg:py-0 py-4 lg:border-b-0 border-b-[1px] border-b-slate-100 lg:hover:bg-[unset] hover:bg-slate-50"
                href="/experiences"
              >
                Experiences
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={toggleMenu} type="button" className="lg:hidden block">
          {isHideMenu ? (
            <Bars3Icon className="h-6 w-6" />
          ) : (
            <XMarkIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
