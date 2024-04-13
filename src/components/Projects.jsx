import React, {Component, useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Projects from './PersonalProjects'


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
        width: 630px;
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
    // white-space: nowrap;
    width: 100%;
    font-weight: bold;
`

const Subtitle = styled.p`
    font-size: width: 100%
`

// const Title = styled.h1`
    // overflow: hidden;
    // white-space: nowrap;
    // font-size: 25px;
    // font-weight: bold;
    // border-right: 2px solid hsl(0, 0%, 90%);
    // animation: ${typewriter} 6s steps(44) 1s 1 normal both,
    //            ${blinkTextCursor} 1s infinite,
    //            ${stopBlink} 1s 6s 1 normal forwards;
// `

const Opaque = styled.div`
`


function Research() {
    const [showSidebar, setShowSidebar] = useState(null);
    const finalTitle = "Autonomous AI Agents and Drawing in 3D..."
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
            <Opaque className={`${showSidebar ? 'opacity-30' : 'opacity-100'}`}>
                <Row xs={1} md={2} className="d-flex justify-content-center" style={{"height": "auto", marginBottom: "-2em"}}>
                    <Col md={6}>
                        <Title>{title}</Title>
                    </Col>
                    <Col md={6} style={{ flex: "1" }}>
                        <Subtitle> Some projects from over the years! 
                            <br></br>
                            Many of them originated from the question: 
                            <br></br><b>how can we use tech to enhance our hobbies/learning processes</b>?
                        </Subtitle>
                    </Col>
                </Row>
            </Opaque>
            <Row>
                <Projects showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            </Row>
        </ResearchPage>
    );
}

export default Research;