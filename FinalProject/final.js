let proj;

fetch('../FinalProject/projects.json')
    .then(response=>{
        return response.json();
    }).then(projects => {
        console.log(projects); 
        proj =projects;
        parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function parseData(data){
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<a href="../FinalProject/${data.projects[i].subdomain}.html">
    <div class="row project" id="${data.projects[i].subdomain}">
        <div class="projimg"><img src="../img/port/port (${i+1}).jpg"></div>
        <div class="description"><h2>${data.projects[i].name}</h2><p class="subtitle">${data.projects[i].subtitle}</p>
        <p>${data.projects[i].abstract}</p></div></div></a>`;
    } 
}










