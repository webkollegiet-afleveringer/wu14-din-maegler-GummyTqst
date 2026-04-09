import { useLoaderData } from 'react-router';
import AgentCard from '../components/AgentCard';

import HeroImage from "../assets/heroimage.png"
import PageHeaderComponent from '../components/PageHeader';

export default function AgentsPage(){
  const { agents } = useLoaderData();

  return (
    <>
        <PageHeaderComponent title="Medarbejdere i Roskilde" imageSrc={HeroImage} />
        <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {agents.map(agent => (
                    <AgentCard key={agent.id} agent={agent} />
                ))}
            </div>
        </div>
    </>
  );
};