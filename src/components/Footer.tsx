import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Mahesh0002',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/g-mahesh-781237283/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:maheshganji057@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-portfolio-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Mahesh Ganji</h3>
            <p className="text-portfolio-text-muted mb-6 max-w-md">
              Computer Science student passionate about creating innovative solutions 
              through code. Always excited to take on new challenges and collaborate 
              on meaningful projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-portfolio-text-muted hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-portfolio-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-portfolio-text-muted hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-portfolio-text mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-portfolio-text-muted">
                <a href="mailto:mahesh.ganji@example.com" className="hover:text-primary transition-colors">
                  maheshganji057@gmail.com
                </a>
              </p>
              <p className="text-portfolio-text-muted">
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 70324 36352
                </a>
              </p>
              <p className="text-portfolio-text-muted">Hyderabad, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-portfolio-text-muted text-sm">
              © {currentYear} Mahesh Ganji. All rights reserved.
            </p>
            {/* <p className="text-portfolio-text-muted text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind CSS
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;