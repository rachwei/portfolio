import React, {Component, useEffect, useState} from 'react';
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link>
    </div>
        // <Font>
        //     <Title>Hi, my name is Rachael</Title>
        //     <BlobPhoto/>
        //     <TimelineComponent />
        // </Font>
    );
}

export default Contact;