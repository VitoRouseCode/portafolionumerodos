import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import myfoto from '../../imagenes/MyFoto.png';
import * as THREE from 'three';
import {
  Code, User, Briefcase, Mail, Github, Linkedin, ArrowUp, Home, Phone, MapPin,
  Calendar, ChevronRight, Languages, Music, BookOpen, Target, Rocket, Zap, Mouse,
  Coffee, Star, Brain, Cpu, Database, Globe, Sparkles, Command, Search, Send,
  CheckCircle, XCircle, AlertCircle, Smile, Shield, Terminal, Layers, GitBranch,
  Server, Smartphone, Monitor, Cloud, Lock, Palette, Wand2, Trophy, Heart,
  MessageCircle, Bot, ChevronDown, Download
} from 'lucide-react';

// ==================== INSTRUCCIONES DE USO ====================
/*
  Para usar este componente, asegúrate de tener las siguientes dependencias instaladas:
  npm install react react-dom framer-motion three lucide-react

  IMPORTANTE:
  1.  Reemplaza la URL de la imagen en `HeroSection` con la ruta a tu foto.
      Busca: `https://placehold.co/350x350/5D5FEF/F7F7FF?text=VS` y cámbiala.
  2.  Coloca tu CV en la carpeta `public` de tu proyecto y actualiza el enlace en `AboutSection`.
      Busca: `href="/victor-sierra-cv.pdf"` y ajústalo si es necesario.
*/
// =============================================================


// ==================== CONSTANTES Y CONFIGURACIÓN ====================

const translations = {
  es: {
    name: "VÍCTOR SIERRA",
    title: "Arquitecto Digital & Desarrollador Full-Stack",
    subtitle: "Creando experiencias web que trascienden lo ordinario",
    location: "San Andrés, Colombia → Bello, Antioquia",
    aboutTitle: "Sobre Mí",
    aboutShort: "Desarrollador con 3+ años transformando ideas en realidades digitales. Especializado en crear soluciones que combinan arte, tecnología e inteligencia artificial.",
    aboutFull: "Mi pasión es crear experiencias digitales que no solo funcionen perfectamente, sino que también inspiren y dejen una marca. Con experiencia en proyectos gubernamentales de alto impacto y en el sector privado, me especializo en soluciones robustas y escalables que integran las últimas tecnologías, incluyendo IA y machine learning, para resolver problemas complejos del mundo real.",
    myJourney: "Mi Trayectoria",
    experience: "Experiencia",
    skills: "Arsenal Tecnológico",
    projects: "Proyectos Destacados",
    education: "Formación",
    contact: "Conectemos",
    backToTop: "Volver al Inicio",
    downloadCV: "Descargar CV",
    seeMore: "Descubrir Más",
    seeLess: "Ver Menos",
    currentWork: "Arquitecto de Software",
    currentCompany: "Empresa de Desarrollo Premium",
    currentPeriod: "Mayo 2023 - Presente",
    mobileWork: "Especialista React Native",
    mobilePeriod: "Julio 2024 - Diciembre 2024",
    techStack: "React • Node.js • TypeScript • PostgreSQL • React Native • Java • Python • TensorFlow",
    projectDesc: "Apps móviles de alta concurrencia • Sistemas gubernamentales críticos • Plataformas logísticas con IA",
    email: "victorbellasartes@gmail.com",
    phone: "(+57) 301-539-0621",
    readMore: "Explorar Historia",
    hide: "Ocultar",
    searchPlaceholder: "Busca habilidades, proyectos, tecnologías...",
    formTitle: "¿Listo para crear algo increíble?",
    formName: "Tu nombre (el que prefieras, no juzgo)",
    formEmail: "Email (prometo no spamear... mucho)",
    formMessage: "Cuéntame tu idea loca",
    formSend: "Enviar al Cosmos",
    formSending: "Viajando por el ciberespacio...",
    formSuccess: "¡Mensaje recibido! Prepárate para la grandeza",
    formError: "¡Ups! Hasta los mejores fallan. Intenta de nuevo",
    aiTitle: "Potenciado por IA",
    aiDesc: "Integrando inteligencia artificial para crear soluciones del futuro",
    footerText: "Diseñado y construido con ❤️ y mucho ☕ por Víctor Sierra."
  },
  en: {
    name: "VÍCTOR SIERRA",
    title: "Digital Architect & Full-Stack Developer",
    subtitle: "Creating web experiences that transcend the ordinary",
    location: "San Andrés, Colombia → Bello, Antioquia",
    aboutTitle: "About Me",
    aboutShort: "Developer with 3+ years transforming ideas into digital realities. Specialized in creating solutions that combine art, technology and artificial intelligence.",
    aboutFull: "My passion is to create digital experiences that not only work flawlessly but also inspire and leave a mark. With experience in high-impact government projects and the private sector, I specialize in robust and scalable solutions that integrate the latest technologies, including AI and machine learning, to solve complex real-world problems.",
    myJourney: "My Journey",
    experience: "Journey",
    skills: "Tech Arsenal",
    projects: "Featured Projects",
    education: "Education",
    contact: "Let's Connect",
    backToTop: "Back to Top",
    downloadCV: "Download CV",
    seeMore: "Discover More",
    seeLess: "Show Less",
    currentWork: "Software Architect",
    currentCompany: "Premium Development Company",
    currentPeriod: "May 2023 - Present",
    mobileWork: "React Native Specialist",
    mobilePeriod: "July 2024 - December 2024",
    techStack: "React • Node.js • TypeScript • PostgreSQL • React Native • Java • Python • TensorFlow",
    projectDesc: "High-concurrency mobile apps • Critical government systems • AI-powered logistics platforms",
    email: "victorbellasartes@gmail.com",
    phone: "(+57) 301-539-0621",
    readMore: "Explore Story",
    hide: "Hide",
    searchPlaceholder: "Search skills, projects, technologies...",
    formTitle: "Ready to create something amazing?",
    formName: "Your name (whatever you prefer, no judgment)",
    formEmail: "Email (I promise not to spam... much)",
    formMessage: "Tell me your crazy idea",
    formSend: "Send to Cosmos",
    formSending: "Traveling through cyberspace...",
    formSuccess: "Message received! Get ready for greatness",
    formError: "Oops! Even the best fail. Try again",
    aiTitle: "AI Powered",
    aiDesc: "Integrating artificial intelligence to create future solutions",
    footerText: "Designed & built with ❤️ and lots of ☕ by Victor Sierra."
  }
};

