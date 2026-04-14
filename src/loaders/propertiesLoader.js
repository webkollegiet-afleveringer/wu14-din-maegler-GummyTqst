// propertiesLoader.js
import { propertyAPI } from "../api/properties";

export async function propertiesLoader({ request }) {
  const url = new URL(request.url);
  
  // Create params object for the API
  const params = {};
  if (url.searchParams.has("type")) params.type = url.searchParams.get("type");
  if (url.searchParams.has("maxPrice")) params.price_lte = url.searchParams.get("maxPrice");

  const searchQuery = url.searchParams.get("q")?.toLowerCase() || "";

  try {
    // Fetch all homes for filtering
    const allHomes = await propertyAPI.getHomes();
    
    // Filter by type and maxPrice from params
    let properties = allHomes;
    if (params.type) {
      properties = properties.filter(home => home.type === params.type);
    }
    if (params.price_lte) {
      properties = properties.filter(home => home.price <= parseInt(params.price_lte));
    }
    
    // Filter by search query (searches in address, city, description)
    if (searchQuery) {
      properties = properties.filter(home => 
        home.adress1?.toLowerCase().includes(searchQuery) ||
        home.adress2?.toLowerCase().includes(searchQuery) ||
        home.city?.toLowerCase().includes(searchQuery) ||
        home.description?.toLowerCase().includes(searchQuery) ||
        home.type?.toLowerCase().includes(searchQuery)
      );
    }

    const uniqueTypes = [...new Set(allHomes.map(home => home.type))].sort();

    return { properties, uniqueTypes }; 
  } catch (error) {
    console.error('Loader Error:', error);
    return { properties: [], uniqueTypes: [] };
  }
}