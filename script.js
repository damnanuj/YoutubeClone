const bars = document.querySelector(".bars");
const leftNavBar = document.querySelector(".leftNavBAr");
const rightVideosCard =document.querySelector(".rightVideosCard");

bars.addEventListener("click", hideLeftNav);

function hideLeftNav(e) {
  e.preventDefault();
  leftNavBar.classList.toggle("hideNav");

  if (leftNavBar.classList.contains("hideNav")) {
    leftNavBar.style.width = "0";
    rightVideosCard.style.width = "100%";
  } else {
    leftNavBar.style.width = "20%";
    rightVideosCard.style.width = "80%";
  }
}
bars.addEventListener("click", showLeftNav);

function showLeftNav() {}
