import React, {Component, useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Projects from './Projects'
import ResearchProjects from './ResearchProjects';

const ResearchPage = styled.div`
    padding: 2em;
    height: 200vh;
    margin-top: 5em;
    width: 100%;
`

const typewriter = keyframes`
    from {
        width: 0;
    }
    to {
        width: 675px;
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
    font-size: 25px;
    font-weight: bold;
    border-right: 2px solid hsl(0, 0%, 90%);
    animation: ${typewriter} 6s steps(44) 1s 1 normal both,
               ${blinkTextCursor} 1s infinite,
               ${stopBlink} 1s 7s 1 normal forwards;
`

const Subtitle = styled.p`
    font-size: 14px;
`

const Opaque = styled.div`
`


function Research() {
    const [showSidebar, setShowSidebar] = useState(null);

    return (
        <ResearchPage>
            <Opaque className={`${showSidebar ? 'opacity-30' : 'opacity-100'}`}>
                <Row xs={1} md={2} className="d-flex justify-content-center" style={{"height": "2em"}}>
                    <Col md={6}>
                        <Title>Intelligent Tutoring Systems and 3D Scenes...</Title>
                    </Col>
                    <Col md={6}>
                        <Subtitle> As a research intern at Carnegie Mellon's Human-Computer Interaction 
                            Institute, I worked on projects aimed to optimize <b>AL (Apprentice Learner)</b>, 
                            an intelligent tutoring system. I've also researched 
                            in the computer vision/robot motion-planning space over the years as part of UIUC's
                            CS STARS program on topics like <b>NeRF</b> and <b>configuration spaces</b>. 
                        </Subtitle>
                    </Col>
                </Row>
            </Opaque>
            <Row>
                <ResearchProjects showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            </Row>
        </ResearchPage>
    );
}

export default Research;