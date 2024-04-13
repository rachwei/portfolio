import React, {Component, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';

import styled from 'styled-components'

import spotify from '../images/spotify.webp'
import linkedin from '../images/linkedin.png'
import substack from '../images/substack.png'
import goodreads from '../images/goodreads.png'
import medium from '../images/medium.png'
import github from '../images/github.png'
import pdf from '../images/pdf.png'
import email from '../images/email.webp'

const Format = styled.div`
    font-size: 1em;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: white;
    padding: 1em;
    
    @media (min-width: 480px) {
        position: fixed;
        left: 3%;
        top: 80%;
    }
`

const FindImg = styled.img`
    width: 2em;
`


const ExternalLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

function FindMe() {
    const spotifyLink = "https://open.spotify.com/user/hg3cm6en2n4wt19i868v5wml1";
    const linkedinLink = "https://www.linkedin.com/in/rachaelwei/";
    const githubLink = "https://github.com/rachwei";
    const substackLink = "https://substack.com/@rachaelwei?utm_source=profile-page";
    const goodreadsLink = "https://www.goodreads.com/user/show/70826150?ref=nav_profile_l";
    const mediumLink = "https://medium.com/@rachaelwei";
    // make this into a sign?
    return (
        <Format>
            <h3>find me...</h3>
            <Container>
            <Row>
            <Col xs={2} md={2}>
                <ExternalLink href={spotifyLink}><FindImg src={spotify} alt="Spotify" /></ExternalLink>
            </Col>
            <Col xs={2} md={2}>
                <ExternalLink href={linkedinLink}><FindImg src={linkedin} alt="Linkedin" /></ExternalLink>
            </Col>
            <Col xs={2} md={2}>
                <ExternalLink href={githubLink}><FindImg src={github} alt="Github" /></ExternalLink>
            </Col>
            <Col xs={2} md={2}>
                <ExternalLink href={mediumLink}><FindImg src={medium} alt="Medium" /></ExternalLink>
            </Col>
            <Col xs={2} md={2}>
                <a href="mailto:rachaelwei@gmail.com" target="_blank" rel="noreferrer">
                    <FindImg src={email} alt="Email" />
                </a>
            </Col>
            <Col xs={2} md={2}>
            <a href={`${process.env.PUBLIC_URL}/resume_rachael.pdf`} download="rachael_resume.pdf">
                <FindImg src={pdf} alt="Medium" />
            </a>
            </Col>
            </Row>
        </Container>
        </Format>
    );
}

export default FindMe;