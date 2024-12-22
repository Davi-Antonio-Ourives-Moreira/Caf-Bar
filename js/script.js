const menu = document.getElementById("menu-bar");

menu.onclick = function(){
    document.querySelector(".menu-lateral").style.display = "block";
}


document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) {
        document.querySelector(".menu-lateral").style.display = "none";
    }
  });