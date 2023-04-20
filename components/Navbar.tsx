import NavbarItem from "./NavbarItem";
import { useCallback, useState, useEffect } from 'react'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'

const TOP_OFFSET = 39

export default function Navbar() {
    const [showBackground, setShowBackground] = useState(false)

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
                    <h1 className="text-center font-mono font-semibold text-4xl px-2 py-6">myFli<span className="text-pink-400">x</span></h1>
                </div>
                <div
                    className="
                        flex-row
                        ml-8
                        gap-7
                        hidden
                        lg:flex
                    "
                >
                    <NavbarItem label="Home" />
                    <NavbarItem label="Random Reccomendation" />
                    <NavbarItem label="About" />
                </div>
            </div>
        </nav>
    )
}