"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import logo from "@/assets/images/logos/logo.svg"
import { usePathname } from "next/navigation"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Header = () => {
  const pathname = usePathname()
  const currentRoute = pathname.split("/")[1]

  const [isHideMenu, setIsHideMenu] = useState(true)

  const toggleMenu = () => {
    setIsHideMenu((currentState) => !currentState)
  }

  useEffect(() => {}, [])

  return (
    <header className="z-50 sticky top-0 left-0 right-0 bg-white shadow-shadow-0">
      <div className="relative flex items-center justify-between container h-[60px] mx-auto px-6">
        <div className="max-w-[80px]">
          <Link href="/">
            <Image
              className="w-full"
              priority={true}
              src={logo}
              alt="Logo"
              sizes="100vw"
            />
          </Link>
        </div>

        <div
          className={
            (isHideMenu ? "hidden " : "") +
            "absolute top-full left-1/2 translate-x-[-50%] w-screen h-header-menu bg-white lg:static lg:block lg:translate-x-[unset] lg:bg-none lg:w-[unset] lg:h-[unset]"
          }
        >
          <ul className="flex flex-col gap-x-8 lg:flex-row">
            <li
              className={
                "container mx-auto lg:mx-[unset] text-sm text-left font-black text-black " +
                (currentRoute === "" ? "text-gray-400" : "hover:text-gray-400")
              }
            >
              <Link
                className="lg:inline block lg:w-[unset] w-full lg:h-[unset] h-full lg:py-0 px-6 lg:px-0 py-5 lg:border-b-0 border-b-[1px] border-b-slate-100 lg:hover:bg-[unset] hover:bg-slate-50"
                href="/"
              >
                About
              </Link>
            </li>
            <li
              className={
                "container mx-auto lg:mx-[unset] text-sm text-left font-black " +
                (currentRoute === "projects"
                  ? "text-gray-400"
                  : "hover:text-gray-400")
              }
            >
              <Link
                className="lg:inline block lg:w-[unset] w-full lg:h-[unset] h-full lg:py-0 px-6 lg:px-0 py-5 lg:border-b-0 border-b-[1px] border-b-slate-100 lg:hover:bg-[unset] hover:bg-slate-50"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li
              className={
                "container mx-auto lg:mx-[unset] text-sm text-left font-black " +
                (currentRoute === "exps"
                  ? "text-gray-400"
                  : "hover:text-gray-400")
              }
            >
              <Link
                className="lg:inline block lg:w-[unset] w-full lg:h-[unset] h-full lg:py-0 px-6 lg:px-0 py-5 lg:border-b-0 border-b-[1px] border-b-slate-100 lg:hover:bg-[unset] hover:bg-slate-50"
                href="/exps"
              >
                Experiences
              </Link>
            </li>
          </ul>
        </div>

        <button onClick={toggleMenu} type="button" className="block lg:hidden">
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
