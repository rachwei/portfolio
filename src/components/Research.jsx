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
const Title = styled.h1`
    overflow: hidden;
    width: 100%;
    font-weight: bold;
`

const Subtitle = styled.p`
    font-size: width: 100%
`

// cursor effect: https://medium.com/codex/a-nice-typing-animation-with-react-js-6cda948af10f
function Research() {
    const [showSidebar, setShowSidebar] = useState(null);
    const finalTitle = "Intelligent Tutoring Systems and 3D Scenes..."
    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const animKey = setInterval(() => {
          setIndex((index) => {
    
            if (index >= finalTitle.length - 1) {
              clearInterval(animKey);
              return index;
            }
            return index + 1;
          });
        }, 150);
      }, []);

    useEffect(() => {
        setTitle(
            (title) => title + finalTitle[index]
        );
    }, [index]);

    return (
        <ResearchPage>
                <Row className="d-flex justify-content-center" style={{"height": "auto", marginBottom: "-2em"}}>
                    <Col md={6}>
                        <Title>{title}</Title>
                    </Col>
                    <Col md={6}>
                        <Subtitle> As a research intern at Carnegie Mellon's Human-Computer Interaction 
                            Institute, I worked on projects aimed to optimize <b>AL (Apprentice Learner)</b>, 
                            an intelligent tutoring system. I've also researched 
                            in the computer vision/robot motion-planning space as part of UIUC's
                            CS STARS program on topics like <b>NeRF</b> and <b>configuration spaces</b>. 
                        </Subtitle>
                    </Col>
                </Row>
                <Row>
                    <ResearchProjects showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                </Row>
        </ResearchPage>
    );
}

export default Research;