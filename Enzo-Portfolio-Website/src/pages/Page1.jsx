import React, { useRef, useState } from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const handleMouseMove = (e) => {
    // console.log(tiltRef.current.getBoundingClientRect());

    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        50
    );

    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 25
    );

    // tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
    // console.log(e.clientX, e.clientY);
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );
  return (
    <div
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      className="h-screen p-6  bg-white text-white"
    >
      <div
        id="page1-in"
        className="h-full bg-cover p-10 shadow-2xl shadow-gray-800  bg-no-repeat w-full rounded-[30px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1925,h_1135,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] "
      >
        {/* <div className="h-full bg-cover p-10 shadow-2xl shadow-gray-800  bg-no-repeat w-full rounded-[30px] bg-[url(./assets/Untitled_design.png)] "> */}

        <img
          className=" h-15 ml-4"
          src="https://static.wixstatic.com/media/f1c650_e7181873180d410ba6848efd4e8cc5ef~mv2.png/v1/fill/w_56,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20WHITE_edited.png"
          alt="logo"
        />
        <TiltText tiltRef={tiltRef} />

        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
