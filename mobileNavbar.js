function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  
  if (navbar.style.display == "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display="none";
  }
}
