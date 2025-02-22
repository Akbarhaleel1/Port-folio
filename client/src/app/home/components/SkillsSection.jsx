


import React, { useState, useEffect } from 'react';
import { 
  CodeIcon,
  DatabaseIcon,
  CloudIcon,
  LayersIcon,
  WrenchIcon,
  BracesIcon,
  CircuitBoardIcon,
  GemIcon
} from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animateCards, setAnimateCards] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    setAnimateCards(false);
    setTimeout(() => setAnimateCards(true), 100);
  }, [activeCategory]);

  const skillCategories = {
    all: { 
      name: 'All Skills', 
      Icon: CircuitBoardIcon,
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    frontend: { 
      name: 'Frontend', 
      Icon: CodeIcon,
      gradient: 'from-cyan-500 via-blue-500 to-purple-500'
    },
    backend: { 
      name: 'Backend', 
      Icon: BracesIcon,
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
    database: { 
      name: 'Database', 
      Icon: DatabaseIcon,
      gradient: 'from-orange-500 via-red-500 to-purple-500'
    },
    devops: { 
      name: 'DevOps', 
      Icon: CloudIcon,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500'
    },
    architecture: { 
      name: 'Architecture', 
      Icon: LayersIcon,
      gradient: 'from-purple-500 via-violet-500 to-indigo-500'
    },
    tools: { 
      name: 'Tools', 
      Icon: WrenchIcon,
      gradient: 'from-yellow-500 via-orange-500 to-red-500'
    }
  };

  // Rest of the skills data remains the same
  const skills = {
    frontend: [
      { name: 'React', level: 95, badge: 'Expert', years: '3+' },
      { name: 'TypeScript', level: 90, badge: 'Advanced', years: '3+' },
      { name: 'Next.js', level: 88, badge: 'Advanced', years: '3+' },
      { name: 'Vue.js', level: 85, badge: 'Advanced', years: '1+' },
      { name: 'Tailwind', level: 92, badge: 'Expert', years: '4+' },
      { name: 'GraphQL', level: 85, badge: 'Advanced', years: '3+' }
    ],
    backend: [
      { name: 'Node.js', level: 92, badge: 'Expert', years: '5+' },
      { name: 'Java', level: 85, badge: 'Advanced', years: '1+' },
    ],
    database: [
      { name: 'PostgreSQL', level: 90, badge: 'Expert', years: '3+' },
      { name: 'MongoDB', level: 88, badge: 'Advanced', years: '3+' },
      { name: 'Redis', level: 85, badge: 'Advanced', years: '1+' },
      { name: 'Elasticsearch', level: 82, badge: 'Advanced', years: '1+' }
    ],
    devops: [
      { name: 'Docker', level: 90, badge: 'Expert', years: '2+' },
      { name: 'Kubernetes', level: 85, badge: 'Advanced', years: '2+' },
      { name: 'AWS', level: 88, badge: 'Advanced', years: '3+' },
      { name: 'CI/CD', level: 92, badge: 'Expert', years: '1+' }
    ],
    architecture: [
      { name: 'Microservices', level: 90, badge: 'Expert', years: '2+' },
      { name: 'System Design', level: 88, badge: 'Advanced', years: '2+' },
      { name: 'API Design', level: 92, badge: 'Expert', years: '3+' },    ],
    tools: [
      { name: 'Git', level: 95, badge: 'Expert', years: '3+' },
      { name: 'Webpack', level: 88, badge: 'Advanced', years: '3+' },
      { name: 'Jest', level: 90, badge: 'Expert', years: '3+' },
      { name: 'Jenkins', level: 85, badge: 'Advanced', years: '1+' }
    ]
  };

  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return Object.values(skills).flat();
    }
    return skills[activeCategory] || [];
  };

  const SkillCard = ({ skill, index }) => {
    const delay = (index % 10) * 100;
    const translateY = animateCards ? '0' : '20px';
    const opacity = animateCards ? '1' : '0';

    const handleKeyPress = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        setSelectedSkill(skill);
        event.preventDefault();
      }
    };

    return (
      <div
        role="button"
        tabIndex={0}
        aria-pressed={selectedSkill?.name === skill.name}
        aria-label={`${skill.name}: ${skill.badge} level with ${skill.years} years experience`}
        className="group relative outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-2xl"
        style={{
          transform: `translateY(${translateY})`,
          opacity: opacity,
          transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
        }}
        onMouseEnter={() => setSelectedSkill(skill)}
        onMouseLeave={() => setSelectedSkill(null)}
        onFocus={() => setSelectedSkill(skill)}
        onBlur={() => setSelectedSkill(null)}
        onKeyDown={handleKeyPress}
        onClick={() => setSelectedSkill(skill)}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 group-focus:opacity-100 transition duration-500" />
        <div className="relative h-48 p-6 rounded-2xl bg-gray-900/90 border border-gray-800 backdrop-blur-xl transform group-hover:-translate-y-2 group-focus:-translate-y-2 transition-all duration-300">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {skill.name}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {skill.badge}
                </span>
                <span className="text-gray-400 text-sm">{skill.years} years</span>
              </div>
            </div>
            
            <div className="mt-4">
              <div 
                role="progressbar" 
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency level`}
                className="relative h-2 w-full bg-gray-800 rounded-full overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="mt-2 text-right">
                <span className="text-sm text-gray-400">Proficiency</span>
                <span className="ml-2 text-sm font-medium text-white">{skill.level}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden" role="region" aria-label="Technical Skills Section">
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <GemIcon className="w-8 h-8 text-purple-500 mr-2" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Technical Expertise
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive overview of skills and technologies I've mastered throughout my journey
          </p>
        </div>

        {/* Category Navigation */}
        <nav aria-label="Skill categories" className="mb-16">
          <div className="flex justify-center flex-wrap gap-3" role="tablist">
            {Object.entries(skillCategories).map(([key, { name, Icon, gradient }]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                role="tab"
                aria-selected={activeCategory === key}
                aria-controls={`${key}-panel`}
                className={`
                  group flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
                  ${activeCategory === key
                    ? `bg-gradient-to-r ${gradient} text-white shadow-lg shadow-purple-500/20`
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
                  }
                `}
              >
                <Icon 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeCategory === key ? 'scale-110' : 'group-hover:scale-110'
                  }`}
                  aria-hidden="true"
                />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Skills Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          role="tabpanel"
          id={`${activeCategory}-panel`}
          aria-label={`${skillCategories[activeCategory].name} skills`}
        >
          {getSkillsToDisplay().map((skill, index) => (
            <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;