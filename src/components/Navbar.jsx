import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navitems = [
    {name : "Items1", href: "#items1"},
    {name : "Items2", href: "#items2"},
    {name : "Items3", href: "#items3"},
    {name : "Items4", href: "#items4"},
    {name : "Items5", href: "#items5"}
]

const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false)
    const handleNav = () => {
        setNavOpen(!navOpen)
    }
    
    return <nav className="text-white fixed w-full">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center h-24 px-8">
            <h1 className="hover:text-blue-300 duration-300 ease-in-out font-extrabold text-3xl">
                <a href="">Logo</a>
            </h1>
            <ul className="hidden space-x-8 md:flex">
                {Navitems.map((items, key) => (
                    <li key={key} className="hover:text-blue-300 duration-300 ease-in-out font-bold">
                        <a href={items.href}>{items.name}</a>
                    </li>
                ))}
            </ul>   
            <div className="block md:hidden" onClick={handleNav}>
                {navOpen ? <AiOutlineClose size={20} className="text-white font-bold"/> : <AiOutlineMenu size={20} className="text-white font-bold"/>}
            </div>
            <div className={navOpen ? "fixed top-0 left-0 w-[60%] h-full bg-black border-r border-r-cyan-400 p-4 duration-500 ease-in-out md:hidden" : "fixed left-[-100%]"}>
                <h1 className="text-xl font-extrabold">Logo</h1>
                <ul className="space-y-5 pt-4">
                    {Navitems.map((items, key) => (
                        <li key={key} className="hover:text-blue-300 duration-300 ease-in-out border-b border-gray-600" onClick={handleNav}>
                            <a href={items.href}>{items.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar;