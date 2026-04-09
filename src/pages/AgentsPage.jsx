import { useLoaderData } from 'react-router';

export default function AgentsPage(){
  const { agents } = useLoaderData(); // Destructure the plural 'agents'

  return (
    <div>
      {agents.map(agent => (
        <div key={agent.id}>{agent.name}</div>
      ))}
    </div>
  );
};