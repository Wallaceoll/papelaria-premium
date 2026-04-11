import React, { useState } from 'react';
import ProjectModal from '../components/modals/ProjectModal';
import CTA from '../components/sections/CTA';
import './Portfolio.css';

interface Project {
  id: string;
  title: string;
  category: string;
  color: string;
  description: string;
  year: string;
}

const categories = ['Todos', 'Branding', 'Convites', 'Packaging', 'Editorial', 'Corporativo'];

const projects: Project[] = [
  { id: '1', title: 'Identidade Corporativa Luxo', category: 'Branding', color: '#1a1f2e', description: 'Identidade visual completa para escritório de advocacia premium.', year: '2024' },
  { id: '2', title: 'Convites Gala Premium', category: 'Convites', color: '#2d1b3d', description: 'Convites para evento de gala com hot stamping em ouro.', year: '2024' },
  { id: '3', title: 'Embalagem Cosmética', category: 'Packaging', color: '#1f2d1b', description: 'Caixas e sacolas para linha de cosméticos de luxo.', year: '2023' },
  { id: '4', title: 'Catálogo Editorial', category: 'Editorial', color: '#2d1f1b', description: 'Catálogo de produtos com diagramação editorial sofisticada.', year: '2023' },
  { id: '5', title: 'Papelaria Institucional', category: 'Corporativo', color: '#1b2d2d', description: 'Kit completo: cartões, timbrado, envelope e pasta.', year: '2024' },
  { id: '6', title: 'Convites Casamento', category: 'Convites', color: '#3d1b2d', description: 'Convites artesanais com relevo seco e envelope forrado.', year: '2024' },
  { id: '7', title: 'Branding Joalheria', category: 'Branding', color: '#1e1a2e', description: 'Identidade visual e papelaria completa para joalheria.', year: '2023' },
  { id: '8', title: 'Embalagens Gourmet', category: 'Packaging', color: '#2a1f1b', description: 'Embalagens premium para chocolateria artesanal.', year: '2023' },
  { id: '9', title: 'Relatório Anual', category: 'Editorial', color: '#1b2030', description: 'Relatório anual com acabamento editorial para holding.', year: '2024' },
];

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <section className="portfolio-page" aria-labelledby="portfolio-page-title">
        <div className="container">
          <div className="portfolio-page__hero reveal">
            <p className="section-eyebrow">Trabalhos selecionados</p>
            <h1 id="portfolio-page-title">Portfólio de projetos premium.</h1>
            <p className="portfolio-page__lead">
              Uma seleção dos nossos melhores trabalhos em papelaria, branding, embalagens e design editorial.
            </p>
          </div>

          <div className="portfolio-page__filters reveal reveal-delay-1">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-page__grid">
            {filtered.map((project, index) => (
              <article
                key={project.id}
                className={`pp-card reveal reveal-delay-${(index % 3) + 1}`}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              >
                <div className="pp-card__visual" style={{ backgroundColor: project.color }}>
                  <div className="pp-card__overlay">
                    <span className="pp-card__view">Ver projeto</span>
                  </div>
                </div>
                <div className="pp-card__info">
                  <span className="pp-card__category">{project.category}</span>
                  <h3 className="pp-card__title">{project.title}</h3>
                  <p className="pp-card__year">{project.year}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default PortfolioPage;
