import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Gamepad2,
  Globe,
  Mail,
  Github,
  Linkedin,
  Mouse,
  Zap,
  Play,
  Download,
  Star,
  Languages,
  ChevronRight,
  Sparkles,
  Rocket,
  Heart,
  Coffee
} from 'lucide-react';
import style from './PortadaSpectacular.module.css';

// Configuración de idiomas
const translations = {
  es: {
    name: "VÍCTOR SIERRA",
    title: "Desarrollador Full-Stack & Móvil",
    description: "Más de 3 años creando soluciones web y móviles innovadoras",
    location: "Bello, Antioquia, Colombia",
    clickMe: "¡Haz clic aquí!",
    clickEffect: "¡Increíble! 🚀",
    hoverEffect: "Pasa el mouse por aquí",
    typeHere: "Escribe algo aquí...",
    typeResponse: "¡Excelente! Sigamos creando magia juntos ✨",
    loading: "Cargando magia...",
    hangmanTitle: "Juego del Ahorcado",
    guessLetter: "Adivina la letra:",
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
    downloadCV: "Descargar CV",
    gameWon: "¡Ganaste! 🎉",
    gameLost: "¡Perdiste! 😅",
    newGame: "Nuevo Juego",
    techSkills: "React • Node.js • TypeScript • PostgreSQL • React Native",
    projectsDesc: "Apps móviles para apuestas • Sistemas gubernamentales • Plataformas logísticas"
  },
  en: {
    name: "VÍCTOR SIERRA",
    title: "Full-Stack & Mobile Developer",
    description: "3+ years creating innovative web and mobile solutions",
    location: "Bello, Antioquia, Colombia",
    clickMe: "Click me!",
    clickEffect: "Amazing! 🚀",
    hoverEffect: "Hover over here",
    typeHere: "Type something here...",
    typeResponse: "Excellent! Let's keep creating magic together ✨",
    loading: "Loading magic...",
    hangmanTitle: "Hangman Game",
    guessLetter: "Guess the letter:",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    downloadCV: "Download CV",
    gameWon: "You won! 🎉",
    gameLost: "You lost! 😅",
    newGame: "New Game",
    techSkills: "React • Node.js • TypeScript • PostgreSQL • React Native",
    projectsDesc: "Betting mobile apps • Government systems • Logistics platforms"
  }
};

// Palabras para el juego del ahorcado
const hangmanWords = {
  es: ['JAVASCRIPT', 'REACT', 'NODEJS', 'TYPESCRIPT', 'POSTGRESQL', 'BACKEND', 'FRONTEND', 'DESARROLLO'],
  en: ['JAVASCRIPT', 'REACT', 'NODEJS', 'TYPESCRIPT', 'POSTGRESQL', 'BACKEND', 'FRONTEND', 'DEVELOPMENT']
};

// Componente de efecto de partículas
const ParticleEffect = ({ trigger }) => {
  const particles = Array.from({ length: 15 }, (_, i) => i);

  return (
    <AnimatePresence>
      {trigger && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1000 }}>
          {particles.map((particle) => (
            <motion.div
              key={particle}
              initial={{
                opacity: 0,
                scale: 0,
                x: '50%',
                y: '50%'
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: `${50 + (Math.random() - 0.5) * 200}%`,
                y: `${50 + (Math.random() - 0.5) * 200}%`,
                rotate: 360
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                delay: Math.random() * 0.5
              }}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                background: `hsl(${Math.random() * 360}, 80%, 60%)`,
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

// Componente de carga animada
const LoadingAnimation = ({ language }) => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => prev >= 100 ? 0 : prev + 3);
    }, 80);

    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className={style.loadingCard}>
      <div className={style.loadingContent}>
        <div className={style.loadingSpinner}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={24} />
          </motion.div>
        </div>
        <div className={style.loadingText}>
          {translations[language].loading}{dots}
        </div>
        <div className={style.progressBar}>
          <motion.div
            className={style.progressFill}
            style={{ width: `${progress}%` }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className={style.progressText}>{progress}%</div>
      </div>
    </div>
  );
};

// Componente del juego del ahorcado
const HangmanGame = ({ language }) => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [currentGuess, setCurrentGuess] = useState('');

  const maxWrongGuesses = 6;

  useEffect(() => {
    startNewGame();
  }, [language]);

  const startNewGame = () => {
    const words = hangmanWords[language];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus('playing');
    setCurrentGuess('');
  };

  const guessLetter = (letter) => {
    if (guessedLetters.includes(letter) || gameStatus !== 'playing') return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);

      if (newWrongGuesses >= maxWrongGuesses) {
        setGameStatus('lost');
      }
    } else {
      // Check if word is complete
      if (word.split('').every(char => newGuessedLetters.includes(char))) {
        setGameStatus('won');
      }
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length === 1) {
      guessLetter(currentGuess.toUpperCase());
      setCurrentGuess('');
    }
  };

  const displayWord = word.split('').map(letter =>
    guessedLetters.includes(letter) ? letter : '_'
  ).join(' ');

  // Hangman drawing parts (CORREGIDO para consistencia)
  const hangmanParts = [
    '😵', // head
    '|',  // body
    '/',  // left arm
    '\\', // right arm
    '/',  // left leg
    '\\'  // right leg
  ];

  return (
    <div className={style.hangmanCard}>
      <h3>{translations[language].hangmanTitle}</h3>
      <div className={style.hangmanDisplay}>
        <div className={style.hangmanFigure}>
          {Array.from({ length: maxWrongGuesses }, (_, i) => (
            <span
              key={i}
              style={{
                opacity: i < wrongGuesses ? 1 : 0.2,
                transition: 'opacity 0.3s ease'
              }}
            >
              {hangmanParts[i] || '?'}
            </span>
          ))}
        </div>
        <div className={style.wordDisplay}>
          {displayWord}
        </div>

        {gameStatus === 'playing' && (
          <form onSubmit={handleInputSubmit} className={style.guessForm}>
            <input
              type="text"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value.slice(0, 1))}
              placeholder={translations[language].guessLetter}
              className={style.guessInput}
              maxLength={1}
            />
            <button type="submit" disabled={!currentGuess}>→</button>
          </form>
        )}

        {gameStatus !== 'playing' && (
          <div className={style.gameEnd}>
            <div className={style.gameStatus}>
              {gameStatus === 'won' ? translations[language].gameWon : translations[language].gameLost}
            </div>
            <button onClick={startNewGame} className={style.newGameBtn}>
              {translations[language].newGame}
            </button>
          </div>
        )}

        <div className={style.guessedLetters}>
          Letras: {guessedLetters.join(', ')}
        </div>
      </div>
    </div>
  );
};

