import { useState } from "react";
import { useNavigate } from "react-router";
import HeroImage from "../assets/heroimage.png"
import PageHeaderComponent from '../components/PageHeader';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("Alle felter skal udfyldes");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwordene matcher ikke");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        
        if (users.find(u => u.email === formData.email)) {
            setError("En bruger med denne email eksisterer allerede");
            return;
        }

        const newUser = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            password: formData.password
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        navigate("/login");
    }

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

                    {error && <p className="text-red-500 mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="w-[60%]">
                        <div className="flex flex-col gap-4 mb-6">
                            <div>
                                <label htmlFor="name" className="text-paragraph-1 text-para-1 mb-1">Fulde navn</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Fulde navn" 
                                    className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" 
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-paragraph-1 text-para-1 mb-1">Email adresse</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email adresse" 
                                    className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" 
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="text-paragraph-1 text-para-1 mb-1">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password" 
                                    className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" 
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="text-paragraph-1 text-para-1 mb-1">Bekræft password</label>
                                <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Bekræft password" 
                                    className="w-full text-paragraph-2 text-para-1 border border-shape-1 p-2" 
                                />
                            </div>
                        </div>

                        <button type="submit" className="bg-primary-1 text-white p-3.5 w-full">Opret bruger</button>
                    </form>
                </section>
            </main>
        </>
    )
}