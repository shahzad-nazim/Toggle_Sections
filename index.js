let brandButton = document.getElementById("brandButton");
let brandimg = document.getElementById("brandimg");
let branddesc = document.getElementById("branddesc");
let webButton = document.getElementById("webButton");
let websiteimg = document.getElementById("websiteimg");
let websitedesc = document.getElementById("websitedesc");
let socialButton = document.getElementById("socialButton");
let socialimg = document.getElementById("socialimg");
let socialdesc = document.getElementById("socialdesc");


function brandHandler() {
  if (branddesc === "none" || brandimg === "none") {
    branddesc.style.display = "block";
    brandimg.style.display = "flex";
  } else {
    branddesc.style.display = "block";
    brandimg.style.display = "flex";
    websitedesc.style.display = "none";
    websiteimg.style.display = "none";
    socialdesc.style.display = "none";
    socialimg.style.display = "none";
  }
}
function websiteHandler() {
  if (websitedesc === "none" || websiteimg === "none") {
    websitedesc.style.display = "block";
    websiteimg.style.display = "flex";
  } else {
    websitedesc.style.display = "block";
    websiteimg.style.display = "flex";
    branddesc.style.display = "none";
    brandimg.style.display = "none";
    socialdesc.style.display = "none";
    socialimg.style.display = "none";
  }
}
function socialHandler() {
  if (socialdesc === "none" || socialimg === "none") {
    socialdesc.style.display = "block";
    socialimg.style.display = "flex";
  } else {
    socialdesc.style.display = "block";
    socialimg.style.display = "flex";
    branddesc.style.display = "none";
    brandimg.style.display = "none";
    websitedesc.style.display = "none";
    websiteimg.style.display = "none";
  }
}