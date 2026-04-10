import HeroImage from "../assets/heroimage.png"
import PageHeaderComponent from '../components/PageHeader';

import phoneIcon from "../assets/svg/phone.svg";
import mailIcon from "../assets/svg/paper-plane.svg";
import locationIcon from "../assets/svg/location.svg";

import map from "../assets/map.png";


export default function ContactPage() {
    return (
        <>
            <PageHeaderComponent title="Kontakt os" imageSrc={HeroImage} />
            <main className="max-w-7xl mx-auto p-4">
                <h1 className="relative pb-2 text-heading-2 text-head-4 mb-2 font-semibold">
                    Vi sidder klar til at besvare dine spørgsmål                
                    <span className="absolute bottom-0 left-0 h-1 w-30 bg-primary-1" />
                </h1>
                <p>
                    Der kan opstå tvivl om mange ting når man gerne vil, eller er i gang med at sælge sin bolig. <br />
                    Vores medarbejdere sidder klar alle ugens dage til at svare på dine spørgsmål.
                </p>

                <section className="flex flex-col md:flex-row gap-10 mt-10">
                    <form className="flex-2 flex flex-col gap-4 border border-gray-200 p-8">
                        <div className="flex flex-col gap-4">

                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <label htmlFor="name" className="text-paragraph-1 text-para-1 mb-1">Navn</label>
                                    <input type="text" placeholder="Indtast dit navn" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="email" className="text-paragraph-1 text-para-1 mb-1">Email</label>
                                    <input type="text" placeholder="Indtast din email" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="topic" className="text-paragraph-1 text-para-1 mb-1">Emne</label>
                                <input type="text" placeholder="Indtast emne" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-paragraph-1 text-para-1 mb-1">Besked</label>
                                <textarea placeholder="Indtast din besked..." className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2 h-32"></textarea>
                            </div>

                            <div className="col-span-2 flex items-center gap-2 mt-2">
                                <input type="checkbox" id="newsletter" />
                                <label htmlFor="newsletter">Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.</label>
                            </div>
                            
                            <div>
                                <button type="submit" className="bg-primary-1 text-white p-3.5">Send besked</button>
                            </div>
                        </div>
                    </form>

                    <div className="flex-1 flex flex-col items-center justify-between border border-gray-200 py-10 px-6 text-center">
                        <div>
                            <div className="bg-primary-1 text-white p-3 rounded-full w-fit mx-auto mb-2">
                                <img src={phoneIcon} alt="phone" className="icon-white size-24" />
                            </div>
                            <h3 className="text-heading-2 text-head-4 font-semibold">Ring til os</h3>
                            <p className="text-paragraph-1 text-para-1">+45 7070 4000</p>
                        </div>
                        <hr className="w-full border-gray-200" />
                        <div>
                            <div className="bg-primary-1 text-white p-3 rounded-full w-fit mx-auto mb-2">
                                <img src={mailIcon} alt="mail" className="icon-white size-24" />
                            </div>
                            <h3 className="text-heading-2 text-head-4 font-semibold">Send en mail</h3>
                            <p className="text-paragraph-1 text-para-1">4000@dinmaegler.dk</p>
                        </div>
                        <hr className="w-full border-gray-200" />
                        <div>
                            <div className="bg-primary-1 text-white p-3 rounded-full w-fit mx-auto mb-2">
                                <img src={locationIcon} alt="location" className="icon-white size-24" />
                            </div>
                            <h3 className="text-heading-2 text-head-4 font-semibold">Besøg butikken</h3>
                            <p className="text-paragraph-1 text-para-1">Stændertorvet 78, <br /> 4000 Roskilde</p>
                        </div>
                    </div>
                </section>
            </main>

            <section className="mt-10">
                <figure>
                    <img src={map} alt="Map" />
                </figure>
            </section>
        </>
    )
}