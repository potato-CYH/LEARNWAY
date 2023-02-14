import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
// import data from "./img/108079-plane-ticket-blue.json"
// import data from "./img/19423-airplane.json"
import data from "./img/Plane.json"
// import Img from "./img/goodBye.png"

const AniImg = styled.div`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    width: 70vw;
    height: 70vh;
    // border:1px solid black;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
`;

const Picture = styled.img`
    height: 23vmax;
    // border:1px solid black;
    display: flex;
    flex-direction: column-reverse;
`;

function SessionEnd(){
    const aniBox = useRef();

    useEffect(()=>{
        lottie.loadAnimation({
            container : aniBox.current,
            renderer : 'svg',
            loop: true,
            autoplay : true,
            animationData : data,
        })

    },[]);

    return(
        <Wrapper>
            <AniImg ref={aniBox}></AniImg>
            {/* <div>
                <Picture src={Img}></Picture>
            </div> */}
        </Wrapper>
    );
};

export default SessionEnd;