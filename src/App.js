import React, { useEffect, useState } from "react";

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {

    const elements = document.querySelectorAll(".fade");

    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 150);
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  const styles = {

    main: {
      fontFamily: "Inter, Segoe UI, Arial",
      backgroundColor: "#0f172a",
      color: "#e2e8f0",
      minHeight: "100vh"
    },

    navbar: {
      background: "rgba(2,6,23,0.8)",
      backdropFilter: "blur(10px)",
      padding: isMobile ? "12px" : "18px",
      display: "flex",
      justifyContent: "center",
      gap: isMobile ? "15px" : "40px",
      flexWrap: "wrap",
      position: "sticky",
      top: 0,
      borderBottom: "1px solid #1e293b",
      zIndex: 1000
    },

    navLink: {
      color: "#94a3b8",
      textDecoration: "none",
      fontSize: isMobile ? "14px" : "15px",
      transition: "0.3s",
      cursor: "pointer"
    },

    hero: {
      textAlign: "center",
      padding: isMobile ? "60px 15px" : "90px 20px",
      background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)"
    },

    name: {
      fontSize: isMobile ? "30px" : "44px",
      fontWeight: "bold",
      color: "#38bdf8"
    },

    role: {
      fontSize: isMobile ? "16px" : "18px",
      color: "#94a3b8",
      marginTop: "10px"
    },

    contact: {
      marginTop: "15px",
      color: "#cbd5f5",
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: "1.6"
    },

    container: {
      maxWidth: "900px",
      margin: "auto",
      padding: isMobile ? "15px" : "20px"
    },

    card: {
      background: "#020617",
      padding: isMobile ? "18px" : "25px",
      marginBottom: "20px",
      borderRadius: "12px",
      border: "1px solid #1e293b",
      transition: "0.3s",
      opacity: 0,
      transform: "translateY(20px)"
    },

    title: {
      fontSize: isMobile ? "20px" : "22px",
      marginBottom: "15px",
      color: "#38bdf8"
    },

    itemTitle: {
      fontWeight: "600",
      fontSize: isMobile ? "15px" : "16px",
      marginTop: "10px"
    },

    small: {
      color: "#94a3b8",
      fontSize: isMobile ? "13px" : "14px",
      marginBottom: "10px"
    },

    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "10px"
    },

    skill: {
      padding: isMobile ? "8px" : "10px",
      background: "#0f172a",
      borderRadius: "8px",
      border: "1px solid #1e293b",
      textAlign: "center",
      transition: "0.3s"
    },

    footer: {
      textAlign: "center",
      padding: "30px",
      color: "#64748b",
      fontSize: isMobile ? "14px" : "16px"
    }

  };


  const handleMouseEnterCard = (e) => {
    if (!isMobile) {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
    }
  };

  const handleMouseLeaveCard = (e) => {
    if (!isMobile) {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }
  };

  const handleSkillEnter = (e) => {
    if (!isMobile) {
      e.currentTarget.style.background = "#1e293b";
      e.currentTarget.style.transform = "scale(1.05)";
    }
  };

  const handleSkillLeave = (e) => {
    if (!isMobile) {
      e.currentTarget.style.background = "#0f172a";
      e.currentTarget.style.transform = "scale(1)";
    }
  };

  const handleNavEnter = (e) => {
    if (!isMobile) e.target.style.color = "#38bdf8";
  };

  const handleNavLeave = (e) => {
    if (!isMobile) e.target.style.color = "#94a3b8";
  };


  return (

    <div style={styles.main}>

      {/* NAVBAR */}
      <div style={styles.navbar}>

        <a href="#about" style={styles.navLink}
          onMouseEnter={handleNavEnter}
          onMouseLeave={handleNavLeave}>
          About
        </a>

        <a href="#education" style={styles.navLink}
          onMouseEnter={handleNavEnter}
          onMouseLeave={handleNavLeave}>
          Education
        </a>

        <a href="#experience" style={styles.navLink}
          onMouseEnter={handleNavEnter}
          onMouseLeave={handleNavLeave}>
          Experience
        </a>

        <a href="#skills" style={styles.navLink}
          onMouseEnter={handleNavEnter}
          onMouseLeave={handleNavLeave}>
          Skills
        </a>

        <a href="#projects" style={styles.navLink}
          onMouseEnter={handleNavEnter}
          onMouseLeave={handleNavLeave}>
          Projects
        </a>

        <a href="#achievements" style={styles.navLink}
          onMouseEnter={handleNavEnter}
          onMouseLeave={handleNavLeave}>
          Achievements
        </a>

      </div>


      {/* HERO */}
      <div style={styles.hero} className="fade">

        <div style={styles.name}>
          Sachin Khare
        </div>

        <div style={styles.role}>
          Software Engineer | Java | React | Node.js | REST API Developer
        </div>

        <div style={styles.contact}>

          📧 sachinkhare0929@gmail.com  
          <br />

          📞 +91-9755856655  
          <br />

          🔗 LinkedIn:
          <a href="https://www.linkedin.com/in/sachin-khare-35673a29b"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#38bdf8", marginLeft: "5px" }}>
            linkedin.com/in/sachin-khare-35673a29b
          </a>

          <br />

          💻 GitHub:
          <a href="https://github.com/sachin-khare-coder"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#38bdf8", marginLeft: "5px" }}>
            github.com/sachin-khare-coder
          </a>

          <br />

          🌐 Portfolio:
          <a href="https://myportfolio-six-snowy-74.vercel.app/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#38bdf8", marginLeft: "5px" }}>
            myportfolio-six-snowy-74.vercel.app
          </a>

        </div>

      </div>


      <div style={styles.container}>


        {/* PROFILE */}
        <div id="about"
          style={styles.card}
          className="fade"
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}>

          <div style={styles.title}>
            Profile Summary
          </div>

          <p>
            Computer Science graduate with strong expertise in Java, JavaScript,
            backend development, and database systems. Experienced in developing
            REST APIs, CRUD applications, and scalable backend systems using
            Node.js, Express.js, and MySQL. Completed internships in Web Development
            and SEO, gaining real-world industry experience. Passionate about building
            efficient software solutions and continuously learning modern technologies.
          </p>

        </div>


        {/* EDUCATION */}
        <div id="education"
          style={styles.card}
          className="fade"
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}>

          <div style={styles.title}>Education</div>

          <p style={styles.itemTitle}>
            B.Tech Computer Science
          </p>

          <p style={styles.small}>
            Shri Ram Institute of Science & Technology (RGPV), Jabalpur  
            <br />
            CGPA: 7.9 / 10 | 2021 – 2025
          </p>

        </div>


        {/* EXPERIENCE */}
        <div id="experience"
          style={styles.card}
          className="fade"
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}>

          <div style={styles.title}>Experience</div>

          <p style={styles.itemTitle}>
            Web Development Intern – Viraj Softtech
          </p>

          <ul>
            <li>Developed responsive web pages using HTML, CSS, JavaScript</li>
            <li>Improved UI functionality and frontend performance</li>
            <li>Worked on real-world website development tasks</li>
          </ul>


          <p style={styles.itemTitle}>
            SEO Intern – DigiAtulya Academy
          </p>

          <ul>
            <li>Performed keyword research and SEO optimization</li>
            <li>Improved website visibility and search rankings</li>
            <li>Worked with SEO tools and analytics</li>
          </ul>

        </div>


        {/* SKILLS */}
        <div id="skills"
          style={styles.card}
          className="fade"
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}>

          <div style={styles.title}>Technical Skills</div>

          <div style={styles.grid}>

            {[
              "Java",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "Spring Boot",
              "MySQL",
              "MongoDB",
              "Git",
              "GitHub",
              "REST APIs",
              "OOP",
              "DBMS",
              "Data Structures"
            ].map(skill => (

              <div key={skill}
                style={styles.skill}
                onMouseEnter={handleSkillEnter}
                onMouseLeave={handleSkillLeave}>
                {skill}
              </div>

            ))}

          </div>

        </div>


        {/* PROJECTS */}
        <div id="projects"
          style={styles.card}
          className="fade"
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}>

          <div style={styles.title}>Projects</div>


          <p style={styles.itemTitle}>
            University Management System
          </p>

          <p style={styles.small}>
            Built console-based CRUD system using Java and MySQL with JDBC connectivity.
            Implemented OOP concepts, modular design, and efficient database handling.
          </p>


          <p style={styles.itemTitle}>
            User Management REST API
          </p>

          <p style={styles.small}>
            Developed RESTful APIs using Node.js and Express.js with GET and POST endpoints.
            Implemented JSON data handling and scalable backend logic.
          </p>


          <p style={styles.itemTitle}>
            File Size Calculator
          </p>

          <p style={styles.small}>
            Created Java utility to convert file sizes between Bytes, KB, MB, and GB.
            Applied object-oriented programming and efficient logic implementation.
          </p>

        </div>


        {/* ACHIEVEMENTS */}
        <div id="achievements"
          style={styles.card}
          className="fade"
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}>

          <div style={styles.title}>Achievements</div>

          <ul>
            <li>Java Certified Foundations Associate – Infosys</li>
            <li>C++ Certification – Infosys</li>
            <li>Cleared TCS CodeVita Round 1 & 2</li>
            <li>Organized technical events and coding competitions</li>
          </ul>

        </div>


      </div>


      <div style={styles.footer}>
        © 2026 Sachin Khare | Software Engineer Portfolio
      </div>


    </div>

  );

}

export default App;
