
import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticlesBackground from '@/components/layout/ParticlesBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

type TimelineItem = {
  id: string;
  period: string;
  company: string;
  position: string;
  description: string;
  technologies: string[];
};

const careerHistory: TimelineItem[] = [
  {
    id: '1',
    period: '2021 — н.в.',
    company: 'ФинТех Инновации',
    position: 'Ведущий C# разработчик',
    description: 'Руководство командой разработчиков, проектирование и реализация микросервисной архитектуры для высоконагруженной платежной системы. Оптимизация производительности и масштабирования системы.',
    technologies: ['C#', 'ASP.NET Core', 'Microservices', 'Azure', 'SQL Server', 'Redis', 'RabbitMQ']
  },
  {
    id: '2',
    period: '2019 — 2021',
    company: 'Цифровые Решения',
    position: 'Senior C# разработчик',
    description: 'Разработка корпоративной CRM-системы с интеграцией множества внешних API. Проектирование архитектуры, оптимизация производительности базы данных, реализация CI/CD пайплайнов.',
    technologies: ['C#', '.NET Core', 'Entity Framework', 'Azure DevOps', 'SQL Server', 'TypeScript']
  },
  {
    id: '3',
    period: '2017 — 2019',
    company: 'ТехноСофт',
    position: 'C# разработчик',
    description: 'Разработка настольных приложений для автоматизации бизнес-процессов. Создание модулей генерации отчетов, интеграция с различными API и базами данных.',
    technologies: ['C#', 'WPF', 'MVVM', 'SQLite', 'PostgreSQL', 'REST API']
  },
  {
    id: '4',
    period: '2015 — 2017',
    company: 'ИТ-Консалтинг',
    position: 'Junior C# разработчик',
    description: 'Разработка и поддержка внутренних корпоративных систем. Создание модулей для обработки данных, работа с SQL Server, разработка отчетов.',
    technologies: ['C#', '.NET Framework', 'ASP.NET MVC', 'SQL Server', 'jQuery']
  },
];

type EducationItem = {
  id: string;
  period: string;
  institution: string;
  degree: string;
};

const education: EducationItem[] = [
  {
    id: '1',
    period: '2010 — 2015',
    institution: 'Московский Технический Университет',
    degree: 'Магистр информационных технологий'
  },
  {
    id: '2',
    period: '2019',
    institution: 'Microsoft Learn',
    degree: 'Сертификация Microsoft Certified: Azure Developer Associate'
  },
  {
    id: '3',
    period: '2021',
    institution: 'Coursera',
    degree: 'Специализация "Архитектура программного обеспечения"'
  }
];

const Resume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  
  const handleDownloadPDF = () => {
    // В реальном приложении здесь была бы логика генерации PDF
    alert('Функция загрузки PDF будет реализована позже');
  };
  
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Резюме</h1>
              <p className="text-xl text-gray-300">
                Мой профессиональный путь и опыт
              </p>
            </div>
            
            <Button 
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 bg-neon-blue hover:bg-neon-blue/90"
            >
              <Download size={16} />
              <span>Скачать PDF</span>
            </Button>
          </div>
          
          <div ref={resumeRef} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-10">
            {/* Личная информация */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 font-mono neon-text-blue">Личная информация</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-mono text-lg mb-3">Иван Петров</h3>
                  <p className="text-gray-300 mb-1">Senior C# разработчик</p>
                  <p className="text-gray-400">Более 8 лет опыта разработки корпоративных приложений на C# и .NET</p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="font-medium w-20">Email:</span>
                    <a href="mailto:contact@example.com" className="text-neon-blue">contact@example.com</a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-20">Телефон:</span>
                    <span>+7 (999) 123-45-67</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-20">Локация:</span>
                    <span>Москва, Россия</span>
                  </p>
                </div>
              </div>
            </section>
            
            {/* Опыт работы */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 font-mono neon-text-blue">Опыт работы</h2>
              <div className="relative pl-6 border-l border-white/10">
                {careerHistory.map((item, index) => (
                  <TimelineCard key={item.id} item={item} isLast={index === careerHistory.length - 1} />
                ))}
              </div>
            </section>
            
            {/* Образование */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 font-mono neon-text-blue">Образование</h2>
              <div className="relative pl-6 border-l border-white/10">
                {education.map((item, index) => (
                  <EducationCard key={item.id} item={item} isLast={index === education.length - 1} />
                ))}
              </div>
            </section>
            
            {/* Навыки */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 font-mono neon-text-blue">Технические навыки</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Языки программирования</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="C#" level={95} />
                    <SkillBadge name="TypeScript" level={75} />
                    <SkillBadge name="SQL" level={85} />
                    <SkillBadge name="HTML/CSS" level={70} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Фреймворки</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name=".NET Core" level={95} />
                    <SkillBadge name="ASP.NET" level={90} />
                    <SkillBadge name="Entity Framework" level={85} />
                    <SkillBadge name="WPF" level={80} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Базы данных</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="SQL Server" level={90} />
                    <SkillBadge name="PostgreSQL" level={80} />
                    <SkillBadge name="MongoDB" level={70} />
                    <SkillBadge name="Redis" level={75} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Облачные технологии</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Azure" level={85} />
                    <SkillBadge name="Docker" level={80} />
                    <SkillBadge name="Kubernetes" level={65} />
                    <SkillBadge name="CI/CD" level={85} />
                  </div>
                </div>
              </div>
            </section>
            
            {/* Дополнительная информация */}
            <section>
              <h2 className="text-2xl font-bold mb-4 font-mono neon-text-blue">Дополнительная информация</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  <span className="font-medium">Языки:</span> Русский (родной), Английский (свободное владение)
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Интересы:</span> Открытый исходный код, архитектура программного обеспечения, машинное обучение, технические конференции
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const TimelineCard: React.FC<{ 
  item: TimelineItem;
  isLast: boolean;
}> = ({ item, isLast }) => {
  return (
    <div className={cn("relative pb-10", !isLast && "mb-6")}>
      <div className="absolute -left-9 mt-1 w-5 h-5 rounded-full border-4 border-neon-blue bg-dark"></div>
      <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <div className="flex flex-wrap justify-between mb-2">
          <span className="bg-neon-blue/10 text-neon-blue text-sm px-3 py-1 rounded-full font-mono">
            {item.period}
          </span>
          <h3 className="font-bold">{item.company}</h3>
        </div>
        <h4 className="text-lg font-mono mb-3">{item.position}</h4>
        <p className="text-gray-300 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span 
              key={tech} 
              className="inline-block px-2 py-1 text-xs bg-white/5 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationCard: React.FC<{
  item: EducationItem;
  isLast: boolean;
}> = ({ item, isLast }) => {
  return (
    <div className={cn("relative pb-8", !isLast && "mb-6")}>
      <div className="absolute -left-9 mt-1 w-5 h-5 rounded-full border-4 border-neon-green bg-dark"></div>
      <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <div className="flex flex-wrap justify-between mb-1">
          <span className="bg-neon-green/10 text-neon-green text-sm px-3 py-1 rounded-full font-mono">
            {item.period}
          </span>
          <h3 className="font-bold">{item.institution}</h3>
        </div>
        <h4 className="text-lg font-mono">{item.degree}</h4>
      </div>
    </div>
  );
};

const SkillBadge: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div className="bg-white/5 px-3 py-1 rounded-full flex items-center space-x-2">
      <span className="text-sm">{name}</span>
      <span className="text-xs text-gray-400">{level}%</span>
    </div>
  );
};

export default Resume;
