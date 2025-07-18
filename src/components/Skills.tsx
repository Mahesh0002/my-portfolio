import { Code, Database, Globe, Smartphone, GitBranch, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: 'Programming Languages',
      skills: [
        { name: 'C/C++', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'Java', level: 80 },
        // { name: 'TypeScript', level: 80 }
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 70 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 80 },
        // { name: 'Responsive Design', level: 88 }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 60 },
        // { name: 'Express.js', level: 70 },
        // { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 80 },
        // { name: 'REST APIs', level: 85 }
      ]
    },
    {
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        // { name: 'Postman', level: 80 },
        { name: 'Linux', level: 75 }
      ]
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Leadership', level: 85 },
        { name: 'Communication', level: 80 },
        { name: 'Project Management', level: 80 },
        { name: 'Mentoring', level: 75 }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React Native', level: 60 },
        { name: 'Next.js', level: 70 },
        // { name: 'Redux', level: 75 },
        // { name: 'Bootstrap', level: 85 },
        // { name: 'jQuery', level: 80 }
      ]
    }
  ];

const codingStats = [
  { platform: 'LeetCode', problems: '500+', rank: 'Top 80%', globalRank: '1.3M+' },
  { platform: 'CodeChef', rating: '1000+', stars: '2★' },
  // { platform: 'Codeforces', rating: '1600+', level: 'Specialist' },
  // { platform: 'GeeksforGeeks', problems: '300+', rank: 'Expert' }
];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and problem-solving abilities
          </p>
        </div>

        {/* Coding Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-portfolio-text mb-8 text-center">Coding Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pl-[400px]">
            {codingStats.map((stat, index) => (
              <div key={index} className="portfolio-card text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-portfolio-text mb-2">{stat.platform}</h4>
                <p className="text-primary font-bold text-xl mb-1">
                  {stat.problems || stat.rating ||stat.rank ||stat.globalRank }
                </p>
                <p className="text-portfolio-text-muted text-sm">
                  {stat.rank || stat.stars}
                  {/* {stat.rank || stat.stars || stat.level} */}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-portfolio-text">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-portfolio-text font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-portfolio-overlay rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-portfolio-text mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Data Structures & Algorithms',
              'Object-Oriented Programming',
              'Database Design',
              'System Design',
              // 'Agile Methodology',
              'Code Review',
              'Performance Optimization',
              'Testing & Debugging',
              // 'Cloud Computing',
              'DevOps Basics'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;