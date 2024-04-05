import React, { useState } from "react";
import Modal from "./Modal"; // Import your modal component here

import "../assets/css/Portfolio.css";

// Import project images
import homeAmieImage from "../assets/images/home-amie.png";
import mernEcommerceImage from "../assets/images/mern-ecommerce.png"
import scriptomaticImage from "../assets/images/scriptomatic.png";
import audioNewsImage from "../assets/images/audio-news.png";
import empDBManagerImage from "../assets/images/employee-database-manager.png";
import wiseGuideImage from "../assets/images/WiseGuide.png";

// array containing information on each project
const projects = [
  {
    id: 1,
    name: "HomeAmie",
    description:
      "HomeAmie is an integrated sales and transactions platform for new home developments, connecting developers with potential buyers. Streamlining sales tracking and inventory management, while providing users easy access to reserve and purchase units.",
    skills: "Prisma / Supabase / GraphQL / Express.js / Bun / Next.js / Apollo-Client",
    liveLink: "https://www.homeamie.com/",
    image: homeAmieImage,
  },
  {
    id: 2,
    name: "MERN E-COMMERCE",
    description:
      "A full-stack ecommerce website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application provides users with the ability to browse and purchase products, manage their shopping cart, and track their orders. It includes features such as user authentication, product search, reviews, and a responsive user interface.",
    skills: "MongoDB/ Express.js / React / Node.js / GraphQL / Apollo-Client",
    liveLink: "https://abeds-mern-ecommerce-e78e4f542dbd.herokuapp.com/",
    githubLink: "https://github.com/AbdelrahmanAhmed605/mern-ecommerce",
    image: mernEcommerceImage,
  },
  {
    id: 3,
    name: "WiseGuide",
    description:
      "Web application that leverages Open AI's ChatGPT API to provide personalized tutoring and assistance across a wide range of subjects for learners of all ages",
    skills: "MongoDB/ Express.js / React / Node.js / GraphQL / Apollo-Client",
    liveLink: "https://mighty-island-49010.herokuapp.com/",
    githubLink: "https://github.com/JABOWG/wise-guide",
    image: wiseGuideImage,
  },
  {
    id: 4,
    name: "SCRIPTOMATIC",
    description:
      "Web application that enables writers to create and manage their scripts, and agents to browse, purchase and own scripts posted on the platform",
    skills: "MySQl/ Sequelize/ Express.js/ Handlebars",
    liveLink: "https://shrouded-garden-51163.herokuapp.com/",
    githubLink: "https://github.com/ScriptoNaughts/Scriptomatics",
    image: scriptomaticImage,
  },
  {
    id: 5,
    name: "AUDIO NEWS",
    description:
      "Web application that allows users to search news articles and then have them read out using text to speech API",
    skills: "jQuery/ VoiceRSS API/ Gnews API/ Bulma CSS",
    liveLink: "https://audio-news.github.io/audio-news/",
    githubLink: "https://github.com/audio-news/audio-news",
    image: audioNewsImage,
  },
  {
    id: 6,
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
              <div className="h-100" onClick={() => openModal(project)}>
                <img
                  src={project.image}
                  className="card-img-top h-100"
                  alt={project.name}
                  style={{ objectFit: "cover", objectPosition: "top left" }}
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
