import React, { useEffect } from "react";

function App() {

  useEffect(() => {

    const elements = document.querySelectorAll(".fade");

    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 150);
    });

  }, []);


  const styles = {

    main: {
      fontFamily: "Inter, Segoe UI, Arial",
      backgroundColor: "#0f172a",
      color: "#e2e8f0",
      minHeight: "100vh",
      scrollBehavior: "smooth"
    },

    navbar: {
      background: "rgba(2,6,23,0.8)",
      backdropFilter: "blur(10px)",
      padding: "18px",
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      position: "sticky",
      top: 0,
      borderBottom: "1px solid #1e293b",
      zIndex: 1000
    },

    navLink: {
      color: "#94a3b8",
      textDecoration: "none",
      fontSize: "15px",
      transition: "0.3s",
      cursor: "pointer"
    },

    hero: {
      textAlign: "center",
      padding: "90px 20px",
      background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)"
    },

    name: {
      fontSize: "44px",
      fontWeight: "bold",
      color: "#38bdf8",
      transition: "0.3s"
    },

    role: {
      fontSize: "18px",
      color: "#94a3b8",
      marginTop: "10px"
    },

    contact: {
      marginTop: "15px",
      color: "#cbd5f5"
    },

    container: {
      maxWidth: "900px",
      margin: "auto",
      padding: "20px"
    },

    card: {
      background: "#020617",
      padding: "25px",
      marginBottom: "20px",
      borderRadius: "12px",
      border: "1px solid #1e293b",
      transition: "0.3s",
      opacity: 0,
      transform: "translateY(20px)"
    },

    title: {
      fontSize: "22px",
      marginBottom: "15px",
      color: "#38bdf8"
    },

    itemTitle: {
      fontWeight: "600",
      fontSize: "16px"
    },

    small: {
      color: "#94a3b8",
      fontSize: "14px"
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px"
    },

    skill: {
      padding: "10px",
      background: "#0f172a",
      borderRadius: "8px",
      border: "1px solid #1e293b",
      transition: "0.3s",
      textAlign: "center"
    },

    footer: {
      textAlign: "center",
      padding: "30px",
      color: "#64748b"
    }

  };


  const handleMouseEnterCard = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
  };

  const handleMouseLeaveCard = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };


  const handleSkillEnter = (e) => {
    e.currentTarget.style.background = "#1e293b";
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleSkillLeave = (e) => {
    e.currentTarget.style.background = "#0f172a";
    e.currentTarget.style.transform = "scale(1)";
  };


  const handleNavEnter = (e) => {
    e.target.style.color = "#38bdf8";
  };

  const handleNavLeave = (e) => {
    e.target.style.color = "#94a3b8";
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
            linkedin.com/in/sachin-khare
          </a>
          <br />
          💻 GitHub:
          <a href="https://github.com/sachin-khare-coder"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#38bdf8", marginLeft: "5px" }}>
            github.com/sachin-khare-coder
          </a>
        </div>

      </div>


      <div style={styles.container}>

        {/* ABOUT */}
        <div id="about" style={styles.card} className="fade"
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}>

          <div style={styles.title}>Profile Summary</div>

          <p>
            Computer Science graduate with strong expertise in Java, JavaScript,
            backend development, and database systems. Experienced in developing
            REST APIs, CRUD applications, and scalable backend systems using
            Node.js, Express.js, and MySQL. Completed internships in Web Development
            and SEO, gaining real-world industry experience. Passionate about
            building efficient software solutions and continuously learning modern technologies.
          </p>

        </div>


        {/* EDUCATION */}
        <div id="education" style={styles.card} className="fade"
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
        <div id="experience" style={styles.card} className="fade"
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}>

          <div style={styles.title}>Experience</div>

          <p style={styles.itemTitle}>
            Web Development Intern – Viraj Softtech
          </p>

          <ul>
            <li>Developed responsive websites using HTML, CSS, JavaScript</li>
            <li>Improved UI performance and user experience</li>
            <li>Worked with frontend development and website optimization</li>
          </ul>

          <p style={styles.itemTitle}>
            SEO Intern – DigiAtulya Academy
          </p>

          <ul>
            <li>Performed keyword research and SEO optimization</li>
            <li>Improved website visibility and search rankings</li>
            <li>Worked with SEO tools and analytics platforms</li>
          </ul>

        </div>


        {/* SKILLS */}
        <div id="skills" style={styles.card} className="fade"
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
        <div id="projects" style={styles.card} className="fade"
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}>

          <div style={styles.title}>Projects</div>

          <p style={styles.itemTitle}>
            University Management System
          </p>
          <p style={styles.small}>
            Built a console-based CRUD system using Java and MySQL with JDBC connectivity.
            Implemented OOP concepts, modular design, and efficient database handling.
          </p>

          <p style={styles.itemTitle}>
            User Management REST API
          </p>
          <p style={styles.small}>
            Developed RESTful APIs using Node.js and Express.js with GET and POST endpoints.
            Implemented JSON data handling and backend logic for scalable applications.
          </p>

          <p style={styles.itemTitle}>
            File Size Calculator
          </p>
          <p style={styles.small}>
            Created a Java utility to convert file sizes between Bytes, KB, MB, and GB.
            Applied efficient logic and object-oriented programming principles.
          </p>

        </div>


        {/* ACHIEVEMENTS */}
        <div id="achievements" style={styles.card} className="fade"
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
