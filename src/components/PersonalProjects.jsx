import React, {useState} from 'react';
import researchpresentation from '../images/researchposter.JPG';
import cmuposter from '../images/Poster.png';
import robot from '../images/motionplanning.webp';
import website from '../images/website.png'
import ProjectCard from './ProjectCard';

// code sourced from https://sophiazhuang.com/
import mongodbproject from '../images/mongodbproject.png'
import arpaint from '../images/arpaint2.png'
import faceswapping from '../images/faceswapping.png'
import muxi from '../images/muxi.jpg'
import kyle from '../images/kyle.jpeg'

const ResearchProjects = (props) => {
  const { showSidebar, setShowSidebar } = props;

  return (
    <div className="pt-36">
      <div className="flex flex-wrap flex align-center items-center justify-center">
        <ProjectCard
          name="This website! :)"
          blurb="How I built this website and configured it!"
          about="This project was built using React and some of its components were styled with Tailwind. The cards that you see right now were created with the help of my friend Sophia Zhuang (https://sophiazhuang.com/). Currently, I'm working on fixing the layout so that the website works on smaller screens/devices-- coming soon!"
          github="https://github.com/rachwei/portfolio"
          skills={['React', 'Tailwind']}
          image={website}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <ProjectCard
          name="Autobook: an Autonomous AI Learning Agent"
          blurb="A robot that helps you understand text better!"
          about="Lately, I've been really interested in the intersection between AI and EdTech, and wanted to create an interactive AI bot that helps you comprehend what you read better. It's easy to forget what we read sometimes, but having a way to ask and answer questions based on a text could let us think deeper and ultimately recall faster. 
                This project allows you to import any image/file, extract text from it, and generate comprehension questions or ask an AI bot created by Langchain and an Ollama model some questions. The AI bot then undergoes a research process and eventually reports its findings."
          github="https://github.com/rachwei/autobook"
          skills={['PostgreSQL', 'Langchain', 'Ollama']}
          image_cred="Kyle Holbrook"
          image={kyle}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <ProjectCard
          name="Muxi: Share your Music"
          blurb="Share your listening activity with friends."
          about={
            "One of my favorite apps right now is Beli, and I wanted to create something that merged its concept/design with another one of my loves: music! I built this website with React for the frontend, Express for the backend, and Flask for ML related requests. The website is hooked up to a MongoDB database storing a collection of songs and user-related information, and allows users to rate/review their favorite songs, friend/message others, and see their reviews. It also suggests songs based on similar users using collaborative filtering. The Flask backend has a model that is periodically trained and returns these suggestions based on the user id."
          }
          github="https://github.com/rachwei/muxi"
          skills={['React', 'MongoDB', 'Express', 'Flask']}
          image={muxi}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <ProjectCard
          name="ARPaint"
          blurb="Draw in 3D by just using your fingers!"
          about={
            "The impact of AR/VR on how we interact with our surroundings has been really interesting to me, and I wanted to reimagine how we could make it into a social activity. As someone who has grown up drawing, the idea of drawing digitally and sharing your work was intriguing. I used Apple's Vision framework for finger tracking, and its ARKit/SceneKit to add nodes to the screen. A challenge was determining how to calculate each node's location, but the project ultimately uses plane detection projections."
          }
          website=""
          github="https://github.com/rachwei/ARPaint"
          skills={['SwiftUI', 'Swift', 'ARKit', 'SceneKit']}
          image={arpaint}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <ProjectCard
          name="MongoDB: Microservices"
          blurb="Detect false positives and generate build failure suggestions."
          about={
            "Coming soon!"
          }
          github=""
          skills={['Python', 'Typescript', 'Kubernetes']}
          image={mongodbproject}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <ProjectCard
          name="Face Swapper/Cartoonify"
          blurb="Explore face swapping/cartoonifying techniques."
          about={
            "Coming soon!"
          }
          website=""
          github=""
          skills={['Python', 'Dlib']}
          image={faceswapping}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
    </div>
  );
};

export default ResearchProjects;