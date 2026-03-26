export async function homeLoader() {
    const [homesResponse, agentsResponse] = await Promise.all([
      fetch('https://dinmaegler.onrender.com/homes'),
      fetch('https://dinmaegler.onrender.com/agents')
    ]);
    
    if (!homesResponse.ok || !agentsResponse.ok) {
      throw new Error('Failed to fetch home page data');
    }
    
    const homes = await homesResponse.json();
    const agents = await agentsResponse.json();
    
    return { homes, agents };
}