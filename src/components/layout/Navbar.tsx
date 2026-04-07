"use client";

import { motion } from "framer-motion";
import { ShoppingBag, User, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-electric-purple text-white flex items-center justify-center font-display text-2xl group-hover:rotate-[360deg] transition-transform duration-500 shadow-neon-purple">
          B
        </div>
        <span className="font-display text-2xl tracking-tighter uppercase group-hover:text-electric-purple transition-colors">
          BONDAGE<span className="text-electric-purple">666</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-12 font-sans text-xs tracking-[0.3em] font-bold uppercase transition-colors">
        <Link href="/" className="hover:text-electric-purple transition-colors">Digital Stronghold</Link>
        <Link href="#merch" className="hover:text-electric-purple transition-colors">The Pit</Link>
        <Link href="#tour" className="hover:text-electric-purple transition-colors">Electric Hell Tour</Link>
        <Link href="/backstage" className="text-cobalt-blue hover:text-white transition-colors border-b border-cobalt-blue pb-1">Backstage</Link>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative group p-2 glass-dark hover:neon-border-purple">
          <ShoppingBag className="w-5 h-5 text-white group-hover:text-electric-purple" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-hell-red text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
        </button>
        <button className="p-2 glass-dark hover:neon-border-blue hidden md:block">
          <User className="w-5 h-5 text-white hover:text-cobalt-blue" />
        </button>
        <button className="md:hidden p-2 glass-dark" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer (Simplified for main structure) */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:hidden fixed inset-0 bg-obsidian z-[60] flex flex-col p-12 gap-8 text-3xl font-display uppercase tracking-widest"
        >
          <button className="self-end text-xl" onClick={() => setIsOpen(false)}>CLOSE</button>
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-electric-purple">Stronghold</Link>
          <Link href="#merch" onClick={() => setIsOpen(false)} className="hover:text-electric-purple">The Pit</Link>
          <Link href="#tour" onClick={() => setIsOpen(false)} className="hover:text-electric-purple">Electric Hell</Link>
          <Link href="/backstage" onClick={() => setIsOpen(false)} className="text-cobalt-blue">Backstage</Link>
        </motion.div>
      )}
    </nav>
  );
}
