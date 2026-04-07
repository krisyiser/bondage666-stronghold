"use client";

import { motion } from "framer-motion";
import { LucideShoppingBag, LucideUser, LucideMenu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="h-10 w-auto group-hover:scale-110 transition-transform duration-500">
          <img src="/navbar-logo.png" alt="BONDAGE666" className="h-full w-auto object-contain" />
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-12 font-sans text-xs tracking-[0.3em] font-bold uppercase">
        <Link href="#banda" className="hover:text-electric-purple transition-colors">Banda</Link>
        <Link href="#merch" className="hover:text-electric-purple transition-colors">Merch</Link>
        <Link href="#discografia" className="hover:text-electric-purple transition-colors">Discografia</Link>
        <Link href="#media" className="hover:text-electric-purple transition-colors">Media</Link>
        <Link href="#timeline" className="hover:text-electric-purple transition-colors">Timeline</Link>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative group p-2 glass-dark hover:neon-border-purple">
          <LucideShoppingBag className="w-5 h-5 text-white group-hover:text-electric-purple" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-hell-red text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
        </button>
        <button className="p-2 glass-dark hover:neon-border-blue hidden md:block">
          <LucideUser className="w-5 h-5 text-white hover:text-cobalt-blue" />
        </button>
        <button className="md:hidden p-2 glass-dark" onClick={() => setIsOpen(!isOpen)}>
          <LucideMenu className="w-6 h-6" />
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
          <Link href="#banda" onClick={() => setIsOpen(false)} className="hover:text-electric-purple">Banda</Link>
          <Link href="#merch" onClick={() => setIsOpen(false)} className="hover:text-electric-purple">Merch</Link>
          <Link href="#discografia" onClick={() => setIsOpen(false)} className="hover:text-electric-purple">Discografía</Link>
          <Link href="#media" onClick={() => setIsOpen(false)} className="hover:text-electric-purple">Media</Link>
          <Link href="#timeline" onClick={() => setIsOpen(false)} className="hover:text-electric-purple">Timeline</Link>
        </motion.div>
      )}
    </nav>
  );
}
