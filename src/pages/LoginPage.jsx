import { Link } from "react-router";
import HeroImage from "../assets/heroimage.png"
import PageHeaderComponent from '../components/PageHeader';


export default function LoginPage() {
    return (
        <>
            <PageHeaderComponent 
                title="Account Login" 
                imageSrc={HeroImage} 
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Login", path: "/login", active: true }
                ]}    
            />
            <main className="max-w-7xl mx-auto p-4">
                <section className="max-w-3xl mx-auto flex items-center flex-col gap-6 mb-8 border border-shape-1 rounded bg-white shadow-lg p-12">
                    <h1 className="text-heading-2 text-head-2 mb-4">Log ind på din konto</h1>

                    <form className="w-[60%]">
                        <div className="flex flex-col gap-4 mb-6">
                            <div>
                                <label htmlFor="email" className="text-paragraph-1 text-para-1 mb-1">Email</label>
                                <input type="email" placeholder="Email" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                            </div>

                            <div>
                                <label htmlFor="password" className="text-paragraph-1 text-para-1 mb-1">Password</label>
                                <input type="password" placeholder="Password" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                            </div>
                        </div>

                        <button type="submit" className="bg-primary-1 text-white p-3.5 w-full">Log ind</button>
                    </form>

                    <div className="w-[60%] text-center">
                        <p className="text-left">Log ind med</p>
                        <div className="grid grid-cols-3 gap-3 mt-4">
                            <button className="bg-red text-white px-6 py-3 rounded">Google</button>
                            <button className="bg-[#3B5999] text-white px-6 py-3 rounded">Facebook</button>
                            <button className="bg-primary-1 text-white px-6 py-3 rounded">Twitter</button>
                        </div>

                        <p className="mt-6 text-gray-600">
                            Har du ikke en konto?
                            <Link to={"/register"} className="text-blue-500 hover:underline"> Opret bruger.</Link>
                        </p>
                    </div>
                </section>
            </main>
        
        </>
    )
}