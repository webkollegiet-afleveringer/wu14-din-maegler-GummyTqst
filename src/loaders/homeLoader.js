import { propertyAPI } from '../api/properties';
import { agentAPI } from '../api/agents';

export async function homeLoader() {
  try {
    // We fetch homes and agents concurrently for better performance
    const [homes, agents] = await Promise.all([
      propertyAPI.getHomes({ _limit: 4 }), // Only get 4 for the front page
      agentAPI.getAgents({ _limit: 3 }) // Only get 3 for the front page
    ]);

    console.log('Loaded homes:', homes);
    console.log('Loaded agents:', agents);

    return { homes, agents };
  } catch (error) {
    console.error('Error loading home page data:', error);
    throw new Error('Could not load home page data');
  }
}