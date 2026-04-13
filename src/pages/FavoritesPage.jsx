import { useFavoritesStore } from "../store/useFavoritesStore";
import PropertyCard from "../components/PropertyCard";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router";
import HeroImage from "../assets/heroimage.png"
import PageHeaderComponent from "../components/PageHeader";

export default function FavoritesPage() {
    const { favorites } = useFavoritesStore();
    const { token } = useAuthStore();
    const isLoggedIn = !!token;

    if (!isLoggedIn) {
        return (
            <>
                <PageHeaderComponent 
                    title="Mine favoritter" 
                    imageSrc={HeroImage} 
                    breadcrumbs={[
                        { label: "Home", path: "/" },
                        { label: "Mine favoritter", path: "/favorites", active: true }
                    ]}    
                />
                <main className="max-w-7xl mx-auto p-4">
                    <div className="text-center py-12">
                        <p className="text-lg mb-4">Du skal være logget ind for at se dine favoritter</p>
                        <Link to="/login" className="bg-primary-1 text-white px-6 py-3 rounded">Log ind</Link>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <PageHeaderComponent 
                title="Mine favoritter" 
                imageSrc={HeroImage} 
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Mine favoritter", path: "/favorites", active: true }
                ]}    
            />
            <main className="max-w-7xl mx-auto p-4">
                <h1 className="text-heading-2 text-head-2 mb-8">Mine favoritter</h1>
                {favorites.length === 0 ? (
                    <p className="text-center py-12">Du har ingen favoritter endnu</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {favorites.map((property) => (
                            <PropertyCard key={property.id} home={property} />
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}