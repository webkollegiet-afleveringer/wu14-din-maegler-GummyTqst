const BASE_URL = 'https://dinmaegler.onrender.com';

export const propertyAPI = {
    // Get all homes or filter by count/limit
    getHomes: async (params = {}) => {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${BASE_URL}/homes?${query}`);
        if (!response.ok) throw new Error('Failed to fetch homes');
        return await response.json();
    },

    // Get a single home by its specific ID
    getHomeById: async (id) => {
        const response = await fetch(`${BASE_URL}/homes/${id}`);
        if (!response.ok) throw new Error('Home not found');
        return await response.json();
    },

    // Get homes within a specific price range
    getHomesByPrice: async (min, max) => {
        const response = await fetch(`${BASE_URL}/homes?price_gte=${min}&price_lte=${max}`);
        if (!response.ok) throw new Error('Failed to fetch price range');
        return await response.json();
    },

    // Get total count of homes
    getHomeCount: async () => {
        const response = await fetch(`${BASE_URL}/homes/count`);
        if (!response.ok) throw new Error('Failed to fetch count');
        return await response.json();
    }
};