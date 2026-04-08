import { MdEmail } from "react-icons/md"
import { FaLinkedinIn } from "react-icons/fa6";


export default function AgentCard({ agent }) {
    return (
        <div className="w-full mx-auto px-4">
            <div className="bg-white shadow-md overflow-hidden">
                <img src={agent.image.url} alt={agent.name} className="w-full h-72 object-cover" />
                <div className="p-4 text-center">
                    <h3 className="text-heading-2 text-head-3 font-semibold">{agent.name}</h3>
                    <p className="text-para-1 text-paragraph-2 mt-1">{agent.title}</p>
                    <div className="flex items-center justify-center gap-3 mt-3">
                    <a href={`mailto:${agent.email}`} className="text-slate-700 hover:text-blue-600 transition-colors">
                        <MdEmail size={22} />
                    </a>
                    <a href={agent.linkedin} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-blue-600 transition-colors">
                        <FaLinkedinIn size={20} />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}