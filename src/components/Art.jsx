import React, {Component, useEffect, useState} from 'react';
import Draggable, {DraggableCore} from "react-draggable";
import {Resizable} from 're-resizable'
import styled from 'styled-components'

import stringgirl from '../images/string_girl.png'
import mailbox from '../images/mailbox.png'
import architect from '../images/architect.jpeg'

const ArtPage = styled.div`
    padding: 2em;
    height: 200vh;
    margin-top: 5em;
    width: 100%;
`

function DraggableImage(props) {
    const width = props.width
    const height = props.height

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
            <DraggableImage width={100} height={260} background={stringgirl}/>
            <DraggableImage width={100} height={260} background={mailbox}/>
            <DraggableImage width={100} height={260} background={architect}/>
            <Draggable><h1>I'm draggable!</h1></Draggable>
        </ArtPage>
    );
}

export default Art;