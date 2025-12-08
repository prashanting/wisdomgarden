import React from 'react';
import { Page } from '../types';
import { ArrowRight, Sprout, Recycle, Sun, Heart, Coffee } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col font-sans text-earth-900">
      {/* Hero Section with Hook */}
      <section className="relative w-full h-[650px] overflow-hidden">
         {/* Background Image Overlay - Hands in Soil / Gardening */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622383563227-0440113a8620?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center">
             <div className="absolute inset-0 bg-gradient-to-r from-earth-100/90 via-earth-50/70 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-fade-in-up pt-12">
            <span className="inline-block py-1 px-3 rounded-full bg-sage-200 text-sage-800 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-sage-300">
              For the Modern Sustainable Home
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-sage-900 mb-6 drop-shadow-sm leading-tight">
              Make it all real.
            </h1>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-sage-600 shadow-lg mb-8 max-w-2xl">
              <h2 className="text-xl md:text-2xl font-serif text-sage-800 font-semibold mb-3">
                I know exactly how to grab your attention.
              </h2>
              <p className="text-lg text-earth-900 leading-relaxed font-medium">
                Believe me, the simple kitchen secrets you are missing could transform your home into a lush oasis. 
                Discover how your daily "waste" is actually nature's gold, using methods trusted for centuries.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button 
                onClick={() => setPage(Page.TIPS)}
                className="px-8 py-4 bg-sage-700 text-white rounded-full font-medium shadow-xl hover:bg-sage-600 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
              >
                Reveal the Secrets
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setPage(Page.ARTICLE)}
                className="px-8 py-4 bg-white border border-earth-300 text-earth-800 rounded-full font-medium hover:bg-earth-50 transition-all shadow-md text-lg"
              >
                Start Composting Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The "Why" Section - Targeting 35+ Demographic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-4">You Don't Need Chemicals. You Need Wisdom.</h2>
             <p className="text-lg text-earth-600">
               Stop throwing away your garden's best fuel. From banana peels to coffee grounds, your kitchen holds the key to the garden of your dreams.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-6 hover:bg-sage-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Coffee className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-earth-800 mb-3">The Morning Ritual</h3>
              <p className="text-earth-600 leading-relaxed">
                Your morning coffee grounds are rich in nitrogen. Don't bin them—feed your soil and watch your greens explode with life.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-6 hover:bg-sage-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Recycle className="h-8 w-8 text-sage-700" />
              </div>
              <h3 className="text-xl font-bold text-earth-800 mb-3">Zero-Waste Living</h3>
              <p className="text-earth-600 leading-relaxed">
                Embrace the Vedic principle of circular life. What comes from the earth returns to the earth to create new abundance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-6 hover:bg-sage-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-earth-800 mb-3">Natural Pest Control</h3>
              <p className="text-earth-600 leading-relaxed">
                Forget harsh sprays. Use neem, chili, and garlic to protect your sanctuary safely for pets and children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards / Blog Preview */}
      <section className="relative bg-earth-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
           <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-serif font-bold text-sage-900">Trending Methods</h2>
                <p className="text-earth-600 mt-2">What our community is planting this week.</p>
              </div>
              <button onClick={() => setPage(Page.TIPS)} className="text-sage-700 font-bold hover:underline hidden md:block">View All Tips</button>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quiz Card */}
            <div 
              onClick={() => setPage(Page.TIPS)}
              className="bg-white rounded-3xl p-8 shadow-xl border border-earth-200 flex flex-col md:flex-row items-center gap-8 cursor-pointer group hover:shadow-2xl transition-all"
            >
              <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden rounded-2xl">
                 <img src="https://images.unsplash.com/photo-1479090225537-76483910668e?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Moon Calendar" />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-xs font-bold text-sage-600 uppercase tracking-wider">Vedic Secrets</span>
                <h3 className="text-2xl font-serif text-earth-900 mb-4 mt-2 group-hover:text-sage-700 transition-colors">Planting by the Moon</h3>
                <p className="text-earth-600 text-sm mb-6">Did you know the lunar cycle affects water flow in plants? Learn the ancient timing for sowing.</p>
                <span className="text-sage-800 font-bold underline decoration-sage-400 decoration-2 underline-offset-4">Read Article</span>
              </div>
            </div>

            {/* Kitchen Waste Card */}
            <div 
               onClick={() => setPage(Page.ARTICLE)}
               className="bg-white rounded-3xl p-8 shadow-xl border border-earth-200 flex flex-col md:flex-row items-center gap-8 cursor-pointer group hover:shadow-2xl transition-all"
            >
               <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden rounded-2xl">
                 <img src="https://images.unsplash.com/photo-1605218427368-23035f524795?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Compost" />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Kitchen Hacks</span>
                <h3 className="text-2xl font-serif text-earth-900 mb-4 mt-2 group-hover:text-sage-700 transition-colors">Don't Toss That Peel!</h3>
                <p className="text-earth-600 text-sm mb-6">Transforming citrus peels into a potent fertilizer is easier than you think. 3 steps to gold.</p>
                <span className="text-sage-800 font-bold underline decoration-sage-400 decoration-2 underline-offset-4">Read Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};