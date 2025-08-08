import { motion } from 'framer-motion';
import { CountdownTimer } from './components/CountdownTimer';
import logo from '/ss.png';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Royal gradient background with animated lighting */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.02) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
            "radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.03) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.02) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
            "radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.04) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.02) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Mandala Kaleidoscope Layer 1 - Large Central Pattern */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative w-[1000px] h-[1000px]">
          {/* Outer mandala ring */}
          <div className="absolute inset-0 rounded-full border-2 border-yellow-400/40">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-yellow-400/60 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 15}deg) translateY(-480px)`,
                }}
              />
            ))}
          </div>
          
          {/* Middle mandala ring */}
          <div className="absolute inset-20 rounded-full border-2 border-yellow-400/30">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-16 bg-gradient-to-t from-yellow-400/40 to-transparent"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 22.5}deg) translateY(-380px)`,
                }}
              />
            ))}
          </div>

          {/* Inner mandala pattern */}
          <div className="absolute inset-40 rounded-full border-2 border-yellow-400/25">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 border-2 border-yellow-400/50 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-280px)`,
                }}
              />
            ))}
          </div>

          {/* Center mandala core */}
          <div className="absolute inset-60 rounded-full border border-yellow-400/30">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-20 bg-gradient-to-t from-yellow-400/30 via-yellow-400/15 to-transparent"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-180px)`,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mandala Kaleidoscope Layer 2 - Counter Rotating */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-15"
        animate={{ rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative w-[700px] h-[700px]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{ transform: `rotate(${i * 45}deg)` }}
            >
              <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-gradient-to-b from-yellow-400/40 via-yellow-400/20 to-transparent transform -translate-x-1/2" />
              <div className="absolute top-20 left-1/2 w-6 h-6 border-2 border-yellow-400/50 rounded-full transform -translate-x-1/2" />
              <div className="absolute top-40 left-1/2 w-3 h-20 bg-gradient-to-b from-yellow-400/30 to-transparent transform -translate-x-1/2" />
              <div className="absolute top-0 left-1/2 w-8 h-8 border border-yellow-400/25 rounded-full transform -translate-x-1/2 -translate-y-4" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sacred Geometry Pattern - Flower of Life Inspired */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-12"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 300, repeat: Infinity, ease: "linear" },
          scale: { duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      >
        <div className="relative w-[500px] h-[500px]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-yellow-400/35"
              style={{
                transform: `rotate(${i * 60}deg) translateX(100px)`,
                width: '300px',
                height: '300px',
                top: '50%',
                left: '50%',
                marginTop: '-150px',
                marginLeft: '-150px'
              }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-yellow-400/40 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.div>

      {/* Kaleidoscope Triangular Patterns */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative w-[600px] h-[600px]">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              }}
            >
              <div className="w-0 h-0 border-l-[120px] border-r-[120px] border-b-[160px] border-l-transparent border-r-transparent border-b-yellow-400/25" />
            </div>
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
              }}
            >
              <div className="w-0 h-0 border-l-[200px] border-r-[200px] border-b-[260px] border-l-transparent border-r-transparent border-b-yellow-400/15" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Animated light rays - reduced opacity */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            linear-gradient(45deg, transparent 49%, rgba(255, 215, 0, 0.1) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(255, 215, 0, 0.05) 50%, transparent 51%),
            linear-gradient(90deg, transparent 49%, rgba(255, 215, 0, 0.03) 50%, transparent 51%)
          `,
          backgroundSize: '200px 200px, 300px 300px, 400px 400px'
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 0% 0%, 0% 0%',
            '100% 100%, -100% 100%, 100% 0%',
            '0% 0%, 0% 0%, 0% 0%'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Smaller Rotating Mandala Accents */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-8"
          style={{
            top: i < 2 ? '20%' : '80%',
            left: i % 2 === 0 ? '15%' : '85%',
            transform: 'translate(-50%, -50%)'
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-40 h-40">
            {[...Array(8)].map((_, j) => (
              <div
                key={j}
                className="absolute w-1 h-12 bg-gradient-to-t from-yellow-400/40 to-transparent"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${j * 45}deg) translateY(-50px)`,
                }}
              />
            ))}
            <div className="absolute top-1/2 left-1/2 w-6 h-6 border-2 border-yellow-400/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            {[...Array(4)].map((_, k) => (
              <div
                key={k}
                className="absolute w-2 h-2 bg-yellow-400/50 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${k * 90}deg) translateY(-30px)`,
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {/* Floating golden particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Central radial glow behind content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div className="w-96 h-96 bg-gradient-radial from-yellow-400/10 via-yellow-400/5 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Royal corner ornaments with glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-8 left-8 w-16 h-16"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent rounded-full blur-sm" />
          <div className="relative w-6 h-6 border-l-2 border-t-2 border-yellow-400/40" />
          <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-yellow-400/60" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-8 w-16 h-16"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/20 via-transparent to-transparent rounded-full blur-sm" />
          <div className="relative w-6 h-6 border-r-2 border-b-2 border-yellow-400/40 ml-auto mt-auto" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-yellow-400/60" />
        </div>
      </motion.div>

      {/* Top and bottom edge lighting */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-yellow-400/5 via-yellow-400/2 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-400/5 via-yellow-400/2 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16 min-h-screen">
        
        {/* Header with Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div className="relative mb-6">
            {/* Subtle glow behind logo */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-yellow-400/5 to-transparent rounded-full blur-2xl scale-150"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1.2, 1.5, 1.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={logo}
              alt="Sonic Soiree Logo"
              className="h-20 md:h-28 lg:h-32 mx-auto relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.div>
          
          <motion.div 
            className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent mx-auto mb-6"
            animate={{
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          <motion.p 
            className="font-playfair text-2xl md:text-3xl lg:text-4xl text-white/90 max-w-2xl mx-auto leading-relaxed italic"
            style={{ letterSpacing: '0.02em' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
              An Evening of Sound, Light & Soul
            </span>
          </motion.p>
        </motion.div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="font-inter text-sm md:text-base text-white/60 uppercase tracking-[0.2em]">
            October 11, 2025
          </div>
        </motion.div>

        {/* Countdown Timer with subtle glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative px-4 sm:px-6 md:px-8 w-full max-w-6xl"
        >
          {/* Glow effect behind countdown */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-yellow-400/5 via-transparent to-transparent rounded-3xl blur-3xl scale-110"
            animate={{
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <div className="py-8 md:py-12">
            <CountdownTimer />
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 text-center pb-8"
      >
        <div className="font-inter text-xs text-white/40 uppercase tracking-widest">
          Coming Soon
        </div>
      </motion.div>
    </div>
  );
}