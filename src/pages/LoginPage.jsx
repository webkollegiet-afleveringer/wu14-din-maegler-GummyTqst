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
                <h1 className="text-2xl font-bold mb-4">Login Page</h1>
                <p>Please enter your credentials to log in.</p>
            </main>
        
        </>
    )
}