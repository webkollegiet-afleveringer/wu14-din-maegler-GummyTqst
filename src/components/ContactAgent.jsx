import instagramIcon from "../assets/svg/instagram.svg";
import linkedinIcon from "../assets/svg/linkedin.svg";
import skypeIcon from "../assets/svg/skype.svg";
import phoneIcon from "../assets/svg/phone.svg";
import paperPlaneIcon from "../assets/svg/paper-plane.svg";


export default function AgentCard({ agent }) {
    return (
        <div className="border border-gray-200 p-8 flex flex-col md:flex-row gap-8 items-start bg-white">
            <div className="relative w-full md:w-45 aspect-4/5 shrink-0 overflow-hidden">
                <img 
                    src={agent.image.url} 
                    alt={agent.name} 
                    className="w-full h-full object-cover"
                />
                
                {/* Social Icons Overlay - Dark Slate color from the image */}
                <div className="absolute bottom-0 left-0 w-full bg-[#2F4050]/90 flex justify-center gap-4 py-3">
                   <a href="#" className="w-5 h-5 hover:opacity-70 transition-opacity">
                        <img src={instagramIcon} alt="Instagram" className="w-full h-full object-contain brightness-0 invert" />
                   </a> 
                   <a href="#" className="w-5 h-5 hover:opacity-70 transition-opacity">
                        <img src={linkedinIcon} alt="Linkedin" className="w-full h-full object-contain brightness-0 invert" />
                   </a> 
                   <a href="#" className="w-5 h-5 hover:opacity-70 transition-opacity">
                        <img src={skypeIcon} alt="Skype" className="w-full h-full object-contain brightness-0 invert" />
                   </a>
                </div>
            </div>

            {/* Agent Details */}
            <div className="flex flex-col flex-1 pt-2">
                <h4 className="text-xl font-bold text-[#2A333E]">{agent.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{agent.title}</p>
                
                {/* Thinner, longer divider to match the visual weight */}
                <hr className="w-16 border-gray-200 mb-6" />

                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-[#2A333E]">
                        <span className="text-lg grayscale opacity-70">
                            <img src={phoneIcon} alt="" />
                        </span>
                        <a href={`tel:${agent.phone}`} className="font-medium">
                            {agent.phone}
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#2A333E]">
                        <span className="text-lg grayscale opacity-70">
                            <img src={paperPlaneIcon} alt="" />
                        </span>
                        <a href={`mailto:${agent.email}`} className="font-medium break-all">
                            {agent.email}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}