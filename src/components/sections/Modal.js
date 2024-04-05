import React from 'react';
import '../assets/css/Modal.css';

const Modal = ({ project, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{project.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={project.image}
              className="modal-project-image"
              alt={project.name}
            />
            <p>Description: {project.description}</p>
            <p>Technologies used: {project.skills}</p>
          </div>
          <div className="modal-footer">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary me-2"
            >
              Live Site
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