const colors = {
  primary: '#2D3561',
  secondary: '#5D5FEF',
  accent: '#FFD700',
  dark: '#0A0E27',
  light: '#F7F7FF',
  gradient1: 'linear-gradient(135deg, #2D3561 0%, #5D5FEF 50%, #FFD700 100%)',
  gradient2: 'linear-gradient(135deg, #0A0E27 0%, #2D3561 50%, #5D5FEF 100%)',
  gradient3: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
  glass: 'rgba(255, 255, 255, 0.05)',
  glassBorder: 'rgba(255, 255, 255, 0.1)'
};


// ==================== COMPONENTES ESPECIALIZADOS ====================

const ThreeBackground = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const sparkles = 1000;
    
    for (let i = 0; i < sparkles; i++) {
      vertices.push(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    
    const material = new THREE.PointsMaterial({
      color: 0x5D5FEF,
      size: 2,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    
    camera.position.z = 200;
    
    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.001;
      points.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    
    animate();
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);
  
  return <div ref={mountRef} style={{  
    position: 'fixed',  
    top: 0,  
    left: 0,  
    width: '100%',  
    height: '100%',  
    zIndex: -1,
    background: colors.gradient2
  }} />;
};

const AnimatedSearchBar = ({ language }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const t = translations[language];
  
  const phrases = useMemo(() => [
    'React Native', 'Inteligencia Artificial', 'Node.js', 
    'Machine Learning', 'PostgreSQL', 'Diseño UI/UX'
  ], []);
  
  useEffect(() => {
    if (!isTyping) return;
    
    let phrase = phrases[currentPhrase];
    let currentIndex = 0;
    let timeoutId;

    const type = () => {
        if (currentIndex < phrase.length) {
            setSearchValue(phrase.substring(0, currentIndex + 1));
            currentIndex++;
            timeoutId = setTimeout(type, 100);
        } else {
            timeoutId = setTimeout(() => {
                setCurrentPhrase(prev => (prev + 1) % phrases.length);
            }, 2000);
        }
    };
    
    timeoutId = setTimeout(type, 100);

    return () => clearTimeout(timeoutId);
  }, [currentPhrase, isTyping, phrases]);
  
  return (
    <motion.div  
      className="search-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      style={{
        position: 'relative',
        maxWidth: '500px',
        margin: '30px auto 0',
        zIndex: 10
      }}
    >
      <motion.div
        style={{
          position: 'relative',
          background: colors.glass,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.glassBorder}`,
          borderRadius: '50px',
          padding: '15px 30px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          boxShadow: '0 8px 32px rgba(93, 95, 239, 0.2)'
        }}
        whileHover={{ scale: 1.02 }}
      >
        <Search size={20} color={colors.secondary} />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setIsTyping(false);
          }}
          onFocus={() => setIsTyping(false)}
          onBlur={() => {
            if (!searchValue) setIsTyping(true);
          }}
          placeholder={t.searchPlaceholder}
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: colors.light,
            fontSize: '16px',
            flex: 1,
            fontFamily: 'inherit'
          }}
        />
        <motion.div
          animate={{ rotate: isTyping ? 360 : 0 }}
          transition={{ duration: 2, repeat: isTyping ? Infinity : 0, ease: "linear" }}
        >
          <Sparkles size={20} color={colors.accent} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FunnyContactForm = ({ language }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const t = translations[language];
  
  const funnyMessages = {
    name: [
      "¿En serio? ¿Sin nombre? ¿Eres un agente secreto? 🕵️",
      "Dale, ponle aunque sea 'Batman' 🦇",
      "El campo del nombre se siente solo sin ti 😢",
      "¿Qué tal si pruebas con tu nombre de superhéroe? 🦸"
    ],
    email: [
      "Ese email parece sacado de otra dimensión 🌌",
      "¿Seguro que ese @ está en el lugar correcto? 🤔",
      "Mi detector de emails dice que algo no cuadra 📧",
      "Houston, tenemos un problema con el email 🚀"
    ],
    message: [
      "¿Un mensaje vacío? ¿Es arte conceptual? 🎨",
      "Las palabras son gratis, ¡úsalas! 💬",
      "Este es el momento de brillar con tu mensaje ✨",
      "¿Comunicación telepática? Prefiero texto 🧠"
    ]
  };
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = funnyMessages.name[Math.floor(Math.random() * funnyMessages.name.length)];
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = funnyMessages.email[Math.floor(Math.random() * funnyMessages.email.length)];
    }
    if (!formData.message.trim()) {
      newErrors.message = funnyMessages.message[Math.floor(Math.random() * funnyMessages.message.length)];
    }
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitStatus(null), 5000);
  };
  
  return (
    <motion.div
      style={{
        background: colors.glass,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${colors.glassBorder}`,
        borderRadius: '30px',
        padding: '40px',
        maxWidth: '600px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        style={{
          position: 'absolute', top: -50, right: -50, width: 150, height: 150,
          background: colors.gradient3, borderRadius: '50%', filter: 'blur(60px)', opacity: 0.5
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <h3 style={{  
        fontSize: '28px', marginBottom: '30px', color: colors.light,
        textAlign: 'center', fontWeight: 700
      }}>
        {t.formTitle}
      </h3>
      
      <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '25px' }}>
          <label style={{  
            display: 'block', marginBottom: '10px', color: colors.light,
            fontSize: '14px', fontWeight: 500
          }}>
            {t.formName}
          </label>
          <motion.input
            type="text" value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{
              width: '100%', padding: '15px 20px', background: 'rgba(255, 255, 255, 0.1)',
              border: errors.name ? '2px solid #ff6b6b' : '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px', color: colors.light, fontSize: '16px',
              outline: 'none', transition: 'all 0.3s'
            }}
            whileFocus={{ scale: 1.02 }}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                style={{  
                  color: '#ff6b6b', marginTop: '8px', fontSize: '14px',
                  display: 'flex', alignItems: 'center', gap: '5px'
                }}
              >
                <AlertCircle size={16} /> {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        
        <div style={{ marginBottom: '25px' }}>
          <label style={{  
            display: 'block', marginBottom: '10px', color: colors.light,
            fontSize: '14px', fontWeight: 500
          }}>
            {t.formEmail}
          </label>
          <motion.input
            type="email" value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{
              width: '100%', padding: '15px 20px', background: 'rgba(255, 255, 255, 0.1)',
              border: errors.email ? '2px solid #ff6b6b' : '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px', color: colors.light, fontSize: '16px',
              outline: 'none', transition: 'all 0.3s'
            }}
            whileFocus={{ scale: 1.02 }}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                style={{  
                  color: '#ff6b6b', marginTop: '8px', fontSize: '14px',
                  display: 'flex', alignItems: 'center', gap: '5px'
                }}
              >
                <XCircle size={16} /> {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <label style={{  
            display: 'block', marginBottom: '10px', color: colors.light,
            fontSize: '14px', fontWeight: 500
          }}>
            {t.formMessage}
          </label>
          <motion.textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            style={{
              width: '100%', padding: '15px 20px', background: 'rgba(255, 255, 255, 0.1)',
              border: errors.message ? '2px solid #ff6b6b' : '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px', color: colors.light, fontSize: '16px',
              outline: 'none', resize: 'vertical', minHeight: '120px', transition: 'all 0.3s'
            }}
            whileFocus={{ scale: 1.02 }}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                style={{  
                  color: '#ff6b6b', marginTop: '8px', fontSize: '14px',
                  display: 'flex', alignItems: 'center', gap: '5px'
                }}
              >
                <MessageCircle size={16} /> {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        
        <motion.button
          type="submit" disabled={isSubmitting}
          style={{
            width: '100%', padding: '18px', background: isSubmitting ? colors.secondary : colors.gradient3,
            border: 'none', borderRadius: '15px', color: colors.dark, fontSize: '18px',
            fontWeight: 700, cursor: isSubmitting ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'all 0.3s'
          }}
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        >
          {isSubmitting ? (
            <>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                <Send size={20} />
              </motion.div>
              {t.formSending}
            </>
          ) : (
            <>
              <Rocket size={20} /> {t.formSend}
            </>
          )}
        </motion.button>
      </form>
      
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              background: submitStatus === 'success' ? '#10b981' : '#ff6b6b',
              color: 'white', padding: '20px 40px', borderRadius: '20px',
              display: 'flex', alignItems: 'center', gap: '10px',
              fontSize: '18px', fontWeight: 600, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
              zIndex: 10
            }}
          >
            {submitStatus === 'success' ? (
              <><CheckCircle size={24} />{t.formSuccess}</>
            ) : (
              <><XCircle size={24} />{t.formError}</>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HeroSection = ({ language, scrollToSection }) => {
  const t = translations[language];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };
  
  return (
    <section  
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '100px 20px 50px', position: 'relative', overflow: 'hidden'
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{
          position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px',
          background: colors.gradient3, borderRadius: '50%',
          filter: 'blur(80px)', opacity: 0.3
        }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div style={{
        maxWidth: '1200px', margin: '0 auto', display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px', alignItems: 'center', position: 'relative', zIndex: 2
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 900, lineHeight: 1.1,
              background: colors.gradient1, backgroundClip: 'text',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '20px'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.name}
          </motion.h1>

          <motion.p
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 600,
              color: colors.light, marginBottom: '15px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t.title}
          </motion.p>

          <motion.p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: colors.secondary,
              fontWeight: 500, marginBottom: '20px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '30px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <MapPin size={16} /> {t.location}
          </motion.p>

          <motion.div
            style={{
              display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 30px',
                background: colors.gradient3, border: 'none', borderRadius: '30px',
                color: colors.dark, fontWeight: 700, fontSize: '1rem',
                cursor: 'pointer', boxShadow: `0 8px 32px ${colors.accent}40`
              }}
              whileHover={{ scale: 1.05, boxShadow: `0 12px 40px ${colors.accent}60` }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} /> {t.contact}
            </motion.button>

            <motion.a
                href="/victor-sierra-cv.pdf" download
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 30px',
                  background: 'transparent', border: `2px solid ${colors.secondary}`, borderRadius: '30px',
                  color: colors.light, fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
                  textDecoration: 'none'
                }}
                whileHover={{  
                  background: colors.secondary, color: colors.light,
                  boxShadow: `0 8px 32px ${colors.secondary}40`
                }}
                whileTap={{ scale: 0.95 }}
            >
                <Download size={20} /> {t.downloadCV}
            </motion.a>
          </motion.div>

          <AnimatedSearchBar language={language} />

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', perspective: '1000px'
          }}
        >
          <motion.div
            style={{
              position: 'relative', width: '350px', height: '350px',
              transformStyle: 'preserve-3d', rotateX, rotateY
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              style={{
                width: '100%', height: '100%', borderRadius: '50%',
                // IMPORTANTE: Reemplaza esta URL con la ruta a tu foto
                background: `url(${myfoto}), ${colors.gradient1}`, 
                backgroundSize: 'contain', backgroundPosition: 'center',
                border: `4px solid ${colors.secondary}`,
                boxShadow: `0 20px 60px ${colors.secondary}40`,
                position: 'relative', overflow: 'hidden'
              }}
              animate={{
                boxShadow: [
                  `0 20px 60px ${colors.secondary}40`,
                  `0 30px 80px ${colors.accent}60`,
                  `0 20px 60px ${colors.secondary}40`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  transform: 'translateX(-100%) rotate(45deg)'
                }}
                animate={{ transform: ['translateX(-100%) rotate(45deg)', 'translateX(100%) rotate(45deg)'] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
            
            <div style={{
              position: 'absolute', bottom: '0px', right: '0px',
              display: 'flex', alignItems: 'center', gap: '15px',
              background: colors.glass, padding: '10px 20px',
              borderRadius: '20px', backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.glassBorder}`
            }}>
                <a href="https://github.com/VitoRouseCode" target="_blank" rel="noopener noreferrer" style={{ color: colors.light }}>
                    <motion.div whileHover={{ scale: 1.2, color: colors.accent }}>
                        <Github size={24} />
                    </motion.div>
                </a>
                <a href="https://linkedin.com/in/victor-sierra" target="_blank" rel="noopener noreferrer" style={{ color: colors.light }}>
                    <motion.div whileHover={{ scale: 1.2, color: colors.accent }}>
                        <Linkedin size={24} />
                    </motion.div>
                </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsShowcase = ({ language }) => {
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const skills = {
    frontend: {
      title: 'Frontend Magic', icon: <Monitor size={24} />, color: colors.secondary,
      items: [
        { name: 'React/Next.js', level: 95, icon: <Layers size={24}/> },
        { name: 'TypeScript', level: 90, icon: <Code size={24}/> },
        { name: 'React Native', level: 92, icon: <Smartphone size={24}/> },
        { name: 'CSS/Tailwind', level: 88, icon: <Palette size={24}/> },
        { name: 'Three.js/WebGL', level: 75, icon: <Wand2 size={24}/> }
      ]
    },
    backend: {
      title: 'Backend Power', icon: <Server size={24} />, color: colors.accent,
      items: [
        { name: 'Node.js/Express', level: 93, icon: <Terminal size={24}/> },
        { name: 'PostgreSQL', level: 88, icon: <Database size={24}/> },
        { name: 'JavaScript', level: 80, icon: <Coffee size={24}/> },
        { name: 'MySQL', level: 85, icon: <GitBranch size={24}/> },
        { name: 'Microservices', level: 82, icon: <Cloud size={24}/> }
      ]
    },
    ai: {
      title: 'AI & Innovation', icon: <Brain size={24} />, color: '#34d399',
      items: [
        { name: 'OpenAI APIs', level: 85, icon: <Sparkles size={24}/> },
        { name: 'Chatbots', level: 75, icon: <Smile size={24}/> },
       
      ]
    }
  };
  
  return (
    <section style={{
      padding: '100px 20px', position: 'relative', overflow: 'hidden'
    }}>
      <motion.div
        style={{
          position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px',
          background: colors.gradient1, borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2
        }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, textAlign: 'center',
            marginBottom: '60px', background: colors.gradient1, backgroundClip: 'text',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.skills}
        </motion.h2>
        
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '20px',
          marginBottom: '60px', flexWrap: 'wrap'
        }}>
          {Object.entries(skills).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 30px',
                background: activeCategory === key ? category.color : colors.glass,
                border: `2px solid ${activeCategory === key ? category.color : colors.glassBorder}`,
                borderRadius: '25px', color: colors.light, fontSize: '16px', fontWeight: 600,
                cursor: 'pointer', backdropFilter: 'blur(10px)', transition: 'all 0.3s'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon} {category.title}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              display: 'grid', gap: '30px', maxWidth: '800px', margin: '0 auto'
            }}
          >
            {skills[activeCategory].items.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: colors.glass, backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.glassBorder}`, borderRadius: '20px',
                  padding: '25px', display: 'flex', alignItems: 'center', gap: '20px'
                }}
                whileHover={{  
                  scale: 1.02,
                  boxShadow: `0 10px 30px ${skills[activeCategory].color}30`
                }}
              >
                <div style={{
                  background: `${skills[activeCategory].color}20`, padding: '15px',
                  borderRadius: '15px', color: skills[activeCategory].color
                }}>
                  {skill.icon}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: '18px', fontWeight: 600, color: colors.light, marginBottom: '10px'
                  }}>
                    {skill.name}
                  </h4>
                  
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px',
                    height: '8px', overflow: 'hidden', position: 'relative'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                      style={{
                        height: '100%', background: skills[activeCategory].color,
                        borderRadius: '10px', position: 'relative', overflow: 'hidden'
                      }}
                    >
                      <motion.div
                        style={{
                          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                          transform: 'translateX(-100%)'
                        }}
                        animate={{ transform: ['translateX(-100%)', 'translateX(100%)'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 + 1 }}
                      />
                    </motion.div>
                  </div>
                </div>
                
                <div style={{
                  fontSize: '24px', fontWeight: 700, color: skills[activeCategory].color
                }}>
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectsSection = ({ language }) => {
  const t = translations[language];
  
  const projects = [
    {
      id: 1, title: 'Pico y Placa Solidario',
      description: 'Sistema gubernamental de gestión vehicular con predicción de demanda por IA para optimizar la movilidad urbana.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      icon: <Shield size={40} />, color: colors.secondary,
      stats: { users: '50K+', transactions: '1M+' }
    },
    {
      id: 2, title: 'Lotto 3000 & SportsBooks',
      description: 'Plataforma de apuestas de alta concurrencia con transacciones en tiempo real y arquitectura de microservicios.',
      tech: ['React Native', 'TypeScript', 'ApiRest'],
      icon: <Trophy size={40} />, color: colors.accent,
      stats: { downloads: '100K+', rating: '4.8★' }
    },
    {
      id: 3, title: 'LogisticAI Platform',
      description: 'Solución B2B para optimización de rutas y gestión de flotas, reduciendo costos operativos mediante IA.',
      tech: ['Next.js', 'Python', 'Docker'],
      icon: <Rocket size={40} />, color: '#34d399',
      stats: { efficiency: '+45%', routes: '10K+/day' }
    }
  ];
  
  return (
    <section style={{ padding: '100px 20px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, textAlign: 'center',
            marginBottom: '80px', background: colors.gradient1, backgroundClip: 'text',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.projects}
        </motion.h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              style={{
                background: colors.glass, backdropFilter: 'blur(20px)',
                border: `1px solid ${colors.glassBorder}`, borderRadius: '30px',
                padding: '40px', position: 'relative', overflow: 'hidden',
                cursor: 'pointer',
              }}
              whileHover={{
                transform: 'translateY(-10px)',
                boxShadow: `0 20px 50px ${project.color}40`,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                style={{
                  position: 'absolute', top: -50, right: -50, width: 150, height: 150,
                  background: project.color, borderRadius: '50%',
                  filter: 'blur(60px)', opacity: 0.3
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px'
                }}>
                  <div style={{
                    background: `${project.color}20`, padding: '15px',
                    borderRadius: '20px', color: project.color
                  }}>
                    {project.icon}
                  </div>
                  <h3 style={{
                    fontSize: '24px', fontWeight: 700, color: colors.light,
                    fontFamily: "'Barriecito', cursive", letterSpacing: '1px'
                  }}>
                    {project.title}
                  </h3>
                </div>
                
                <p style={{
                  fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '25px', lineHeight: 1.6, minHeight: '80px'
                }}>
                  {project.description}
                </p>
                
                <div style={{
                  display: 'flex', gap: '10px', flexWrap: 'wrap',
                  marginBottom: '25px', minHeight: '50px'
                }}>
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      style={{
                        padding: '8px 16px', background: `${project.color}20`,
                        border: `1px solid ${project.color}40`, borderRadius: '20px',
                        fontSize: '14px', fontWeight: 500, color: project.color
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex', gap: '30px', paddingTop: '20px',
                  borderTop: `1px solid ${colors.glassBorder}`
                }}>
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <div style={{
                        fontSize: '24px', fontWeight: 700, color: project.color
                      }}>
                        {value}
                      </div>
                      <div style={{
                        fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)',
                        textTransform: 'capitalize'
                      }}>
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <motion.div
                 style={{
                    position: 'absolute', bottom: 20, right: 20, color: project.color
                 }}
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileHover={{ opacity: 1, scale: 1 }}
              >
                <ChevronRight size={24} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ language }) => {
  const t = translations[language];
  const [expanded, setExpanded] = useState(false);
  
  const journey = [
    { year: '2021', title: 'El Despertar del Código', description: 'Descubrí mi pasión por transformar ideas en código funcional.', icon: <Sparkles /> },
    { year: '2022', title: 'Primeros Desafíos', description: 'Desarrollé aplicaciones y soluciones para clientes locales y pequeños negocios.', icon: <Code /> },
    { year: '2023', title: 'Salto a Enterprise', description: 'Me uní a un equipo para construir sistemas gubernamentales críticos y de gran escala.', icon: <Briefcase /> },
    { year: '2024', title: 'Inmersión en IA', description: 'Integré machine learning y IA para crear productos más inteligentes y eficientes.', icon: <Brain /> }
  ];
  
  return (
    <section style={{ padding: '100px 20px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, textAlign: 'center',
            marginBottom: '60px', background: colors.gradient1, backgroundClip: 'text',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.aboutTitle}
        </motion.h2>
        
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '60px', alignItems: 'start'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              fontSize: '2rem', fontWeight: 700, color: colors.secondary,
              marginBottom: '20px', lineHeight: 1.2
            }}>
              Arquitecto de Experiencias Digitales
            </h3>
            
            <p style={{
              fontSize: '1.2rem', lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.9)', marginBottom: '25px'
            }}>
              {t.aboutShort}
            </p>
            
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{
                    fontSize: '1.2rem', lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '25px',
                  }}>
                    {t.aboutFull}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => setExpanded(!expanded)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'none', border: 'none', color: colors.accent,
                fontSize: '1rem', fontWeight: 600, cursor: 'pointer', padding: 0
              }}
              whileHover={{ gap: '12px' }}
            >
              {expanded ? t.hide : t.readMore}
              <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              fontSize: '2rem', fontWeight: 700, color: colors.accent,
              marginBottom: '30px'
            }}>{t.myJourney}</h3>
            
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '19px', top: '10px', bottom: '10px',
                width: '4px', background: colors.glassBorder, borderRadius: '2px'
              }}></div>
              
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.2 }}
                  style={{
                    display: 'flex', alignItems: 'start', gap: '20px',
                    position: 'relative', marginBottom: '30px'
                  }}
                >
                  <div style={{
                    flexShrink: 0, zIndex: 1, marginTop: '5px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '42px', height: '42px',
                    borderRadius: '50%', background: colors.dark,
                    border: `2px solid ${colors.secondary}`
                  }}>
                    <div style={{ color: colors.secondary }}>
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: colors.light }}>
                      {item.year} - {item.title}
                    </h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '5px' }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ language }) => {
    const t = translations[language];

    const contactInfo = [
        { icon: <Mail size={20} />, text: t.email, href: `mailto:${t.email}` },
        { icon: <Phone size={20} />, text: t.phone, href: `tel:${t.phone}` }
    ];

    return (
        <section style={{ padding: '100px 20px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, textAlign: 'center',
                        marginBottom: '30px', background: colors.gradient1, backgroundClip: 'text',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t.contact}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '30px',
                    flexWrap: 'wrap',
                    marginBottom: '60px'
                }}>
                    {contactInfo.map(info => (
                        <motion.a key={info.text} href={info.href}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                color: colors.light, textDecoration: 'none', fontSize: '1.1rem',
                                padding: '10px 20px', background: colors.glass, borderRadius: '20px',
                                border: `1px solid ${colors.glassBorder}`
                            }}
                            whileHover={{ scale: 1.05, color: colors.accent }}
                        >
                            {info.icon}
                            <span>{info.text}</span>
                        </motion.a>
                    ))}
                </motion.div>

                <FunnyContactForm language={language} />
            </div>
        </section>
    );
}

