// function to close and open the hamburger navigation bar
function toggleMenu() {
  // targeting menu links and hamburgher icon by class name
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    // using inbuilt toogle JS function
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }