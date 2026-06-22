import { useState } from 'react';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';
import Navbar from '../components/common/Navbar';

const motionsDatabase = [
  { id: 1, text: "THS the usage of statistical risk assessment by US courts in pre-trial decisions", category: "Economics & Policy", topics: ["Law", "Artificial Intelligence"], competition: "19th IITB IV", year: "2025", round: "Round 1" },
  { id: 2, text: "THS governments banning foreign ownership of media covering local or national news", category: "Technology & Media", topics: ["Media", "Government Regulation"], competition: "19th IITB IV", year: "2025", round: "Round 2" },
  { id: 3, text: "THBT multilateral development banks should cease financing all greenfield infrastructure in environmentally sensitive regions (Amazon, Congo Basin, Himalayas, etc.)", category: "Economics & Policy", topics: ["Environment", "Development"], competition: "19th IITB IV", year: "2025", round: "Round 3" },
  { id: 4, text: "In rapidly urbanising regions, THS local governments actively employing Land Value Capture measures", category: "Economics & Policy", topics: ["Urban Policy", "Economics"], competition: "19th IITB IV", year: "2025", round: "Round 4" },
  { id: 5, text: "THP a world with a dominant norm of maintaining both a polite public persona and emotional distance toward those outside one's immediate circle, as opposed to a world with a dominant norm of being emotionally expressive and authentic with those outside one's immediate circle", category: "Philosophy & Ethics", topics: ["Relationships", "Social Norms"], competition: "19th IITB IV", year: "2025", round: "Round 5" },
  { id: 6, text: "THS social justice movements in South Asia framing their advocacy through the concept of dharma (duty and moral responsibility)", category: "Social Justice & Feminism", topics: ["Religion", "Social Movements"], competition: "19th IITB IV", year: "2025", round: "Pre-Quarters" },
  { id: 7, text: "THBT Moldova should pursue accelerated EU accession, even at the expense of its relations with Russia.", category: "International Relations", topics: ["Geopolitics", "European Union"], competition: "19th IITB IV", year: "2025", round: "Quarterfinals" },
  { id: 8, text: "THR the rise of social-media-based self-disclosure groups for mental health", category: "Technology & Media", topics: ["Mental Health", "Social Media"], competition: "19th IITB IV", year: "2025", round: "Novice Semifinals" },
  { id: 9, text: "THBT adults have a greater moral obligation towards vulnerable strangers than towards their self-sufficient parents", category: "Philosophy & Ethics", topics: ["Morality", "Family"], competition: "19th IITB IV", year: "2025", round: "Semifinals" },
  { id: 10, text: "THBT feminists should support the legalization of surrogacy for profit.", category: "Social Justice & Feminism", topics: ["Feminism", "Surrogacy"], competition: "19th IITB IV", year: "2025", round: "Novice Finals" },
  { id: 11, text: "During times of ethno-religious conflicts, THS governments deploying the national military at religious places of worship that are likely to be affected by the conflict", category: "International Relations", topics: ["Religion", "Conflict"], competition: "19th IITB IV", year: "2025", round: "Grand Final" },
];

const categories = ["All", "Economics & Policy", "International Relations", "Philosophy & Ethics", "Social Justice & Feminism", "Technology & Media"];
const competitions = ["All Competitions", ...new Set(motionsDatabase.map((motion) => motion.competition))];
const topics = ["All Topics", ...[...new Set(motionsDatabase.flatMap((motion) => motion.topics))].sort()];

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCompetition, setActiveCompetition] = useState('All Competitions');
  const [activeTopic, setActiveTopic] = useState('All Topics');

  const filteredMotions = motionsDatabase.filter((motion) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      motion.text.toLowerCase().includes(query) ||
      motion.competition.toLowerCase().includes(query) ||
      motion.topics.some((topic) => topic.toLowerCase().includes(query));
    const matchesCategory = activeCategory === 'All' || motion.category === activeCategory;
    const matchesCompetition = activeCompetition === 'All Competitions' || motion.competition === activeCompetition;
    const matchesTopic = activeTopic === 'All Topics' || motion.topics.includes(activeTopic);

    return matchesSearch && matchesCategory && matchesCompetition && matchesTopic;
  });

  const hasActiveFilters =
    searchQuery ||
    activeCategory !== 'All' ||
    activeCompetition !== 'All Competitions' ||
    activeTopic !== 'All Topics';

  const resetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setActiveCompetition('All Competitions');
    setActiveTopic('All Topics');
  };

  return (
    <div className="min-h-screen bg-transparent pb-24 pt-32">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="mb-6 text-5xl font-serif text-primary md:text-6xl">Motion Archive</h1>
          <p className="text-sm font-sans text-secondary md:text-base">A searchable database of past debate motions.</p>
        </div>

        <div className="mb-12 flex flex-col gap-6">
          <input
            type="search"
            placeholder="Search motions, competitions, or topics..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="mx-auto w-full max-w-2xl rounded-2xl border border-primary/10 bg-white/50 px-6 py-4 text-primary shadow-sm transition focus:border-accent focus:outline-none"
          />

          <div className="mx-auto w-full max-w-3xl rounded-3xl border border-primary/10 bg-white/35 p-6 shadow-sm backdrop-blur-md">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-primary">
                <SlidersHorizontal size={16} strokeWidth={1.7} />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Filter by</span>
              </div>
              {hasActiveFilters && (
                <button type="button" onClick={resetFilters} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary transition-colors hover:text-accent">
                  <RotateCcw size={13} />
                  Reset
                </button>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="ml-1 text-[10px] font-bold uppercase tracking-widest text-secondary">Competition</span>
                <select value={activeCompetition} onChange={(event) => setActiveCompetition(event.target.value)} className="w-full appearance-none rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none">
                  {competitions.map((competition) => <option key={competition} value={competition}>{competition}</option>)}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="ml-1 text-[10px] font-bold uppercase tracking-widest text-secondary">Topic</span>
                <select value={activeTopic} onChange={(event) => setActiveTopic(event.target.value)} className="w-full appearance-none rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none">
                  {topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
                </select>
              </label>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-xs transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-sm'
                    : 'border border-primary/10 bg-transparent text-secondary hover:border-accent/50 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-secondary/70">
            Showing {filteredMotions.length} of {motionsDatabase.length} motions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredMotions.map((motion) => (
            <article key={motion.id} className="flex flex-col justify-between rounded-3xl border border-primary/10 bg-white/40 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-lg">
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{motion.category}</span>
                <h2 className="mt-2 text-xl font-serif leading-relaxed text-primary">“{motion.text}”</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {motion.topics.map((topic) => (
                    <span key={topic} className="rounded-full border border-primary/10 bg-white/50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-secondary">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-primary/10 pt-4 text-[10px] font-bold uppercase tracking-widest text-secondary/60">
                {motion.competition} • {motion.round} • {motion.year}
              </div>
            </article>
          ))}
        </div>

        {filteredMotions.length === 0 && (
          <div className="rounded-3xl border border-dashed border-primary/20 bg-white/20 py-16 text-center">
            <h2 className="text-2xl font-serif text-primary">No matching motions.</h2>
            <button type="button" onClick={resetFilters} className="mt-5 rounded-full bg-primary px-6 py-3 text-xs font-semibold text-white">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
