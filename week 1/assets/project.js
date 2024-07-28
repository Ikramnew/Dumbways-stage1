let projects = [];

function addProject(event) {
    event.preventDefault();

    const projectName = document.getElementById('projectName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const description = document.getElementById('description').value;
    const technologies = Array.from(document.querySelectorAll('input[name="technology"]:checked')).map(checkbox => checkbox.value);
    const fileInput = document.getElementById('file');
    const duration = calculateDuration(startDate, endDate);
    const postDate = new Date();

    if (!projectName || !startDate || !endDate || !description || !technologies.length) {
        alert("Please fill out all required fields.");
        return;
    }

    if (new Date(startDate) > new Date(endDate)) {
        alert("End date must be after start date.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const projectData = {
            projectName,
            startDate: formatDate(new Date(startDate)),
            endDate: formatDate(new Date(endDate)),
            description,
            technologies,
            file: e.target.result, // Store base64 encoded image
            duration,
            postDate: formatPostDate(postDate),
            timeAgo: getDistanceTime(postDate)
        };

        projects.push(projectData);
        displayProjects();
        document.getElementById('form-project').reset();
    };

    if (fileInput.files[0]) {
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        reader.onload(); // Call directly if no file is selected
    }
}

function calculateDuration(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const time = Math.abs(endDate - startDate);
    const days = Math.ceil(time / (1000 * 3600 * 24));

    if (days > 30) {
        const months = Math.ceil(days / 30);
        return `${months} Bulan`;
    } else {
        return `${days} Hari`;
    }
}

function formatDate(date) {
    const monthsArray = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const day = date.getDate();
    const month = monthsArray[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

function formatPostDate(date) {
    const monthsArray = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const day = date.getDate();
    const month = monthsArray[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day} ${month} ${year} ${hours}:${minutes}`;
}

function getDistanceTime(time) {
    let postTime = new Date(time); // Convert to Date object if not already
    let currentTime = new Date();

    let distanceTime = currentTime - postTime;

    let miliSecond = 1000;
    let secondInHour = 3600;
    let hourInDay = 24;

    let distanceTimeInSecond = Math.floor(distanceTime / miliSecond);
    let distanceTimeInMinute = Math.floor(distanceTime / (miliSecond * 60));
    let distanceTimeInHour = Math.floor(
        distanceTime / (miliSecond * secondInHour)
    );
    let distanceTimeInDay = Math.floor(
        distanceTime / (miliSecond * secondInHour * hourInDay)
    );

    if (distanceTimeInDay > 0) {
        return `${distanceTimeInDay} days ago`;
    } else if (distanceTimeInHour > 0) {
        return `${distanceTimeInHour} hours ago`;
    } else if (distanceTimeInMinute > 0) {
        return `${distanceTimeInMinute} minutes ago`;
    } else {
        return `${distanceTimeInSecond} seconds ago`;
    }
}

function displayProjects() {
    const projectCards = document.getElementById('projectCards');
    projectCards.innerHTML = '';

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <a href="Detail.html">
                <img src="${project.file || 'https://via.placeholder.com/50'}" alt="Project Image" class="project-image">
            </a>
            <div class="project-info">
                <h3>${project.projectName}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-dates">
                    <p>Duration</p>
                    <p><i class="fas fa-calendar-alt"></i> ${project.startDate} - ${project.endDate}</p>
                    <p><i class="fas fa-clock"></i> ${project.duration}</p>
                    <p><i class="fas fa-calendar-day"></i> Posted on: ${project.postDate} (${getDistanceTime(project.postDate)})</p>
                </div>
                <div class="project-technologies">
                    <p>Technologies: ${project.technologies.join(', ')}</p>
                </div>
                <div class="project-file">
                   
                </div>
                <div class="project-actions">
                    <button class="edit-button" onclick="editProject(${index})">Edit</button>
                    <button class="delete-button" onclick="deleteProject(${index})">Delete</button>
                </div>
            </div>
        `;

        projectCards.appendChild(projectCard);let projects = [];

        function addProject(event) {
            event.preventDefault();
        
            const projectName = document.getElementById('projectName').value;
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;
            const description = document.getElementById('description').value;
            const technologies = Array.from(document.querySelectorAll('input[name="technology"]:checked')).map(checkbox => checkbox.value);
            const fileInput = document.getElementById('file');
            const duration = calculateDuration(startDate, endDate);
            const postDate = new Date();
        
            if (!projectName || !startDate || !endDate || !description || !technologies.length) {
                alert("Please fill out all required fields.");
                return;
            }
        
            if (new Date(startDate) > new Date(endDate)) {
                alert("End date must be after start date.");
                return;
            }
        
            const reader = new FileReader();
            reader.onload = function(e) {
                const projectData = {
                    projectName,
                    startDate: formatDate(new Date(startDate)),
                    endDate: formatDate(new Date(endDate)),
                    description,
                    technologies,
                    file: e.target.result,
                    duration,
                    postDate: formatPostDate(postDate),
                    timeAgo: getDistanceTime(postDate)
                };
        
                projects.push(projectData);
                displayProjects();
                document.getElementById('form-project').reset();
            };
        
            if (fileInput.files[0]) {
                reader.readAsDataURL(fileInput.files[0]);
            } else {
                reader.onload(); // Call directly if no file is selected
            }
        }
        
        function calculateDuration(start, end) {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const time = Math.abs(endDate - startDate);
            const days = Math.ceil(time / (1000 * 3600 * 24));
        
            if (days > 30) {
                const months = Math.ceil(days / 30);
                return `${months} Bulan`;
            } else {
                return `${days} Hari`;
            }
        }
        
        function formatDate(date) {
            const monthsArray = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            const day = date.getDate();
            const month = monthsArray[date.getMonth()];
            const year = date.getFullYear();
            return `${day} ${month} ${year}`;
        }
        
        function formatPostDate(date) {
            const monthsArray = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            const day = date.getDate();
            const month = monthsArray[date.getMonth()];
            const year = date.getFullYear();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            return `${day} ${month} ${year} ${hours}:${minutes}`;
        }
        
        function getDistanceTime(time) {
            let postTime = new Date(time);
            let currentTime = new Date();
        
            let distanceTime = currentTime - postTime;
        
            let miliSecond = 1000;
            let secondInHour = 3600;
            let hourInDay = 24;
        
            let distanceTimeInSecond = Math.floor(distanceTime / miliSecond);
            let distanceTimeInMinute = Math.floor(distanceTime / (miliSecond * 60));
            let distanceTimeInHour = Math.floor(
                distanceTime / (miliSecond * secondInHour)
            );
            let distanceTimeInDay = Math.floor(
                distanceTime / (miliSecond * secondInHour * hourInDay)
            );
        
            if (distanceTimeInDay > 0) {
                return `${distanceTimeInDay} days ago`;
            } else if (distanceTimeInHour > 0) {
                return `${distanceTimeInHour} hours ago`;
            } else if (distanceTimeInMinute > 0) {
                return `${distanceTimeInMinute} minutes ago`;
            } else {
                return `${distanceTimeInSecond} seconds ago`;
            }
        }
        
        function displayProjects() {
            const projectCards = document.getElementById('projectCards');
            projectCards.innerHTML = '';
        
            projects.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
        
                projectCard.innerHTML = `
                    <a href="Detail.html">
                        <img src="${project.file || 'https://via.placeholder.com/50'}" alt="Project Image" class="project-image">
                    </a>
                    <div class="project-info">
                        <h3>${project.projectName}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-dates">
                            <p>Duration</p>
                            <p><i class="fas fa-calendar-alt"></i> ${project.startDate} - ${project.endDate}</p>
                            <p><i class="fas fa-clock"></i> ${project.duration}</p>
                            <p><i class="fas fa-calendar-day"></i> Posted on: ${project.postDate} (${getDistanceTime(project.postDate)})</p>
                        </div>
                        <div class="project-technologies">
                            <p>Technologies: ${project.technologies.join(', ')}</p>
                        </div>
                        <div class="project-file">
                            <p>File: ${project.file}</p>
                        </div>
                        <div class="project-actions">
                            <button class="edit-button" onclick="editProject(${index})">Edit</button>
                            <button class="delete-button" onclick="deleteProject(${index})">Delete</button>
                        </div>
                    </div>
                `;
        
                projectCards.appendChild(projectCard);
            });
        }
        
        function editProject(index) {
            const project = projects[index];
        
            document.getElementById('projectName').value = project.projectName;
            document.getElementById('startDate').value = project.startDate;
            document.getElementById('endDate').value = project.endDate;
            document.getElementById('description').value = project.description;
            
            document.querySelectorAll('input[name="technology"]').forEach(checkbox => {
                checkbox.checked = project.technologies.includes(checkbox.value);
            });
            
            projects.splice(index, 1);
            displayProjects();
        }
        
        function deleteProject(index) {
            projects.splice(index, 1);
            displayProjects();
        }
        
    });
}

function editProject(index) {
    const project = projects[index];

    document.getElementById('projectName').value = project.projectName;
    document.getElementById('startDate').value = project.startDate;
    document.getElementById('endDate').value = project.endDate;
    document.getElementById('description').value = project.description;
    
    document.querySelectorAll('input[name="technology"]').forEach(checkbox => {
        checkbox.checked = project.technologies.includes(checkbox.value);
    });
    
    projects.splice(index, 1);
    displayProjects();
}

function deleteProject(index) {
    projects.splice(index, 1);
    displayProjects();
}
