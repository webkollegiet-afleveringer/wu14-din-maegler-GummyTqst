import AboutUs from "../components/AboutUs";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import { Link, useLoaderData } from "react-router";
import NewsletterBanner from "../components/Newsletter";
import AgentCard from "../components/AgentCard";

import { FaGooglePlay, FaApple } from "react-icons/fa"
import iphone from "../assets/iphones.png";

export default function HomePage() {
    const { homes } = useLoaderData();
    const { agents } = useLoaderData();


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

            <section className="w-full py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 text-center">
                        <h2 className="text-heading-1 text-head-1 font-bold">Mød vores engagerede medarbejdere</h2>
                        <p className="text-para-2 text-paragraph-1 mt-2">
                            Din mælger er garant for altid veluddannet assistance i dit boligsalg. <br />
                            Kontakt en af vores medarbejdere.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {agents.map(agent => (
                            <AgentCard key={agent.id} agent={agent} />
                        ))}
                    </div>
                    <div className="text-center">
                        <Link to="/agents" className="inline-block mt-8 px-6 py-3 bg-primary-1 text-white font-medium rounded-xs hover:opacity-90 transition">
                            Se alle mæglere
                        </Link>
                    </div>
                </div>
            </section>

            <section className="w-full bg-primary-1 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left */}
                    <div className="max-w-lg text-white text-center md:text-left">
                        <h2 className="text-xl sm:text-2xl md:text-head-1 mb-4 sm:mb-6">
                            Hold dig opdateret <br />
                            på salgsprocessen
                        </h2>
                        <p className="text-sm sm:text-base mb-6 sm:mb-8">
                            Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
                            ansvarlige mægler eller butik med vores app. Her kan du også se statistik på
                            interessen for din bolig i alle vores salgskanaler
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                            <a href="#" className="flex items-center justify-center gap-2 border border-white text-primary-1 px-4 sm:px-5 py-2 sm:py-3 bg-white text-sm">
                                <FaGooglePlay size={20} />
                                <span className="font-medium">Google Play</span>
                            </a>
                            <a href="#" className="flex items-center justify-center gap-2 border border-white text-white px-4 sm:px-5 py-2 sm:py-3 text-sm">
                                <FaApple size={20} />
                                <span className="font-medium">App Store</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Right */}
                    <div className="relative shrink-0 w-full md:w-auto flex items-end justify-center">
                        <img 
                            src={iphone} 
                            alt="Picture of iphones" 
                            className="w-48 sm:w-64 md:w-80 lg:w-125 max-w-none" 
                        />
                    </div>
                </div>
            </section>
        </>
    )
}





