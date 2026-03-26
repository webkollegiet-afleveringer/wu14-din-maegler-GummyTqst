export async function agentsLoader() {
    const response = await fetch('https://dinmaegler.onrender.com/agents');
    
    if (!response.ok) {
      throw new Error('Failed to fetch agents');
    }
    
    const agents = await response.json();
    return { agents };
}