"use client";

import { motion } from "framer-motion";
import { LucideRadiation, LucideSkull, LucideZap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-obsidian pt-20">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-bg opacity-10" />
      
      {/* Lightning Overlay */}
      <div className="lightning-overlay" />

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
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <img 
            src="/hero-logo.jpg" 
            alt="BONDAGE666 - Tierra del Trueno" 
            className="w-full max-w-[800px] h-auto object-contain shadow-[0_0_50px_rgba(157,0,255,0.2)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl md:text-5xl font-display text-white tracking-widest uppercase">
              Thrash Metal <span className="text-electric-purple">|</span> Black Thrash
            </h2>
            <div className="flex items-center gap-4">
              <LucideRadiation className="text-electric-purple w-6 h-6 animate-pulse" />
              <span className="text-sm uppercase tracking-[0.4em] text-white/60">Papantla De Olarte, Veracruz, México</span>
              <LucideRadiation className="text-cobalt-blue w-6 h-6 animate-pulse" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-white/10 glass px-8 my-8">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-tighter text-white/40 mb-1">Lead Guitar</span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Jaime Uriel González</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-tighter text-white/40 mb-1">Vocals</span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Luis Angel Hernández</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-tighter text-white/40 mb-1">Drums</span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Zhalma Juarez Olmedo</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-tighter text-white/40 mb-1">Bass</span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Xavier De Luna</span>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-white/60 font-sans italic tracking-wide leading-relaxed">
            "Join the Malicious Metal Squad and enjoy the speed and sound. ¡¡¡HEAVY not hobby!!!"
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent border-2 border-electric-purple text-white uppercase tracking-[0.3em] font-bold hover:bg-electric-purple shadow-neon-purple transition-all duration-300"
            >
              Enter the Pit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black uppercase tracking-[0.3em] font-bold hover:bg-gray-200 transition-all duration-300"
            >
              Malicious Squad
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 text-white/5 hidden lg:block"
      >
        <LucideSkull size={150} />
      </motion.div>
      
      {/* Decorative Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-10" />
    </section>
  );
}
