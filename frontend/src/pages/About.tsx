const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          We are dedicated to creating high-quality software solutions that help businesses 
          streamline their operations and achieve their goals. Our team of experts combines 
          technical excellence with industry knowledge to deliver exceptional results.
        </p>
      </section>
      
      <section className="tech-stack-section">
        <h2>Our Technology Stack</h2>
        <div className="tech-cards">
          <div className="tech-card">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>CSS3</li>
            </ul>
          </div>
          
          <div className="tech-card">
            <h3>Backend</h3>
            <ul>
              <li>Java</li>
              <li>MicroProfile</li>
              <li>RESTful APIs</li>
              <li>Open Liberty</li>
            </ul>
          </div>
          
          <div className="tech-card">
            <h3>DevOps</h3>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>CI/CD</li>
              <li>Monitoring</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


