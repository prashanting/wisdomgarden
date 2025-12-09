import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, X } from 'lucide-react';
import { Tip, Page } from '../types';

interface TipsProps {
  setPage: (page: Page) => void;
}

const CATEGORIES = [
  "Kitchen Waste Gardening",
  "Indoor Herbs",
  "Vedic Secrets",
  "Pest Control Naturally",
  "Seasonal Planting",
  "Composting Basics"
];

const INITIAL_TIPS: Tip[] = [
  // --- Kitchen Waste Gardening ---
  {
    id: 'kw-1',
    title: 'Banana Peel Boost for Tomatoes',
    description: 'Rich in potassium, banana peels naturally enhance tomato growth. Bury chopped peels near the roots to boost flowering.',
    imageUrl: 'https://images.unsplash.com/photo-1594488516806-11e2f75811c7?q=80&w=800&auto=format&fit=crop', 
    category: 'Kitchen Waste Gardening'
  },
  {
    id: 'kw-2',
    title: 'Rice Water Nutrient Drink',
    description: 'The cloudy water left after washing rice is rich in starches and minerals. Cool it down and use it to water your indoor plants.',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop',
    category: 'Kitchen Waste Gardening'
  },
  {
    id: 'kw-3',
    title: 'Onion Skin Tea Fertilizer',
    description: 'Soak onion skins in water for 24 hours to create a potassium-rich "tea" that roses and vegetable plants love.',
    imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=800&auto=format&fit=crop',
    category: 'Kitchen Waste Gardening'
  },
  {
    id: 'kw-4',
    title: 'Calcium-Rich Eggshell Tea',
    description: 'Boil crushed eggshells in water, let it sit overnight, and use the water to give your plants a calcium boost to prevent root rot.',
    imageUrl: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=800&auto=format&fit=crop',
    category: 'Kitchen Waste Gardening'
  },
  {
    id: 'kw-5',
    title: 'Cucumber Peel Ant Repellent',
    description: 'Place cucumber peels near entry points or ant hills. The alkaloids in the peel act as a natural repellent for ants.',
    imageUrl: 'https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?q=80&w=800&auto=format&fit=crop',
    category: 'Kitchen Waste Gardening'
  },
  {
    id: 'kw-6',
    title: 'Unsalted Pasta Water',
    description: 'Save the water from boiling pasta (unsalted only). The starch encourages the release of plant nutrients in the soil.',
    imageUrl: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?q=80&w=800&auto=format&fit=crop',
    category: 'Kitchen Waste Gardening'
  },
  {
    id: 'kw-7',
    title: 'Citrus Peel Starter Pots',
    description: 'Use hollowed-out orange or grapefruit halves as biodegradable seedling pots. Plant the whole thing directly into the soil.',
    imageUrl: 'https://images.unsplash.com/photo-1582979512210-99b6a53385f9?q=80&w=800&auto=format&fit=crop',
    category: 'Kitchen Waste Gardening'
  },

  // --- Indoor Herbs ---
  {
    id: 'ih-1',
    title: 'Indoor Herb Garden Basics',
    description: 'Start your own kitchen herb garden. Basil loves sunny windowsills, while mint thrives in partial shade. Keep soil moist but not soggy.',
    imageUrl: 'https://images.unsplash.com/photo-1628678685114-1e54452dc8df?q=80&w=800&auto=format&fit=crop',
    category: 'Indoor Herbs'
  },
  {
    id: 'ih-2',
    title: 'Regrowing Green Onions',
    description: 'Place the white root ends of scallions in a glass of water on a windowsill. Change water daily and watch them regrow endlessly.',
    imageUrl: 'https://images.unsplash.com/photo-1637500980708-3607eb36940e?q=80&w=800&auto=format&fit=crop',
    category: 'Indoor Herbs'
  },
  {
    id: 'ih-3',
    title: 'Basil Pruning Secret',
    description: 'Always pinch off the top leaves of your basil plant, not the large side leaves. This encourages bushier growth and prevents flowering.',
    imageUrl: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?q=80&w=800&auto=format&fit=crop',
    category: 'Indoor Herbs'
  },
  {
    id: 'ih-4',
    title: 'Microgreens on the Sill',
    description: 'Grow mustard or fenugreek seeds in a shallow tray on your window. They are ready to harvest in just 7-10 days.',
    imageUrl: 'https://images.unsplash.com/photo-1536639535805-75d86ef8e3d0?q=80&w=800&auto=format&fit=crop',
    category: 'Indoor Herbs'
  },
  {
    id: 'ih-5',
    title: 'Watering Rosemary',
    description: 'Rosemary hates "wet feet." Allow the soil to dry out completely between waterings to prevent root rot indoors.',
    imageUrl: 'https://images.unsplash.com/photo-1594412239404-58535b7bc33c?q=80&w=800&auto=format&fit=crop',
    category: 'Indoor Herbs'
  },
  {
    id: 'ih-6',
    title: 'Mint Containment',
    description: 'Always plant mint in its own pot, even if indoors. Its roots are aggressive and will choke out other herbs in a shared container.',
    imageUrl: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=800&auto=format&fit=crop',
    category: 'Indoor Herbs'
  },

  // --- Vedic Secrets ---
  {
    id: 'vs-1',
    title: 'Vedic Pest Control: Neem Oil',
    description: 'Neem is nature\'s pharmacy. A diluted spray keeps aphids and mealybugs away without harming beneficial bees.',
    imageUrl: 'https://images.unsplash.com/photo-1596522026569-8084a4413695?q=80&w=800&auto=format&fit=crop',
    category: 'Vedic Secrets'
  },
  {
    id: 'vs-2',
    title: 'Moon Phase Gardening',
    description: 'Plant above-ground crops during the waxing moon and root crops during the waning moon for better yield according to Vedic texts.',
    imageUrl: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=800&auto=format&fit=crop',
    category: 'Vedic Secrets'
  },
  {
    id: 'vs-3',
    title: 'Turmeric Paste for Plant Cuts',
    description: 'If you accidentally damage a branch, apply a paste of turmeric and water to the cut. It acts as a natural antiseptic and healer.',
    imageUrl: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=800&auto=format&fit=crop',
    category: 'Vedic Secrets'
  },
  {
    id: 'vs-4',
    title: 'Tulsi Placement (Vastu)',
    description: 'According to Vastu, placing Holy Basil (Tulsi) in the North or East direction brings positive energy and purifies the air.',
    imageUrl: 'https://images.unsplash.com/photo-1611718029511-b4f53589b25f?q=80&w=800&auto=format&fit=crop',
    category: 'Vedic Secrets'
  },
  {
    id: 'vs-5',
    title: 'Talking to Plants',
    description: 'Vedic wisdom suggests plants are sentient. Gently stroking leaves and speaking positively is believed to stimulate growth vibrations.',
    imageUrl: 'https://images.unsplash.com/photo-1497990571654-77aa8ec36038?q=80&w=800&auto=format&fit=crop',
    category: 'Vedic Secrets'
  },
  {
    id: 'vs-6',
    title: 'Wood Ash for Soil',
    description: 'Ash from sacred fires (Havan) or plain wood ash is rich in potassium. Sprinkle lightly to alkaline overly acidic soils.',
    imageUrl: 'https://images.unsplash.com/photo-1620027727827-c6b7100b4626?q=80&w=800&auto=format&fit=crop',
    category: 'Vedic Secrets'
  },

  // --- Pest Control Naturally ---
  {
    id: 'pc-1',
    title: 'Cinnamon Anti-Fungal Powder',
    description: 'Sprinkle cinnamon powder on soil seedlings to prevent "damping off" disease and repel ants naturally.',
    imageUrl: 'https://images.unsplash.com/photo-1556687265-d05562144709?q=80&w=800&auto=format&fit=crop',
    category: 'Pest Control Naturally'
  },
  {
    id: 'pc-2',
    title: 'DIY Chili-Garlic Spray',
    description: 'Blend garlic and hot chilies, strain the water, and spray on plants. This potent mix deters caterpillars and beetles instantly.',
    imageUrl: 'https://images.unsplash.com/photo-1620626330904-890259f93382?q=80&w=800&auto=format&fit=crop',
    category: 'Pest Control Naturally'
  },
  {
    id: 'pc-3',
    title: 'Marigolds as Guardians',
    description: 'Plant marigolds around your vegetable patch. Their strong scent confuses pests and their roots repel harmful nematodes.',
    imageUrl: 'https://images.unsplash.com/photo-1627915570222-777e387f34c2?q=80&w=800&auto=format&fit=crop',
    category: 'Pest Control Naturally'
  },
  {
    id: 'pc-4',
    title: 'Soap Water for Aphids',
    description: 'Mix 1 teaspoon of mild liquid dish soap in 1 liter of water. Spray directly on aphids to dehydrate and remove them.',
    imageUrl: 'https://images.unsplash.com/photo-1617260020110-313d4b68e0d6?q=80&w=800&auto=format&fit=crop',
    category: 'Pest Control Naturally'
  },
  {
    id: 'pc-5',
    title: 'Beer Trap for Slugs',
    description: 'Bury a shallow container filled with stale beer near your plants. Slugs are attracted to the yeast and will fall in.',
    imageUrl: 'https://images.unsplash.com/photo-1627660237722-e421067341e4?q=80&w=800&auto=format&fit=crop',
    category: 'Pest Control Naturally'
  },
  {
    id: 'pc-6',
    title: 'Ladybug Attraction',
    description: 'Plant fennel or dill to attract ladybugs. One ladybug can eat up to 5,000 aphids in its lifetime!',
    imageUrl: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea218?q=80&w=800&auto=format&fit=crop',
    category: 'Pest Control Naturally'
  },

  // --- Seasonal Planting ---
  {
    id: 'sp-1',
    title: 'Toilet Roll Seed Starters',
    description: 'Biodegradable and free! Cut toilet paper rolls in half, fill with soil, and plant seeds. Plant the whole thing directly in the ground.',
    imageUrl: 'https://images.unsplash.com/photo-1594042875151-51253aa731e8?q=80&w=800&auto=format&fit=crop',
    category: 'Seasonal Planting'
  },
  {
    id: 'sp-2',
    title: 'Spring Greens Strategy',
    description: 'Plant cool-weather crops like spinach, lettuce, and peas as soon as the soil can be worked in spring. They taste sweeter in the cold.',
    imageUrl: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop',
    category: 'Seasonal Planting'
  },
  {
    id: 'sp-3',
    title: 'Saving Tomato Seeds',
    description: 'Scoop out tomato seeds, ferment them in water for 3 days to remove the gel coating, dry them, and store for next season.',
    imageUrl: 'https://images.unsplash.com/photo-1561136120-f6e80b2d6a52?q=80&w=800&auto=format&fit=crop',
    category: 'Seasonal Planting'
  },
  {
    id: 'sp-4',
    title: 'Crop Rotation Basics',
    description: 'Never plant tomatoes or peppers in the same spot two years in a row. Rotate with legumes like beans to fix nitrogen in the soil.',
    imageUrl: 'https://images.unsplash.com/photo-1622383563227-0440113a8620?q=80&w=800&auto=format&fit=crop',
    category: 'Seasonal Planting'
  },
  {
    id: 'sp-5',
    title: 'Fall Bulb Planting',
    description: 'Plant garlic cloves and flowering bulbs like tulips in late autumn before the ground freezes for a beautiful spring harvest.',
    imageUrl: 'https://images.unsplash.com/photo-1572084922851-464879f97906?q=80&w=800&auto=format&fit=crop',
    category: 'Seasonal Planting'
  },
  {
    id: 'sp-6',
    title: 'Cover Crops for Winter',
    description: 'Plant clover or rye in empty beds during winter. They protect the soil from erosion and add nutrients when turned over in spring.',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop',
    category: 'Seasonal Planting'
  },

  // --- Composting Basics ---
  {
    id: 'cb-1',
    title: 'Eggshell Calcium for Soil',
    description: 'Don\'t toss eggshells! Wash, dry, and crush them into powder to prevent blossom-end rot in peppers and tomatoes.',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop',
    category: 'Composting Basics'
  },
  {
    id: 'cb-2',
    title: 'Coffee Grounds for Nitrogen',
    description: 'Used coffee grounds are a great source of nitrogen. Sprinkle lightly over soil to attract earthworms and acidify soil for hydrangeas.',
    imageUrl: 'https://images.unsplash.com/photo-1520127521873-61b6968e7655?q=80&w=800&auto=format&fit=crop',
    category: 'Composting Basics'
  },
  {
    id: 'cb-3',
    title: 'The Brown vs. Green Ratio',
    description: 'Aim for a 3:1 ratio of browns (leaves, cardboard) to greens (scraps). This ensures your pile heats up but doesn\'t smell.',
    imageUrl: 'https://images.unsplash.com/photo-1533230676449-335193914a2f?q=80&w=800&auto=format&fit=crop',
    category: 'Composting Basics'
  },
  {
    id: 'cb-4',
    title: 'The Sponge Test',
    description: 'Your compost pile should be as moist as a wrung-out sponge. If it\'s too dry, decomposition stops. Too wet? It rots and smells.',
    imageUrl: 'https://images.unsplash.com/photo-1605218427368-23035f524795?q=80&w=800&auto=format&fit=crop',
    category: 'Composting Basics'
  },
  {
    id: 'cb-5',
    title: 'No Meat or Dairy',
    description: 'Avoid adding meat, bones, or dairy to your home compost bin. They attract rats and break down too slowly for typical piles.',
    imageUrl: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=800&auto=format&fit=crop',
    category: 'Composting Basics'
  },
  {
    id: 'cb-6',
    title: 'Aeration is Key',
    description: 'Turn your compost pile with a pitchfork once a week. Oxygen is vital for the bacteria that break down your waste into soil.',
    imageUrl: 'https://images.unsplash.com/photo-1595856419808-76672322a36e?q=80&w=800&auto=format&fit=crop',
    category: 'Composting Basics'
  }
];

