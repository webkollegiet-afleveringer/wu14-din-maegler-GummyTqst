import { propertyAPI } from '../api/properties';

export async function propertyDetailLoader({ params }) {
  try {
    const property = await propertyAPI.getHomeById(params.id);
    
    console.log('Loaded property:', property);
    
    return { property };
  } catch (error) {
    console.error('Error loading property:', error);
    throw new Error('Could not load property details');
  }
}