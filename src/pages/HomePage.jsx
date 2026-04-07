import AboutUs from "../components/AboutUs";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
    return (
        <>
            <SearchBar />
            <div className="max-w-7xl mx-auto">
                <AboutUs />
            </div>
        </>
    )
}





