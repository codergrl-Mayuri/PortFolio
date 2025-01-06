export default function Home() {
    return (
        <div className="relative h-screen bg-slate-100 flex items-center justify-center text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 blur-3xl opacity-50 animate-pulse"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-5xl font-bold text-black">
          Smart Designs, Smarter Code
          </h1>
          <p className="mt-6 text-lg md:text-md text-black">
          Frontend Developer | React Specialist | UI/UX Enthusiast
          </p>
          <div className="flex items-center justify-center gap-4 mt-5">
            <button className="px-5 py-3 text-sm font-medium text-black bg-slate-100 rounded-full border border-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out">
                Explore Works
            </button>
            <button className="px-5 py-3 text-sm font-medium text-black bg-slate-100 rounded-full border border-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out">
                Contact Me
            </button>
          </div>
        </div>
      </div>
    );
  }