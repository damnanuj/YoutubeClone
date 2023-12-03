const bars = document.querySelector(".bars");
const leftNavBar = document.querySelector(".leftNavBAr");
const rightVideosCard = document.querySelector(".rightVideosCard");

const search = document.querySelector(".fa-magnifying-glass");
const SearchBar = document.querySelector(".SearchBar");
const searchInput = document.querySelector(".searchInput");
const logoRight = document.querySelector(".logoRight");
const searchBtn = document.querySelector(".searchBtn");
const ProfileRight = document.querySelector(".ProfileRight");
const VideoCardsHolder = document.querySelector(".VideoCardsHolder");
const thumbImg = document.querySelector(".thumbImg");
let videoCard;
const thumbnail = document.querySelector(".thumbnail");

// Hide show Side Navbar Function
bars.addEventListener("click", hideLeftNav);
// let mainScreenFlag;
function hideLeftNav(e) {
  e.preventDefault();
  leftNavBar.classList.toggle("hideNav"); //adding a class to hide side nav

  if (leftNavBar.classList.contains("hideNav")) {
    leftNavBar.style.width = "0";
    rightVideosCard.style.width = "100%"; //making main screen full when nav hidden

    // width: 460px;
    // height: 250px;
    // thumbnail.style.width = "460px";
    // thumbnail.style.height = "250px";

    // videoCard.style.width = "405px";
    // VideoCardsHolder.style.paddingLeft = "45px";
    // VideoCardsHolder.style.paddingRight = "45px";

    // mainScreenFlag = true
  } else {
    leftNavBar.style.width = "20%";
    rightVideosCard.style.width = "80%"; //making main screen 80% when nav visible
    // mainScreenFlag = false;
  }
}

// for mobile view only
search.addEventListener("click", function (e) {
  let TargetClass = e.target.classList;
  // console.log(TargetClass);

  if (TargetClass.contains("fa-magnifying-glass") && width <= 600) {
    // console.log("Anuj");
    logoRight.style.display = "none";

    searchInput.style.display = "block";
    searchInput.style.flexGrow = "0";

    ProfileRight.style.marginRight = "20px";

    SearchBar.style.marginLeft = "20px";
    SearchBar.style.width = "330px";

    searchBtn.style.width = "55px";
    searchBtn.style.height = "100%";
    searchBtn.style.transition = "none";
    searchBtn.style.backgroundColor = "#303030";
    searchBtn.style.borderBottomRightRadius = "30px";
    searchBtn.style.borderTopRightRadius = "30px";
  } else {
    // console.log("Outside");
  }
});

// WindowsScreen Width Calculating
let width;
function updateSizeInfo() {
  width = window.innerWidth;
  // document.getElementById('size-info').textContent = `Current window width: ${width}px`;
  // console.log(`Current window width: ${width}px`);
  if (width > 600) {
    // console.log("Bigger Than 600");
  }
}

// Call the function initially and on window resize
window.addEventListener("resize", updateSizeInfo);
updateSizeInfo();

/* 
    <div class="videoCard">
            <div class="thumbnail">
              <img class="thumbImg"  src="imgs/thumbnail1.jpg" alt="" />
              <p class="timeStamp">5:10</p>
            </div>
            <div class="bottomCard">
              <div class="channelDP">
                <img src="imgs/User-Avatar-1.png" alt="" />
              </div>
              <div class="titleDisc">
                <p class="vidTitle">
                  The Railway Men | Official Trailer | Netflix India
                </p>
                <p class="channelName">Netflix India</p>
                <p class="uploadTime">35M views • 6 days ago</p>
              </div>
            </div>
          </div>*/

// video cards adding dynamically--------------------
const apiKey = "AIzaSyCOzdiObyNRRonxDD24O20i0TcZY-dth20";
const baseUrl = "https://www.googleapis.com/youtube/v3";

// Calculating Upload time
function calculateTheTimeGap(publishTime) {
  let publishDate = new Date(publishTime);
  let currentDate = new Date();

  let secondsGap = (currentDate.getTime() - publishDate.getTime()) / 1000;

  const secondsPerDay = 24 * 60 * 60;
  const secondsPerWeek = 7 * secondsPerDay;
  const secondsPerMonth = 30 * secondsPerDay;
  const secondsPerYear = 365 * secondsPerDay;

  if (secondsGap < secondsPerDay) {
    return `${Math.ceil(secondsGap / (60 * 60))}hrs ago`;
  }
  if (secondsGap < secondsPerWeek) {
    return `${Math.ceil(secondsGap / secondsPerWeek)} weeks ago`;
  }
  if (secondsGap < secondsPerMonth) {
    return `${Math.ceil(secondsGap / secondsPerMonth)} months ago`;
  }

  return `${Math.ceil(secondsGap / secondsPerYear)} years ago`;
}
// THis function will take video id and returns the statics of the video

