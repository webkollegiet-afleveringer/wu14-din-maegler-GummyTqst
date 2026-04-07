import HeroImg from '../assets/hero.webp'

export default function SearchBar() {
    return (
        <div className="grid grid-areas-hero">
            <figure className="area-hero m-0 z-0">
            <img
                src={HeroImg}
                alt="Dream home"
                className="w-full h-full object-cover"
            />
            </figure>
    
            <div className="area-hero flex flex-col items-center justify-center gap-6 px-4 z-10">
            <h1 className="text-main-2 font-bold text-white drop-shadow-md">
                Søg efter din drømmebolig
            </h1>
    
            <div className="bg-white p-6 w-full max-w-4xl">
                <p className="text-head-4 font-semibold text-heading-2 mb-1">
                    Søg blandt 158 boliger til salg i 74 butikker
                </p>
                <div className="w-10 h-0.75 bg-primary-1 mb-4" />
                <p className="text-para-2 text-paragraph-1 mb-2">
                    Hvad skal din næste bolig indeholde
                </p>
                <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                    className="flex-1 border border-shape-1 rounded-sm px-3 py-2 text-para-2 text-paragraph-2 focus:outline-none focus:ring-2 focus:ring-primary-1"
                />
                <button className="bg-primary-1 text-white px-11.5 py-2.5 text-btn-2 font-medium rounded-xs hover:opacity-90 transition cursor-pointer">
                    Søg
                </button>
                </div>
            </div>
            </div>
      </div>
    );
}