import { useLoaderData, useSearchParams } from "react-router"
import PropertyCard from "../components/PropertyCard";

import HeroImage from "../assets/heroimage.png"
import PageHeaderComponent from "../components/PageHeader";
import FilterSection from "../components/FilterSection";

export default function PropertyListPage() {
    const { properties, uniqueTypes } = useLoaderData();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("q");

    return (
        <>
            <PageHeaderComponent title="Boliger til salg" imageSrc={HeroImage} />
            <FilterSection availableTypes={uniqueTypes} />
            <div className="max-w-7xl mx-auto p-4">
                {searchQuery && (
                    <div className="mb-4 p-3 bg-primary-1/10 border border-primary-1 rounded">
                        <p className="text-primary-1 font-medium">
                            Viser resultater for: "{searchQuery}" ({properties.length} boliger fundet)
                        </p>
                    </div>
                )}
                {properties.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-lg text-gray-600">Ingen boliger fundet</p>
                        {searchQuery && <p className="text-sm text-gray-500 mt-2">Prøv at søge med andre søgeord</p>}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {properties.map(property => (
                            <PropertyCard key={property.id} home={property} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}