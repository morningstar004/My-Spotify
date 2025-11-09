import React from 'react';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/X.png';
import LinkedIn from '../assets/linkedIn.png';
import Instagram from '../assets/instagram.png';
import YouTube from '../assets/youtube.png';
import Create from '../assets/create.png';

function App() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans antialiased">
      <div className="flex flex-1 w-full max-w-full mx-auto bg-white shadow-xl overflow-hidden rounded-none">
        {/* sidebar */}
        <aside className="w-16 bg-gradient-to-br from-[#76C893] to-[#1E6091] text-white flex flex-col items-center py-4 shadow-md">
          <div className="sidebar-icon text-2xl mb-8 cursor-pointer">Logo</div>
          <div className="sidebar-icon text-2xl mb-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">home</div>
          <div className="sidebar-icon text-2xl mb-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">💬</div>
          <div className="sidebar-icon text-2xl mb-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
            <img className='h-7' src={Create} alt="Create" />
          </div>
          <div className="sidebar-icon text-2xl mb-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">📣</div>
          <div className="sidebar-icon text-2xl mb-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">📊</div>
          <div className="sidebar-icon text-2xl mb-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">⚙️</div>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="flex justify-between items-center px-6 py-2 border-b border-gray-200 bg-white shadow-sm">
            {/* navbar */}
            <nav className="flex space-x-6">
              <button className="relative text-[#34A0A4] font-semibold pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.8px] after:bg-[#34A0A4]">Create Post</button>
              <button className="text-gray-600 hover:text-[#34A0A4] transition-colors pb-2">Drafts</button>
              <button className="text-gray-600 hover:text-[#34A0A4] transition-colors pb-2">Scheduled Posts</button>
              <button className="text-gray-600 hover:text-[#34A0A4] transition-colors pb-2">Past Posts</button>
            </nav>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-[#34A0A4] text-white rounded-lg text-sm font-medium hover:bg-[#184E77] transition-colors shadow-md">Calendar Schedule</button>
              <button className="p-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">✏️</button>
            </div>
          </header>
          {/* PostArea */}
          <section className="flex flex-1 p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="flex flex-col w-2/3 mr-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="flex justify-between items-center px-5 py-3 border-b border-gray-200">
                <span className="font-medium text-gray-800">New Post</span>
              </div>
              <textarea
                className="flex-1 p-5 text-gray-700 resize-none outline-none focus:ring-purple-200 focus:border-purple-300 rounded-b-lg"
                placeholder="Write your post here..."
              ></textarea>
              <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-gray-50">
                <div className="flex space-x-4 text-gray-600">
                  <span className="text-xl cursor-pointer hover:text-[#34A0A4] transition-colors">🔗</span>
                  <span className="text-xl cursor-pointer hover:text-[#34A0A4] transition-colors">📷</span>
                  <span className="text-xl cursor-pointer hover:text-[#34A0A4] transition-colors">📹</span>
                  <span className="text-xl cursor-pointer hover:text-[#34A0A4] transition-colors">📊</span>
                  <span className="text-xl cursor-pointer hover:text-[#34A0A4] transition-colors">🗓️</span>
                  <span className="text-xl cursor-pointer hover:text-[#34A0A4] transition-colors">📝</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200 bg-white rounded-b-2xl">
                <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                  <div className="flex space-x-6">
                    <img src={Facebook} alt="Facebook" className=" h-7 cursor-pointer hover:scale-105 transition-transform" />
                    <img src={Twitter} alt="Twitter" className=" h-7 cursor-pointer hover:scale-105 transition-transform" />
                    <img src={LinkedIn} alt="LinkedIn" className=" h-7 cursor-pointer hover:scale-105 transition-transform" />
                    <img src={Instagram} alt="Instagram" className=" h-7 cursor-pointer hover:scale-105 transition-transform" />
                    <img src={YouTube} alt="YouTube" className=" h-7 cursor-pointer hover:scale-105 transition-transform" />
                 </div>
                </label>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors shadow-sm">Save as Draft</button>
                  <button className="px-4 py-2 bg-[#34A0A4] text-white rounded-md text-sm font-medium hover:bg-[#184E77] transition-colors shadow-md flex items-center">
                    Schedule
                    <span className="ml-2 text-xs">▲</span>
                  </button>
                </div>
              </div>
            </div>  
            {/* right side */}
            <div className="flex flex-col flex-1 bg-white rounded-lg shadow-lg border border-gray-100">
              <div className="flex border-b border-gray-200">
                <button className="flex-1 relative px-4 py-3 text-gray-600 hover:text-[#34A0A4] text-sm font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.8px] after:bg-[#34A0A4]">AI Post Suggestions</button>
                <button className="flex-1 px-4 py-3 text-gray-600 hover:text-[#34A0A4] text-sm font-medium">AI Image Suggestions</button>
              </div>

              <div className="p-5 flex-1 overflow-y-auto">
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;