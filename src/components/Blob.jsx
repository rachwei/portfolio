import React from 'react';
import { useSpring, animated } from 'react-spring'
import styled, { keyframes } from 'styled-components'
import homeportrait from '../images/homephoto.png'

const Blob = styled.div`
    width: 500px;
`

const LayeredElement = styled.div`
    opacity: 1;
    position: absolute;
    top:50%;
    left:50%;
    transform:translateY(-50%) translateX(-50%);
`
const FeaturedImage = styled.img `
    width: 250px;
    border-radius: 100%
`

const BlobView = () => {
    const redblob1 = "M49.5 -53.5C60.9 -38.2 64.4 -19.1 64.2 -0.2C64 18.6 59.9 37.2 48.6 46.8C37.2 56.4 18.6 57 1.1 55.9C-16.5 54.8 -33 52.2 -52.2 42.6C-71.3 33 -93.2 16.5 -94.2 -1.1C-95.3 -18.6 -75.6 -37.2 -56.4 -52.6C-37.2 -67.9 -18.6 -80 0.2 -80.2C19.1 -80.4 38.2 -68.9 49.5 -53.5"
    const redblob2 = "M47.3 -55.4C56.9 -37.7 57.2 -18.9 57.2 0C57.2 18.9 56.9 37.7 47.3 51.5C37.7 65.4 18.9 74.2 -1.8 76C-22.4 77.7 -44.8 72.5 -64 58.6C-83.1 44.8 -99.1 22.4 -96.2 2.8C-93.4 -16.7 -71.8 -33.5 -52.6 -51.1C-33.5 -68.8 -16.7 -87.4 1.1 -88.5C18.9 -89.5 37.7 -73 47.3 -55.4"//"M47.5,-58.1C61.4,-44.9,72.6,-29.8,77.3,-12.3C82,5.3,80.2,25.3,69.2,35.7C58.1,46.2,37.8,47,21.6,48C5.4,48.9,-6.6,50,-20.4,48.3C-34.2,46.7,-49.9,42.3,-58.1,31.7C-66.3,21.2,-67.1,4.6,-59.7,-5.9C-52.4,-16.4,-36.8,-20.9,-25.5,-34.5C-14.2,-48.2,-7.1,-71,4.8,-76.8C16.8,-82.6,33.5,-71.3,47.5,-58.1Z"
    const redblob3 = "M54.4 -59C64 -44.8 60.7 -22.4 63.1 2.4C65.4 27.1 73.4 54.2 63.8 65.7C54.2 77.2 27.1 73.1 5.3 67.8C-16.5 62.5 -33 56 -46.5 44.5C-60 33 -70.5 16.5 -71.4 -0.9C-72.4 -18.4 -63.8 -36.8 -50.3 -50.9C-36.8 -65.1 -18.4 -75.1 2 -77.1C22.4 -79.1 44.8 -73.1 54.4 -59"//"M47 -42C66.1 -27.8 90.6 -13.9 90.4 -0.2C90.2 13.6 65.4 27.1 46.3 41.6C27.1 56.1 13.6 71.6 -4.1 75.6C-21.7 79.7 -43.4 72.4 -59.5 57.9C-75.7 43.4 -86.4 21.7 -83.4 2.9C-80.5 -15.8 -63.9 -31.6 -47.8 -45.8C-31.6 -59.9 -15.8 -72.5 -0.9 -71.5C13.9 -70.6 27.8 -56.1 47 -42"

    const blobAnimation = useSpring({
        from: { x: redblob1},
        to: [
            { x: redblob2, config: { duration: 4000 } },
            { x: redblob3, config: { duration: 4000 } },
            { x: redblob1, config: { duration: 4000 } },
        ],
        loop: true,
    })

    return (
    <div>
        <LayeredElement style={{transform: "translateY(-40%) translateX(-55%)"}}>
            <Blob>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
                    <animated.path fill="#ffd5d5" d={blobAnimation.x} transform="translate(115 105)"/>
                </svg>
            </Blob>
        </LayeredElement>
        <LayeredElement style={{transform: "translateY(-40%) translateX(-70%)"}}>
            <Blob> 
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFBD4" d="M48.7,-24.1C50.3,-10.9,29.9,1.1,13.8,10.9C-2.3,20.7,-14.2,28.2,-25.9,22.7C-37.7,17.2,-49.4,-1.3,-45.1,-18.2C-40.8,-35.1,-20.4,-50.4,1.6,-50.9C23.6,-51.4,47.1,-37.2,48.7,-24.1Z" transform="translate(100 100)" />
                </svg>
            </Blob>
        </LayeredElement>
        <LayeredElement style={{transform: "translateY(-40%) translateX(-45%)"}}>
            <FeaturedImage src={homeportrait}/>
        </LayeredElement>
    </div>
    );
};

export default BlobView;