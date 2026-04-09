import { useLoaderData } from "react-router";
import AgentCard from "../components/ContactAgent";

export default function AgentDetailPage() {
    const { agent } = useLoaderData();

    return (
        <section className="max-w-7xl mx-auto p-4">
            <div className="flex gap-10">
                <div className="flex-2 border border-gray-200 p-8 bg-white">
                    <AgentCard agent={agent} />
                    <h2 className="relative pb-2 text-heading-2 text-head-4 mb-2 font-semibold">
                        Om {agent.name}
                        <span className="absolute bottom-0 left-0 h-1 w-15 bg-primary-1" />
                    </h2>
                    <p className="text-para-1 text-paragraph-1">
                        {agent.description}
                    </p>
                    <form className="border border-gray-200 p-4 mt-6">
                        <h2 className="relative pb-2 text-heading-2 text-head-4 mb-6 font-semibold">
                            Kontakt {agent.name}
                            <span className="absolute bottom-0 left-0 h-1 w-15 bg-primary-1" />
                        </h2>
                        <div className="flex flex-col gap-4">

                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <label htmlFor="name" className="text-paragraph-1 text-para-1 mb-1">Navn</label>
                                    <input type="text" placeholder="Indtast navn" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="email" className="text-paragraph-1 text-para-1 mb-1">Email</label>
                                    <input type="text" placeholder="Indtast email" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="topic" className="text-paragraph-1 text-para-1 mb-1">Emne</label>
                                <input type="text" placeholder="Hvad drejer din henvendelse sig om?" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-paragraph-1 text-para-1 mb-1">Besked</label>
                                <textarea placeholder="Skriv din besked her..." className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2 h-32"></textarea>
                            </div>
                            
                            <div>
                                <button type="submit" className="bg-primary-1 text-white p-3.5">Send besked</button>
                            </div>

                        </div>
                    </form>
                </div>

                <div className="flex-1 flex flex-col gap-8">
                    <div className="bg-ui-bg-2 p-6">
                        <h3 className="text-head-4 text-heading-1 font-semibold pb-4 border-b border-shape-1 mb-6">
                            Search Property
                        </h3>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-paragraph-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <input 
                                type="search" 
                                placeholder="Search" 
                                className="w-full bg-white border border-shape-1 py-3 pl-10 pr-4 text-para-2 text-paragraph-2 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="bg-primary-1 p-10 text-center text-white flex flex-col items-center justify-center">
                        <h2 className="text-head-2 font-bold leading-tight mb-4">
                            Find The Best <br /> Property <br /> For Rent Or Buy
                        </h2>
                        
                        <div className="w-16 h-0.5 bg-white mb-6"></div>
                        
                        <p className="text-para-3 uppercase tracking-wide mb-1">
                            Call Us Now
                        </p>
                        <p className="text-head-3 font-semibold">
                            +00 123 456 789
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}