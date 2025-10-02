<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Name | Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Montserrat:wght@700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Navigation -->
  <nav>
    <ul>
      <li><a href="#home" class="active">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <header id="home" class="hero">
    <h1>Your Name</h1>
    <p>Software Developer | Problem Solver | Builder</p>
  </header>

  <!-- About -->
  <section id="about">
    <h2>About Me</h2>
    <p>
      I am a passionate developer with experience in building scalable web apps,
      solving real-world problems, and continuously learning new technologies.
    </p>
    <img src="profile.jpg" alt="Your photo" class="profile-pic">
  </section>

  <!-- Resume -->
  <section id="resume">
    <h2>Resume</h2>
    <div class="resume-section">
      <h3>Education</h3>
      <p><strong>BS in Computer Science</strong>, XYZ University, 2020–2024</p>
    </div>
    <div class="resume-section">
      <h3>Experience</h3>
      <p><strong>Software Engineer Intern</strong>, ABC Corp (Summer 2023)</p>
      <p>Worked on backend services, APIs, and automated deployments.</p>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills">
    <h2>Skills</h2>
    <div class="skill">
      <p>JavaScript</p>
      <div class="skill-bar"><span style="width: 90%"></span></div>
    </div>
    <div class="skill">
      <p>Python</p>
      <div class="skill-bar"><span style="width: 85%"></span></div>
    </div>
    <div class="skill">
      <p>Java</p>
      <div class="skill-bar"><span style="width: 75%"></span></div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects">
    <h2>Projects</h2>
    <div class="project-item">
      <h3>Portfolio Website</h3>
      <p>A personal portfolio site hosted on GitHub Pages.</p>
      <a href="#">View Project</a>
    </div>
    <div class="project-item">
      <h3>Hackathon App</h3>
      <p>Built a full-stack web app in 24 hours to solve XYZ problem.</p>
      <a href="#">View Project</a>
    </div>
  </section>

  <!-- Contact -->
  <footer id="contact">
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
    <p>LinkedIn: <a href="#">linkedin.com/in/yourprofile</a></p>
    <p>GitHub: <a href="#">github.com/yourusername</a></p>
  </footer>

  <script src="main.js"></script>
</body>
</html>
