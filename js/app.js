var typed = new Typed("#typing", {
    strings: [
        "Aspiring Software Developer",
        "Python Developer",
        "FastAPI Developer",
        "Frontend Developer"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        if(id !== "#"){
            document.querySelector(id).scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML="☀️";
    }else{
        themeBtn.innerHTML="🌙";
    }

});
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => {
        console.log("Service Worker Registered");
      })
      .catch((error) => {
        console.log("Service Worker Error:", error);
      });
  });
}
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
});
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    console.log("Form Submitted");

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch("https://portfolio-api-production-ab15.up.railway.app/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});

         

        const result = await response.json();

        alert(result.message);

        document.getElementById("contactForm").reset();

    } catch (error) {

        alert("Server is not running.");

    }

});
