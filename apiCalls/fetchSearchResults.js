import { apiKey, baseUrl, renderVideosOntoUI } from "../script.js";
import { fetchChannelLogo } from "./fetchChannelLogo.js";
import { fetchVideoDuration } from "./fetchVideoDuration.js";
import { getVideoStatistics } from "./getVideoStatistics.js";

export async function fetchSearchResults(searchString) {
  console.log(searchString);
    showLoader();
    const endPoint = `${baseUrl}/search?key=${apiKey}&q=${searchString}&part=snippet&type=video&maxResults=6`; // type=video' to the query
    try {
      const response = await fetch(endPoint);
      const result = await response.json();
  
      // Filtering only video results
      const videoItems = result.items.filter(item => item.id.kind === 'youtube#video');
  
      
      for (let i = 0; i < videoItems.length; i++) {
        let currentVideoId = videoItems[i].id.videoId;
        let channelId = videoItems[i].snippet.channelId;
       
  
       
        const currentVideoStatistics = await getVideoStatistics(currentVideoId);
        const channelLogo = await fetchChannelLogo(channelId);
        const videoDuration = await fetchVideoDuration(currentVideoId)
        
  
        videoItems[i].statistics = currentVideoStatistics;
        videoItems[i].channelLogo = channelLogo;
        videoItems[i].videoDuration = videoDuration;
      }
  
     
      renderVideosOntoUI(videoItems);
    } catch (error) {
      console.log("Some error occurred", error);
    } finally {
      hideLoader();
    }
  }


  function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "block";
    }
  }
  
  function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "none";
    }
  }
  