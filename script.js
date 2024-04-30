const rootFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
const menuIcon = document.querySelector(".menu-icon");
const navIcon = document.querySelector(".nav-icon");
const navBar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector("header");

const navHeightPx = navBar.offsetHeight;

const navHeightRem = navHeightPx / rootFontSize;

document.documentElement.style.setProperty('--nav-height', `${navHeightRem}rem`);

menuIcon.addEventListener("click", function() {
    navIcon.classList.toggle('active')
    navMenu.classList.toggle('active')
  });

  navLink.forEach((link) =>{
    link.addEventListener('click', ()=>{
        navIcon.classList.toggle('active')
        navMenu.classList.toggle('active')
    })
  })

  window.addEventListener('scroll', function() {
    if (window.scrollY >= navBar.scrollHeight) {
      header.style.boxShadow = '0px 0px 20px hsla(0,0%,0%,.2)';
    } else {
      header.style.boxShadow = '0px 0px 0px';
    }


  });

  let prevScrollY = window.scrollY;

const scrollers = document.querySelectorAll(".scroller-wrapper");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation()
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true)
    });
}

const lisElements = document.querySelectorAll(".list-icon");

lisElements.forEach((element) => {

    const children = Array.from(element.children);

    children.forEach((child) => {
        child.addEventListener("mouseover", () => {
            children.forEach((childElement) => {
                childElement.setAttribute("data-hover", "true");
            });
        });
        
        child.addEventListener("mouseleave", () => {
            children.forEach((childElement) => {
                childElement.setAttribute("data-hover", "false");
            });
        });
    });
});


const sections = document.querySelectorAll('section');

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
        } else {
            
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateX(-4rem)';
        }
    });
});

// Observa cada seção individualmente
sections.forEach(section => {
    observer.observe(section);
});





