const BASE_URL = 'https://dinmaegler.onrender.com';

export const agentAPI = {
    // Get all agents or filter by count/limit
    getAgents: async (params = {}) => {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${BASE_URL}/agents?${query}`);
        if (!response.ok) throw new Error('Failed to fetch agents');
        return await response.json();
    },

    // Get a single agent by its specific ID
    getAgentById: async (id) => {
        const response = await fetch(`${BASE_URL}/agents/${id}`);
        if (!response.ok) throw new Error('Agent not found');
        return await response.json();
    },
};