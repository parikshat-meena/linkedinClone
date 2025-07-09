import React from "react";

function RightSidebar() {
  const news = [
    {
      id: 1,
      title: "Tech industry sees major growth",
      timeAgo: "2h ago",
      readers: "1,234"
    },
    {
      id: 2,
      title: "Remote work trends in 2024",
      timeAgo: "4h ago",
      readers: "987"
    },
    {
      id: 3,
      title: "AI revolutionizes software development",
      timeAgo: "6h ago",
      readers: "2,156"
    },
    {
      id: 4,
      title: "Startup funding reaches new heights",
      timeAgo: "8h ago",
      readers: "1,543"
    }
  ];

  const suggestions = [
    {
      id: 1,
      name: "Emma Thompson",
      title: "Product Manager at Google",
      mutualConnections: 12
    },
    {
      id: 2,
      name: "David Chen",
      title: "Software Engineer at Microsoft",
      mutualConnections: 8
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      title: "Designer at Apple",
      mutualConnections: 15
    }
  ];

  return (
    <div className="w-full lg:w-80 space-y-4">
      {/* LinkedIn News */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">LinkedIn News</h4>
          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <div className="space-y-3">
          {news.map((item) => (
            <div key={item.id} className="cursor-pointer hover:bg-gray-50 p-2 rounded">
              <h5 className="text-sm font-medium text-gray-900 mb-1">{item.title}</h5>
              <p className="text-xs text-gray-500">{item.timeAgo} • {item.readers} readers</p>
            </div>
          ))}
        </div>
      </div>

      {/* People you may know */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">People you may know</h4>
          <button className="text-sm text-blue-600 hover:underline">See all</button>
        </div>
        
        <div className="space-y-3">
          {suggestions.map((person) => (
            <div key={person.id} className="flex items-start space-x-3">
              <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-medium text-gray-900 truncate">{person.name}</h5>
                <p className="text-xs text-gray-600 truncate">{person.title}</p>
                <p className="text-xs text-gray-500 mt-1">{person.mutualConnections} mutual connections</p>
                
                <button className="mt-2 w-full border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's most viewed profiles */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Today's most viewed profiles</h4>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-bold text-gray-400">1</span>
            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-sm font-medium text-gray-900">Alex Johnson</h5>
              <p className="text-xs text-gray-600">CEO at TechCorp</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-lg font-bold text-gray-400">2</span>
            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-sm font-medium text-gray-900">Maria Garcia</h5>
              <p className="text-xs text-gray-600">VP Engineering at StartupX</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-lg font-bold text-gray-400">3</span>
            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-sm font-medium text-gray-900">Kevin Park</h5>
              <p className="text-xs text-gray-600">Data Scientist at DataFlow</p>
            </div>
          </div>
        </div>
        
        <button className="mt-3 text-sm text-blue-600 hover:underline">Show more</button>
      </div>

      {/* Footer */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
          <button className="hover:text-blue-600">About</button>
          <button className="hover:text-blue-600">Accessibility</button>
          <button className="hover:text-blue-600">Help Center</button>
          <button className="hover:text-blue-600">Privacy & Terms</button>
          <button className="hover:text-blue-600">Ad Choices</button>
          <button className="hover:text-blue-600">Advertising</button>
          <button className="hover:text-blue-600">Business Services</button>
          <button className="hover:text-blue-600">Get the LinkedIn app</button>
          <button className="hover:text-blue-600">More</button>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          <span>LinkedIn Corporation © 2024</span>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;