async function getVideoStatistics(videoId) {
  // https://www.googleapis.com/youtube/v3/search?key={apiKey}&part=snippet&q=js&type=video
  const endpoint = `${baseUrl}/videos?key=${apiKey}&part=statistics&id=${videoId}`;

  try {
    const response = await fetch(endpoint);
    const result = await response.json();
    // console.log(result);
    return result.items[0].statistics;
  } catch (error) {
    console.log("failed to load statistics");
  }
}
// getVideoStatistics('zt5Vc_ZU6AU');

// fetching channel Logo
async function fetchChannelLogo(channelId){
  const endPoint = `${baseUrl}/channels?key=${apiKey}&id=${channelId}&part=snippet`;
  try {
    const response = await fetch(endPoint) ;
    const result = await response.json();
    return result.items[0].snippet.thumbnails.high.url;
  } catch (error) {
    console.log(`Failed to load channel logo for ${channelId}`);
  }
}

// fetching search result from searched string
async function fetchSearchResults(searcString) {
  //searcString is the search input user entering
  const endPoint = `${baseUrl}/search?key=${apiKey}&q=${searcString}&part=snippet&maxResults=2`;
  console.log(`searchValue ${searcString}`);
  try {
    const response = await fetch(endPoint);
    const result = await response.json();
    // console.log(result);
    // console.log(result.items[0].statistics);   //Undefined here

    for(let i =0; i<result.items.length; i++){
      let videoId = result.items[i].id.videoId;
      let channelId = result.items[i].snippet.channelId;
      let statistics = await getVideoStatistics(videoId);
      let channelLogo = await fetchChannelLogo(channelId)
      result.items[i].statistics = statistics;
      result.items[i].channelLogo = channelLogo;
    }
    // console.log(result.items[0].statistics);    //ststictics here
    renderVideosOntoUI(result.items);   
   
    // console.log(result.items);
  } catch (error) {
    alert("10,000 query per day exhausted");
  }
}

function renderVideosOntoUI(videosList) {
  VideoCardsHolder.innerHTML = "";
  //videosList will be an array of videos objects
  videosList.forEach((video) => {
    videoCard = document.createElement("div");
    videoCard.className = "videoCard";
    videoCard.innerHTML = `
    <div class="thumbnail">
    <img class="thumbImg" 
    src="${video.snippet.thumbnails.high.url}"
     alt="thumbnail" />
    <p class="timeStamp">5:10</p>
  </div>
  <div class="bottomCard">
    <div class="channelDP">
      <img src="${video.channelLogo}" alt="channelLogo" />
    </div>
    <div class="titleDisc">
      <p class="vidTitle">
       ${video.snippet.title}
      </p>
      <p class="channelName">${video.snippet.channelTitle}</p>
      <p class="uploadTime">${video.statistics.viewCount} • ${calculateTheTimeGap(
        video.snippet.publishTime
      )}</p>
    </div>
  </div>`;

    VideoCardsHolder.appendChild(videoCard);
  });
}


searchBtn.addEventListener("click", () => {
  const searchValue = searchInput.value;
  // console.log(searchValue);
  fetchSearchResults(searchValue);
});
// fetchSearchResults("Ben 10 omnitrix full episodes");
fetchSearchResults("tmkoc");

// {
//     "kind": "youtube#searchResult",
//     "etag": "AFIjzeAn3l7Thf4b1bfa6aKIuFQ",
//     "id": {
//         "kind": "youtube#video",
//         "videoId": "15U5zAPHoto"
//     },
//     "snippet": {
//         "publishedAt": "2023-10-28T20:39:45Z",
//         "channelId": "UCub3Vt-aSQjYnj62vmVzx8g",
//         "title": "when you&#39;re asian at hogwarts  #harrypotter #shorts",
//         "description": "",
//         "thumbnails": {
//             "default": {
//                 "url": "https://i.ytimg.com/vi/15U5zAPHoto/default.jpg",
//                 "width": 120,
//                 "height": 90
//             },
//             "medium": {
//                 "url": "https://i.ytimg.com/vi/15U5zAPHoto/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//             },
//             "high": {
//                 "url": "https://i.ytimg.com/vi/15U5zAPHoto/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//             }
//         },
//         "channelTitle": "Magic By Mikaila",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-10-28T20:39:45Z"
//     },
//     "statistics":
// }
