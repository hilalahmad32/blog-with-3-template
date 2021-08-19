const show=document.getElementById("show");
const text=document.getElementsByClassName("text");
const mainNav=document.getElementById("mainNav");
const val=true;
show.addEventListener("click",function(){
    mainNav.classList.toggle("show");
});