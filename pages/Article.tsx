import React from 'react';
import { Facebook, Twitter, Mail, Printer } from 'lucide-react';

export const Article: React.FC = () => {
  return (
    <div className="bg-earth-50 min-h-screen py-12 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs font-bold tracking-widest text-sage-600 mb-8 uppercase">
            Home &gt; Organic Methods &gt; Zero-Waste Composting
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-sage-900 mb-6 leading-tight">
            Stop Buying Fertilizer: How to Transform Kitchen Scraps into "Black Gold"
        </h1>
        <p className="text-xl text-earth-700 mb-8 font-light leading-relaxed">
            The secret to a lush, blooming garden isn't in a plastic bottle at the store. It's in your trash bin right now. Here is the complete Vedic guide to zero-waste composting.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-earth-500 mb-10 border-b border-earth-200 pb-10">
            <span className="font-bold text-earth-800 bg-sage-100 px-2 py-1 rounded">Dr. Anjali Sharma</span> 
            <span>•</span>
            <span>Reviewed by Garden Experts</span>
            <span>•</span>
            <span>5 min read</span>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
            <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" 
                alt="Compost Bin with organic waste" 
                className="w-full h-[450px] object-cover"
            />
            <p className="text-center text-xs text-earth-500 italic p-3 bg-white border-t border-earth-100">
                Nature wastes nothing. Every peel has a purpose.
            </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-12 relative">
            
            {/* Social Sidebar */}
            <div className="hidden md:flex flex-col gap-4 absolute -left-20 top-0 sticky top-24">
                <button className="p-3 bg-white text-blue-600 rounded-full shadow-md hover:scale-110 transition-transform border border-earth-100"><Facebook size={20}/></button>
                <button className="p-3 bg-white text-sky-500 rounded-full shadow-md hover:scale-110 transition-transform border border-earth-100"><Twitter size={20}/></button>
                <button className="p-3 bg-white text-earth-600 rounded-full shadow-md hover:scale-110 transition-transform border border-earth-100"><Mail size={20}/></button>
                <button className="p-3 bg-white text-earth-600 rounded-full shadow-md hover:scale-110 transition-transform border border-earth-100" onClick={() => window.print()}><Printer size={20}/></button>
            </div>

            {/* Main Text */}
            <div className="prose prose-stone prose-lg max-w-none text-earth-800">
                <p>
                    If you are throwing away banana peels, eggshells, or coffee grounds, you are throwing away the best plant food money <em>can't</em> buy. In Vedic agriculture, soil is treated as a living stomach. Just as we need diverse food for gut health, the soil needs diverse organic matter.
                </p>

                <h3 className="text-2xl font-serif font-bold text-sage-800 mt-8 mb-4">Why Composting is a Game Changer</h3>
                <p>
                    Composting creates <strong>Humus</strong>—a dark, organic material that acts like a sponge for water and nutrients. For women managing a home, this is the ultimate hack: it reduces your kitchen trash by 30% and gives you free fertilizer.
                </p>

                <div className="my-10 bg-white p-8 rounded-2xl shadow-sm border border-sage-100">
                    <h3 className="text-2xl font-serif font-bold text-sage-800 mt-0 mb-6 text-center">The "Black Gold" Ingredients List</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div>
                            <h4 className="font-bold text-sage-700 border-b border-sage-200 pb-2 mb-4">🟢 The Greens (Nitrogen)</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start"><span className="mr-2">✓</span> Vegetable Peels & Scraps</li>
                                <li className="flex items-start"><span className="mr-2">✓</span> Coffee Grounds & Tea Bags</li>
                                <li className="flex items-start"><span className="mr-2">✓</span> Fresh Grass Clippings</li>
                                <li className="flex items-start"><span className="mr-2">✓</span> Old Flowers</li>
                            </ul>
                         </div>
                         <div>
                            <h4 className="font-bold text-amber-700 border-b border-amber-200 pb-2 mb-4">🟤 The Browns (Carbon)</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start"><span className="mr-2">✓</span> Dry Leaves</li>
                                <li className="flex items-start"><span className="mr-2">✓</span> Plain Cardboard (Egg cartons)</li>
                                <li className="flex items-start"><span className="mr-2">✓</span> Paper Towel Rolls</li>
                                <li className="flex items-start"><span className="mr-2">✓</span> Sawdust</li>
                            </ul>
                         </div>
                    </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-sage-800 mt-8">The 3-Step Simple Method</h3>
                <ol className="list-decimal pl-5 space-y-4 marker:text-sage-600 marker:font-bold">
                    <li><strong>Collect:</strong> Keep a small ceramic or steel pot on your counter. Throw in your peels, coffee grounds, and crushed eggshells throughout the day.</li>
                    <li><strong>Layer:</strong> In your outdoor bin or garden corner, follow the "Lasagna Method". One layer of wet greens, covered by a layer of dry browns. This prevents smell.</li>
                    <li><strong>Aerate:</strong> Nature needs air. Turn the pile every week. In 2-3 months, you will have dark, crumbly soil that smells like rain-soaked earth.</li>
                </ol>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-10 rounded-r-lg">
                    <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <span>🕉️</span> Vedic Wisdom Note
                    </h4>
                    <p className="text-amber-800 italic">
                        "In ancient texts, cow dung and urine were used to ferment this waste, speeding up the process (Jeevamrutha). For modern homes, adding a little sour buttermilk can act as a natural starter culture!"
                    </p>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-sage-800 mt-8">Common Mistakes to Avoid</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>No Dairy or Meat:</strong> Unless you are an expert, avoid these as they attract pests.</li>
                    <li><strong>Too Wet?</strong> Add more cardboard or dry leaves.</li>
                    <li><strong>Too Dry?</strong> Sprinkle some water. It should feel like a wrung-out sponge.</li>
                </ul>
            </div>
        </div>

        {/* Disclaimer for Article */}
        <div className="mt-12 p-4 bg-gray-50 text-xs text-gray-500 rounded border border-gray-200">
            <strong>Disclaimer:</strong> The information provided in this article is for educational purposes based on traditional practices. We are not a registered agricultural agency. Results may vary based on climate and soil conditions.
        </div>

        {/* Related */}
        <div className="mt-16 pt-10 border-t border-earth-200">
            <h3 className="text-2xl font-serif font-bold text-sage-900 mb-6">Continue Your Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                     {title: "Natural Pest Control with Neem", img: "https://images.unsplash.com/photo-1596522026569-8084a4413695?q=80&w=2070&auto=format&fit=crop"},
                     {title: "Growing Herbs Indoors", img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop"},
                     {title: "Vedic Planting Calendar", img: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?q=80&w=2035&auto=format&fit=crop"}
                 ].map((item, idx) => (
                     <div key={idx} className="cursor-pointer group">
                        <div className="h-48 rounded-xl overflow-hidden mb-3 relative">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <h4 className="font-bold text-lg text-sage-800 group-hover:text-sage-600 transition-colors font-serif">{item.title}</h4>
                     </div>
                 ))}
            </div>
        </div>
      </div>
    </div>
  );
};