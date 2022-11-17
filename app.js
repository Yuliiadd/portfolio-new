

const email = "yuliiadd@gmail.com";
const copyBtn = document.querySelector('.copy');
copyBtn.addEventListener('click', copyEmail);

// data base 

const dataBase = [
    {
        id: 0,
        text: "A little descripttion will be showed below. Hover the projects."
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

// scroll animations 

const animationItems = document.querySelectorAll('._anim-item');

if (animationItems.length > 0) {
    window.addEventListener('scroll', animationOnScroll);
    function animationOnScroll() {
        for (let i = 0; i < animationItems.length; i++) {
            const animItem = animationItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (window.pageYOffset > (animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
                if (animItem.classList.contains('skill')) showProgress();
                if (animItem.classList.contains('frame')) changeNav(animItem);
            } else {
                animItem.classList.remove('_active');
            }
        } 
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXoffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYoffset || document.documentElement.scrollTop;

        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

setTimeout(() => {
    animationOnScroll();
}, 300);

// skills animaition 

function showProgress() {
    const skills = document.querySelectorAll('.skill');
    const skillsResults = {
        html: 80,
        js: 75,
        git: 35,
        figma: 40,
        react: 20,
        bootstrap: 25,
        scss: 20
    }
    
    skills.forEach(skill => {
            const range = skill.lastElementChild;
            for (let i=0; i < skillsResults[skill.id]; i++) {
                range.firstElementChild.style.width = `${i}%`;
            }
    });
}

function changeNav(desktopItem) {
    const navItems = document.querySelectorAll('.list-item');
    navItems.forEach(item => {
            item.classList.remove('active-page');
    });

    navItems.forEach(item => {
        if (item.firstElementChild.textContent == `${desktopItem.id}`) {
            item.classList.add('active-page');
        }
    });

    
}

// copy button 

function copyEmail() {
    const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(email);
          console.log('Email copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }

      copyContent();
}


