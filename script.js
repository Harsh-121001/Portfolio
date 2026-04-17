const skills = ["Java", "Python", "CSS", "SQL", "Git", "React"];
const skillList = document.getElementById('skill-list');

// Function to display current skills
function displaySkills() {
    skillList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
}

// Function to simulate adding new skills dynamically
function addNewSkill() {
    const newSkills = ["Cloud Computing", "Django", "Machine Learning", "Docker"];
    const randomSkill = newSkills[Math.floor(Math.random() * newSkills.length)];
    
    if (!skills.includes(randomSkill)) {
        skills.push(randomSkill);
        displaySkills();
    } else {
        alert("You're already learning that! Try again.");
    }
}

// Initialize
displaySkills();