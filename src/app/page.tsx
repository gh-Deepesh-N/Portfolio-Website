import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex" style={{ minHeight: '100vh', alignItems: 'center', padding: '0 2rem' }}>
        <div className="max-w-4xl">
          <p className="text-green mb-4">Hi, my name is</p>
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

      {/* Experience Section */}
      <section id="experience" className="bg-navy-light py-20 px-6">
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
      </section>

      {/* Projects Section */}
      <section id="work" className="px-6 py-20">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3 className="text-slate-lightest" style={{ fontSize: '1.25rem', fontWeight: 600 }}>AI-Camera using Google Vision API</h3>
            <p className="text-slate mb-4">AIoT / ML Project</p>
            <ul style={{ color: 'var(--color-slate)' }}>
              <li>Developed AI-powered camera with ESP32-CAM and PIR sensors</li>
              <li>Achieved 94.67% accuracy in species identification</li>
              <li>Implemented cloud connectivity for data processing</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-slate-lightest" style={{ fontSize: '1.25rem', fontWeight: 600 }}>SRM-GeoMaps</h3>
            <p className="text-slate mb-4">Smart Campus Routing System</p>
            <ul style={{ color: 'var(--color-slate)' }}>
              <li>Developed Flask web application with Google Maps API integration</li>
              <li>Implemented speech recognition and text-to-speech features</li>
              <li>Created personalized navigation assistance system</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-navy-light py-20 px-6">
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
      </section>
    </div>
  );
}
