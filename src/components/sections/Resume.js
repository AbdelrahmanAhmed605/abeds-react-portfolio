import React from 'react';
import resumePDF from '../assets/resources/Abdelrahman Ahmed Resume.pdf';

function Resume() {
  return (
    <div className="container">
      <div className="my-2 fs-5">
        {/* donwloads the reusme when the anchor is clicked */}
        Download my{' '}
        <a
          href={resumePDF}
          target="_blank"
          download="resume.pdf"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="my-auto">
        <h2 className="mb-3">Skills</h2>

        <div className="subheading mb-2 fs-4">
          <strong>Programming Languages &amp; Tools</strong>
        </div>
        <div className="subheading mb-2 fs-3">Client Side</div>
        <ul className="list-unstyled" style={{ fontSize: '1.25rem' }}>
          {/* contains devicons of the listed technologies */}
          <li>
            <i className="devicon-nextjs-plain colored devicon-lg"></i> Next.js
          </li>
          <li>
            <i className="devicon-graphql-plain colored"></i> GraphQL
          </li>
          <li>
            <i className="devicon-react-original colored"></i> React.js
          </li>
          <li>
            <i className="devicon-angular-plain colored bg-danger"></i> Angular
          </li>
          <li>
            <i className="devicon-redux-original colored"></i> Redux
          </li>
          <li>
            <i className="devicon-typescript-plain colored"></i> TypeScript
          </li>
          <li>
            <i className="devicon-javascript-plain colored devicon-lg"></i>{' '}
            JavaScript
          </li>
          <li>
            <i className="devicon-html5-plain colored devicon-lg"></i> HTML
          </li>
          <li>
            <i className="devicon-css3-plain devicon-lg"></i> CSS
          </li>
          <li>
            <i className="devicon-tailwindcss-original colored"></i> Tailwind
            CSS
          </li>
          <li>
            <i className="devicon-bootstrap-plain colored devicon-lg"></i>{' '}
            Bootstrap
          </li>
          <li>
            <i className="devicon-jquery-plain colored devicon-lg"></i> jQuery
          </li>
        </ul>
        <div className="subheading mb-3 fs-3">Server Side</div>
        <ul className="list-unstyled" style={{ fontSize: '1.25rem' }}>
          <li>
            <i className="devicon-nodejs-plain colored devicon-lg"></i> Node.js
          </li>
          <li>
            <i
              style={{ color: '#E1C699' }}
              className="devicon-bun-plain colored"
            ></i>{' '}
            Bun
          </li>
          <li>
            <i className="devicon-graphql-plain colored"></i> GraphQL
          </li>
          <li>
            <i className="devicon-express-original colored devicon-lg"></i>{' '}
            Express.js
          </li>
          <li>
            <i className="devicon-python-plain colored devicon-lg"></i> Python
          </li>
          <li>
            <i className="devicon-django-plain colored"> Django</i>
          </li>
          <li>
            <i className="devicon-djangorest-plain colored"> Django REST</i>
          </li>
          <li>
            <i className="devicon-mongodb-plain colored devicon-lg"></i> MongoDB
          </li>
          <li>
            <i className="devicon-mysql-plain colored devicon-lg"></i> MySQL
          </li>
          <li>
            <i className="devicon-postgresql-plain colored"></i> PostgreSQL
          </li>
          <li>
            <i className="devicon-amazonwebservices-plain-wordmark colored"></i> AWS
            S3
          </li>
          <li>
            <i className="devicon-sqlite-plain colored devicon-lg"></i> SQLite
          </li>
        </ul>

        <div className="subheading mb-2 fs-4">
          <strong>Software Architecture</strong>
        </div>
        <ul className="fa-ul mb-0 fs-5">
          <li>
            <i className="fa-li fa fa-check"></i>
            Model-View-Controller Framework
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Object-Oriented Programming
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
