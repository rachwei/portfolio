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

const Format = styled.div`
    padding: 1em;
    position: fixed;
    left: 3%;
    top: 80%;
    font-size: 1em;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: white;
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
            <Col md={2}>
                <ExternalLink href={spotifyLink}><FindImg src={spotify} alt="Spotify" /></ExternalLink>
            </Col>
            <Col md={2}>
                <ExternalLink href={linkedinLink}><FindImg src={linkedin} alt="Linkedin" /></ExternalLink>
            </Col>
            <Col md={2}>
                <ExternalLink href={githubLink}><FindImg src={github} alt="Github" /></ExternalLink>
            </Col>
            <Col md={2}>
                <ExternalLink href={substackLink}><FindImg src={substack} alt="Substack" /></ExternalLink>
            </Col>
            <Col md={2}>
                <ExternalLink href={goodreadsLink}><FindImg src={goodreads} alt="Goodreads" /></ExternalLink>
            </Col>
            <Col md={2}>
                <ExternalLink href={mediumLink}><FindImg src={medium} alt="Medium" /></ExternalLink>
            </Col>
            </Row>
        </Container>
        </Format>
    );
}

export default FindMe;