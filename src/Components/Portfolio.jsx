import "../Components/portfolio.css"

export default function Portfolio() {
  const projects = [
    {
      title: "Voter Management System",
      tech: "React, Node.js, PostgreSQL",
      link: "https://github.com/prathmeshthombre/voter-manegement-system",
    },
    ,
    {
      title: "Real-Time Chat Application",
      tech: "React, Node.js, Socket.io",
      link: "https://github.com/prathmeshthombre/real-time-chat-application",
    },
    {
      title: "College Website with Chatbot",
      tech: "React + CSS (deployed on Vercel)",
      link: "https://vck-project-xi.vercel.app/",
    },
    
  ];

  return (
    <div className="portfolio">
      {/* Hero */}
      <section className="hero">
        <h1>Hi, I'm Prathmesh Bajirao Thombare</h1>
        <h2>MERN Stack Developer</h2>
        <p>"Building scalable, interactive, and user-friendly applications."</p>
        <a href="/Prathmesh_resume.pdf" className="btn" target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </section>

      {/* About */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm an MCA graduate with 11 months of internship experience. I work
          with modern web technologies to build full-stack applications. My
          career goal is to contribute to scalable systems and become a
          proficient full-stack developer.
        </p>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Skills / Tech Stack</h2>
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Nest.js</li>
           <li>Sql</li>
           <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>GitHub</li>
          <li>Vercel</li>
        
        </ul>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.tech}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="btn-outline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>
          Email:{" "}
          <a href="mailto:prathmeshthombre4@gmail.com">
            prathmeshthombre4@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:8484953490">8484953490</a>
        </p>
        <p>
          <a
            href="https://github.com/prathmeshthombre"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/prathmesh-thombare-7a8183282"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </section>

      <footer>© 2025 Prathmesh Bajirao Thombare</footer>
    </div>
  );
}

