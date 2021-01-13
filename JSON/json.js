
const head = document.querySelector("top-banner");
const mainInfo = document.querySelector("info");


fetch('./people.json')
    .then (response => response.json())
    .then(function(data){
        console.log(data);        
        for(var i=0; i < data.length; i++){
            var {name, manga}=data[i];
            var markup = `<div>${name}, ${manga}</div>`;
            console.log(`${name},${manga}`);
            //thanks my queen for the + <3
            document.querySelector("#info").innerHTML += markup;
        }
       
    })

