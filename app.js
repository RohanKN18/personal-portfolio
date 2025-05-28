let body = document.querySelector("body");
let photoContainer = document.querySelector("#photoContainer");
let photo=document.querySelector("#photo");
let questionContainer = document.querySelector("#questionContainer");
let pillsContainer = document.querySelector("#pillsContainer");
let bluePill = document.querySelector("#bluePill");
let redPill = document.querySelector("#redPill");
let pageTwo=document.querySelector('#pageTwo');

redPill.addEventListener("click", function() {
    console.log("hi");
    body.removeChild(pillsContainer);
    body.removeChild(questionContainer);
    body.removeChild(photoContainer);
    pageTwo.style.display="flex";
});

let skillAndProjectAdder = document.querySelector('#skillAndProjectAdder');
let loginContainer=document.querySelector('#loginContainer');
let loginButton=document.querySelector('#loginButton');
// loginButton.addEventListener("click", () =>{
//     skillAndProjectAdder.style.display="flex";
//     loginContainer.style.display="none";
// });


let skillAndProject = document.querySelector('#skillAndProject');
let skills = document.querySelector('#skills');
let skillsBtn = document.querySelector('#skillsBtn');
let skillsBtnImg = document.querySelector('#skillsBtnImg');
let skillsTtl = document.querySelector('#skillsTtl');
let skillsContainer = document.querySelector('#skillsContainer');
let mainskillsListContainer = document.querySelector('#mainskillsListContainer');
let mainSkillsList = document.querySelector('#mainSkillsList');
let c = document.querySelector('#c');
let cImg = document.querySelector('#cImg');
let cTtl = document.querySelector('#cTtl');
let cpp = document.querySelector('#cpp');
let cPlusImg = document.querySelector('#cPlusImg');
let cPlusTtl = document.querySelector('#cPlusTtl');
let py = document.querySelector('#py');
let pyImg = document.querySelector('#pyImg');
let pyTtl = document.querySelector('#pyTtl');
let java = document.querySelector('#java');
let javaImg = document.querySelector('#javaImg');
let javaTtl = document.querySelector('#javaTtl');
let frontEnd = document.querySelector('#frontEnd');
let frontEndImg = document.querySelector('#frontEndImg');
let frontEndTtl = document.querySelector('#frontEndTtl');
let subSkillsListContainer = document.querySelector('#subSkillsListContainer');
let skillsSubListC = document.querySelector('#skillsSubListC'); // multiple elements with same id
let skillsSubListCpp = document.querySelector('#skillsSubListCpp');
let skillsSubListPy = document.querySelector('#skillsSubListPy');
let skillsSubListJava = document.querySelector('#skillsSubListJava');
let skillsSubListFrontEnd = document.querySelector('#skillsSubListFrontEnd');
let basics = document.querySelector('#basics');
let basicsImg = document.querySelector('#basicsImg');
let basicsTtl = document.querySelector('#basicsTtl');
let dsa = document.querySelector('#dsa');
let dsaImg = document.querySelector('#dsaImg');
let dsaTtl = document.querySelector('#dsaTtl');

let projects = document.querySelector('#projects');
let projectsHead = document.querySelector('#projectsHead');
let projectBtnContainer = document.querySelector('#projectBtnContainer');
let projectBtn = document.querySelector('#projectBtn');

let addSkill = document.querySelector('#addSkill');
let addProject = document.querySelector('#addProject');
let projectsList = document.querySelector('#projectsList');
let startingmessage = document.querySelector('#startingmessage');
let addSkillForm = document.querySelector('#addSkillForm');
let addSubSkill = document.querySelector('#addSubSkill');
let addsubSkillP = document.querySelector('#addsubSkillP');
let skillName = document.querySelector('#skillName');
let imageURL = document.querySelector('#imageURL');
let addSkillSubmitBtn = document.querySelector('#addSkillSubmitBtn');
let addSubSkillForm = document.querySelector('#addSubSkillForm');
let subSkillName = document.querySelector('#subSkillName');
let skill = document.querySelector('#skill');
let addSubSkillSubmitBtn = document.querySelector('#addSubSkillSubmitBtn');
let addProjectForm = document.querySelector('#addProjectForm');
let projectTittle = document.querySelector('#projectTittle');
let pointOne = document.querySelector('#pointOne');
let pointTwo = document.querySelector('#pointTwo');
let pointThree = document.querySelector('#pointThree');
let pintFour = document.querySelector('#pintFour');
let githubURL = document.querySelector('#githubURL');

let listOfProjects = document.querySelector('#listOfProjects');
let listOfProjectsItem1 = document.querySelector('#listOfProjectsItem1');
let listOfProjectsItem2 = document.querySelector('#listOfProjectsItem2');
let listOfProjectsItem3 = document.querySelector('#listOfProjectsItem3');
let listOfProjectsItem4 = document.querySelector('#listOfProjectsItem4');

let cProjects = document.querySelector('#cProjects');
let projectItem1 = document.querySelector('#projectItem1');
let projectItem2 = document.querySelector('#projectItem2');
let projectItem3 = document.querySelector('#projectItem3');

let cppProjects = document.querySelector('#cppProjects');
let cppProjectItem1 = document.querySelector('#cppProjectItem1');
let cppProjectItem2 = document.querySelector('#cppProjectItem2');
let cppProjectItem3 = document.querySelector('#cppProjectItem3');

let pyProjects = document.querySelector('#pyProjects');
let pyProjectItem1 = document.querySelector('#pyProjectItem1');
let pyProjectItem2 = document.querySelector('#pyProjectItem2');
let pyProjectItem3 = document.querySelector('#pyProjectItem3');

