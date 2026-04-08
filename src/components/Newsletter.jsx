import bgImage from "../assets/newsletterbg.png"

const NewsletterBanner = () => {
    return (
      <section className="relative w-full py-16 px-6 flex items-center justify-center overflow-hidden">
        
        <img
          src={bgImage}
          alt="picture of house"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
  
        {/* overlay */}
        <div className="absolute inset-0 bg-slate-900/80"></div>
  
        <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
          
            <h2 className="text-white text-2xl md:text-3xl leading-tight max-w-md text-center md:text-left">
                Tilmeld dig vores nyhedsbrev og <br />
                hold dig opdateret på boligmarkedet
            </h2>
  
            <div className="relative w-full max-w-md">
                <input
                    type="email"
                    placeholder="Indtast din email adresse"
                    className="w-full py-4 px-6 pr-14 rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
                <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-800 hover:text-blue-600 transition-colors"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                </button>
            </div>
        </div>
      </section>
    );
};

export default NewsletterBanner;