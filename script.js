import { fetchSearchResults } from "./apiCalls/fetchSearchResults.js";
import { getRandomSearchString } from "./functions/randomSearchString.js";
import { calculateTheTimeGap } from "./functions/uploadTimeCalculate.js";
import { formatViewCount } from "./functions/viewsCalculate.js";


const bars = document.querySelector(".bars");
const leftNavBar = document.querySelector(".leftNavBAr");
const rightVideosCard = document.querySelector(".rightVideosCard");
const thumbImg = document.querySelector(".thumbImg");

// Hide show Side Navbar Function
bars.addEventListener("click", hideLeftNav);
function hideLeftNav(e) {
  e.preventDefault();
  leftNavBar.classList.toggle("hideNav"); //adding a class to hide side nav

  if (leftNavBar.classList.contains("hideNav")) {
    leftNavBar.style.width = "0";
    rightVideosCard.style.width = "100%"; //making main screen full when nav
    videoCard.style.width = "100%";
    thumbImg.style.width = "100%";
  } else {
    leftNavBar.style.width = "20%";
    rightVideosCard.style.width = "80%"; //making main screen 80% when nav visible
  }
}
                
// export const apiKey = "AIzaSyCOzdiObyNRRonxDD24O20i0TcZY-dth20"; //mine
export const apiKey = "AIzaSyBJrJHRcfvW07ah3ZzVV0xbQ1vKgK8Uy1U";
export const baseUrl = "https://www.googleapis.com/youtube/v3";

const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");
const VideoCardsHolder = document.querySelector(".VideoCardsHolder");


let videoCard;
export function renderVideosOntoUI(videosList) {
  console.log(videosList);
  VideoCardsHolder.innerHTML = "";
  // here videosList will be an array of videos objects
  videosList.forEach((video) => {
    videoCard = document.createElement("div");
    videoCard.className = "videoCard";
    videoCard.innerHTML = `
  <div class="thumbnail">
        <img class="thumbImg" 
          src="${video.snippet.thumbnails.high.url}"
          alt="thumbnail" />
          <p class="timeStamp">${video.videoDuration}</p>
      </div>
      <div class="bottomCard">
          <div class="channelDP">
            <img src="${video.channelLogo}" alt="channelLogo" />
          </div>
      <div class="titleDisc">
          <p class="vidTitle">${video.snippet.title}</p>
          <p class="channelName">${video.snippet.channelTitle}</p>
          <p class="uploadTime">${
            formatViewCount(video.statistics.viewCount)
          } • ${calculateTheTimeGap(video.snippet.publishTime)}</p>
      </div>
  </div>`;

    VideoCardsHolder.appendChild(videoCard);
  });
}

fetchSearchResults(getRandomSearchString())


searchBtn.addEventListener("click", function () {
  const searchValue = searchInput.value;
  fetchSearchResults(searchValue);
});

