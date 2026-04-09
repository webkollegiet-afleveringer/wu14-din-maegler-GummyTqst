import { agentAPI } from "../api/agents";

export async function agentDetailLoader({ params }) {
  try {
    // 1. Extract the ID from the URL parameters
    const { id } = params; 

    // 2. Use the correct API method that matches your export
    const agent = await agentAPI.getAgentById(id);
    
    console.log('Loaded agent:', agent);
    
    return { agent };
  } catch (error) {
    console.error('Error loading agent:', error);
    // It's often better to throw the actual error or a Response for React Router to handle
    throw new Response("Agent Not Found", { status: 404 });
  }
}