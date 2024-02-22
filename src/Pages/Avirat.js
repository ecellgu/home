import React, { useEffect, useState, useRef } from "react";
import Divider from "../Components/Divider";
import visitor from "../Assets/visitors.png";
import exhibitor from "../Assets/exhibitor.png";
import sponsor from "../Assets/investor.png";
import media from "../Assets/media.png";
import networking from "../Assets/networking.png";
import explore from "../Assets/explore.png";
import inspired from "../Assets/inspired.png";
import growth from "../Assets/growth.png";
import last_video from "../Assets/l_component.mp4";
import launchpad from "../Assets/launchpad-2.png";
import ProfileCard from "../Components/ProfileCard";
import memberAthrav from "../Assets/member-3.png";
import memberVishal from "../Assets/member-4.png";
import memberShreyansh from "../Assets/member-5.png";
import memberVansh from "../Assets/member-6.png";
import memberSaksham from "../Assets/member-11.png";
import memberAastha from "../Assets/aastha.png";
import memberNishant from "../Assets/nishant.png";
import memberAnshu from "../Assets/anshu.png";
import memberAyush from "../Assets/ayush.png";
import memberShivansh from "../Assets/shivansh.png";
import memberAbhinna from "../Assets/abhinna.png";
import memberAvanya from "../Assets/avanya.png";
import dummy from "../Assets/blank.png";
import Fade from "react-reveal/Fade";
import MoE from "../Assets/Launchpad/MoE.svg";
import MoSDE from "../Assets/Launchpad/MoSDE.svg";
import NITI from "../Assets/Launchpad/NITI.svg";
import UPS from "../Assets/Launchpad/UPS.svg";
import backgroundImage from "../Assets/Launchpad/bg-why.png";

import { Link } from "react-router-dom";
import Event from "../Components/Event";

