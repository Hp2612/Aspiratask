//  Banner Slider Images function
 
 
//  let slides = document.querySelectorAll(".slide");
//   let index = 0;

//   setInterval(() => {
//     slides[index].classList.remove("active");
//     index = (index + 1) % slides.length;
//     slides[index].classList.add("active");
//   }, 3000); 



//   const swiper = new Swiper(".mySwiper", {
//     loop: true,
//     autoplay: {
//       delay: 0, // no pause
//       disableOnInteraction: false
//     },
//     speed: 3000, // controls how fast it scrolls
//     slidesPerView: "auto",
//     spaceBetween: 20,
//     grabCursor: true,
//     freeMode: true,
//     freeModeMomentum: false
//   });



//   const courses = {
//     UG: [
//       "B.E- Mechanical Engineering",
//       "B.E- Civil Engineering",
//       "B.E. Mechanical Engineering",
//       "B.E- Electrical and Electronics Engineering",
//       "B.E- Computer Science and Engineering"
//     ],
//     PG: [
//       "Master of Business Administration",
//       "Master of Engineering",
     
//     ]
//   };

//   function showCourses(type) {
//     const listContainer = document.getElementById("courseList");
//     const btnUG = document.getElementById("ugBtn");
//     const btnPG = document.getElementById("pgBtn");

//     // Clear old content
//     listContainer.innerHTML = `<h2>${type} Courses</h2><ul>` +
//       courses[type].map(course => `<li>${course}</li>`).join("") +
//       `</ul>`;

//     // Button active state
//     btnUG.classList.remove("active");
//     btnPG.classList.remove("active");
//     if (type === "UG") btnUG.classList.add("active");
//     else btnPG.classList.add("active");
//   }

//   // Load UG by default
//   window.onload = () => showCourses("UG");

