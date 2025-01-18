import { FC } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const App: FC = () => {
  const skills = {
    cloud: ['AWS', 'Azure', 'Synapse'],
    dataEngineering: ['Apache Kafka', 'PySpark', 'Airflow', 'Kinesis'],
    databases: ['SQL', 'S3', 'Glue'],
    visualization: ['Power BI', 'Tableau'],
    programming: ['Python']
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-800/80 backdrop-blur-sm shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-3xl font-extrabold gradient-text">
                Annwesha Mondal
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="section-container text-center">
          <div className="float-animation">
            <img 
              src="/your-profile-pic.jpg" 
              alt="Annwesha Mondal" 
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-purple-500/50"
            />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="gradient-text">Data Engineering</span>
            <br />
            <span className="text-gray-100">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Transforming complex data challenges into scalable solutions with modern data engineering practices
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              View Projects
            </a>
            <a href="#contact" className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
            <p>
              As a passionate Data Engineer, I specialize in building robust, scalable data pipelines and 
              architecting cloud-native solutions that drive business value. With expertise in both batch 
              and real-time processing, I transform complex data challenges into actionable insights.
            </p>
            <p>
              My experience spans the entire data engineering lifecycle - from ingestion to processing, 
              storage, and visualization. I'm particularly skilled in designing fault-tolerant, high-performance 
              data solutions using modern technologies like Apache Kafka, PySpark, and cloud platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Project</h2>
          <div className="bg-gray-900/50 rounded-xl shadow-xl border border-purple-700/50 
              hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Car Sales Analysis Pipeline</h3>
              <p className="text-gray-600 mb-6">
                End-to-end ETL pipeline for analyzing car sales data, featuring cloud-native architecture 
                and advanced data processing capabilities.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Automated data ingestion from multiple sources</li>
                    <li>Real-time data processing with Apache Kafka</li>
                    <li>Cloud-native architecture using Azure services</li>
                    <li>Advanced analytics and visualization capabilities</li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Annwesha24/Car-Sales-Analysis-DE-Project"
                    target="_blank"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <FaGithub className="mr-2" /> View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-900">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-800/50 rounded-xl p-6 border border-purple-700/50 
                  backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:border-purple-500">
                <h3 className="text-xl font-semibold mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Let's Connect</h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:annwesha.mondal99@gmail.com"
              className="flex items-center text-gray-300 hover:text-purple-400 transition"
            >
              <FaEnvelope className="mr-2" /> Email
            </a>
            <a 
              href="https://www.linkedin.com/in/annwesha-mondal/"
              target="_blank"
              className="flex items-center text-gray-300 hover:text-purple-400 transition"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a 
              href="https://github.com/Annwesha24"
              target="_blank"
              className="flex items-center text-gray-300 hover:text-purple-400 transition"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300">
        <div className="section-container text-center py-8">
          <p>© 2024 Annwesha Mondal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App; 