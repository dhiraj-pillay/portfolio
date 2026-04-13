import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Text } from "@react-three/drei";
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
    <Float speed={2}>
      <mesh position={[3, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#ff00ff" wireframe />
      </mesh>
    </Float>
  );
}

// HERO
function Hero() {
  return (
    <section id="home" className="hero">
      <h1 className="hero-title">Hi, I'm Dhiraj 🚀</h1>
      <p className="hero-subtitle">
        java fullstack developer | Freelancer | Designer
      </p>

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
        I am a passionate software developer with a strong foundation in Java
        and Object-Oriented Programming (OOP).
      </p>

      <div className="about-cards">
        <div className="card">
          <h3>💻 Core Language</h3>
          <p>Java</p>
        </div>
      </div>
    </section>
  );
}

// PROJECTS
function Projects() {
  const projects = [
    { title: "Student Management System", tech: "Java" },
    { title: "Portfolio Website", tech: "React" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>🚀 My Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <span>{p.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= BALLOON ================= */
type TextProps = {
  position: [number, number, number];
  text: string;
  color: string;
};

const FloatingText = ({ position, text, color }: TextProps) => {
  return (
    <Float speed={2} floatIntensity={2}>
      <group position={position}>
        {/* Balloon */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Rope */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 2]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Text */}
        <Text fontSize={0.25} color="white">
          {text}
        </Text>
      </group>
    </Float>
  );
};

// SELLER
function Seller() {
  return (
    <group position={[0, -1, 0]}>
      <mesh>
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#ffcc99" />
      </mesh>
    </group>
  );
}

// BALLOON SHOP
function BalloonShop() {
  const skills = ["React", "Java", "JS", "HTML", "CSS"];

  return (
    <section className="skills">
      <h2>🎪 My Skills</h2>

      <Canvas camera={{ position: [0, 2, 8] }}>
        <ambientLight />
        <Stars />

        <Seller />

        {skills.map((skill, i) => (
          <FloatingText
            key={i}
            text={skill}
            position={[
              Math.random() * 4 - 2,
              Math.random() * 3 + 1,
              Math.random() * 4 - 2,
            ]}
            color={`hsl(${Math.random() * 360},100%,60%)`}
          />
        ))}

        <OrbitControls />
      </Canvas>
    </section>
  );
}

// CONTACT
function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>📧 pillaydhiraj4@email.com</p>
    </section>
  );
}

// MAIN
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <BalloonShop />
      <Contact />
    </>
  );
}