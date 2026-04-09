import { useLoaderData } from "react-router"
import PropertyCard from "../components/PropertyCard";

import HeroImage from "../assets/heroimage.png"
import PageHeaderComponent from "../components/PageHeader";
import FilterSection from "../components/FilterSection";

export default function PropertyListPage() {
    const { properties, uniqueTypes } = useLoaderData();

    return (
        <>
            <PageHeaderComponent title="Boliger til salg" imageSrc={HeroImage} />
            <FilterSection availableTypes={uniqueTypes} />
            <div className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {properties.map(property => (
                        <PropertyCard key={property.id} home={property} />
                    ))}
                </div>
            </div>
        </>
    )
}