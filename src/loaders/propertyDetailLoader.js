export async function propertyDetailLoader({ params }) {
    const { id } = params;
    
    const response = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch property details');
    }
    
    const property = await response.json();
    return { property };
}