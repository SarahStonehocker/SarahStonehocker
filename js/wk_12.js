// let ourObject = {
//     "name": "sarah",
//     "profession" : "student",
//     "age" : 19,
//     "pets": [{"name": "copper", "type":"dog", "age":10, "unit": "years"} ]
// }

let myData =  {};

function fetchData(){
fetch('https://catfact.ninja/fact')
    .then(res => {
        if(res.ok){
            return res.json();
            
        }else{
            console.log(res);
        }
        
    }) .then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("fact").innerHTML = myData.fact;
    })
    .catch(error => {console.log(error)})
}
fetchData();

document.getElementById("generate"). addEventListener("click", e=> {fetchData();})

console.log(myData);

// let name = "Sarah";

// // let myString = "hello" + name + "!";
// let myString = "hello ${name} !"
