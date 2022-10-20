// data base 

const dataBase = [
    {
        id: 0,
        text: "A little descripttion will be showed below. Click the projects."
    },
    {
        id: 1,
        text: "A landing page with a visualization of my wishes. Here I learned to work with the animation property and practiced with adaptive design.",
    },
    {
        id: 2,
        text: "I created a small page for finding friends in social networks with user cards, searching, sorting and filtering them by age, name using the Random User API.",
    },
    {
        id: 3,
        text: "A card game in which all cards are placed face down on a surface and two cards are turned over each time. The goal of the game is to find pairs of matching cards. The game ends when the last pair is matched.",
    },
    {
        id: 4,
        text: "This webpage was created for demonstration my pet-projects. It is possible to switch the color theme, added adaptability",
    },

]
          
const projects = document.querySelector(".projects"),
      projectDescription = document.querySelector("#projectDesc"); 
      projects.addEventListener('mouseover', showProjectDescription);
      projects.addEventListener('mouseout', hideProjectDescription);

      
function showProjectDescription(e) {
      if (e.target.className == "project-hover") {
        const index = e.target.id;
        projectDescription.textContent = dataBase[index].text;
      }
}

function hideProjectDescription()  {
    projectDescription.textContent = dataBase[0].text;
}

// dark mode 
function handleChecked(isChecked) {
    if (isChecked) {
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark');
    }
}



