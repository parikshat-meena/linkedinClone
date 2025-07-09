import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <Sidebar />
          </div>
          
          {/* Main Feed */}
          <div className="flex-1">
            <Feed />
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
