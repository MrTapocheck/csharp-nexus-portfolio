
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-neon-blue/10 rounded-full">
              <span className="text-sm font-mono neon-text-blue">Senior C# разработчик</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Создаю <span className="neon-text-blue">надёжные</span> и <span className="neon-text-green">масштабируемые</span> решения на C#
            </h1>
            <p className="text-lg text-gray-300">
              Многолетний опыт разработки корпоративных приложений, 
              веб-систем и высоконагруженных сервисов на платформе .NET.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                className="bg-neon-blue hover:bg-neon-blue/90 text-white font-medium rounded-md px-8 py-6"
              >
                <Link to="/portfolio">
                  Смотреть портфолио
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="border-white/20 hover:bg-white/5 rounded-md px-8 py-6"
              >
                <Link to="/contact">
                  Связаться со мной
                </Link>
              </Button>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-gray-400">Стек технологий</p>
              <div className="flex flex-wrap gap-4 pt-3">
                <TechBadge label=".NET Core" />
                <TechBadge label="ASP.NET" />
                <TechBadge label="Azure" />
                <TechBadge label="SQL Server" />
                <TechBadge label="Entity Framework" />
              </div>
            </div>
          </div>
          
          {/* Правая сторона - декоративный код */}
          <div className="hidden md:block">
            <pre className="code-block animate-float overflow-hidden text-left">
              <code>
                <span className="text-purple-400">using</span>{" "}
                <span className="text-blue-300">System</span>;{"\n"}
                <span className="text-purple-400">using</span>{" "}
                <span className="text-blue-300">System.Threading.Tasks</span>;{"\n"}
                {"\n"}
                <span className="text-green-400">// Профессиональный С# разработчик</span>{"\n"}
                <span className="text-blue-400">public class</span>{" "}
                <span className="text-yellow-300">Developer</span>{"\n"}
                {"{"}{"\n"}
                {"    "}
                <span className="text-blue-400">private readonly</span>{" "}
                <span className="text-blue-300">IExperience</span>{" "}
                <span className="text-gray-300">_experience</span>;{"\n"}
                {"\n"}
                {"    "}
                <span className="text-blue-400">public</span>{" "}
                <span className="text-yellow-300">Developer</span>(
                <span className="text-blue-300">IExperience</span>{" "}
                <span className="text-gray-300">experience</span>){"\n"}
                {"    "}{"{"}
                {"\n"}{"        "}
                <span className="text-gray-300">_experience</span>{" = "}
                <span className="text-gray-300">experience</span>;{"\n"}
                {"    "}{"}"}{"\n"}
                {"\n"}
                {"    "}
                <span className="text-blue-400">public async</span>{" "}
                <span className="text-blue-300">Task</span>
                {"<"}
                <span className="text-blue-300">Solution</span>
                {">"}
                {" "}
                <span className="text-neon-green">CreateSolution</span>(
                <span className="text-blue-300">Project</span>{" "}
                <span className="text-gray-300">project</span>){"\n"}
                {"    "}{"{"}
                {"\n"}{"        "}
                <span className="text-green-400">// Разработка высоконагруженных систем</span>{"\n"}
                {"        "}
                <span className="text-purple-400">var</span>{" "}
                <span className="text-gray-300">architecture</span>{" = "}
                <span className="text-purple-400">await</span>{" "}
                <span className="text-neon-green">DesignArchitecture</span>({" "}
                <span className="text-gray-300">project.Requirements</span>{" });"}
                {"\n"}{"        "}
                <span className="text-purple-400">var</span>{" "}
                <span className="text-gray-300">code</span>{" = "}
                <span className="text-purple-400">await</span>{" "}
                <span className="text-neon-green">WriteCleanCode</span>({" "}
                <span className="text-gray-300">architecture</span>{" });"}
                {"\n"}{"        "}
                <span className="text-purple-400">var</span>{" "}
                <span className="text-gray-300">tests</span>{" = "}
                <span className="text-purple-400">await</span>{" "}
                <span className="text-neon-green">CreateUnitTests</span>({" "}
                <span className="text-gray-300">code</span>{" });"}
                {"\n"}{"        "}
                {"\n"}{"        "}
                <span className="text-purple-400">return new</span>{" "}
                <span className="text-blue-300">Solution</span>(
                <span className="text-gray-300">architecture, code, tests</span>);{"\n"}
                {"    "}{"}"}{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

// Компонент бейджа технологии
const TechBadge: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="inline-flex items-center px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors">
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default Hero;
