import React from 'react'
import closeBtn from "../Assets/closeBtn.svg"


const SideNavbar = ({ sideNav, setSideNav }) => {
    return (
        <div className={`h-[9999px] z-50 absolute top-0 right-0  ${sideNav ? "translate-x-0" : "translate-x-full "}  w-full h-screen ease-in-out duration-300 bg-[#1E1E1E]`}>
            <div className='z-10 absolute top-9 right-6 md:top-10 md:right-20 cursor-pointer' onClick={() => setSideNav(!sideNav)}>
                <img src={closeBtn} alt="CloseBtn" />
            </div>
            <ul className='mt-28 flex flex-col items-center gap-y-7 h-[60%]'>
                <li className='text-3xl uppercase font-bold'>
                    <a className="text-[#F9C922]" href="#Home" onClick={() => setSideNav(!sideNav)}>Home</a>
                </li>
                <li className='text-3xl uppercase font-bold'>
                    <a style={{
                        color: "#fff",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStrokeWidth: ".5px"
                    }}
                        href="#About" onClick={() => setSideNav(!sideNav)}>About</a>
                </li>
                <li className='text-3xl uppercase font-bold'>
                    <a style={{
                        color: "#fff",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStrokeWidth: ".5px"
                    }}
                        href="#Events" onClick={() => setSideNav(!sideNav)}>Our Events</a>
                </li>
                <li className='text-3xl uppercase font-bold'>
                    <a style={{
                        color: "#fff",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStrokeWidth: ".5px"
                    }}
                        href="#Team" onClick={() => setSideNav(!sideNav)}>Our Team</a>
                </li>
                {/*<li className='text-3xl uppercase font-bold'>
                    <a style={{
                        color:"#fff",
                        WebkitTextFillColor : "transparent",
                        WebkitTextStrokeWidth :".5px"
                    }} 
                    href="#Contact" onClick={() => setSideNav(!sideNav)}>Contact us</a>
                </li>*/}
            </ul>

        </div>
    )
}

export default SideNavbar