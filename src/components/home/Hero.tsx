"use client";

import { motion } from "framer-motion";
import { Radiation, Skull, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-obsidian">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-bg opacity-10" />
      
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-electric-purple/20 blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cobalt-blue/20 blur-[120px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <Radiation className="text-electric-purple w-8 h-8 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.5em] text-white/40">PROJECT: DARKNESS ACTIVE</span>
            <Radiation className="text-cobalt-blue w-8 h-8 animate-pulse" />
          </div>
          
          <h1 className="text-8xl md:text-9xl font-display text-white glitch-text tracking-tighter">
            BONDAGE<span className="text-electric-purple">666</span>
          </h1>
          
          <p className="max-w-xl text-lg text-white/60 font-sans tracking-wide leading-relaxed">
            THE DIGITAL STRONGHOLD FOR THE NEW ERA OF THRASH METAL. 
            BRUTAL AESTHETICS. HIGH-TECH DOMINATION.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-electric-purple text-white uppercase tracking-widest font-bold hover:bg-electric-purple/20 shadow-neon-purple transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10">ENTER THE PIT</span>
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-cobalt-blue text-white uppercase tracking-widest font-bold hover:bg-cobalt-blue/20 shadow-neon-blue transition-all duration-300"
            >
              TOUR DATES
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Skull Icon Floating Decoration */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 text-white/5"
      >
        <Skull size={120} />
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 text-white/5"
      >
        <Zap size={100} />
      </motion.div>

      {/* Decorative Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
    </section>
  );
}
