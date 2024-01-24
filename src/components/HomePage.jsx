import React, {Component, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Col, Container, Row, Image } from 'react-bootstrap';
import "./styles/arrows.css"

import FindMe from './FindMe'

import homeportrait from '../images/homephoto.png'
import arthome from '../images/arthome.jpg'
import projecthome from '../images/projecthome.jpg'
import researchhome from '../images/researchhome.jpg'
import wannabe from '../images/wannabe.png'
import squares from '../images/squares.png'
import slant from '../images/slant.JPG'
import sticker from '../images/sticker.JPG'
import balcony from '../images/italybalcony.JPG'
import mongo from '../images/mongodb.png'
import hcii from '../images/hcii.png'
import chinesesticker from '../images/chinesesticker.jpg'
import angles from '../images/angles.JPG'
import purpleart from '../images/purpleart.JPG'
import tomi from '../images/tomi.JPG'


const Home = styled.div`
    padding: 1em;
    height: 140vh;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const typewriter = keyframes`
    from {
        width: 0;
    }
    to {
        width: 530px;
    }
`
const blinkTextCursor = keyframes`
    from {
        border-right-color: hsl(0, 0%, 90%);
    }
    to {
        border-right-color: transparent;
    }
`

const stopBlink = keyframes`
    from, to {
        border-right: transparent;
    }
`;

const Title = styled.h1`
    overflow: hidden;
    white-space: nowrap;
    opacity: 1;
    position: absolute;
    left: 50%;
    top: 17%;
    transform: translate(-50%, -50%);
    border-right: 2px solid hsl(0, 0%, 90%);
    animation: ${typewriter} 6s steps(44) 1s 1 normal both,
               ${blinkTextCursor} 1s infinite,
               ${stopBlink} 1s 7s 1 normal forwards;
`

const Blob = styled.div`
    width: 500px;
`

const Logo = styled.img`
    width: 6em;
`
const Wrapper = styled.div`
    position: relative;
    height:100%;

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

const ArtHome = styled.img`
    width: 250px;
    transform: translateY(270%) translateX(410%);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.2) translateY(230%) translateX(350%);
    }
`

const ProjectHome = styled.img`
    width: 285px;
    transform: translateY(25%) translateX(310%);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.2) translateY(30%) translateX(260%);
    }
`

const ResearchHome = styled.img`
    width: 285px;
    transform: translateY(-55%) translateX(10%);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.2) translateY(-40%) translateX(10%);
    }
`

