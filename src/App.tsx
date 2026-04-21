import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Dhiraj.dev</div>

      <nav className="nav">
         <a href="#home">Home</a>
         <a href="#about">About</a>
         <a href="#projects">Projects</a>
         <a href="#contact">Contact</a>
      </nav>

      <button className="hire-btn">Hire Me</button>
    </header>
  );
}
// 3D Floating Cube
function Cube() {
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#00ffff" />
      </mesh>
    </Float>
  );
}

// 3D Sphere
function Sphere() {
  return (
    <Float speed={4}>
      <mesh position={[3, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#ff00ff" wireframe />
      </mesh>
    </Float>
  );
}

// HERO SECTION
function Hero() {
  return (
    <section id="home" className="hero">
      <h1 className="hero-title">Hi, I'm Dhiraj 🚀</h1>
      <p className="hero-subtitle">java fullstack developer | Freelancer | Designer</p>

      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} />
          <Stars />
          <Cube />
          <Sphere />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}

// ABOUT
function About() {
  return (
   <section id="about" className="about">
      <h2>About Me</h2>

      <p className="about-text">
        I am a passionate software developer with a strong foundation in Java and Object-Oriented Programming (OOP).
        I enjoy writing clean, efficient, and scalable code. I have experience working with multiple programming
        languages like C, C++, and C#, which helps me understand core programming concepts deeply.
      </p>

      <p className="about-text">
        I focus on problem-solving, data structures, and building real-world applications.
        Along with backend logic, I also create simple and responsive user interfaces using web technologies.
      </p>

      <div className="about-cards">

        <div className="card">
          <h3>💻 Core Language</h3>
          <p>Java (Strong Hold)</p>
        </div>

        <div className="card">
          <h3>🧠 OOP Concepts</h3>
          <p>Encapsulation, Inheritance, Polymorphism, Abstraction</p>
        </div>

        <div className="card">
          <h3>⚙️ Other Languages</h3>
          <p>C, C++, C#</p>
        </div>

        <div className="card">
          <h3>📚 Skills</h3>
          <p>Data Structures, Problem Solving, Logic Building</p>
        </div>

      </div>
    </section>
  );
}
// PROJECTS
function Projects() {
  const projects = [
    {
      title: "Student Management System",
      desc: "Java based system using OOP concepts with efficient data handling.",
      tech: "Java • OOP",
    },
    {
      title: "CRUD Application",
      desc: "Full CRUD app with structured backend and clean UI.",
      tech: "Java • MySQL",
    },
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio with animations.",
      tech: "React • CSS",
    },
    {
      title: "Calculator App",
      desc: "Logic-based calculator with optimized performance.",
      tech: "JavaScript",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="project-title">🚀 My Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            
            <div className="card-inner">
              
              {/* FRONT */}
              <div className="card-front">
                <h3>{p.title}</h3>
                <span className="tech">{p.tech}</span>
              </div>

              {/* BACK */}
              <div className="card-back">
                <p>{p.desc}</p>
                <button>View Project</button>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
/* ================= 🎪 BALLOON SHOP ================= */

type BalloonProps = {
  position: [number, number, number];
  text: string;
  color: string;
};

function Balloon({ position, text, color }: BalloonProps) {
  return (
    <Float speed={2} floatIntensity={2}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>

        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 2]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <Text
          position={[0, 0, 0.6]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}

/* 👨 Seller (simple human shape) */
function Seller() {
  return (
    <group position={[0, -1, 0]}>
      
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#ffcc99" />
      </mesh>

      {/* Stick holding balloons */}
      <mesh position={[0.8, 1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 3]} />
        <meshStandardMaterial color="brown" />
      </mesh>

    </group>
  );
}

/* 🎈 BALLOON SHOP SECTION */
function BalloonShop() {
  const skills = [
    "React", "Java", "JS", "HTML", "CSS",
    "C++", "MySQL", "Tailwind", "GitHub"
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">🎪 MY  Skills</h2>

      <div className="skills-canvas">
        <Canvas camera={{ position: [0, 2, 8] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 3, 5]} />

          <Stars />

          {/* Seller */}
          <Seller />

          {/* Balloons */}
          {skills.map((skill, i) => (
            <Balloon
              key={i}
              text={skill}
              position={[
                Math.random() * 4 - 2,
                Math.random() * 3 + 1,
                Math.random() * 4 - 2
              ]}
              color={`hsl(${Math.random() * 360},100%,60%)`}
            />
          ))}

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
// CONTACT
function Contact() {
  return (
    <section id="contact" className="contact">

      <h2 className="contact-title">🚀 Let's Work Together</h2>

      <div className="contact-wrapper">

        {/* AVATAR SIDE */}
        <div className="avatar-container">
          
          <div className="avatar-glow"></div>

          <img 
            src="/id.jpeg" 
            alt="Dhiraj"
            className="avatar-img"
          />

          <div className="avatar-ring"></div>

          <div className="avatar-speech">
            👋 Hey! I'm Dhiraj  
            <br />
            Let's build something awesome!
          </div>

        </div>

      
        <div className="contact-info">

          <div className="info-box">📧 pillaydhiraj4@email.com</div>
          <div className="info-box">📱 @yourhandle</div>
          <div className="info-box">📞 +919510523208 </div>

          <button className="hire-btn">Hire Me</button>

        </div>

      </div>

    </section>
  );
}
export default function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      <Projects />
      <BalloonShop/>
      <Contact />
    </div>
  );
}  