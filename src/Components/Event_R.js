import React from 'react'
import Button from './Button'

const EventR = ({ eventTitle, eventDesc, imgOne, imgTwo, imgThree, isOpp, bgImg, extendDescWidth, paraTwo,isCentered,link }) => {
    return (
        <div className={`mt-16 md:mt-8  flex flex-col-reverse sm:flex-row justify-start items-start ${bgImg ? "launch" : ""}`}>
             {imgOne && imgTwo && imgThree && !extendDescWidth && <div className="grid grid-cols-2 lg:mr-20">
                <div className={!isOpp ? "row-span-2" : ""}><div className='overflow-hidden'>
                    <img src={imgOne} alt="eventImg" className={`${!isOpp ? "sm:mt-24" : ""} scale-95 hover:scale-100 transition-all delay-75 ease-in-out w-[400px]`} />
                </div></div>
                <div className={isOpp ? "row-span-2" : ""}><div className='overflow-hidden'>
                    <img src={imgTwo} alt="eventImg" className={`${isOpp ? "sm:mt-24" : ""} scale-95 hover:scale-100 transition-all delay-75 ease-in-out  w-[400px]`} />
                </div></div>
                <div className="hidden sm:block"><div className='overflow-hidden'>
                    <img src={imgThree} alt="eventImg" className='scale-95 hover:scale-100 transition-all delay-75 ease-in-out  w-[400px]' />
                </div></div>
            </div>}
            <div className={`w-full sm:w-8/12 md:w-11/12 lg:w-7/12 mb-4 flex flex-col items-start ${isCentered ? "pt-24" : ""}`}>
                <p className='text-[#f9c922] text-left text-3xl font-semibold my-4 mt-7 md:mt-0'>{eventTitle}</p>
                <p className={`text-left  text-lg sm:text-md lg:text-xl font-light ${extendDescWidth ? "w-[92%] lg:w-[80%]" : "pr-6"} w-full`}>{eventDesc}</p>
                <br />
                <p className={`text-left  text-lg sm:text-md lg:text-xl font-light  ${extendDescWidth ? "w-[92%] lg:w-[900px]" : "pr-6"} `}>{paraTwo}</p>
                <Button title={"Know More"} link={link} marginTop={5} hideOnSmall={false} />
            </div>

           
        </div>
    )
}

export default EventR