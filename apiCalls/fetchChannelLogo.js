import { apiKey, baseUrl } from "../script.js";

export async function fetchChannelLogo(channelId) {
    const endpoint = `${baseUrl}/channels?key=${apiKey}&id=${channelId}&part=snippet`;
  
    try {
      const response = await fetch(endpoint);
      const result = await response.json();
  
     
      if (result.items && result.items.length > 0 && result.items[0].snippet.thumbnails) {
      
        return result.items[0].snippet.thumbnails.medium.url;
      } else {
        console.log("No channel data found or no thumbnail available");
        return null;
      }
    } catch (error) {
      console.log("Some error occurred while fetching the channel logo", error);
      return null;
    }
  }

  // fetchChannelLogo("UCq-Fj5jknLsUf-MWSy4_brA")