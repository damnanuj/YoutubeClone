import { parseDurationISO } from "../functions/videoDuration.js";
import { apiKey, baseUrl } from "../script.js";

export async function fetchVideoDuration(videoId) {
 
    const endpoint = `${baseUrl}/videos?key=${apiKey}&part=contentDetails&id=${videoId}`;
  
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      // console.log(data);
      if (data.items && data.items.length > 0) {
        const durationISO = data.items[0].contentDetails.duration;
        // console.log(parseDurationISO(durationISO));
         return parseDurationISO(durationISO);
      } else {
        console.log("No video details found for videoId: " + videoId);
        return null;
      }
    } catch (error) {
      console.error("Failed to fetch video details", error);
      return null;
    }
  }
  // fetchVideoDuration("V1Pl8CzNzCw")