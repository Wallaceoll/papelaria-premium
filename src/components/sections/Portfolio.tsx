import React, { useState } from 'react';
import Carousel from '../common/Carousel';
import ProjectModal from '../modals/ProjectModal';
import './Portfolio.css';

interface Project {
  id: string;
  title: string;
  category: string;
  color: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: '1', title: 'Identidade Corporativa Luxo', category: 'Branding', color: '#1a1f2e' },
    { id: '2', title: 'Convites Gala Premium', category: 'Convites', color: '#2d1b3d' },
    { id: '3', title: 'Embalagem Cosmética', category: 'Packaging', color: '#1f2d1b' },
    { id: '4', title: 'Catálogo Editorial', category: 'Editorial', color: '#2d1f1b' },
    { id: '5', title: 'Papelaria Institucional', category: 'Corporativo', color: '#1b2d2d' },
    { id: '6', title: 'Convites Casamento', category: 'Social', color: '#3d1b2d' },
  ];

  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-header__eyebrow">Trabalhos selecionados</p>
          <h2 className="section-header__title" id="portfolio-title">Portfólio de projetos premium</h2>
          <p className="section-header__description">
            Conheça alguns dos nossos trabalhos mais representativos, onde design editorial, precisão visual e acabamento premium se encontram.
          </p>
        </div>

        <Carousel 
          items={projects} 
          onItemClick={setSelectedProject}
        />

        <div className="portfolio__grid reveal reveal-delay-2">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="portfolio-card"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && setSelectedProject(project)}
            >
              <div className="portfolio-card__visual" style={{ backgroundColor: project.color }}></div>
              <div className="portfolio-card__overlay">
                <p className="portfolio-card__category">{project.category}</p>
                <h3 className="portfolio-card__title">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