const Footer = ({ language }) => {
    const t = translations[language];
    return (
        <footer style={{
            padding: '40px 20px',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.6)',
            borderTop: `1px solid ${colors.glassBorder}`,
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
                <a href="https://github.com/VitoRouseCode" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    <motion.div whileHover={{ scale: 1.2, color: colors.light }}><Github /></motion.div>
                </a>
                <a href="https://linkedin.com/in/victor-sierra" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    <motion.div whileHover={{ scale: 1.2, color: colors.light }}><Linkedin /></motion.div>
                </a>
            </div>
            <p>{t.footerText}</p>
            <p>&copy; {new Date().getFullYear()} VÍCTOR SIERRA. Todos los derechos reservados.</p>
        </footer>
    );
};

const LanguageSwitcher = ({ language, setLanguage }) => (
    <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: colors.glass,
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '5px',
        display: 'flex',
        border: `1px solid ${colors.glassBorder}`
    }}>
        <button onClick={() => setLanguage('es')} style={{
            background: language === 'es' ? colors.secondary : 'transparent',
            color: colors.light, border: 'none', padding: '8px 12px',
            borderRadius: '15px', cursor: 'pointer', fontWeight: 600,
        }}>ES</button>
        <button onClick={() => setLanguage('en')} style={{
            background: language === 'en' ? colors.secondary : 'transparent',
            color: colors.light, border: 'none', padding: '8px 12px',
            borderRadius: '15px', cursor: 'pointer', fontWeight: 600
        }}>EN</button>
    </div>
);

