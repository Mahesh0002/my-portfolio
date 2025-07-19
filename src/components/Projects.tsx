import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Jōtai – AI-Powered Productivity & Insights Dashboard',
      description: 'Jōtai is a futuristic, cyberpunk-themed productivity dashboard that gamifies daily tasks and integrates an intelligent personal assistant. Built with React, it features voice-controlled goal management, performance analytics, and real-time updates — all styled with glowing neon visuals and a responsive RPG-style interface.',
      keyFeatures: [
        'Voice-activated assistant (Gemini + Deepgram) to add/remove goals and interact with the dashboard',
        'Daily Quest system with visual progress tracking',
        'Analytics panel showing streaks, completion rate, and focus time',
        'Pomodoro Timer, Habit Tracker, and Inventory Notes',
        'Real-time data integration: Tech News, Stock Prices (Twelve Data), Weather Updates (OpenWeather), Currency Rates',
        'Daily Kanji learning with pronunciation support (VoiceRSS)'
      ],
      technologies: ['React.js', 'JavaScript', 'REST APIs', 'Gemini AI', 'Deepgram', 'Twelve Data', 'VoiceRSS', 'OpenWeather', 'Custom CSS'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 2,
      title: 'Campus Connect – Interactive Student Forum',
      description: 'Campus Connect is a modern web-based student forum designed to facilitate academic discussions, peer support, and collaborative learning. It allows students to post questions, participate in threaded conversations, and engage with topics in a clean, responsive interface.',
      keyFeatures: [
        'Post & reply system for Q&A and open discussions',
        'Thread categorization with topics and tags',
        'Simple and secure user authentication',
        'Admin controls for managing posts and users',
        'Fully responsive UI for both desktop and mobile devices'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript (Vanilla)'],
      links: {
        live: 'https://student-connect-web.github.io/testing0/',
        github: 'https://github.com/student-connect-web/testing0.git'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            Showcasing my journey through code, innovation, and problem-solving
          </p>
        </div>

        {/* Featured Projects */}
        <div>
          <h3 className="text-2xl font-bold text-portfolio-text mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="portfolio-card group">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xl font-bold text-portfolio-text">{project.title}</h4>
                    <div className="flex space-x-2">
                      {project.links.live && (
                        <Button size="sm" variant="secondary">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-portfolio-text-muted">{project.description}</p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-portfolio-text mb-3">Key Features:</h5>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, index) => (
                        <li key={index} className="text-sm text-portfolio-text-muted flex items-start">
                          <span className="text-primary mr-2">→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-portfolio-text mb-3">Tech Stack:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-portfolio-overlay text-portfolio-text text-xs rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
