import { propertyAPI } from '../api/properties';

export async function homeLoader() {
  try {
    // We fetch homes and agents concurrently for better performance
    const [homes, agentsResponse] = await Promise.all([
      propertyAPI.getHomes({ _limit: 4 }), // Only get 4 for the front page
      fetch('https://dinmaegler.onrender.com/agents')
    ]);

    const agents = await agentsResponse.json();

    console.log('Loaded homes:', homes);
    console.log('Loaded agents:', agents);

    return { homes, agents };
  } catch (error) {
    console.error('Error loading home page data:', error);
    throw new Error('Could not load home page data');
  }
}