import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="my-auto">
        <h1 className="mb-0">
          Abdelrahman <span className="text-primary">Ahmed</span>
        </h1>
        <div className="subheading mb-5">
          Toronto, ON · (236) 866-2132 ·{' '}
          <a href="mailto:abdelrahman.ahmed605@hotmail.com">
            abdelrahman.ahmed605@hotmail.com
          </a>
        </div>
        <div>
          <p className="mb-3">
            Hey there! I'm Abdelrahman Ahmed, a Full Stack Developer driven by a
            passion for tackling challenges, embracing learning, and fostering
            personal growth. With a background in Mechanical Engineering from
            the University of British Columbia, I made a leap into the world of
            web development by completing a rigorous Full Stack Web Development
            Boot Camp at the University of Toronto.
          </p>
          <p className="mb-3">
            After completing the Boot Camp, I gained a solid foundation in
            various web languages and frameworks, setting the stage for my
            career journey.
          </p>
          <p className="mb-3">
            Post-boot camp, I dove into solo projects and sought out online
            courses to further hone my skills and stay up-to-date with industry
            trends. This ongoing pursuit of knowledge reflects my genuine
            passion for growth and improvement.
          </p>
          <p className="mb-5">
            Joining HomeAmie as a Full Stack Software Developer provided me with
            the opportunity to put my skills to the test in a real-world
            environment. Working alongside a collaborative team, I contributed
            to the development of practical solutions, leveraging my technical
            abilities to make meaningful contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
