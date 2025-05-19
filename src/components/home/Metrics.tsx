
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

type Metric = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  iconClassName?: string;
};

const metrics: Metric[] = [
  {
    label: 'Лет опыта',
    value: 8, 
    suffix: '+',
    description: 'Непрерывной разработки на C# и .NET',
    iconClassName: 'bg-gradient-to-br from-neon-blue to-blue-700'
  },
  {
    label: 'Проектов',
    value: 42,
    description: 'Успешно реализованных проектов',
    iconClassName: 'bg-gradient-to-br from-purple-600 to-neon-blue'
  },
  {
    label: 'Звёзд на GitHub',
    value: 720,
    description: 'На репозиториях с открытым кодом',
    iconClassName: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  },
  {
    label: 'Загрузок',
    value: 25,
    suffix: 'K+',
    description: 'NuGet пакетов с моими библиотеками',
    iconClassName: 'bg-gradient-to-br from-neon-green to-green-600'
  }
];

const Metrics: React.FC = () => {
  return (
    <section className="py-16 bg-black/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MetricCard: React.FC<{ metric: Metric }> = ({ metric }) => {
  const [count, setCount] = useState(0);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  // Запуск анимации при появлении компонента в поле видимости
  useEffect(() => {
    if (inView && !isAnimationStarted) {
      setIsAnimationStarted(true);
      let start = 0;
      const end = metric.value;
      const duration = 2000;
      let startTime: number | null = null;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * end);
        
        setCount(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, isAnimationStarted, metric.value]);
  
  return (
    <div 
      ref={ref}
      className="glass-card p-6 transition-all duration-300 hover:border-neon-blue/30"
    >
      <div 
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          metric.iconClassName
        )}
      >
        <span className="text-white text-xl font-bold">{metric.label.charAt(0)}</span>
      </div>
      
      <div className="flex items-baseline space-x-1">
        <h3 className="text-3xl md:text-4xl font-bold neon-text-blue">
          {isAnimationStarted ? count : 0}
        </h3>
        {metric.suffix && (
          <span className="text-2xl md:text-3xl font-bold neon-text-blue">{metric.suffix}</span>
        )}
      </div>
      
      <h4 className="text-xl font-medium mt-2">{metric.label}</h4>
      <p className="text-gray-400 mt-1">{metric.description}</p>
    </div>
  );
};

export default Metrics;
