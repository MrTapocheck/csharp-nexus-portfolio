
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import ParticlesBackground from '@/components/layout/ParticlesBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

type BlogTag = 'C#' | '.NET' | 'Azure' | 'Архитектура' | 'Производительность' | 'Лучшие практики';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: BlogTag[];
  image?: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Оптимизация производительности приложений ASP.NET Core',
    excerpt: 'Рассмотрим несколько эффективных способов увеличения производительности веб-приложений на ASP.NET Core...',
    date: '15 мая 2023',
    tags: ['C#', '.NET', 'Производительность'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    slug: 'aspnet-core-performance-optimization'
  },
  {
    id: '2',
    title: 'Микросервисная архитектура на платформе .NET',
    excerpt: 'Практическое руководство по построению масштабируемой микросервисной архитектуры с использованием .NET...',
    date: '3 апреля 2023',
    tags: ['.NET', 'Архитектура', 'Лучшие практики'],
    image: 'https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    slug: 'microservices-architecture-dotnet'
  },
  {
    id: '3',
    title: 'Эффективное использование Entity Framework Core',
    excerpt: 'Советы и трюки для оптимизации запросов и повышения производительности работы с Entity Framework Core...',
    date: '17 марта 2023',
    tags: ['C#', '.NET', 'Производительность', 'Лучшие практики'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    slug: 'entity-framework-core-tips'
  },
  {
    id: '4',
    title: 'Развертывание .NET приложений в Azure с использованием CI/CD',
    excerpt: 'Подробное руководство по настройке непрерывной интеграции и доставки для .NET приложений в Azure...',
    date: '25 февраля 2023',
    tags: ['.NET', 'Azure', 'Лучшие практики'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    slug: 'dotnet-azure-cicd'
  },
  {
    id: '5',
    title: 'Создание высокопроизводительных API на ASP.NET Core',
    excerpt: 'Лучшие практики построения масштабируемых и быстрых REST API с использованием ASP.NET Core...',
    date: '10 февраля 2023',
    tags: ['C#', '.NET', 'Производительность', 'Архитектура'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    slug: 'high-performance-aspnet-core-api'
  },
];

const allTags: BlogTag[] = ['C#', '.NET', 'Azure', 'Архитектура', 'Производительность', 'Лучшие практики'];

const Blog: React.FC = () => {
  const [activeTag, setActiveTag] = useState<BlogTag | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesTag = activeTag === 'all' || post.tags.includes(activeTag);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });
  
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Блог</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Статьи о разработке на C# и .NET, лучших практиках, архитектуре и производительности
            </p>
          </div>
          
          {/* Поиск и фильтры */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div className="flex flex-wrap gap-2">
              <TagButton 
                active={activeTag === 'all'}
                onClick={() => setActiveTag('all')}
              >
                Все статьи
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
            
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Поиск статей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-neon-blue transition-colors"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
          
          {/* Сетка статей */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
            
            {filteredPosts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-400">
                  Статьи не найдены. Попробуйте изменить поисковый запрос или выбрать другой тег.
                </p>
              </div>
            )}
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
          ? "bg-neon-blue text-white"
          : "bg-white/5 hover:bg-white/10"
      )}
    >
      {children}
    </button>
  );
};

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5 hover:border-neon-blue/50 transition-all group"
    >
      {post.image && (
        <div className="h-44 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="text-sm text-gray-400 mb-2">{post.date}</div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{post.title}</h3>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag} 
              className="inline-block px-2 py-1 text-xs bg-white/5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Blog;
