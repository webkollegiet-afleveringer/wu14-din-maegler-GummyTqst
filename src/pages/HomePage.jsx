import AboutUs from "../components/AboutUs";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import { Link, useLoaderData } from "react-router";
import NewsletterBanner from "../components/Newsletter";

export default function HomePage() {
    const { homes } = useLoaderData();


    return (
        <>
            <SearchBar />

            <section className="w-full">
                <div className="max-w-7xl mx-auto">
                    <AboutUs />
                </div>
            </section>

            <section className="w-full bg-ui-bg-1 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 text-center">
                        <h2 className="text-heading-1 text-head-1 font-bold">Udvalgte Boliger</h2>
                        <p className="text-para-2 text-paragraph-1 mt-2">
                            There are many variations of passages of Lorem Ipsum available but the this in <br />
                            majority have suffered alteration in some
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {homes.map(home => (
                            <PropertyCard key={home.id} home={home} />
                        ))}
                    </div>
                    <div className="text-center">
                        <Link to="/properties" className="inline-block mt-8 px-6 py-3 bg-primary-1 text-white font-medium rounded-xs hover:opacity-90 transition">
                            Se alle boliger
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <NewsletterBanner />
            </section>
        </>
    )
}





