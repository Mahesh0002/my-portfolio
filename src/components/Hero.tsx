import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Computer Science Student',
    'Frontend Developer',
    'Competitive Programmer',
    'Full-Stack Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    
    if (currentIndex < currentRoleText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentRoleText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayedText('');
        setCurrentRole((currentRole + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentRole, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Optional background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ 
            backgroundImage: `url('/src/bg5.jpg')` // You can replace this with any image path
          }}
        ></div>
        
        {/* Animated elements overlay */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute top-[20%] left-[10%] w-4 h-4 bg-primary rounded-full animate-pulse particle-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-[60%] left-[15%] w-3 h-3 bg-primary-glow rounded-full animate-pulse particle-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-primary rounded-full animate-pulse particle-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-[40%] right-[10%] w-5 h-5 bg-primary-glow/70 rounded-full animate-pulse particle-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[70%] left-[70%] w-3 h-3 bg-primary rounded-full animate-pulse particle-float" style={{ animationDelay: '3s' }}></div>
          
          {/* Orbital elements */}
          <div className="absolute top-1/3 left-1/4 w-48 h-48 border border-primary/20 rounded-full orbit-animation"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-primary-glow/30 rounded-full orbit-animation" style={{ animationDelay: '3s', animationDirection: 'reverse' }}></div>
          
          {/* Gradient waves */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-primary/10 to-transparent rounded-full wave-animation"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-l from-primary-glow/10 to-transparent rounded-full wave-animation" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-portfolio-text">Mahesh</span>
                <br />
                <span className="text-gradient">Ganji</span>
              </h1>
              <div className="h-16 flex items-center">
                <span className="text-xl md:text-2xl text-portfolio-text-muted">
                  {displayedText}
                  <span className="typing-animation"></span>
                </span>
              </div>
            </div>

            <p className="text-lg text-portfolio-text-muted max-w-xl leading-relaxed">
              Computer Science undergraduate at Vardhaman College of Engineering, focused on building clean, responsive UIs with React, 
              JavaScript, HTML, and CSS. Enthusiastic about solving real-world problems and constantly growing through coding challenges and 
              hands-on projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/Resume. (1).pdf" download>
              <Button size="lg" className="glow-effect group">
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              </a>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/Mahesh0002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/g-mahesh-781237283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:maheshganji057@gmail.com"
                className="text-portfolio-text-muted hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow relative">
                <img
                  src="/image.jpg"
                  alt="Mahesh Ganji"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div> */}
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/20 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-8 w-3 h-3 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;