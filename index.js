const backToTop = document.getElementById('top');
const root = document.querySelector("html");


backToTop.addEventListener('click', ()=> {
    root.style.scrollBehavior = "smooth";
  setTimeout(() => {
    root.style.scrollBehavior = "unset";
  }, 1000);
})