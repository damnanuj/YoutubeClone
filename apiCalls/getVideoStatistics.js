import { apiKey, baseUrl } from "../script.js";

export async function getVideoStatistics(videoId) {
    const endpoint = `${baseUrl}/videos?key=${apiKey}&part=statistics&id=${videoId}`;
  
    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      // console.log(result);
      if (result.items && result.items.length > 0) {
        
        return result.items[0].statistics;
      } else {
        console.log("No statistics found for videoId: " + videoId);
        return {}; // Return an empty object or default values
      }
    } catch (error) {
      console.log("failed to load statistics for videoId: " + videoId, error);
      return {}; // Return an empty object in case of error
    }
  }