export default function Avirat() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const sectionRef = useRef();
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    function counter(id, start, end, duration, updateFunction) {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(duration / range));

      function updateCount() {
        if (current !== end) {
          current += increment;
          updateFunction(current);
          requestAnimationFrame(updateCount);
        }
      }
      updateCount();
    }

    if (sectionVisible) {
      counter("count1", 0, 200, 1000, setCount1);
      counter("count2", 0, 300, 1000, setCount2);
      counter("count3", 0, 100, 1000, setCount3);
    }
  }, [sectionVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-100% h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" inset-0 w-full h-screen object-cover"
        >
          <source
            src="https://ik.imagekit.io/xzx78nph7/Avirat-intro.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-50 z-10">
          <img src="/galgotaisLogo.png" alt="" className="z-10" />
          <div className="font-montserrat font-extrabold text-white text-2xl ls:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            The <span className="text-orange-500">Entrepreneurship</span> Cell
          </div>
          <span className="font-montserrat font-semibold text-white text-3xl">
            presents
          </span>
          <img src="/Avirat/text-avirat.png" alt="" />
          <div className="font-montserrat font-extrabold text-orange-500 text-5xl ">
            <img src={launchpad} />
          </div>
          <span className="font-montserrat font-extrabold text-white text-3xl">
            Largest Entrepreneurship Summit of North India!
          </span>
        </div>
      </div>

      <div
        className=" items-center justify-center  fc fcc gap-10 lg:gap-20 text-orange-500 text-6xl p-5 font-extrabold bg-white flex flex-col md:flex-row"
        ref={sectionRef}
      >
        <img src={MoE} width={200} height={200} />
        <img src={MoSDE} width={200} height={200} />
        <img src={NITI} width={200} height={200} />
        <img src={UPS} width={200} height={200} />
      </div>

      {/* Secion 2 */}

      <div
        className=" items-center justify-center  fc fcc gap-10 lg:gap-40 text-orange-500 text-6xl p-5 font-extrabold bg-white flex flex-col md:flex-row"
        ref={sectionRef}
      >
        <div className="   font-Poppins leading-[0.8em]">
          {count1}+
          <br />
          <span className="text-[0.5em] font-bold font-Plus Jakarta Sans leading-relaxed">
            Startups
          </span>
        </div>
        <div className="  font-Poppins leading-[0.8em]">
          {count2}+
          <br />
          <span className="text-[0.5em] font-bold  font-Plus Jakarta Sans leading-relaxed">
            Colleges
          </span>
        </div>
        <div className=" font-Poppins leading-[0.8em]">
          {count3}+
          <br />
          <span className="text-[0.5em] font-bold font-Plus Jakarta Sans leading-relaxed">
            Business Leaders
          </span>
        </div>
      </div>

      {/* Registration */}
      <Divider heading="Registration" />

      <div className="flex flex-wrap justify-center bg-white lg:pl-32 lg:pr-32 pt-10 pb-20 lg:gap-0 gap-20">
        <div className="w-full  md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-gray-300 w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
            <img src={sponsor} width={100} height={100} />
          </div>
          <span className="w-full p-4 text-center text-black font-extrabold  text-3xl">
            EXHIBITOR
          </span>
          <span className="w-full  text-center text-gray-600 font-semibold text-2xl">
            Exhibit at Business India Expo 2023
          </span>
          <Link
            to="#"
            className="w-[70%] text-white bg-gray-600 mt-5 rounded p-2 text-2xl font-bold"
          >
            Register
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-gray-300 w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
            <img src={sponsor} width={100} height={100} />
          </div>
          <span className="w-full  p-4 text-center text-black font-extrabold text-3xl">
            SPONSORSHIP
          </span>
          <span className="w-full  text-center text-gray-600 font-semibold text-2xl">
            Exhibit at Business India Expo 2023
          </span>
          <Link
            to="#"
            className="w-[70%] text-white bg-gray-600 mt-5 rounded p-2 text-2xl font-bold"
          >
            Register
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-gray-300 w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
            <img src={visitor} width={100} height={100} />
          </div>
          <span className="w-full p-4 text-center text-black font-extrabold text-3xl">
            VISITOR
          </span>
          <span className="w-full  text-center text-gray-600 font-semibold text-2xl">
            Exhibit at Business India Expo 2023
          </span>
          <Link
            to="#"
            className="w-[70%] text-white bg-gray-600 mt-5 rounded p-2 text-2xl font-bold"
          >
            Register
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-gray-300 w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
            <img src={media} width={100} height={100} />
          </div>
          <span className="w-full  p-4 text-center text-black font-extrabold text-3xl">
            MEDIA
          </span>
          <span className="w-full  text-center text-gray-600 font-semibold text-2xl">
            Exhibit at Business India Expo 2023
          </span>
          <Link
            to="#"
            className="w-[70%] text-white bg-gray-600 mt-5 rounded p-2 text-2xl font-bold"
          >
            Register
          </Link>
        </div>
      </div>

      {/* why participate */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Participate?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div
              className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat rounded-md overflow-hidden"
              style={{
                backgroundImage: 'url("../Assets/Launchpad/bg-why.png")',
              }}
            >
              <div className="bg-rose-600 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-2">
                {/* You can add an image here */}
              </div>
              <hr className="w-20 h-1 mx-auto bg-white border-0 rounded" />
              <span className="w-full p-4 text-center text-white font-extrabold text-2xl">
                Promoting Entrepreneurship and Innovation
              </span>
            </div>

            {/* Repeat similar structure for other reasons to participate */}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <Divider heading="Why Participate" />
      <section
        className="py-12"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {/* Benefit 1 */}
            <div className="p-6 bg-gray-100 bg-opacity-30 rounded-lg shadow-lg   ">
              <h3 className="text-3xl font-bold text-black mb-4">
                Promoting Entrepreneurship and Innovation
              </h3>
              <p className="text-black text-xl">
                A platform for budding entrepreneurs to showcase their
                innovative ideas and startup ventures to potential investors,
                mentors, and customers.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 bg-gray-100 bg-opacity-30 rounded-lg shadow-lg">
              <h3 className="text-3xl  font-bold text-black mb-4">
                Networking and Learning
              </h3>
              <p className="text-black text-xl">
                The event typically features a variety of activities, including
                keynote speeches by successful entrepreneurs, panel discussions,
                networking sessions, and startup pitches.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 bg-gray-100 bg-opacity-30 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-black mb-4">
                Showcasing Your Startup
              </h3>
              <p className="text-black text-xl">
                Opportunities for startups to exhibit their products and
                services to a diverse audience of investors, potential
                customers, and collaborators.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-center  lg:pl-32 lg:pr-32 pt-10 pb-20 bg-white">
        <div className="w-full  md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-white w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
            <img src={networking} width={100} height={100} />
          </div>

          <span className="w-full p-4 text-center text-black font-bold  text-2xl">
            NETWORKING
          </span>
          <span className="w-full  text-center text-black  text-2xl">
            Exhibit at Business India Expo 2023
          </span>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-white w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
            <img src={growth} width={100} height={100} />
          </div>

          <span className="w-full p-4 text-center text-black font-bold  text-2xl">
            BUISINESS GROWTH
          </span>
          <span className="w-full  text-center text-black text-2xl">
            Exhibit at Business India Expo 2023
          </span>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-white w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
            <img src={inspired} width={100} height={100} />
          </div>
          <span className="w-full p-4 text-center text-black font-bold  text-2xl">
            GET INSPIRED
          </span>
          <span className="w-full  text-center text-black  text-2xl">
            Exhibit at Business India Expo 2023
          </span>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-white w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
            <img src={explore} width={100} height={100} />
          </div>
          <span className="w-full p-4 text-center text-black font-bold  text-2xl">
            EXPLORE
          </span>
          <span className="w-full  text-center text-black  text-2xl">
            Exhibit at Business India Expo 2023
          </span>
        </div>
      </div>

      {/* Events */}

      <Divider heading="Events" />

      <div
        className="flex flex-wrap justify-center  lg:pl-32 lg:pr-32 pt-10 pb-20 lg:gap-0 gap-20    bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full  md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-rose-600 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-2">
            {/* <img src={sponsor} width={100} height={100} /> */}
          </div>
          <hr class="w-20 h-1 mx-auto bg-white border-0 rounded  " />
          <span className="w-full p-4 text-center text-white font-extrabold text-2xl">
            Startup Expo
          </span>
        </div>
        <div className="w-full  md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-rose-600 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-2">
            {/* <img src={sponsor} width={100} height={100} /> */}
          </div>
          <hr class="w-20 h-1 mx-auto bg-white border-0 rounded  " />
          <span className="w-full p-4 text-center text-white font-extrabold  text-2xl">
            Ideathon
          </span>
        </div>
        <div className="w-full  md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-rose-600 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center  mb-2">
            {/* <img src={sponsor} width={100} height={100} /> */}
          </div>
          <hr class="w-20 h-1 mx-auto bg-white border-0 rounded  " />
          <span className="w-full p-4 text-center text-white font-extrabold  text-2xl">
            Speaker Session
          </span>
        </div>
        <div className="w-full  md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-rose-600 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-2">
            {/* <img src={sponsor} width={100} height={100} /> */}
          </div>
          <hr class="w-20 h-1 mx-auto bg-white border-0 rounded  " />
          <span className="w-full p-4 text-center text-white font-extrabold  text-2xl">
            VC Invester Session
          </span>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-rose-600 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-2">
            {/* <img src={sponsor} width={100} height={100} /> */}
          </div>
          <hr class="w-20 h-1 mx-auto bg-white border-0 rounded  " />
          <span className="w-full  p-4 text-center text-white font-extrabold text-2xl">
            Recreation Activity
          </span>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-rose-600 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-2">
            {/* <img src={visitor} width={100} height={100} /> */}
          </div>
          <hr class="w-20 h-1 mx-auto bg-white border-0 rounded  " />
          <span className="w-full p-4 text-center text-white font-extrabold text-2xl">
            Pannel Discussion
          </span>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col items-center justify-center">
          <div className="bg-rose-600 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-2">
            {/* <img src={media} width={100} height={100} /> */}
          </div>
          <hr class="w-20 h-1 mx-auto bg-white border-0 rounded  " />
          <span className="w-full  p-4 text-center text-white font-extrabold text-2xl">
            Media
          </span>
        </div>
      </div>

      {/* previous ->launchpad */}
      <Divider heading=" A Recap of Our Previous Launchpad" />
      <div className="w-[90%] mx-auto my-36">
        <Event
          eventTitle="Launch Pad"
          eventDesc="Launchpad , an event that would spark innovation and creativity by bringing together founders, budding entrepreneurs, mentors, and industry leaders. It is going to be an official event series hosted by Entrepreneurship Cell, Galgotias University. It will be a 24-hour hackathon where people will get together to solve problems or create new ideas around a specific topic. There will be certain rules that everyone needs to follow while developing their product. There will also be a jury who will evaluate the final product.
                    North- India’s Biggest Student Start-up & Entrepreneurship Event of 2023, 2 Day event on campus."
          paraTwo="Launchpad, would start by a speaker session which would act as a fuel in the minds of the budding entrepreneurs. The Speaker would be a renowned founder from the start-up ecosystem."
          isOpp={false}
          // bgImg={launchPadBg}
          // extendDescWidth={true}
          // isCentered={true}
          link="https://www.ecellgu.in/launchpad"
          // imgOne={pitch1}
          // imgTwo={pitch2}
          // imgThree={pitch3}
        />
      </div>

      {/* Team */}

      <Divider heading="Team E-Cell" />
      <div className="w-screen pb-20 mb-40 bg-gray-300" id="Team">
        <div className="flex flex-col gap-y-24  w-[80%] mx-auto text-black font-bold">
          {/* <div className="flex lg:flex-row flex-col gap-40 items-center justify-center mb-40"> */}
          {/* <div>
              <p className="text-md lg:text-xl text-[#f9c922] py-5">
                <i>Under the guidance of</i>
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[60%] mx-auto">
                <Fade bottom>
                  <ProfileCard
                    img={Aradhana}
                    name={"Aradhana Galgotia"}
                    role={""}
                    linkedinLink={
                      "https://www.linkedin.com/in/ananya-goswami-3a3702106/"
                    }
                    instaLink={
                      "https://instagram.com/ananyadolly?igshid=YmMyMTA2M2Y="
                    }
                  />
                </Fade>
              </div>
            </div>

            <div>
              <p className="text-md lg:text-xl  text-[#f9c922] py-5">
                <i>Under the mentorship of</i>
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[60%] mx-auto">
                <Fade bottom>
                  <ProfileCard
                    img={Raj}
                    name={"Raj Singh Bhati"}
                    role={""}
                    linkedinLink={
                      "https://www.linkedin.com/in/tushar-asthana2402/"
                    }
                    instaLink={
                      "https://instagram.com/tushar.asthana_?igshid=YmMyMTA2M2Y="
                    }
                  />
                </Fade>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[60%] mx-auto mb-40 mt-10 ">
            <Fade bottom>
              <div className="">
                <ProfileCard
                  img={memberVishal}
                  name={"Vishal Diavisine"}
                  role={"President"}
                  className="w-10 "
                />
              </div>
            </Fade>

            <Fade bottom>
              <ProfileCard
                img={memberSaksham}
                name={"Saksham Chawla"}
                role={"Vice President"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAthrav}
                name={"Atharva Srivastava"}
                role={"Secretary"}
              />
            </Fade>

            <Fade bottom>
              <ProfileCard
                img={memberVansh}
                name={"Vansh Taneja"}
                role={"Treasurer"}
              />
            </Fade>
          </div>

          <div className="flex flex-col lg:gap-4 gap-10 sm:flex-row justify-around items-center md:w-[90%] mx-auto ">
            <Fade bottom>
              <ProfileCard
                img={memberShivansh}
                name={"Shivansh Srivastava"}
                role={"Startup Development Head"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberNishant}
                name="Nishant Srivastava"
                role="Technical Head"
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAvanya}
                name={"Avanya Tyagi"}
                role="Public Relations Head"
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAnshu}
                name={"Anshu Raj"}
                role="Digital Media & Promotions Head"
              />
            </Fade>
          </div>
          <div className="flex flex-col lg:gap-4 gap-10 sm:flex-row justify-around items-center md:w-[90%] mx-auto">
            <Fade bottom>
              <ProfileCard
                img={memberAastha}
                name={"Aastha Bajaj"}
                role="Marketing Head"
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAyush}
                name={"Ayush Gupta"}
                role={"Ambassador Head"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAbhinna}
                name={"Abhinna Chaudhary"}
                role="Event Management Head"
              />
            </Fade>
          </div>
        </div>
      </div>

      {/* Register now */}

      <div className="relative h-screen">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 mb-64">
          <h1 className="text-5xl text-orange-500 font-extrabold mb-10 ">
            CHANCE TO FIND YOUR
          </h1>
          <Link
            to="#"
            className="bg-orange-400   text-white mb-40 bg-gray-600 mt-5 rounded-3xl pl-20 pr-20 p-2 text-2xl "
          >
            Register
          </Link>
        </div>
        <video autoPlay loop muted className="w-full h-1/2 object-cover">
          <source src={last_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
