import { useState } from "react";

import pictureIcon from "../assets/svg/picture.svg";
import plansketchIcon from "../assets/svg/plansketch.svg";
import locationIcon from "../assets/svg/location.svg";

export default function PropertyOverlay({ property, isOpen, onClose, mode }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function handleIconClick() {
        // This can be used for any mode-specific handling if needed
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col" onClick={onClose}>
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
                ✕
            </button>

            <div className="flex-1 flex items-center justify-center p-8" onClick={e => e.stopPropagation()}>
                {mode === "gallery" && (
                    <div className="relative max-w-5xl w-full">
                        <img 
                            src={property.images[currentImageIndex]?.url} 
                            alt={`Billede ${currentImageIndex + 1}`}
                            className="w-full h-[70vh] object-contain"
                        />
                        {property.images.length > 1 && (
                            <>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((currentImageIndex - 1 + property.images.length) % property.images.length); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100"
                                >
                                    ←
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((currentImageIndex + 1) % property.images.length); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100"
                                >
                                    →
                                </button>
                            </>
                        )}
                    </div>
                )}

                {mode === "floorplan" && property.floorplan && (
                    <img 
                        src={property.floorplan.url} 
                        alt="Plantegning"
                        className="w-full h-[70vh] object-contain bg-white"
                    />
                )}

                {mode === "map" && property.lat && property.long && (
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.openstreetmap.org/export/embed.html?bbox=${property.long - 0.01}%2C${property.lat - 0.01}%2C${property.long + 0.01}%2C${property.lat + 0.01}&layer=mapnik&marker=${property.lat}%2C${property.long}`}
                    ></iframe>
                )}
            </div>

            <div className="flex justify-center gap-8 pb-8" onClick={e => e.stopPropagation()}>
                <button onClick={() => handleIconClick("gallery")} className="flex flex-col items-center gap-2">
                    <img src={pictureIcon} alt="Billeder" className="w-10 h-10" />
                    <span className="text-white text-sm">Billeder</span>
                </button>
                {property.floorplan && (
                    <button onClick={() => handleIconClick("floorplan")} className="flex flex-col items-center gap-2">
                        <img src={plansketchIcon} alt="Plantegning" className="w-10 h-10" />
                        <span className="text-white text-sm">Plantegning</span>
                    </button>
                )}
                {property.lat && property.long && (
                    <button onClick={() => handleIconClick("map")} className="flex flex-col items-center gap-2">
                        <img src={locationIcon} alt="Kort" className="w-10 h-10" />
                        <span className="text-white text-sm">Kort</span>
                    </button>
                )}
            </div>
        </div>
    );
}