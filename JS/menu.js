var menuDesplegado = 0;
document.addEventListener("DOMContentLoaded", () =>{
    const btn_menu = document.querySelector(".btn_menu");
    btn_menu.addEventListener("click", () => {
        const items = document.querySelector("nav");
        var btn_menu_icon = document.querySelector(".btn_menu").children[0];
        items.classList.toggle("show");
        btn_menu_icon.classList.toggle("icon-menu4");
    })
})