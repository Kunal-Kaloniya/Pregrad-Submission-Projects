import React from "react";

const TiltText = (props) => {
    return (
        <div id="tiltref" className="mt-40" ref={props.tiltRef}>
            <h1 className="text-[4.2vw] leading-[4vw] uppercase font-bold ">
                I am <span className="text-black">DARK MODE</span>™
            </h1>
            <h1 className="text-[7vw] leading-[7vw] uppercase font-bold ">
                DESIGNER
            </h1>
            <h1 className="text-[4.2vw] leading-[4vw] uppercase font-bold">
                TO HIRE
            </h1>
        </div>
    );
};

export default TiltText;
