const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("projectImage");
const modalTitle = document.getElementById("projectTitle");
const modalLink = document.getElementById("projectLink");
const closeBtn = document.getElementsByClassName("close")[0];

function showModal(projectId, projectUrl) {
    const projectData = {
        portfolio: {
            title: "My Portfolio",
            image: "./assets/portfolio.jpg"
        },
        repo: {
            title: "Project Repository",
            image: "./assets/repo.jpg"
        },
        project1: {
            title: "Project 1",
            image: "./assets/project1.jpg"
        },
        project2: {
            title: "Student Attendance System",
            image: "./assets/project2.jpg"
        },
        project3: {
            title: "Rich Text Editor",
            image: "./assets/project3.jpg"
        }
    };

    const project = projectData[projectId];
    
    modalImage.src = project.image;
    modalTitle.textContent = project.title;
    modalLink.href = projectUrl;
    
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}