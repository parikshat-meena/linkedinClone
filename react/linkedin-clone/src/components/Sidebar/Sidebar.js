import React from "react";

function Sidebar() {
  return (
    <div className="w-full lg:w-64 space-y-4">
      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        {/* Background Cover */}
        <div className="h-16 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        
        {/* Profile Info */}
        <div className="px-4 pb-4 -mt-8 relative">
          <div className="flex flex-col items-center">
            {/* Profile Picture */}
            <div className="h-16 w-16 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center">
              <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            {/* User Info */}
            <div className="text-center mt-2">
              <h3 className="font-semibold text-gray-900">John Doe</h3>
              <p className="text-sm text-gray-600">Software Developer at Tech Corp</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <div className="text-gray-600">
                <span className="text-blue-600 hover:underline cursor-pointer">Connections</span>
                <div className="font-semibold">500+</div>
              </div>
              <div className="text-gray-600">
                <span className="text-blue-600 hover:underline cursor-pointer">Profile views</span>
                <div className="font-semibold">125</div>
              </div>
            </div>
          </div>
          
          {/* Premium Feature */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center text-sm">
              <svg className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-700">Try Premium for free</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Recent</h4>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            React Developers
          </div>
          <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            JavaScript
          </div>
          <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Web Development
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;