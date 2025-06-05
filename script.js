const hamb = document.querySelector(".hamb");
const navList = document.querySelector(".menu-overlay");

hamb.addEventListener("click", function() {
	navLaist.classList.toggle("active");
	hamb.classList.toggle("click");
})