// Componente principal
const PortadaSpectacular = () => {
  const [language, setLanguage] = useState('es');
  const [clickEffect, setClickEffect] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);
  const [typeValue, setTypeValue] = useState('');
  const [showTypeResponse, setShowTypeResponse] = useState(false);
  const [particles, setParticles] = useState(false);

  const t = translations[language];

  const handleClick = () => {
    setClickEffect(true);
    setParticles(true);
    setTimeout(() => {
      setClickEffect(false);
      setParticles(false);
    }, 2000);
  };

  const handleTypeChange = (e) => {
    setTypeValue(e.target.value);
    if (e.target.value.length > 3) {
      setShowTypeResponse(true);
      setTimeout(() => setShowTypeResponse(false), 3000);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className={style.container}>
      <ParticleEffect trigger={particles} />

      {/* Header con traductor */}
      <motion.header
        className={style.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={style.languageToggle}>
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className={style.langBtn}
          >
            <Languages size={20} />
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className={style.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className={style.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t.name}
        </motion.h1>

        <motion.p
          className={style.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t.title}
        </motion.p>

        <motion.p
          className={style.heroDescription}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {t.description}
        </motion.p>
      </motion.section>

      {/* Grid de tarjetas interactivas */}
      <section className={style.cardsGrid}>
        {/* Tarjeta de click */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`${style.card} ${style.clickCard}`}
          onClick={handleClick}
        >
          <motion.div
            animate={clickEffect ? { scale: [1, 1.2, 1], rotate: [0, 360, 0] } : {}}
            transition={{ duration: 0.6 }}
          >
            <Zap size={40} />
          </motion.div>
          <h3>{clickEffect ? t.clickEffect : t.clickMe}</h3>
          {clickEffect && (
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              className={style.successIcon}
            >
              <Star fill="#FFD700" color="#FFD700" size={24} />
            </motion.div>
          )}
        </motion.div>

        {/* Tarjeta de hover */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`${style.card} ${style.hoverCard}`}
          onHoverStart={() => setHoverEffect(true)}
          onHoverEnd={() => setHoverEffect(false)}
        >
          <motion.div
            animate={hoverEffect ? {
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
              scale: [1, 1.1, 1]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Mouse size={40} />
          </motion.div>
          <h3>{t.hoverEffect}</h3>
          {hoverEffect && (
            <motion.div
              className={style.hoverWaves}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.div>

        {/* Tarjeta de input */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`${style.card} ${style.inputCard}`}
        >
          <Coffee size={40} />
          <input
            type="text"
            placeholder={t.typeHere}
            value={typeValue}
            onChange={handleTypeChange}
            className={style.magicInput}
          />
          <AnimatePresence>
            {showTypeResponse && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={style.typeResponse}
              >
                {t.typeResponse}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tarjeta de loading */}
        <motion.div
          custom={3}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`${style.card} ${style.loadingCardContainer}`}
        >
          <LoadingAnimation language={language} />
        </motion.div>

        {/* Tarjeta del juego del ahorcado */}
        <motion.div
          custom={4}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`${style.card} ${style.gameCard}`}
        >
          <HangmanGame language={language} />
        </motion.div>

        {/* Tarjeta de habilidades */}
        <motion.div
          custom={5}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`${style.card} ${style.skillsCard}`}
        >
          <Code size={40} />
          <h3>{t.skills}</h3>
          <p className={style.skillsList}>{t.techSkills}</p>
        </motion.div>

        {/* Tarjeta de proyectos */}
        <motion.div
          custom={6}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`${style.card} ${style.projectsCard}`}
        >
          <Rocket size={40} />
          <h3>{t.projects}</h3>
          <p className={style.projectsList}>{t.projectsDesc}</p>
        </motion.div>

        {/* Tarjeta de contacto */}
        <motion.div
          custom={7}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`${style.card} ${style.contactCard}`}
        >
          <Heart size={40} />
          <h3>{t.contact}</h3>
          <div className={style.socialLinks}>
            <motion.a
              href="mailto:victorbellasartes@gmail.com"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/VitoRouseCode"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/victor-sierra"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className={style.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p>{t.location}</p>
        <motion.button
          className={style.downloadBtn}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={20} />
          {t.downloadCV}
        </motion.button>
      </motion.footer>
    </div>
  );
};

export default PortadaSpectacular;