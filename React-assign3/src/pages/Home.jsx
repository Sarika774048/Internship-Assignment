import React, { useState } from 'react';
import Sidebar from '../components/organisms/Sidebar';
import PostCard from '../components/organisms/PostCard';
import CreatePost from '../components/organisms/CreatePost';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('Relevant');

  // Spotlight Data Molecule
  const stories = [
    { id: 1, name: "Your Story", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarika", plus: true },
    { id: 2, name: "Google", img: "https://logo.clearbit.com/google.com" },
    { id: 3, name: "TCS", img: "https://logo.clearbit.com/tcs.com" },
    { id: 4, name: "React", img: "https://logo.clearbit.com/reactjs.org" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Left Column: Profile Card */}
      <div className="lg:col-span-3 hidden lg:block">
        <Sidebar />
        
        {/* Ad/Promotion Molecule */}
        <div className="mt-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Promoted</p>
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" className="rounded-xl mb-3 h-32 w-full object-cover" alt="Ad" />
          <h5 className="text-xs font-bold text-gray-800">Master Java Full Stack</h5>
          <button className="mt-3 w-full py-2 border-2 border-blue-600 text-blue-600 rounded-full text-xs font-black hover:bg-blue-50 transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Middle Column: The Dynamic Feed */}
      <div className="lg:col-span-6 space-y-6">
        
        {/* Horizontal Stories/Spotlight Bar */}
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {stories.map(story => (
            <div key={story.id} className="flex flex-col items-center min-w-[70px] cursor-pointer group">
              <div className={`w-16 h-16 rounded-2xl p-0.5 border-2 ${story.plus ? 'border-gray-200' : 'border-blue-500'} group-hover:scale-105 transition-transform`}>
                <div className="relative w-full h-full bg-gray-100 rounded-[14px] overflow-hidden">
                  <img src={story.img} className="w-full h-full object-cover" alt={story.name} />
                  {story.plus && <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white text-xl font-bold">+</div>}
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-500 mt-2 truncate w-full text-center">{story.name}</span>
            </div>
          ))}
        </div>

        <CreatePost />

        {/* Premium Filter Toggle */}
        <div className="flex items-center justify-between px-2">
          <div className="flex bg-gray-200/50 p-1 rounded-xl gap-1">
            {['Relevant', 'Recent', 'Popular'].map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeFilter === filter ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <PostCard 
          author="Sarika N"
          role="Full Stack Intern"
          time="Just Now"
          content="Successfully pushed the UI boundaries today! Implemented a high-fidelity glassmorphism design with responsive grid layouts. Check out the new spotlight bar! ✨"
          tags={["UIUX", "ReactJS", "DesignSystem"]}
        />
      </div>

      {/* Right Column: Community & Trending */}
      <div className="lg:col-span-3 space-y-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
          <h4 className="font-black text-sm text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-blue-600 italic">#</span> Trending_Nodes
          </h4>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xs">01</div>
              <div>
                <p className="text-xs font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Spring Boot 4.0 Alpha</p>
                <p className="text-[10px] text-gray-400 font-medium">1.2k posts today</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-xs">02</div>
              <div>
                <p className="text-xs font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">Tailwind CSS v4 Tips</p>
                <p className="text-[10px] text-gray-400 font-medium">840 posts today</p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-50" />
          
          <div className="bg-blue-600 rounded-xl p-4 text-white">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Premium Access</p>
            <p className="text-xs font-bold mt-1">Unlock 50+ Job Insights</p>
            <button className="mt-3 w-full bg-white text-blue-600 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-gray-100 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;