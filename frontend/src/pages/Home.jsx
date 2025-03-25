import React from "react";
import { Link } from "react-router-dom";
import LogoImage from '../assets/Logo .jpg';
import landingImage from '../assets/landing.png';
import appDownloadImage from '../assets/appDownload.png';


function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <header className="flex items-center justify-between bg-white p-4 border-b fixed w-full top-0 z-50">
        <div className="flex items-center space-x-3 ml-4">
          <img src={LogoImage} alt="Logo" className="h-20 w-auto" />
          <span className="text-2xl font-bold text-blue-500">WhisperingPages.com</span>
        </div>
        <div className="mr-4">
          
          <Link to="/login">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Login
            </button>
          </Link>
        </div>
      </header>

     
      <main className="flex-grow pt-32 pb-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Whispering Pages</h1>
        
        <div className="flex flex-col items-center gap-12">
          <div className="bg-white shadow-md rounded-lg p-8 text-center">
            <h2 className="text-3xl font-semibold text-blue-500">Dive into a new story today!</h2>
            <p className="text-lg mt-2">Books are just a click away!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src={landingImage} alt="Good books" className="w-full max-w-md mx-auto rounded-lg" />
            <div className="text-center">
              <h3 className="text-2xl font-bold">Get your favorite books even faster to your doorstep!</h3>
              <p className="mt-4">Download the WhisperingPages App for faster ordering and personalized recommendations.</p>
              <img src={appDownloadImage} alt="Download the app" className="w-full max-w-xs mt-6 mx-auto rounded-lg" />
            </div>
          </div>
        </div>
      </main>

      
      <footer className="bg-gray-100 p-4 border-t text-center">
        <p>© 2024 Whispering Pages. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link to="/about-us" className="hover:underline">About Us</Link>
          <Link to="/contact-us" className="hover:underline">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
