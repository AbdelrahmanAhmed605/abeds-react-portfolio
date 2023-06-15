import React, { useState } from "react";
import Modal from "./Modal"; // Import your modal component here

import "../assets/css/Portfolio.css";

// Import project images
import scriptomaticImage from "../assets/images/scriptomatic.png";
import audioNewsImage from "../assets/images/audio-news.png";
import empDBManagerImage from "../assets/images/employee-database-manager.png";
import weatherDashImage from "../assets/images/weather-dashboard.png";
import teamProfileGenImage from "../assets/images/team-profile-generator.png";
import wiseGuideImage from "../assets/images/WiseGuide.png";

// array containing information on each project
const projects = [
  {
    id: 1,
    name: "WiseGuide",
    description:
      "Web application that leverages Open AI's ChatGPT API to provide personalized tutoring and assistance across a wide range of subjects for learners of all ages",
    skills: "MongoDB/ Express.js / React / Node.js / GraphQL / Apollo-Client",
    liveLink: "https://mighty-island-49010.herokuapp.com/",
    githubLink: "https://github.com/JABOWG/wise-guide",
    image: wiseGuideImage,
  },
  {
    id: 2,
    name: "SCRIPTOMATIC",
    description:
      "Web application that enables writers to create and manage their scripts, and agents to browse, purchase and own scripts posted on the platform",
    skills: "MySQl/ Sequelize/ Express.js/ Handlebars",
    liveLink: "https://shrouded-garden-51163.herokuapp.com/",
    githubLink: "https://github.com/ScriptoNaughts/Scriptomatics",
    image: scriptomaticImage,
  },
  {
    id: 3,
    name: "AUDIO NEWS",
    description:
      "Web application that allows users to search news articles and then have them read out using text to speech API",
    skills: "jQuery/ VoiceRSS API/ Gnews API/ Bulma CSS",
    liveLink: "https://audio-news.github.io/audio-news/",
    githubLink: "https://github.com/audio-news/audio-news",
    image: audioNewsImage,
  },
  {
    id: 4,
    name: "EMPLOYEE DATABASE MANAGER",
    description:
      "Command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL",
    skills: "MySQL/ Node.js/ NPM Inquirer",
    liveLink:
      "https://github.com/AbdelrahmanAhmed605/employee-database-manager",
    githubLink:
      "https://github.com/AbdelrahmanAhmed605/employee-database-manager",
    image: empDBManagerImage,
  },
  {
    id: 5,
    name: "WEATHER DASHBOARD",
    description:
      "Web application containing a weather dashboard which displays weather data for multiple cities using third-party API calls to OpenWeather",
    skills: "OpenWeather API/ BootStrap/ jQuery/ Browser LocalStorage",
    liveLink: "https://abdelrahmanahmed605.github.io/weather-dashboard/",
    githubLink: "https://github.com/AbdelrahmanAhmed605/weather-dashboard",
    image: weatherDashImage,
  },
  {
    id: 6,
    name: "TEAM PROFILE GENERATOR",
    description:
      "Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.",
    skills: "Object-Oriented Programming/ Test-Driven Development (Jest)",
    liveLink: "https://github.com/AbdelrahmanAhmed605/team-profile-generator",
    githubLink: "https://github.com/AbdelrahmanAhmed605/team-profile-generator",
    image: teamProfileGenImage,
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <div className="col-lg-4 col-md-6 mb-4" key={project.id}>
            <div className="card h-100">
              <div onClick={() => openModal(project)}>
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.name}
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <div className="overlay-content text-center">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.skills}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Portfolio;
