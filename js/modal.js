const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("projectImage");
const modalTitle = document.getElementById("projectTitle");
const modalLink = document.getElementById("projectLink");
const closeBtn = document.getElementsByClassName("close")[0];

function showModal(projectId) {
    const projectData = {
        portfolio: {
            title: "My Portfolio",
            image: "./assets/portfolio.jpg",
            url: "https://github.com/JohnnyAlysson"
          },
          repo: {
            title: "Project Repository",
            image: "./assets/repo.jpg",
            url: "https://github.com/JohnnyAlysson/dev_links"
        },
        project1: {
            title: "POS System",
            image: "./assets/project1.jpg",
            url: "https://github.com/JohnnyAlysson/projeto_ux_ui",
          },
        project2: {
            title: "Student Attendance System",
            image: "./assets/project2.jpg",
            url: "https://github.com/JohnnyAlysson/Desafio_test"
        },
        project3: {
            title: "Rich Text Editor",
            image: "./assets/project3.jpg",
            url: "https://github.com/JohnnyAlysson/Rich-text-editor"
        }
    };

    const project = projectData[projectId];
    
    modalImage.src = project.image;
    modalTitle.textContent = project.title;
    modalLink.href = project.url;
    
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