export const Tips: React.FC<TipsProps> = ({ setPage }) => {
  const [tips] = useState<Tip[]>(INITIAL_TIPS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Search Auto-suggest state
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter tips based on search and category
  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tip.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? tip.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    // Search is handled by filtering automatically, no need for API call
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      const lowerValue = value.toLowerCase();
      // Filter unique titles for suggestions
      const titleMatches = tips
        .filter(t => t.title.toLowerCase().includes(lowerValue) || t.category.toLowerCase().includes(lowerValue))
        .map(t => t.title);
      
      const uniqueSuggestions = Array.from(new Set(titleMatches)).slice(0, 5);
      setSuggestions(uniqueSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const loadMoreTipsForCategory = (cat: string) => {
    setSelectedCategory(cat);
  };

  return (
    <div className="bg-earth-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar - Categories */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <h2 className="text-xl font-bold text-sage-900 mb-6 flex items-center gap-2 font-serif">
            <span className="w-1 h-6 bg-sage-500 rounded-full"></span>
            Browse Topics
          </h2>
          <nav className="space-y-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => loadMoreTipsForCategory(category)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category 
                  ? 'bg-sage-600 text-white shadow-md' 
                  : 'text-earth-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
            <button 
                onClick={() => setSelectedCategory(null)}
                className="block w-full text-left px-4 py-3 text-earth-500 text-xs uppercase tracking-wider hover:text-earth-800 font-bold mt-4"
            >
                View All Tips
            </button>
          </nav>

          <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-100 shadow-sm">
             <h3 className="font-serif font-bold text-amber-900 mb-2">Did you know?</h3>
             <p className="text-sm text-amber-800 leading-relaxed">
               In Vedic tradition, plants are treated as living entities. Speaking kindly to your Tulsi or Basil is believed to encourage growth.
             </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-4">Everyday Wisdom for Your Garden</h1>
            <p className="text-earth-700 max-w-2xl leading-relaxed">
              Browse our collection of practical, organic, and Vedic methods using what you already have in your kitchen.
            </p>
          </div>

          {/* Search Bar Container */}
          <div className="mb-10 relative max-w-3xl" ref={searchContainerRef}>
            <form onSubmit={handleSearchSubmit}>
                <div className="relative group z-30">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-earth-400 h-5 w-5 group-focus-within:text-sage-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search for 'turmeric', 'ants', or 'compost'..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        onFocus={() => {
                            if (searchTerm && suggestions.length > 0) setShowSuggestions(true);
                        }}
                        className={`w-full pl-12 pr-12 py-4 rounded-xl border border-earth-200 shadow-sm focus:ring-2 focus:ring-sage-300 focus:border-sage-300 bg-white text-earth-900 placeholder-earth-400 outline-none transition-all ${showSuggestions && suggestions.length > 0 ? 'rounded-b-none border-b-0' : ''}`}
                    />
                    
                    {searchTerm && (
                        <button 
                            type="button"
                            onClick={clearSearch}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-earth-300 hover:text-earth-500 hover:bg-earth-100 rounded-full transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}

                    {/* Suggestions Dropdown */}
                    {showSuggestions && suggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 bg-white border border-earth-200 border-t-0 rounded-b-xl shadow-lg z-40 overflow-hidden max-h-60 overflow-y-auto">
                            {suggestions.map((suggestion, index) => (
                                <div 
                                    key={index}
                                    onClick={() => selectSuggestion(suggestion)}
                                    className="px-4 py-3 hover:bg-sage-50 cursor-pointer flex items-center gap-3 text-earth-700 transition-colors border-t border-earth-50 first:border-t-0"
                                >
                                    <Sparkles className="h-4 w-4 text-sage-400 flex-shrink-0" />
                                    <span className="text-sm font-medium">{suggestion}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </form>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredTips.map((tip) => (
              <div key={tip.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-earth-100 transition-all duration-300 group flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                    <img 
                        src={tip.imageUrl} 
                        alt={tip.title}
                        loading="lazy" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-bold text-sage-800 uppercase tracking-wider shadow-sm">
                        {tip.category}
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-earth-900 mb-3 font-serif group-hover:text-sage-700 transition-colors">{tip.title}</h3>
                  <p className="text-earth-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {tip.description}
                  </p>
                  <button 
                    onClick={() => setPage(Page.ARTICLE)}
                    className="flex items-center text-sage-700 font-bold text-sm hover:text-sage-900 hover:underline self-start mt-auto group/btn"
                  >
                    Read Full Method
                    <span className="ml-1 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTips.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-earth-300">
                  <p className="text-earth-500 mb-2">No tips found matching your search.</p>
                  <p className="text-sage-600 font-medium">Try checking a different category or simplifying your search!</p>
              </div>
          )}
        </main>
      </div>
    </div>
  );
};