import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import HeroImage from "../assets/heroimage.png"
import PageHeaderComponent from '../components/PageHeader';


export default function LoginPage() {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!formData.email || !formData.password) {
            setError("Begge felter skal udfyldes");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.email === formData.email && u.password === formData.password);

        if (!user) {
            setError("Forkert email eller password");
            return;
        }

        login({ id: user.id, name: user.name, email: user.email }, "dummy-token");
        navigate("/");
    }

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

                    {error && <p className="text-red-500 mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="w-[60%]">
                        <div className="flex flex-col gap-4 mb-6">
                            <div>
                                <label htmlFor="email" className="text-paragraph-1 text-para-1 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email" 
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