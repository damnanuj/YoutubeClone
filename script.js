const bars = document.querySelector(".bars");
const leftNavBar = document.querySelector(".leftNavBAr");
const rightVideosCard = document.querySelector(".rightVideosCard");

// Hide show Side Navbar Function
bars.addEventListener("click", hideLeftNav);
// let mainScreenFlag;
function hideLeftNav(e) {
  e.preventDefault();
  leftNavBar.classList.toggle("hideNav"); //adding a class to hide side nav

  if (leftNavBar.classList.contains("hideNav")) {
    leftNavBar.style.width = "0";
    rightVideosCard.style.width = "100%"; //making main screen full when nav hidden
    // mainScreenFlag = true
  } else {
    leftNavBar.style.width = "20%";
    rightVideosCard.style.width = "80%"; //making main screen 80% when nav visible
    // mainScreenFlag = false;
  }
  //   if (window.innerWidth <= 600) {
  //      console.log('open')
  //       leftNavBar.style.width = "0";
  //       rightVideosCard.style.width = "100%";
  //     }
  //     else {
  //      console.log('closed');
  //     }
}

const search = document.querySelector(".fa-magnifying-glass");
const SearchBar = document.querySelector(".SearchBar");
const searchInput = document.querySelector(".searchInput");
const logoRight = document.querySelector(".logoRight");
const searchBtn = document.querySelector(".searchBtn");
const ProfileRight = document.querySelector(".ProfileRight");


search.addEventListener("click", function (e) {
  let TargetClass = e.target.classList;
  console.log(TargetClass);

  if (TargetClass.contains("fa-magnifying-glass")) {
    console.log("Anuj");
    logoRight.style.display = "none";

    searchInput.style.display = "block";
    searchInput.style.flexGrow = "0";

    ProfileRight.style.marginRight="30px";

    SearchBar.style.marginLeft = "20px";
    SearchBar.style.width = "330px";

    searchBtn.style.width = "55px";
    searchBtn.style.height = "100%";
    searchBtn.style.transition = "none";
    searchBtn.style.backgroundColor = "#303030";
    searchBtn.style.borderBottomRightRadius = "30px";
    searchBtn.style.borderTopRightRadius = "30px";
  }
});

function updateSizeInfo() {
  const width = window.innerWidth;
  // document.getElementById('size-info').textContent = `Current window width: ${width}px`;
  console.log(`Current window width: ${width}px`);
  if (width > 600) {
    console.log("harry");
  }
}

// Call the function initially and on window resize
window.addEventListener("resize", updateSizeInfo);
updateSizeInfo();
