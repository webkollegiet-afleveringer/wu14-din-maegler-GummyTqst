import { agentAPI } from "../api/agents";

export async function agentsLoader() { // Renamed for clarity
  try {
    // 1. Call getAgents (plural) which fetches the array
    const agents = await agentAPI.getAgents();
    
    console.log('Loaded agents list:', agents);
    
    // 2. Return an object containing the array
    return { agents }; 
  } catch (error) {
    console.error('Error loading agents:', error);
    throw new Error('Could not load the list of agents');
  }
}