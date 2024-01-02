// code sourced from https://sophiazhuang.com/

import React from 'react';
import { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import Skills from '../components/Skills';
import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  const { showSidebar, setShowSidebar } = props;

  return (
    <div>
      {' '}
      <div className="flex pr-8 pb-8">
        <div>
          {showSidebar ? (
            <div className={`${showSidebar ? 'opacity-30' : 'opacity-100'}`}>
              <div>
                <div className="flex">
                  <a
                    className="relative block w-96 h-80 bg-gray-900 group rounded-lg cursor-pointer text-decoration-none"
                    onClick={() => setShowSidebar(null)}>
                    <img
                      className="absolute inset-0 object-cover block w-96 h-80 opacity-45 group-hover:opacity-60 rounded-lg"
                      src={props.image}
                      alt="experience image"
                    />
                    <div className="relative p-5">
                      <div className="mt-40">
                      <div
                        className="transition-all transform -translate-y-20 opacity-100
                                      group-hover:opacity-0
                                      group-hover:translate-y-15"
                      >
                        <div className="p-2">
                          <div className="text-lg text-left text-white font-extrabold font-poppins pb-1">
                            {props.name}
                          </div>
                          <div className="text-sm text-left text-white font-poppins">
                            {props.blurb}
                          </div>
                          <div className="text-sm text-gray-200 font-poppins pb-2">
                            {props.price}
                          </div>
                          <Skills skills={props.skills} />
                        </div>
                      </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex">
                <a
                  className="relative block w-96 h-80 bg-gray-900 group rounded-lg cursor-pointer text-decoration-none"
                  onClick={() => setShowSidebar(props.name)}>
                  <img
                    className="absolute inset-0 object-cover block w-96 h-80 opacity-45 group-hover:opacity-60 rounded-lg"
                    src={props.image}
                  />
                  <div className="relative p-5">
                  <div
                  className="transition-all transform translate-y-20 opacity-100
                                 group-hover: translate-y-0"
                >
                  <div className="p-2">
                    <div className="text-lg text-left text-white font-extrabold font-poppins pb-1">
                      {props.name}
                    </div>
                    <div className="text-sm text-left text-white font-poppins">
                      {props.blurb}
                    </div>
                    <div className="text-sm text-gray-200 font-poppins pb-2">
                      {props.price}
                    </div>
                    <Skills skills={props.skills} />
                  </div>
                </div>
                  </div>
                </a>
              </div>
            </div>
          )}
          {/* applicant card */}
    <div
      style={{
        opacity: showSidebar && showSidebar == props.name ? 1 : 0,
        visibility: showSidebar && showSidebar == props.name ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease-in-out',
      }}
      className={`fixed top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] bg-white p-10 text-black z-40 flex flex-col max-h-[80vh] overflow-y-auto ${
        showSidebar && showSidebar == props.name ? 'visible border border-gray-300 p-4' : 'invisible'
      }`}
>
          <button
            className="text-4xl text-black items-center cursor-pointer z-50"
            onClick={() => setShowSidebar(null)}
          >
          <div>
              <div className="absolute top-4 left-4 text-sm font-bold text-black text-montserrat">
                <MdOutlineCancel className="text-3xl" />
              </div>
            </div>
            </button>

            <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex items-center">
              <div className="flex items-start h-[50vh]">
                <div className="w-full h-full">
                  <img className="rounded-lg w-full h-full object-cover" src={props.image} alt={props.name} />
                </div>
              </div>

              <div className="ml-4 w-[50%] px-4">
                <div className="text-lg font-semibold text-black text-montserrat mb-2">
                  {props.name}
                </div>

                {/* <div className="mt-4 text-md text-black text-montserrat mb-2">🛠️ Technologies</div> */}
                <Skills skills={props.skills} />

                {props.website ? (
                  <div>
                  <div className="mt-4 text-md text-black text-montserrat mb-2"><b>Website</b></div>
                  <a className="text-xs text-black font-poppins hover:underline" href={props.website}>
                    {props.website}
                  </a>
                  </div>
                ) : (
                  <div></div>
                )}
                {props.paper ? (
                  <div>
                  <div className="mt-4 text-md text-black text-montserrat mb-2"><b>Paper</b></div>
                  <a className="text-xs text-black font-poppins hover:underline" href={props.paper}>
                    {props.paper}
                  </a>
                  </div>
                ) : (
                  <div></div>
                )}

                <div className="mt-4 text-md text-black text-montserrat mb-2"><b>Github</b></div>
                <a className="text-xs text-black font-poppins hover:underline" href={props.github}>
                  {props.github}
                </a>
              </div>
            </div>
            <div className="mt-4 text-md text-black text-montserrat mb-2 font-bold">About</div>
            <div className="text-xs text-black font-poppins">{props.about}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  showSidebar: PropTypes.bool.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
};

export default ProjectCard;