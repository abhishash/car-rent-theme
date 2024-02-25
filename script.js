// document.addEventListener("DOMContentLoaded", function() {
//     const navbar = document.getElementById("navbar");
//     const logo = document.getElementById("logo");
//     const navLinks = document.getElementById("navLinks");
//     const menuBtn = document.getElementById("menuBtn");
//     const sliderContent = document.getElementById("sliderContent");

//     let open = false;
//     let isScrolling = false;

//     function handleOpen() {
//       open = !open;
//       if (open) {
//         sliderContent.classList.add("visible");
//       } else {
//         sliderContent.classList.remove("visible");
//       }
//     }

//     function handleScroll() {
//       if (window.scrollY > 0) {
//         navbar.classList.add("bg-white");
//         navbar.classList.remove("bg-transparent");
//         isScrolling = true;
//       } else {
//         navbar.classList.add("bg-transparent");
//         navbar.classList.remove("bg-white");
//         isScrolling = false;
//       }
//     }

//     window.addEventListener("scroll", handleScroll);

//     menuBtn.addEventListener("click", handleOpen);

//     window.addEventListener("resize", function() {
//       if (window.innerWidth >= 960) {
//         open = false;
//         sliderContent.classList.remove("visible");
//       }
//     });

//     // Initialize Font Awesome icons
//     const faIcons = document.querySelectorAll("span[class^='fa fa-']");
//     faIcons.forEach(icon => {
//       icon.classList.replace("fa", "fa6");
//     });
//   });

//   document.addEventListener("DOMContentLoaded", function() {
//     const currentYearSpan = document.getElementById("currentYear");
//     const socialIconsDiv = document.getElementById("socialIcons");

//     const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
//     const CURRENT_YEAR = new Date().getFullYear();

//     currentYearSpan.textContent = CURRENT_YEAR;

//     LINKS.forEach(link => {
//       const li = document.createElement("li");
//       const a = document.createElement("a");
//       a.href = "#";
//       a.className = "py-1 text-white font-medium transition-colors px-3";
//       a.textContent = link;
//       li.appendChild(a);
//       socialIconsDiv.appendChild(li);
//     });

//     const socialIcons = [
//       { icon: "FaTwitter", url: "#" },
//       { icon: "FaLinkedin", url: "#" },
//       { icon: "FaFacebook", url: "#" },
//       { icon: "FaTwitter", url: "#" },
//       { icon: "FaGithub", url: "#" },
//       { icon: "FaYoutube", url: "#" }
//     ];

//     socialIcons.forEach(iconObj => {
//       const icon = document.createElement("span");
//       icon.className = `text-white text-2xl not-italic opacity-75 ${iconObj.icon}`;
//       const a = document.createElement("a");
//       a.href = iconObj.url;
//       a.target = "_blank";
//       a.appendChild(icon);
//       socialIconsDiv.appendChild(a);
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
  const counterSpan = document.getElementById("counter");
  let count = 0;

  function updateCounter() {
    counterSpan.textContent = count;
    count += 10;
    if (count <= 100) {
      requestAnimationFrame(updateCounter);
    }
  }

  // Start the animation
  updateCounter();

  //--------div2
  const counterSpan1 = document.getElementById("counter1");
  let count1 = 0;

  function updateCounter1() {
    counterSpan1.textContent = count1;
    count1 += 800;
    if (count1 <= 25000) {
      requestAnimationFrame(updateCounter1);
    }
  }

  // Start the animation
  updateCounter1();
  //--------div2
  const counterSpan2 = document.getElementById("counter2");
  let count2 = 0;

  function updateCounter2() {
    counterSpan2.textContent = count2;
    count2++;
    if (count2 <= 50) {
      requestAnimationFrame(updateCounter2);
    }
  }

  // Start the animation
  updateCounter2();
  const counterSpan3 = document.getElementById("counter3");
  let count3 = 100;

  function updateCounter3() {
    counterSpan3.textContent = count3;
    count3 += 1000;
    if (count3 <= 32000) {
      requestAnimationFrame(updateCounter3);
    }
  }

  // Start the animation
  updateCounter3();
});


const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});