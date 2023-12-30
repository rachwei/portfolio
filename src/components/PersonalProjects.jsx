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

const ResearchProjects = (props) => {
  const { showSidebar, setShowSidebar } = props;

  return (
    <div className="pt-36 ">
      <div className="flex flex-wrap flex align-center items-center justify-center">
        <ProjectCard
          name="This website! :)"
          blurb="How I built this website and configured it!"
          about="Coming soon!"
          github="https://github.com/rachwei/portfolio"
          skills={['React', 'Tailwind']}
          image={website}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <ProjectCard
          name="Muxi: Share your Music"
          blurb="Share your listening activity with friends."
          about={
            "Coming soon!"
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
            "Coming soon!"
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