import React, { useRef, useEffect } from 'react';
import '../assets/css/Modal.css';

const Modal = ({ project, closeModal }) => {
  // Create a ref for the modal content
  const modalRef = useRef();

  // Function to handle click outside modal content
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  // Attach event listener on mount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-dialog modal-lg modal-dialog-centered" ref={modalRef}>
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
