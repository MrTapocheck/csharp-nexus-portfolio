
import React from 'react';
import { cn } from '@/lib/utils';

type Technology = {
  name: string;
  level: number; // от 1 до 5
  category: 'backend' | 'database' | 'cloud' | 'tools' | 'architecture';
  iconClass: string;
};

const technologies: Technology[] = [
  // Backend
  { name: 'C#', level: 5, category: 'backend', iconClass: 'bg-neon-blue' },
  { name: '.NET Core', level: 5, category: 'backend', iconClass: 'bg-purple-500' },
  { name: 'ASP.NET', level: 5, category: 'backend', iconClass: 'bg-blue-500' },
  { name: 'Entity Framework', level: 4, category: 'backend', iconClass: 'bg-indigo-500' },
  { name: 'REST API', level: 5, category: 'backend', iconClass: 'bg-green-500' },
  { name: 'LINQ', level: 5, category: 'backend', iconClass: 'bg-blue-400' },
  { name: 'SignalR', level: 4, category: 'backend', iconClass: 'bg-red-500' },
  { name: 'gRPC', level: 3, category: 'backend', iconClass: 'bg-orange-500' },
  { name: 'WPF', level: 4, category: 'backend', iconClass: 'bg-blue-600' },
  
  // Database
  { name: 'SQL Server', level: 5, category: 'database', iconClass: 'bg-red-600' },
  { name: 'PostgreSQL', level: 4, category: 'database', iconClass: 'bg-blue-800' },
  { name: 'MongoDB', level: 3, category: 'database', iconClass: 'bg-green-600' },
  { name: 'Redis', level: 4, category: 'database', iconClass: 'bg-red-500' },
  
  // Cloud
  { name: 'Azure', level: 4, category: 'cloud', iconClass: 'bg-blue-500' },
  { name: 'Azure DevOps', level: 4, category: 'cloud', iconClass: 'bg-blue-600' },
  { name: 'Docker', level: 4, category: 'cloud', iconClass: 'bg-blue-700' },
  { name: 'Kubernetes', level: 3, category: 'cloud', iconClass: 'bg-blue-800' },
  
  // Tools
  { name: 'Git', level: 5, category: 'tools', iconClass: 'bg-orange-500' },
  { name: 'NuGet', level: 5, category: 'tools', iconClass: 'bg-blue-400' },
  { name: 'Visual Studio', level: 5, category: 'tools', iconClass: 'bg-purple-600' },
  { name: 'ReSharper', level: 4, category: 'tools', iconClass: 'bg-red-500' },
  
  // Architecture
  { name: 'Microservices', level: 4, category: 'architecture', iconClass: 'bg-neon-green' },
  { name: 'DDD', level: 4, category: 'architecture', iconClass: 'bg-yellow-500' },
  { name: 'CQRS', level: 4, category: 'architecture', iconClass: 'bg-purple-500' },
  { name: 'Event Sourcing', level: 3, category: 'architecture', iconClass: 'bg-red-500' },
];

const categories = [
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Базы данных' },
  { id: 'cloud', label: 'Облачные технологии' },
  { id: 'tools', label: 'Инструменты' },
  { id: 'architecture', label: 'Архитектура' },
];

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('backend');
  
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Технологический стек</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Основные технологии, которые я использую для разработки высоконагруженных и масштабируемых приложений
          </p>
        </div>
        
        {/* Фильтр по категориям */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all",
                activeCategory === category.id
                  ? "bg-neon-blue text-white"
                  : "bg-white/5 hover:bg-white/10"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Сетка технологий */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies
            .filter((tech) => tech.category === activeCategory)
            .map((tech) => (
              <div 
                key={tech.name} 
                className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-lg p-4 hover:border-neon-blue/30 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={cn("w-10 h-10 rounded-md flex items-center justify-center", tech.iconClass)}>
                    <span className="font-mono font-bold text-white">{tech.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{tech.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={cn(
                            "w-2 h-2 rounded-full mr-1",
                            i < tech.level 
                              ? "bg-neon-blue" 
                              : "bg-white/20"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
