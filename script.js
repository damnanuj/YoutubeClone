const bars = document.querySelector(".bars");
const leftNavBar = document.querySelector(".leftNavBAr");
const rightVideosCard =document.querySelector(".rightVideosCard");



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
  } 
  else {
    leftNavBar.style.width = "20%";
    rightVideosCard.style.width = "80%";  //making main screen 80% when nav visible
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



