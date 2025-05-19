
import React, { useState } from 'react';
import ParticlesBackground from '@/components/layout/ParticlesBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type ProjectTag = 'C#' | '.NET' | 'ASP.NET' | 'Azure' | 'Microservices' | 'WPF' | 'EntityFramework';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  link?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Система управления складом',
    description: 'Высоконагруженное приложение для управления складскими запасами с микросервисной архитектурой',
    tags: ['C#', '.NET', 'ASP.NET', 'Microservices', 'EntityFramework'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a3fd919584d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    githubLink: '#'
  },
  {
    id: '2',
    title: 'CRM для финтех компании',
    description: 'Облачная CRM-система с интеграцией банковских API и системой мониторинга транзакций',
    tags: ['C#', '.NET', 'ASP.NET', 'Azure'],
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    id: '3',
    title: 'Десктопное приложение для аналитики',
    description: 'WPF-приложение для анализа финансовых данных с графиками и отчетами',
    tags: ['C#', 'WPF', '.NET'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    githubLink: '#'
  },
  {
    id: '4',
    title: 'API для платежной системы',
    description: 'Разработка защищенного API для обработки платежей с высокой отказоустойчивостью',
    tags: ['.NET', 'ASP.NET', 'Azure', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    id: '5',
    title: 'Библиотека для валидации данных',
    description: 'Опенсорсная библиотека для валидации данных в приложениях .NET с продвинутыми возможностями',
    tags: ['C#', '.NET', 'EntityFramework'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    githubLink: '#',
    link: '#'
  },
  {
    id: '6',
    title: 'Облачная система мониторинга',
    description: 'Система для мониторинга производительности микросервисных приложений в Azure',
    tags: ['C#', '.NET', 'Azure', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&q=80'
  },
];

const allTags: ProjectTag[] = ['C#', '.NET', 'ASP.NET', 'Azure', 'Microservices', 'WPF', 'EntityFramework'];

const Portfolio: React.FC = () => {
  const [activeTag, setActiveTag] = useState<ProjectTag | 'all'>('all');
  
  const filteredProjects = activeTag === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeTag));
  
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Избранные проекты, которые демонстрируют мой опыт в разработке на C# и .NET
            </p>
          </div>
          
          {/* Фильтр по тегам */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <TagButton 
              active={activeTag === 'all'}
              onClick={() => setActiveTag('all')}
            >
              Все проекты
            </TagButton>
            
            {allTags.map(tag => (
              <TagButton
                key={tag}
                active={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </TagButton>
            ))}
          </div>
          
          {/* Сетка проектов */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const TagButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm transition-all",
        active
          ? "bg-neon-pink text-white"
          : "bg-white/5 hover:bg-white/10"
      )}
    >
      {children}
    </button>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card className="overflow-hidden border-white/5 hover:border-neon-pink/30 transition-all bg-black/30 backdrop-blur-sm">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <Badge 
              key={tag}
              variant="outline"
              className="bg-white/5 hover:bg-white/10 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-3 text-sm">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neon-pink hover:text-neon-pink/80 transition-colors"
            >
              Открыть проект
            </a>
          )}
          
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
