import React, {useState} from 'react';
import researchpresentation from '../images/researchposter.JPG';
import cmuposter from '../images/Poster.png';
import robot from '../images/motionplanning.webp';
import nerf from '../images/nerf.png'
import colmap from '../images/colmap.png'
import spacy from '../images/spacy.png'
import ProjectCard from './ProjectCard';

// code sourced from https://sophiazhuang.com/

const ResearchProjects = (props) => {
  const { showSidebar, setShowSidebar } = props;

  return (
    <div className="pt-36 ">
      <div className="flex flex-wrap flex align-center items-center justify-center">
        <ProjectCard
          name="AL Real-time Interactive Graph"
          blurb="See and train AL in real-time."
          about="Coming soon!"
          website=""
          github="https://github.com/rachwei/Text2Math"
          skills={['React', 'D3', 'Pytorch']}
          image={cmuposter}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <ProjectCard
          name="AL Text to Math Parser"
          blurb="Parse sentences into math expressions using patterns."
          about={
            "Coming soon!"
          }
          paper="https://shorturl.at/yGP47"
          github="https://github.com/rachwei/Text2Math"
          skills={['Python', 'NLP (Spacy)', 'Paper!']}
          image={spacy}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <ProjectCard
          name="DNeRF: Dynamic NeRF"
          blurb="Extend NeRF methods to dynamic objects with the help of LiDAR."
          about={
            "Coming soon!"
          }
          website=""
          github=""
          skills={['Pytorch', 'Colmap']}
          image={researchpresentation}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <ProjectCard
          name="Parasol Lab Robot Motion Planning"
          blurb="A Web App that allows Spotify users to visualize their listening stats."
          about={
            "Coming soon!"
          }
          website=""
          github=""
          skills={['C++']}
          image={robot}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
    </div>
  );
};

export default ResearchProjects;