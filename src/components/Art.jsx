import React, {Component, useEffect, useState} from 'react';
import Draggable, {DraggableCore} from "react-draggable";
import {Resizable} from 're-resizable'
import styled from 'styled-components'

import stringgirl from '../images/string_girl.png'
import mailbox from '../images/mailbox.png'
import architect from '../images/architect.jpeg'
import binary from '../images/1010.mp4'
import memory from '../images/memory.mp4'
// import quiet from '../images/quiet.JPG'

const ArtPage = styled.div`
    padding: 2em;
    height: 200vh;
    margin-top: 5em;
    width: 100%;
`

const Video = styled.video`
    height: 30vh;
`

function DraggableImage(props) {
    const width = props.width
    const height = props.height
    const title = props.title

    return (
        <Draggable>
            <Resizable
                defaultSize={{width: width, height: height}}
                style={{
                    background: `url(${props.background})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}
                lockAspectRatio={true}
            />
        </Draggable>
    )
}

function Art() {
    return (
        <ArtPage>
            <Video playsInline loop muted autoPlay alt="All the devices">
                <source src={binary} type="video/mp4" />
                Your browser does not support the video tag.
            </Video>
            <Video playsInline loop muted autoPlay alt="All the devices">
                <source src={memory} type="video/mp4" />
                Your browser does not support the video tag.
            </Video>
            <DraggableImage width={100} height={260} background={stringgirl} title="string girl"/>
            <DraggableImage width={100} height={260} background={mailbox}/>
            <DraggableImage width={100} height={260} background={architect}/>
            {/* <DraggableImage width={100} height={260} background={quiet}/> */}
            <Draggable><h1>I'm draggable!</h1></Draggable>
        </ArtPage>
    );
}

export default Art;