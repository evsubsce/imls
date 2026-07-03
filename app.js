/* ==========================================================
   EVSU INTERACTIVE LEARNING SYSTEM
   Version 1.0
========================================================== */

console.log("EVSU Interactive Learning System Loaded");

/* ==========================================================
   LOAD COURSES
========================================================== */

async function loadCourses() {

    try {

        const response = await fetch("courses.json");

        const data = await response.json();

        const courseList = document.getElementById("course-list");

        data.courses.forEach(course => {

            const card = document.createElement("div");

            card.className = "course-card";

            card.innerHTML = `

                <div>

                    <h3>${course.code}</h3>

                    <p>${course.title}</p>

                    <small>${course.description}</small>

                </div>

                <button onclick="openCourse('${course.page}')">

                    Explore

                </button>

            `;

            courseList.appendChild(card);

        });

    }

    catch(error){

        console.error(error);

    }

}

/* ==========================================================
   OPEN COURSE
========================================================== */

function openCourse(page){

    alert("Course page is not yet available.\n\nFuture destination:\n" + page);

}

/* ==========================================================
   START APPLICATION
========================================================== */

loadCourses();
