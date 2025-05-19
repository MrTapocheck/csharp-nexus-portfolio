
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Определение типа навигационных пунктов
type NavItem = {
  label: string;
  href: string;
};

const mainNavItems: NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Блог', href: '/blog' },
  { label: 'Резюме', href: '/resume' },
  { label: 'Контакты', href: '/contact' },
];

const extraNavItems: NavItem[] = [
  { label: 'Проекты Github', href: '/github' },
  { label: 'NuGet Пакеты', href: '/nuget' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  
  const location = useLocation();
  
  // Отслеживание скролла для изменения стиля навигации
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link 
            to="/" 
            className="text-2xl font-mono font-bold neon-text-blue"
          >
            SENIOR<span className="text-white">.CS</span>
          </Link>
          
          {/* Основная навигация - десктоп */}
          <nav className="hidden md:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.href}
                href={item.href}
                isActive={location.pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Дополнительные разделы */}
            <div className="relative">
              <button
                className={cn(
                  "px-4 py-2 rounded-md flex items-center space-x-1 transition-colors",
                  "hover:bg-white/5"
                )}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Ещё</span>
                <ChevronDown size={16} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-black/90 backdrop-blur-md rounded-md shadow-lg border border-white/10 py-1 z-50">
                  {extraNavItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-sm hover:bg-white/5"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
          
          {/* Поисковая строка */}
          <div className="hidden md:block relative">
            <div 
              className={cn(
                "flex items-center transition-all duration-200",
                searchActive 
                  ? "bg-white/10 rounded-full pl-3 pr-1" 
                  : ""
              )}
            >
              <input 
                type="text" 
                placeholder="Поиск..." 
                className={cn(
                  "bg-transparent outline-none text-sm",
                  "transition-all duration-200",
                  searchActive 
                    ? "w-48 opacity-100" 
                    : "w-0 opacity-0"
                )}
              />
              <button 
                onClick={() => setSearchActive(!searchActive)}
                className="p-2 rounded-full hover:bg-white/5"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
          
          {/* Мобильное меню */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Мобильная навигация */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 mt-2">
            <nav className="flex flex-col space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-md",
                    location.pathname === item.href 
                      ? "bg-neon-blue/10 text-neon-blue" 
                      : "hover:bg-white/5"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {extraNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-2 rounded-md hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Поиск - мобильный */}
              <div className="px-4 py-2">
                <div className="flex items-center bg-white/10 rounded-full pl-3 pr-1">
                  <input 
                    type="text" 
                    placeholder="Поиск..." 
                    className="bg-transparent outline-none text-sm flex-1"
                  />
                  <button className="p-2 rounded-full hover:bg-white/5">
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Компонент навигационной ссылки с индикатором активности
const NavLink: React.FC<{ 
  href: string; 
  isActive: boolean;
  children: React.ReactNode;
}> = ({ href, isActive, children }) => {
  return (
    <Link
      to={href}
      className={cn(
        "px-4 py-2 rounded-md relative group",
        isActive 
          ? "text-neon-blue" 
          : "hover:bg-white/5"
      )}
    >
      <span>{children}</span>
      {isActive && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse-glow" />
      )}
    </Link>
  );
};

export default Navbar;
