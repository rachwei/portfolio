import React, {Component, useEffect, useState} from 'react';
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ImageGrid from './ImageText'

import researchpresentation from '../images/researchposter.JPG';
import cmuposter from '../images/Poster.png';


const ResearchPage = styled.div`
    padding: 2em;
    height: 200vh;
    margin-top: 5em;
    width: 100%;
`

const Title = styled.h1`
    font-size: 25px;
    font-weight: bold;
`

const Subtitle = styled.p`
    font-size: 15px;
`

function Research() {
    const images = [
        { src: {cmuposter}, alt: 'HCII', text: 'Text for Image 1' },
        { src: {researchpresentation}, alt: 'Computer Vision Group', text: 'Text for Image 2' },
        { src: {researchpresentation}, alt: 'Computer Vision Group', text: 'Text for Image 2' },
      ];

    return (
        <ResearchPage >
            <Row xs={1} md={2} className="d-flex justify-content-center">
                <Col md={6}>
                    <Title>Intelligent Tutoring Systems and 3D Scenes...</Title>
                </Col>
                <Col md={6}>
                    <Subtitle>alssjdlfajsdlfkjasldkfjalskdjfklsdjfkalsdjfaslkjfklasldkfjalskd
                        fjaklsdjflkjfkljfskaljklsdjfklsadjfklsajlaskdjflsakdfjklasdfjlkdsj
                        flakdsfjdlskfjsldkfjsldfj
                    </Subtitle>
                </Col>
            </Row>
            <Row>
                <h1>hi</h1>
                {/* <ImageGrid images={images} /> */}
            </Row>
        </ResearchPage>
    );
}

export default Research;