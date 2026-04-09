// propertiesLoader.js
import { propertyAPI } from "../api/properties";

export async function propertiesLoader({ request }) {
  const url = new URL(request.url);
  
  // Create params object for the API
  const params = {};
  if (url.searchParams.has("type")) params.type = url.searchParams.get("type");
  if (url.searchParams.has("maxPrice")) params.price_lte = url.searchParams.get("maxPrice");

  try {
    // ONLY fetch once to prevent overloading the free-tier API
    const properties = await propertyAPI.getHomes(params);

    // If we have no filters active, these ARE our unique types.
    // If we DO have filters active, we might want to fetch all types once 
    // OR just accept that the dropdown only shows types in the current results.
    // Pro-tip: For a better UX, fetch the full list only if you don't have types yet.
    const allHomes = await propertyAPI.getHomes(); 
    const uniqueTypes = [...new Set(allHomes.map(home => home.type))].sort();

    return { properties, uniqueTypes }; 
  } catch (error) {
    console.error('Loader Error:', error);
    // Return empty arrays so the UI doesn't crash even if the API is down
    return { properties: [], uniqueTypes: [] };
  }
}