import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-foreground relative">
      <Navbar />
      <Hero />
      
      {/* Pitch Merch Section Preview */}
      <section className="py-32 px-4 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl mb-16 neon-border-purple border-b-2 pb-4 inline-block">
          THE <span className="text-electric-purple">PIT</span> MERCH
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-dark p-6 neon-border-blue flex flex-col gap-4 group cursor-pointer transition-transform hover:-translate-y-2">
              <div className="aspect-square bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-electric-purple/20 to-cobalt-blue/20" />
                <div className="w-full h-full flex items-center justify-center text-white/20 select-none">
                   PRODUCT_{i}
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-xl">HELLHOUND T-SHIRT</h3>
                <span className="text-cobalt-blue font-mono">$33.33</span>
              </div>
              <button className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors uppercase tracking-widest text-xs">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Tour Section Preview */}
      <section className="py-32 bg-black/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-4xl md:text-6xl mb-16 neon-border-blue border-b-2 pb-4 inline-block">
            ELECTRIC <span className="text-cobalt-blue">HELL</span> TOUR 2026
          </h2>
          
          <div className="space-y-4">
            {[
              { city: "Berlin, DE", venue: "Wacken Open Air", status: "Tickets Live" },
              { city: "Mexico City, MX", venue: "Hell & Heaven", status: "Sold Out" },
              { city: "Los Angeles, CA", venue: "The Wiltern", status: "Tickets Live" },
            ].map((date, idx) => (
              <div key={idx} className="flex flex-wrap items-center justify-between p-6 glass hover:bg-white/10 transition-colors group">
                <div className="flex flex-col">
                  <span className="text-cobalt-blue font-mono uppercase tracking-tighter">OCT {15 + idx}, 2026</span>
                  <span className="text-2xl font-display">{date.city}</span>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-white/40 uppercase text-xs">{date.venue}</span>
                  <span className={`${date.status === 'Sold Out' ? 'text-hell-red' : 'text-green-500'} font-bold tracking-widest`}>
                    {date.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
