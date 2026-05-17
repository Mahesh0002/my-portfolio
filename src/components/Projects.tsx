import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Traffic Accident Severity Classification',
      description: 'A deep learning pipeline designed to predict the severity of traffic accidents from visual data. The architecture leverages advanced computer vision models for robust spatial-temporal feature extraction and classification to enhance road safety analysis.',
      keyFeatures: [
        'Image-based severity classification model achieving 73-74% accuracy',
        'Integration of YOLO v11m and EfficientNet B0 for high-performance feature extraction',
        'Implementation of a hybrid CNN-BiLSTM architecture for sequential data modeling',
        'Optimized and deployed for efficient real-time inference'
      ],
      technologies: ['Python', 'YOLO v11m', 'EfficientNet B0', 'CNN-BiLSTM', 'Deep Learning', 'Computer Vision'],
      links: {
        live: 'https://trafficaccidentseverity.l7310956.workers.dev/',
        github: 'https://github.com/Mahesh0002/Accident-Severity'
      }
    },
    {
      id: 2,
      title: 'Project Model Omega (Alpha-Omega Sovereign)',
      description: 'A high-performance symbolic regression engine and simulation environment built to model complex physical systems. The project focuses on non-linear dynamics, utilizing hardware-accelerated parallel computing to optimize resource-intensive algorithms.',
      keyFeatures: [
        'Development of the OMEGA Protocol for advanced mathematical modeling and simulation',
        'Implementation of a "C++ Nitro Hybrid" architecture targeting the Duffing Oscillator',
        'Hardware-accelerated parallel computing leveraging CUDA for high-speed execution',
        'Deployed and debugged within Google Colab environments for rapid iteration'
      ],
      technologies: ['C++', 'CUDA', 'Python', 'Symbolic Regression', 'Machine Learning', 'Physics Simulation'],
      links: {
        live: '',
        github: 'https://github.com/Mahesh0002/projectOmega'
      }
    },
    {
      id: 3,
      title: 'Jōtai – AI-Powered Interface & Automation Dashboard',
      description: 'An advanced, voice-controlled interface utilizing modern state management and asynchronous API orchestration. It integrates sophisticated LLMs and speech recognition pipelines to process natural language into actionable, real-time data visualizaitons.',
      keyFeatures: [
        'Integration of Gemini AI and Deepgram for low-latency Voice-to-Text and NLP processing',
        'Real-time data stream orchestration (Twelve Data, OpenWeather) via asynchronous REST APIs',
        'Custom UI implementation featuring clean Glassmorphism and Cyberpunk design aesthetics',
        'Dynamic state management for complex, multi-layered user interactions'
      ],
      technologies: ['React.js', 'Gemini AI', 'Deepgram API', 'REST APIs', 'Asynchronous JavaScript', 'UI/UX Design'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 4,
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
        live: '#',
        github: '#'
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
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}

                      {project.links.github && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
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
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/student-connect-web" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
