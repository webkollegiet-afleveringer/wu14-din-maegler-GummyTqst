import { useState } from "react";
import { useLoaderData } from "react-router"
import AgentCard from "../components/ContactAgent";
import PropertyOverlay from "../components/PropertyOverlay";
import { useFavoritesStore } from "../store/useFavoritesStore";
import { useAuthStore } from "../store/useAuthStore";


import pictureIcon from "../assets/svg/picture.svg";
import plansketchIcon from "../assets/svg/plansketch.svg";
import locationIcon from "../assets/svg/location.svg";

export default function PropertyDetailPage() {
    const { property } = useLoaderData();
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [overlayMode, setOverlayMode] = useState("gallery");
    const [toast, setToast] = useState(null);
    const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
    const { token } = useAuthStore();
    
    const isFavorite = favorites.some(f => f.id === property.id);
    const isLoggedIn = !!token;

    const formatDKK = (num) => new Intl.NumberFormat('da-DK').format(num);

    function handleFavoriteClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (!isLoggedIn) {
            alert("Du skal være logget ind for at tilføje favoritter");
            return;
        }

        if (isFavorite) {
            removeFavorite(property.id);
            setToast("Fjernet fra favoritter");
        } else {
            addFavorite(property);
            setToast("Tilføjet til favoritter");
        }
        
        setTimeout(() => setToast(null), 3000);
    }

    const statGroups = [
        [
            { label: "Sagsnummer", value: property.id },
            { label: "Boligareal", value: `${property.livingspace} m²` },
            { label: "Grundareal", value: `${property.lotsize} m²` },
            { label: "Rum/værelser", value: property.rooms },
            { label: "Antal Plan", value: "-" },
        ],
        [
            { label: "Kælder", value: property.basementsize ? `${property.basementsize} m²` : "-" },
            { label: "Byggeår", value: property.built },
            { label: "Ombygget", value: property.remodel },
            { label: "Energimærke", value: property.energylabel },
        ],
        [
            { label: "udbetaling", value: `Kr. ${formatDKK(property.payment)}` },
            { label: "Brutto ex ejerudgift", value: `Kr. ${formatDKK(property.gross)}` },
            { label: "Netto ex ejerudgift", value: `Kr. ${formatDKK(property.netto)}` },
            { label: "Ejerudgifter", value: `Kr. ${formatDKK(property.cost)}` },
        ]
    ]

    return (
        <section>
            <header>
                <img src={property.images[0].url} alt={property.adress1} className="w-full h-48 sm:h-64 md:h-80 lg:h-150 object-cover" />
            </header>
            <main className="max-w-7xl mx-auto p-3 sm:p-4">
                <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="text-head-4 font-semibold">
                        <h1 className="text-lg sm:text-xl md:text-heading-2">{property.adress1} {property.adress2 ? `• ${property.adress2}` : ''}</h1>
                        <p className="text-primary-1 text-sm sm:text-base">{property.postalcode} {property.city}</p>
                    </div>
                    <div className="flex gap-6 sm:gap-10">
                        {/* Icons */}
                        <figure className="cursor-pointer" onClick={() => { setOverlayMode("gallery"); setOverlayOpen(true); }}>
                            <img src={pictureIcon} alt="Picture" />
                        </figure>
                        <figure className="cursor-pointer" onClick={() => { setOverlayMode("floorplan"); setOverlayOpen(true); }}>
                            <img src={plansketchIcon} alt="Plan tegning" />
                        </figure>
                        <figure className="cursor-pointer" onClick={() => { setOverlayMode("map"); setOverlayOpen(true); }}>
                            <img src={locationIcon} alt="Location" />
                        </figure>
                        <figure className="cursor-pointer" onClick={handleFavoriteClick}>
                            <svg width="41" height="38" viewBox="0 0 41 38" fill={isFavorite ? "#E63946" : "none"} xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.1556 1C23.6046 1 20.3755 7.45816 20.3755 7.45816C20.3755 7.45816 17.1464 1 10.5954 1C5.27149 1 1.05552 5.45411 1.00103 10.769C0.890032 21.8013 9.75285 29.647 19.4673 36.2404C19.7351 36.4226 20.0516 36.52 20.3755 36.52C20.6994 36.52 21.0159 36.4226 21.2837 36.2404C30.9972 29.647 39.86 21.8013 39.75 10.769C39.6955 5.45411 35.4795 1 30.1556 1V1Z" stroke={isFavorite ? "#E63946" : "#7B7B7B"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </figure>
                    </div>
                    <div className="text-primary-1 font-bold text-lg sm:text-xl md:text-head-2">
                        <h2>Kr. {formatDKK(property.price)}</h2>
                    </div>
                </section>

                <hr className="text-paragraph-2 my-4 sm:mb-6" />

                <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-2 mb-8 sm:mb-12">
                    {statGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-2">
                            {group.map((stat, statIndex) => (
                                <div key={statIndex} className="flex justify-between text-para-2 text-sm sm:text-base">
                                    <span>{stat.label}</span>
                                    <span>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </section>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pt-6 sm:pt-10">
                    <div className="flex-1"> 
                        <h3 className="text-head-3 sm:text-heading-2 font-bold mb-3 sm:mb-4 text-lg sm:text-xl">Beskrivelse</h3>
                        <p className="text-paragraph-1 text-para-1 whitespace-pre-line leading-relaxed text-sm sm:text-base">
                            {property.description}
                        </p>
                    </div>

                    <section className="flex-1">
                        <h3 className="text-head-3 sm:text-heading-2 font-bold mb-3 sm:mb-4 text-lg sm:text-xl">Ansvarlig mægler</h3>
                        <div className="border border-gray-200 p-3 sm:p-4 mb-4 sm:mb-6">
                            <AgentCard agent={property.agent} />
                        </div>
                    </section>
                </div>
            </main>

            <PropertyOverlay 
                property={property} 
                isOpen={overlayOpen} 
                onClose={() => setOverlayOpen(false)} 
                mode={overlayMode}
                setMode={setOverlayMode}
            />

            {toast && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary-1 text-white px-6 py-3 rounded-lg shadow-lg z-50">
                    {toast}
                </div>
            )}
        </section>
    )
}