let javaProjects = document.querySelector('#javaProjects');
let javaProjectItem1 = document.querySelector('#javaProjectItem1');
let javaProjectItem2 = document.querySelector('#javaProjectItem2');
let javaProjectItem3 = document.querySelector('#javaProjectItem3');

let frontEndProjects = document.querySelector('#frontEndProjects');
let frontEndProjectItem1 = document.querySelector('#frontEndProjectItem1');
let frontEndProjectItem2 = document.querySelector('#frontEndProjectItem2');
let frontEndProjectItem3 = document.querySelector('#frontEndProjectItem3');

// Classes (if needed in NodeLists)
let skillsList = document.querySelectorAll('.skillsList');
let skillsClass = document.querySelectorAll('.skills');
let skillsTtlClass = document.querySelectorAll('.skillsTtl');
let skillsImgClass = document.querySelectorAll('.skillsImg');
let projectsListItems = document.querySelectorAll('.projectsListItems');
let projectsItems = document.querySelectorAll('.projectsItems');
let projectsListClass = document.querySelectorAll('.projectsList');
let ip = document.querySelectorAll('.ip');





let displayingOnProjectsListContainer = [
    cProjects, cppProjects, pyProjects, javaProjects, frontEndProjects,
    listOfProjects, addSkillForm, addSubSkillForm, addProjectForm, startingmessage
];

// Generic handler
function handleButtonClick(Element) {
    startingmessage.style.display = "none";
    let isVisible = Element.style.display === "inline-block";

    displayingOnProjectsListContainer.forEach(element => {
        element.style.display = "none";
    });

    if (isVisible) {
        startingmessage.style.display = "inline-block";
    } else {
        Element.style.display = "inline-block";
    }
}

projectBtn.addEventListener("click", () => handleButtonClick(listOfProjects));
addSkill.addEventListener("click", () => handleButtonClick(addSkillForm));
addSubSkill.addEventListener("click", () => handleButtonClick(addSubSkillForm));
addProject.addEventListener("click", () => handleButtonClick(addProjectForm));

let skillsMap = {
    c: {
        project: cProjects,
        subSkillsList: skillsSubListC,
        button: c
    },
    cpp: {
        project: cppProjects,
        subSkillsList: skillsSubListCpp,
        button: cpp
    },
    py: {
        project: pyProjects,
        subSkillsList: skillsSubListPy,
        button: py
    },
    java: {
        project: javaProjects,
        subSkillsList: skillsSubListJava,
        button: java
    },
    frontEnd: {
        project: frontEndProjects,
        subSkillsList: skillsSubListFrontEnd,
        button: frontEnd
    }
};

function handleProjectButtonClick(projectElement) {
    console.log("clicked");
    startingmessage.style.display = "none";
    let isVisible = projectElement.style.display === "inline-block";

    let key = Object.keys(skillsMap).find(key => skillsMap[key].project === projectElement);

    displayingOnProjectsListContainer.forEach(element => {
        element.style.display = "none";
    });

    if (isVisible) {
        startingmessage.style.display = "inline-block";
        subSkillsListContainer.style.display="none";
        skills.style.width="10%";
        mainskillsListContainer.style.width="100%";
        for (let s in skillsMap) {
            skillsMap[s].subSkillsList.style.display="none";
        }

        console.log(skillsMap[key].subSkillsList);
        skillsMap[key].subSkillsList.style.display="none";
        // if (skillsMap[key].subSkillsList instanceof NodeList) {
        //     skillsMap[key].subSkillsList.forEach(el => el.style.display = "none");
        // } else {
        //     skillsMap[key].subSkillsList.style.display = "none";
        // }
    } else {
        projectElement.style.display = "inline-block";
        subSkillsListContainer.style.display="inline-block";
        skills.style.width="20%";
        mainskillsListContainer.style.width="50%";
        for (let s in skillsMap) {
            skillsMap[s].subSkillsList.style.display="none";
        }

        // console.log(skillsMap[key].subSkillsList);
        skillsMap[key].subSkillsList.style.display="inline-block";
        // if (skillsMap[key].subSkillsList instanceof NodeList) {
        //     skillsMap[key].subSkillsList.forEach(el => el.style.display = "inline-block");
        // } else {
        //     skillsMap[key].subSkillsList.style.display = "inline-block";
        // }
    }
}

// Attach event listeners to skill buttons
// for (let key in skillsMap) {
//     skillsMap[key].button.addEventListener("click", () => {
//         handleProjectButtonClick(skillsMap[key].project);
//     });
// }

mainskillsListContainer.addEventListener("click",function(event){
    let meoww=event.target.parentElement;
    console.log(meoww);
    console.dir(meoww);
    console.log(meoww.id);
    handleProjectButtonClick(skillsMap[meoww.id].project);
    
});






addSkillSubmitBtn.addEventListener("click",function(){
    let newSkillName=skillName.value;
    let newImgURL=imageURL.value;
   

    let some=document.createElement('div');
    some.id=newSkillName;
    some.classList.add("skills");

    let someImg=document.createElement('div');
    someImg.id=newSkillName+"Img";
    someImg.classList.add("skillsImg");
    someImg.style.backgroundImage = `url('${newImgURL}')`;
    someImg.style.backgroundSize = "cover";  
    someImg.style.backgroundPosition = "center";

    let someTtl=document.createElement('div');
    someTtl.id=newSkillName+"Ttl";
    someTtl.classList.add("skillsTtl");

    someTtl.innerHTML=`<p style="margin: 0%; display: flex; justify-content: center;">${newSkillName}</p>`;

    mainSkillsList.appendChild(some);
    some.appendChild(someImg);
    some.appendChild(someTtl);

    //create a subskill list

    //create a corressponding project list

});