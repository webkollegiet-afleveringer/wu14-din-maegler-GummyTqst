import { useLoaderData } from "react-router"
import AgentCard from "../components/ContactAgent";


import pictureIcon from "../assets/svg/picture.svg";
import plansketchIcon from "../assets/svg/plansketch.svg";
import locationIcon from "../assets/svg/location.svg";
import heartIcon from "../assets/svg/heart.svg";

export default function PropertyDetailPage() {
    const { property } = useLoaderData();

    const formatDKK = (num) => new Intl.NumberFormat('da-DK').format(num);

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
                <img src={property.images[0].url} alt={property.adress1} className="w-full h-150 object-cover" />
            </header>
            <main className="max-w-7xl mx-auto p-4">
                <section className="flex justify-between items-center mb-6">
                    <div className="text-head-4 font-semibold">
                        <h1 className="text-heading-2">{property.adress1} {property.adress2 ? `• ${property.adress2}` : ''}</h1>
                        <p className="text-primary-1">{property.postalcode} {property.city}</p>
                    </div>
                    <div className="flex gap-10">
                        {/* Icons */}
                        <figure>
                            <img src={pictureIcon} alt="Picture" />
                        </figure>
                        <figure>
                            <img src={plansketchIcon} alt="Plan tegning" />
                        </figure>
                        <figure>
                            <img src={locationIcon} alt="Location" />
                        </figure>
                        <figure>
                            <img src={heartIcon} alt="Favorites" />
                        </figure>
                    </div>
                    <div className="text-primary-1 font-bold text-head-2">
                        <h2>Kr. {formatDKK(property.price)}</h2>
                    </div>
                </section>

                <hr className="text-paragraph-2 mb-6" />

                <section className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-2 mb-12">
                    {statGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-2">
                            {group.map((stat, statIndex) => (
                                <div key={statIndex} className="flex justify-between text-para-2">
                                    <span>{stat.label}</span>
                                    <span>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </section>

                <div className="flex flex-col lg:flex-row gap-12 pt-10">
                    <div className="flex-1"> 
                        <h3 className="text-heading-2 text-head-3 font-bold mb-4">Beskrivelse</h3>
                        <p className="text-paragraph-1 text-para-1 whitespace-pre-line leading-relaxed">
                            {property.description}
                        </p>
                    </div>

                    <section className="flex-1">
                        <h3 className="text-heading-2 text-head-3 font-bold mb-4">Ansvarlig mægler</h3>
                        <AgentCard agent={property.agent} />
                    </section>
                </div>
            </main>
        </section>
    )
}