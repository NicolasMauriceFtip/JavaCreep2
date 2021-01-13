
const head = document.querySelector("top-banner");
const mainInfo = document.querySelector("info");

//récupération donné json par Fetch API
fetch('./us.json')
    .then (response => response.json())
    .then(function(data){
        console.log(data);
        var {groupe,member}= data;
        var titre =`<h2>${groupe}</h2>`;
        document.querySelector("#top-banner").innerHTML= titre; 
        
        
        for(var i=0; i < member.length; i++){
            var {name,age,couleur, passion}=member[i];
            var markup = `
            <section>
                <h3>${name}</h3>
                <p> âge: ${age} ans </p>
                <p> couleur favorite: ${couleur} </p>
               `;
               
            
            //thanks my queen for the + <3
            document.querySelector("#info").innerHTML += markup;
        }
       
    })