function BlobPhoto() {
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
        <Wrapper>
            <Link to="/art"> 
                <ArtHome src={arthome}/>
            </Link>
            <Link to="/projects"> 
                <ProjectHome src={projecthome}/>
            </Link>
            <Link to="/research"> 
                <ResearchHome src={researchhome}/>
            </Link>
            <LayeredElement style={{transform: "translateY(-100%) translateX(63%)"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="240" height="90" viewBox="0 0 240 90" fill="none">
                    <path d="M239.201 26.9797C239.742 26.8689 240.09 26.3404 239.98 25.7994L238.174 16.9823C238.063 16.4413 237.535 16.0925 236.994 16.2032C236.453 16.314 236.104 16.8425 236.215 17.3835L237.82 25.2209L229.982 26.8257C229.441 26.9365 229.092 27.4649 229.203 28.006C229.314 28.547 229.842 28.8958 230.384 28.7851L239.201 26.9797ZM0.868651 88.9913C16.7415 91.0941 31.7188 82.7784 47.0636 70.8098C54.7537 64.8117 62.6013 57.8416 70.7444 50.7135C78.8978 43.5764 87.359 36.2703 96.3179 29.5553C114.238 16.1238 134.074 5.11524 157.236 2.60545C180.376 0.0981297 206.975 6.0589 238.449 26.8346L239.551 25.1654C207.775 4.19107 180.718 -1.95063 157.021 0.617087C133.347 3.18234 113.168 14.4263 95.1184 27.9549C86.0929 34.7199 77.5814 42.0707 69.4271 49.2086C61.2626 56.3555 53.4676 63.2785 45.8336 69.2328C30.53 81.1692 16.1327 88.996 1.13131 87.0086L0.868651 88.9913Z" fill="#909090"/>
                </svg>
            </LayeredElement>
            <LayeredElement style={{transform: "translateY(100%) translateX(73%)"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="212" height="140" viewBox="0 0 212 140" fill="none">
                <path d="M211.973 121.73C212.1 121.193 211.768 120.654 211.23 120.527L202.473 118.453C201.935 118.325 201.396 118.658 201.269 119.195C201.142 119.733 201.474 120.272 202.012 120.399L209.796 122.243L207.953 130.027C207.825 130.565 208.158 131.104 208.695 131.231C209.233 131.358 209.772 131.026 209.899 130.488L211.973 121.73ZM0.368663 1.99135C15.36 3.97735 28.6687 16.7309 42.1271 34.0873C48.8318 42.7339 55.5188 52.4457 62.4362 62.4083C69.3468 72.3611 76.4825 82.5569 84.0592 92.1259C99.1976 111.245 116.195 127.993 136.887 135.35C157.652 142.733 181.953 140.598 211.525 122.351L210.475 120.649C181.297 138.652 157.629 140.602 137.557 133.466C117.414 126.304 100.708 109.93 85.6272 90.8843C78.0944 81.3708 70.9917 71.2234 64.0791 61.2677C57.1732 51.3217 50.452 41.5595 43.7076 32.8617C30.2677 15.5293 16.5142 2.11278 0.631322 0.00866881L0.368663 1.99135Z" fill="#5E5E5E"/>
            </svg>
            </LayeredElement>
            {/* <LayeredElement style={{transform: "translateY(20%) translateX(-160%)"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="206" height="112" viewBox="0 0 206 112" fill="none">
                <path d="M0.697225 105.105C0.29412 104.728 0.273383 104.095 0.650908 103.692L6.80303 97.1227C7.18055 96.7196 7.81338 96.6989 8.21648 97.0764C8.61959 97.4539 8.64032 98.0867 8.2628 98.4898L2.79425 104.329L8.63334 109.797C9.03644 110.175 9.05718 110.808 8.67965 111.211C8.30213 111.614 7.6693 111.635 7.2662 111.257L0.697225 105.105ZM205.247 8.55306C194.953 4.4296 187.271 2.78434 181.301 2.98917C175.378 3.19235 171.101 5.21626 167.568 8.55388C163.995 11.9302 161.156 16.6764 158.201 22.3924C155.271 28.0595 152.218 34.7016 148.276 41.6007C140.35 55.4731 128.71 70.6286 106.457 82.7087C84.2293 94.7754 51.4855 103.734 1.41355 105.375L1.34804 103.376C51.226 101.741 83.6356 92.8221 105.503 80.951C127.346 69.0934 138.745 54.2513 146.54 40.6085C150.458 33.7501 153.436 27.2553 156.425 21.4739C159.388 15.7414 162.356 10.7276 166.195 7.1002C170.075 3.43408 174.814 1.21053 181.232 0.990348C187.602 0.771817 195.583 2.52728 205.991 6.69646L205.247 8.55306Z" fill="#909090"/>
            </svg>
            </LayeredElement> */}
            <LayeredElement style={{transform: "translateY(-90%) translateX(-143%)"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="294" height="137" viewBox="0 0 294 137" fill="none">
                <path d="M1.24398 24.9667C0.710103 24.8253 0.391921 24.2779 0.533304 23.744L2.83728 15.0439C2.97867 14.51 3.52608 14.1918 4.05996 14.3332C4.59384 14.4746 4.91202 15.022 4.77064 15.5559L2.72266 23.2893L10.4561 25.3373C10.99 25.4787 11.3081 26.0261 11.1668 26.56C11.0254 27.0938 10.478 27.412 9.94408 27.2706L1.24398 24.9667ZM293.633 134.491C248.778 140.522 217.958 130.818 194.494 114.254C171.089 97.7333 155.066 74.4206 139.755 53.4649C124.383 32.4256 109.78 13.8477 89.175 6.18731C68.653 -1.44235 41.8906 1.67959 2.00251 24.8646L0.997455 23.1354C41.1093 -0.179606 68.5345 -3.62017 89.8719 4.31267C111.127 12.2148 126.055 31.3244 141.37 52.285C156.746 73.3294 172.568 96.3291 195.647 112.621C218.667 128.87 248.972 138.478 293.367 132.509L293.633 134.491Z" fill="black"/>
            </svg>
            </LayeredElement>
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
            <LayeredElement style={{transform: "translateY(-40%) translateX(-45%)"}}><FeaturedImage src={homeportrait}/></LayeredElement>
        </Wrapper>
    );
}

function Grid() {
    const photoUrls = [
        wannabe,
        chinesesticker,
        slant,
        tomi,
        angles,
        purpleart,
      ];
    return (
        <Container>
            <Row>
                <Col md={5}>
                    <Row>
                        {photoUrls.map((url, index) => (
                        <Col key={index} md={4}>
                            {/* Adjust the width and height of the Image component as needed */}
                            <Image src={url} alt={`Photo ${index + 1}`} fluid />
                        </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={7}>
                {/* Right half of the page - you can add other content here if needed */}
                <h2>... and I like building things!</h2>
                <p>
                    I graduated from the University of Illinois at Urbana-Champaign <b>(UIUC)</b> this <b>December</b> with a degree in <b>Computer Science</b> 💻 <br />
                    <br></br>
                    In recent summers, I've interned as a <b>software engineering intern</b> at: <br /><br />
                    <Row className="d-flex justify-content-center align-items-center">
                            <Logo src={mongo} alt="MongoDB Logo" />
                            <Logo src={hcii} alt="HCII Logo" />
                    </Row>
                    <br></br>
                    Please feel free to reach out to me via {' '}
                    <a href="mailto:rachaelwei@gmail.com" target="_blank" rel="noreferrer">
                        <b>email</b>
                    </a>
                    {' '} or check out my {' '}
                    <a href={`${process.env.PUBLIC_URL}/resume_rachael.pdf`} download="rachael_resume.pdf">
                        <b>resume</b>
                    </a>.
                    <br></br> You can also find me on {' '} 
                    <a href="https://medium.com/@rachaelwei" target="_blank" rel="noreferrer">
                        <b>Medium</b>
                    </a>
                    {','} where I publish articles every week!
                    <br></br>I hope you like your stay here :)
                    <br></br><b>Website under construction! 👷‍♀️</b>
                </p>
                </Col>
            </Row>
        </Container>
    )
}

function HomePage() {
    return (
        <Home>
            <Container>
            <Row style={{"height": "130vh"}}>
                <Title>Hi! My name is Rachael</Title>
                <h1 style ={{"height": "6vh"}}></h1>
                <BlobPhoto/>
            </Row>
            <h1 style ={{"height": "8vh"}}></h1>
            <Row style={{"height": "70vh"}}>
                <Grid />
            </Row>
            </Container>
            <FindMe />
        </Home>
    );
}

export default HomePage;