import HeroImage from "../assets/heroimage.png"
import PageHeaderComponent from '../components/PageHeader';

export default function RegisterPage() {
    return (
        <>
            <PageHeaderComponent 
                title="Account Login" 
                imageSrc={HeroImage} 
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Register", path: "/register", active: true }
                ]}    
            />
            <main className="max-w-7xl mx-auto p-4">
                <section className="max-w-3xl mx-auto flex items-center flex-col gap-6 mb-8 border border-shape-1 rounded bg-white shadow-lg p-12">
                    <h1 className="text-heading-2 text-head-2 mb-4">Opret bruger hos Din Mægler</h1>

                    <form className="w-[60%]">
                        <div className="flex flex-col gap-4 mb-6">
                            <div>
                                <label htmlFor="name" className="text-paragraph-1 text-para-1 mb-1">Fulde navn</label>
                                <input type="text" placeholder="Fulde navn" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-paragraph-1 text-para-1 mb-1">Email adresse</label>
                                <input type="email" placeholder="Email adresse" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                            </div>

                            <div>
                                <label htmlFor="password" className="text-paragraph-1 text-para-1 mb-1">Password</label>
                                <input type="password" placeholder="Password" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                            </div>

                            <div>
                                <label htmlFor="confirmpassword" className="text-paragraph-1 text-para-1 mb-1">Bekræft password</label>
                                <input type="password" placeholder="Bekræft password" className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" />
                            </div>
                        </div>

                        <button type="submit" className="bg-primary-1 text-white p-3.5 w-full">Opret bruger</button>
                    </form>
                </section>
            </main>
        </>
    )
}