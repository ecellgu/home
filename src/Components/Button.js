import React from 'react'

const Button = ({ title, link, marginTop, hideOnSmall }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" class={`${hideOnSmall ? "hidden" : "block"} md:block relative items-center justify-center overflow-hidden font-medium bg-gradient-to-r from-[#F9C922] via-red-500 to-[#F92222] rounded-lg shadow-2xl group p-[1.5px] ${"mt-"+marginTop}`}>
            <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-yellow-500 rounded-full blur-md ease"></span>
            <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-yellow-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#F92222] rounded-full blur-md"></span>
            </span>
            <div class="relative bg-[#2E1105] text-yellow-500 w-full h-full px-4 py-2 rounded-md font-semibold ">{title}</div>
        </a>
    )
}

export default Button