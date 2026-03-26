export async function propertiesLoader() {
    const response = await fetch('https://dinmaegler.onrender.com/homes');
    
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
    
    const properties = await response.json();
    return { properties };
}