import { useLoaderData } from "react-router"

export default function PropertyDetailPage() {
    const { property } = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1>{property.adress1}</h1>
        </div>
    )
}