import React from "react";

// Import CSS styles
import "../assets/css/Portfolio.css";

// Import project images
import scriptomaticImage from "../assets/images/scriptomatic.png";
import audioNewsImage from "../assets/images/audio-news.png";
import empDBManagerImage from "../assets/images/employee-database-manager.png";
import weatherDashImage from "../assets/images/weather-dashboard.png";
import teamProfileGenImage from "../assets/images/team-profile-generator.png";
import noteTakerImage from "../assets/images/note-taker.png";

function Portfolio() {
  // array containing information on each project
  const projects = [
    {
      id: 1,
      name: "SCRIPTOMATIC",
      skills: "MySQl/ Sequelize/ Express.js/ Handlebars",
      liveLink: "https://shrouded-garden-51163.herokuapp.com/",
      githubLink: "https://github.com/ScriptoNaughts/Scriptomatics",
      image: scriptomaticImage,
    },
    {
      id: 2,
      name: "AUDIO NEWS",
      skills: "jQuery/ VoiceRSS API/ Gnews API/ Bulma CSS",
      liveLink: "https://audio-news.github.io/audio-news/",
      githubLink: "https://github.com/audio-news/audio-news",
      image: audioNewsImage,
    },
    {
      id: 3,
      name: "EMPLOYEE DATABASE MANAGER",
      skills: "MySQL/ Node.js/ NPM Inquirer",
      liveLink:
        "https://github.com/AbdelrahmanAhmed605/employee-database-manager",
      githubLink:
        "https://github.com/AbdelrahmanAhmed605/employee-database-manager",
      image: empDBManagerImage,
    },
    {
      id: 4,
      name: "WEATHER DASHBOARD",
      skills: "OpenWeather API/ BootStrap/ jQuery/ Browser LocalStorage",
      liveLink: "https://abdelrahmanahmed605.github.io/weather-dashboard/",
      githubLink: "https://github.com/AbdelrahmanAhmed605/weather-dashboard",
      image: weatherDashImage,
    },
    {
      id: 5,
      name: "TEAM PROFILE GENERATOR",
      skills: "Object-Oriented Programming/ Test-Driven Development (Jest)",
      liveLink: "https://github.com/AbdelrahmanAhmed605/team-profile-generator",
      githubLink:
        "https://github.com/AbdelrahmanAhmed605/team-profile-generator",
      image: teamProfileGenImage,
    },
    {
      id: 6,
      name: "NOTE TAKER",
      skills: "Express.js",
      liveLink: "https://damp-gorge-21732.herokuapp.com/",
      githubLink: "https://github.com/AbdelrahmanAhmed605/note-taker",
      image: noteTakerImage,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {/* maps through each project and creates a card containing the appropriate project information */}
        {projects.map((project) => (
          // The key will allow us to only re-render the card for whichever specific projects were updated rather than re-rendering the entire list of cards
          <div className="col-lg-4 col-md-6 mb-4" key={project.id}>
            <div className="card h-100">
              <a href={project.liveLink} target="_blank">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.name}
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <div className="overlay-content text-center">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.skills}</p>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="github-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