const ScrollToTopButton = ({ show, language, scrollToSection }) => {
    const t = translations[language];
    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    onClick={scrollToSection}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        position: 'fixed', bottom: '30px', right: '30px',
                        width: '50px', height: '50px', borderRadius: '50%',
                        background: colors.secondary, color: colors.light,
                        border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 1000, boxShadow: '0 5px 20px rgba(93, 95, 239, 0.4)'
                    }}
                    aria-label={t.backToTop}
                >
                    <ArrowUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};


// ==================== COMPONENTE PRINCIPAL ====================

const Portfolio = () => {
  const [language, setLanguage] = useState('es');
  const [showScroll, setShowScroll] = useState(false);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div style={{
      backgroundColor: colors.dark,
      color: colors.light,
      fontFamily: "'Inter', sans-serif"
    }}>
      <ThreeBackground />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Barriecito&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background-color: ${colors.dark}; }
      `}</style>

      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      
      <main>
        <div ref={sectionRefs.home}>
          <HeroSection language={language} scrollToSection={scrollToSection} />
        </div>
        <div ref={sectionRefs.about}>
          <AboutSection language={language} />
        </div>
        <div ref={sectionRefs.skills}>
           <SkillsShowcase language={language} />
        </div>
        <div ref={sectionRefs.projects}>
           <ProjectsSection language={language} />
        </div>
        <div ref={sectionRefs.contact}>
           <ContactSection language={language} />
        </div>
      </main>

      <Footer language={language} />
      <ScrollToTopButton show={showScroll} language={language} scrollToSection={() => scrollToSection('home')} />
    </div>
  );
};

export default Portfolio;