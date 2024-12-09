let proj;

fetch('../portfolio.json/project.json')
    .then(response=>{
        return response.json();
    }).then(projects => {
        console.log(projects); //this variable should match the one about which is the projects//
        proj =projects;
        parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function parseData(data){
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<a href="../FinalProject/${data.projects[i].subdomain}.html">
    <div class="row project" id="${data.projects[i].subdomain}">
        <div class="projimg"><img src="../img/port (${i+1}).jpg"></div>
        <div class="description"><h2>${data.projects[i].name}</h2><p class="subtitle">${data.projects[i].subtitle}</p>
        <p>${data.projects[i].abstract}</p></div></div></a>`;
    } 
}

document.querySelectorAll('.dropdown-content a').forEach(item=> {
    item.addEventListener('click', event =>{
        event.preventDefault();
        const selectedItem =event.target.getAttribute('data-item');
        sortProjects(selectedItem)
    });
});

function sortProjects(selectedItem){
    if(selectedItem == "clear"){
        for(i=0;i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(selectedItem != undefined){
            for(i=0; i<proj.projects.length;i++){
                if(proj.projects[i].category.includes(selectedItem) == true){
                    document.getElementById(proj.projects[i].subdomain).style.display = "flex";//shows the project if its in the selected category//
                }else{
                    document.getElementById(proj.projects[i].subdomain).style.display = "none";//hides the project if it is not a category//
                }
            }
    }else{
        console.log("error, button value is undefined");
    }
}



//TO DO//
//when getting images call them port (1), port (2), and so on. either make them png or change the htmlin this java//

// the ${} refers to print the error above it//
//=> is to return responses faster//
//the function parseData(data) is defining it//