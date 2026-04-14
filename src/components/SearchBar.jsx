import { useState } from "react";
import { useNavigate } from "react-router";
import HeroImg from '../assets/hero.webp'

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/properties?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    }

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
                <form onSubmit={handleSearch} className="flex gap-2">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                        className="w-full border border-shape-1 rounded-sm px-3 py-2 text-para-2 text-paragraph-2 focus:outline-none focus:ring-2 focus:ring-primary-1"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                    )}
                </div>
                <button type="submit" className="bg-primary-1 text-white px-11.5 py-2.5 text-btn-2 font-medium rounded-xs hover:opacity-90 transition cursor-pointer">
                    Søg
                </button>
                </form>
                {searchQuery && (
                    <p className="text-sm text-gray-500 mt-2">
                        Du søger efter: <span className="font-medium text-primary-1">"{searchQuery}"</span>
                    </p>
                )}
            </div>
            </div>
      </div>
    );
}