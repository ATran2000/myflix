import Link from "next/link";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import { useCallback, useState, useEffect } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const TOP_OFFSET = 30

export default function Navbar() {
    const [showBackground, setShowBackground] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, [])

    return (
        <nav className="w-full fixed z-40">
            <div
                className={`
                    px-4
                    md:px-16
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                    pt-1

                    ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}
                `}
            >
                <div className="text-green-400 hover:text-pink-400 cursor-pointer">
                    <Link href="/"><h1 className="text-center font-mono font-semibold text-4xl px-2 py-6">myFli<span className="text-pink-400">x</span></h1></Link>
                </div>
                <div className="flex-row ml-8 gap-7 hidden md:flex">
                    <Link href="/"> <NavbarItem label="Home" /> </Link>
                    <Link href="/About"> <NavbarItem label="About" /> </Link>
                </div>
                <div onClick={toggleMobileMenu} className="md:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <BsChevronDown className={`text-green-400 transition ${showMobileMenu ? "text-pink-400 rotate-180" : "rotate-0"}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
            </div>
        </nav>
    )
}