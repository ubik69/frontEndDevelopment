function toggleNavbar() { /*open and close for mobile navigation */
  let navbar = document.querySelector('.navbar');
  if (navbar.style.display == "none") {
    navbar.style.display = "block";
  }else{
    navbar.style.display="none";
  }
}
function checkRes(){ /*function to make sure after bigger widths , mobile navigation is hidden. */
  let navbar = document.querySelector('.navbar');
  let deviceWidth = window.innerWidth;
  if(deviceWidth > 630){
    navbar.style.display="none";
  }
}

window.addEventListener('resize', checkRes); /*needed here to uptade end users width real-time.*/