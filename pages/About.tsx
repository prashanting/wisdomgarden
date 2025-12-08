import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-earth-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1591857177580-dc82b9e4e119?q=80&w=2070&auto=format&fit=crop" 
          alt="Gardening Hands" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-md">Cultivating with <br/>Nature's Wisdom</h1>
                <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">Empowering you to grow greener, healthier worlds, starting from your kitchen.</p>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-earth-50 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Mission */}
        <div className="mb-20 text-center">
            <h2 className="text-3xl font-serif font-bold text-sage-900 mb-6">Our Mission & Passion</h2>
            <p className="text-earth-800 leading-relaxed text-lg">
                We believe gardening is more than a hobby; it's a mindful connection to the earth and a path to sustainable living. Our passion is to empower individuals with practical, organic, and time-honored methods that transform everyday life into a flourishing ecosystem. We are committed to sharing accessible wisdom, free from harmful chemicals, and deeply rooted in nature's recycled cycles.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <img src="https://images.unsplash.com/photo-1589923188900-85dae5233271?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-xl" alt="Composting" />
            </div>
            <div>
                <h3 className="text-2xl font-serif font-bold text-sage-800 mb-4">A Unique Blend for Modern Growth</h3>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-2xl">🗑️</div>
                        <div>
                            <h4 className="font-bold text-earth-900">Kitchen Waste Magic</h4>
                            <p className="text-sm text-earth-700">Turn your peels and scraps into black gold. We show you how to effortlessly create rich compost.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-2xl">🕉️</div>
                        <div>
                            <h4 className="font-bold text-earth-900">Ancient Vedic Methods</h4>
                            <p className="text-sm text-earth-700">Drawing from millennia-old wisdom, we integrate natural rhythms, lunar cycles, and mindful planting.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className="bg-[#f0e9dd] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" alt="Founder" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" />
            </div>
            <div>
                <h3 className="text-2xl font-serif font-bold text-sage-900 mb-2">From My Garden to Yours</h3>
                <p className="text-earth-800 italic text-sm mb-4">
                    "My journey began with a simple desire to feed my family with pure, home-grown food. Through years of trial, learning, and rediscovering ancestral knowledge, I found a way of gardening that nourishes both the body and soul."
                </p>
                <p className="font-bold text-sage-800 text-sm">- Anjali, Founder</p>
            </div>
        </div>
      </div>
    </div>
  );
};