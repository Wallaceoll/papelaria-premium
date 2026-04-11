import React from 'react';
import './ProjectModal.css';

interface Project {
  id: string;
  title: string;
  category: string;
  color: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar modal">×</button>

        <div className="project-modal__visual" style={{ backgroundColor: project.color }}></div>

        <div className="project-modal__content">
          <p className="project-modal__category">{project.category}</p>
          <h2 className="project-modal__title">{project.title}</h2>

          <div className="project-modal__details">
            <div className="detail-item">
              <span className="detail-label">Tipo de Projeto</span>
              <p>{project.category}</p>
            </div>
            <div className="detail-item">
              <span className="detail-label">Ano</span>
              <p>2024</p>
            </div>
            <div className="detail-item">
              <span className="detail-label">Acabamento</span>
              <p>Hot stamping, relevo e verniz</p>
            </div>
          </div>

          <div className="project-modal__description">
            <h3>Sobre o projeto</h3>
            <p>
              Este projeto exemplifica nosso compromisso com excelência visual e acabamento premium. Cada detalhe foi cuidadosamente considerado para criar uma experiência visual sofisticada e memorável, refletindo a identidade e os valores da marca.
            </p>
          </div>

          <button className="project-modal__cta">Solicitar projeto similar</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
