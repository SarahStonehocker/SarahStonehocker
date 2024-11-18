let myData =  {};

function fetchData(){
fetch('https://xkcd.com/info.0.json')
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