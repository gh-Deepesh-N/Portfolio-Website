import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="main-content">
        {/* Hero Section */}
        <section className="section">
          <div className="hero-content">
            <p className="text-green mb-4 nav-link">Hi, my name is</p>
            <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-slate-lightest)' }}>
              Deepesh N.
            </h1>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-slate-light)' }}>
              I build AI & ML solutions.
            </h2>
            <p className="text-slate mb-8" style={{ maxWidth: '40rem' }}>
              I'm a Computer Science Engineer specializing in AI and ML, passionate about leveraging technology to drive impactful solutions. 
              Currently focused on developing innovative machine learning models and intelligent systems.
            </p>
            <div className="flex gap-4">
              <a href="#work" className="btn">View My Work</a>
              <a href="mailto:ndeepesh2004@gmail.com" className="btn">Contact Me</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 py-20">
          <h2 className="section-heading">About Me</h2>
          <div className="grid grid-2">
            <div className="text-slate">
              <p className="mb-4">
                I'm a Computer Science Engineer with a specialization in AI and ML, currently pursuing my B.Tech at SRM University with an impressive CGPA of 9.55/10.
              </p>
              <p className="mb-4">
                My expertise spans across machine learning, software development, and IoT, with a particular focus on developing innovative solutions that make a real impact.
              </p>
              <p className="mb-4">
                I'm passionate about leveraging cutting-edge technologies to solve complex problems and create intelligent systems that drive positive change.
              </p>
            </div>
            <div>
              <h3 className="text-slate-lightest" style={{ fontSize: '1.25rem', fontWeight: 600 }}>Skills</h3>
              <div className="grid grid-2 gap-4">
                <div>
                  <h4 className="text-green mb-2">Languages</h4>
                  <p className="text-slate">Python, C++, C, Java, SQL</p>
                </div>
                <div>
                  <h4 className="text-green mb-2">Technologies</h4>
                  <p className="text-slate">TensorFlow, Docker, Google Vision API, Azure IoT, AWS</p>
                </div>
                <div>
                  <h4 className="text-green mb-2">Tools</h4>
                  <p className="text-slate">Git, VS Code, PostgreSQL, Orange, Spyder</p>
                </div>
                <div>
                  <h4 className="text-green mb-2">Certifications</h4>
                  <p className="text-slate">Oracle Cloud, AWS ML, NPTEL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - full width */}
        <section id="experience" className="bg-navy-light py-20">
          <div className="section-inner">
            <div className="section-box">
              <h2 className="section-heading">Experience</h2>
              <div>
                <div className="card">
                  <h3 className="text-slate-lightest" style={{ fontSize: '1.25rem', fontWeight: 600 }}>SWD/ML Intern</h3>
                  <h4 className="text-green mb-4">SecuQR India Pvt Ltd • Oct 2022 - Jan 2024</h4>
                  <ul style={{ color: 'var(--color-slate)' }}>
                    <li>Developed a Deep learning model for counterfeit QR code detection with 94% accuracy</li>
                    <li>Implemented web-scraping tool using BeautifulSoup4 for court case data analysis</li>
                    <li>Collaborated with teams to improve system efficiency and functionality</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-slate-lightest" style={{ fontSize: '1.25rem', fontWeight: 600 }}>Machine Learning Intern</h3>
                  <h4 className="text-green mb-4">Croatia Technologies • June 2023 - July 2023</h4>
                  <ul style={{ color: 'var(--color-slate)' }}>
                    <li>Developed CNN-based model for potato disease classification using PlantVillage dataset</li>
                    <li>Implemented data preprocessing, augmentation, and model optimization</li>
                    <li>Utilized TensorFlow and Keras for model training and optimization</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-slate-lightest" style={{ fontSize: '1.25rem', fontWeight: 600 }}>Machine Learning Intern</h3>
                  <h4 className="text-green mb-4">Energy7 • Present</h4>
                  <ul style={{ color: 'var(--color-slate)' }}>
                    <li>Working on Predictive Maintenance solutions for Indian Railways</li>
                    <li>Analyzing point machine time series data for maintenance optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="px-6 py-20">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="grid grid-2">
            {/* GreenPulse Project */}
            <div className="card" style={{ position: 'relative' }}>
              <a href="https://github.com/gh-Deepesh-N/greenpulse-Smart-EV-battery-health-monitoring-system" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <svg width="24" height="24" fill="none" stroke="var(--color-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
              <h3 className="text-slate-lightest" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-green)' }}>GreenPulse - Smart EV battery health monitoring system</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.5rem 0' }}>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Python</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Node.js</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>MongoDB</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Gemini API</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Random Forest</span>
              </div>
              <p className="text-slate mb-4">AI/ML,Full Stack</p>
              <ul style={{ color: 'var(--color-slate)' }}>
                <li>Developed ML model using Random Forest Regressor to predict battery SoH and provide charging recommendations</li>
                <li>Implemented Gemini API-based chatbot for real-time user queries on battery health and maintenance</li>
                <li>Created interactive dashboard to display battery metrics and provide maintenance alerts</li>
              </ul>
            </div>

            <div className="card" style={{ position: 'relative' }}>
              <a href="https://github.com/gh-Deepesh-N/srm-intelli-route" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <svg width="24" height="24" fill="none" stroke="var(--color-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
              <h3 className="text-slate-lightest" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-green)' }}>SRM-Intelli-Route</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.5rem 0' }}>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Flask</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Google Maps API</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Speech Recognition</span>
              </div>
              <p className="text-slate mb-4">Smart Campus Routing System</p>
              <ul style={{ color: 'var(--color-slate)' }}>
                <li>Developed Flask web application with Google Maps API integration</li>
                <li>Implemented speech recognition and text-to-speech features</li>
                <li>Created personalized navigation assistance system</li>
              </ul>
            </div>

            <div className="card" style={{ position: 'relative' }}>
              <a href="https://github.com/gh-Deepesh-N/AI-CAM" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <svg width="24" height="24" fill="none" stroke="var(--color-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
              <h3 className="text-slate-lightest" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-green)' }}>AI-Camera using Google Vision API</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.5rem 0' }}>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>ESP32-CAM</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Google Vision API</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Python</span>
              </div>
              <p className="text-slate mb-4">AIoT / ML Project</p>
              <ul style={{ color: 'var(--color-slate)' }}>
                <li>Developed AI-powered camera with ESP32-CAM and PIR sensors</li>
                <li>Achieved 94.67% accuracy in species identification</li>
                <li>Implemented cloud connectivity for data processing</li>
              </ul>
            </div>

            {/* Files Encryption Tool Project */}
            <div className="card" style={{ position: 'relative' }}>
              <a href="https://github.com/gh-Deepesh-N/encrypt-terraform" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <svg width="24" height="24" fill="none" stroke="var(--color-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
              <h3 className="text-slate-lightest" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-green)' }}>Files encryption tool using Terraform IaaC deployment</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.5rem 0' }}>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Terraform</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>AWS EC2</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>GitHub Actions</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Flask</span>
                <span style={{ background: 'rgba(100,255,218,0.07)', color: 'var(--color-green)', fontFamily: 'monospace', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '1rem' }}>Security Groups</span>
              </div>
              <p className="text-slate mb-4">Cloud, DevOps, Security</p>
              <ul style={{ color: 'var(--color-slate)' }}>
                <li>Utilized Terraform to provision AWS EC2 instances, security groups, and SSH key pairs for automated infrastructure deployment</li>
                <li>Implemented GitHub Actions CI/CD pipeline to automate code deployment and reduce manual interventions</li>
                <li>Configured AWS security groups to ensure controlled access and follow cloud security best practices</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section - full width */}
      <section id="contact" className="bg-navy-light py-20 px-6">
        <div className="section-inner text-center">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-slate mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex gap-6" style={{ justifyContent: 'center' }}>
              <a href="mailto:ndeepesh2004@gmail.com" className="btn">
                Email Me
              </a>
              <a href="https://github.com/gh-Deepesh-N" target="_blank" rel="noopener noreferrer" className="btn">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
