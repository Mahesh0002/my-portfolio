import { GraduationCap, Award, Code, Users } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Vardhaman College of Engineering',
      period: '2023 - 2027 (Expected)',
      grade: 'CGPA: 8.6',
      status: 'Current'
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Sri Chaitanya',
      period: '2021 - 2023',
      grade: 'Percentage: 80%',
      status: 'Completed'
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'Competitive Programming',
      description: 'Active participant in coding contests with strong problem-solving skills'
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: 'Frontend Development',
      description: 'Proficient in React, JavaScript, and modern web technologies'
    },
    // {
    //   icon: <Users className="w-6 h-6 text-primary" />,
    //   title: 'Team Leadership',
    //   description: 'Led multiple project teams and mentored junior developers'
    // }
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Telugu', level: 'Native' }
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            Passionate about transforming ideas into elegant code solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-text mb-4">My Journey</h3>
            <div className="space-y-4 text-portfolio-text-muted leading-relaxed">
              <p>
                I'm Mahesh Ganji, a Computer Science undergraduate with a strong foundation in programming and problem-solving. 
                I've been consistently building my skills in Data Structures and Algorithms (C++), and actively working on full-stack 
                web development using React, Tailwind CSS, Node.js, and MongoDB.
              </p>
              <p>
                I'm deeply curious about modern tech, especially in areas like Artificial Intelligence, Cloud Computing (AWS basics), 
                and Software Engineering principles. I'm also passionate about competitive programming, which has helped me enhance my 
                logical thinking and code optimization skills.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-portfolio-text mb-4">Languages</h4>
              <div className="grid grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold text-lg">{lang.name.charAt(0)}</span>
                    </div>
                    <p className="text-sm font-medium text-portfolio-text">{lang.name}</p>
                    <p className="text-xs text-portfolio-text-muted">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-text mb-4">Key Highlights</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="portfolio-card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-portfolio-text mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-portfolio-text-muted">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-portfolio-text mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="portfolio-card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-portfolio-text">
                        {edu.degree}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-green-500/20 text-green-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-portfolio-text-muted font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-portfolio-text-muted text-sm mb-2">
                      {edu.period}
                    </p>
                    <p className="text-primary font-semibold">
                      {edu.grade}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;