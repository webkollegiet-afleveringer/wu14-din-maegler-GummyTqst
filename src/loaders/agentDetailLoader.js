export async function agentDetailLoader({ params }) {
    const { id } = params;
    
    const response = await fetch(`https://dinmaegler.onrender.com/agents/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch agent details');
    }
    
    const agent = await response.json();
    return { agent };
}