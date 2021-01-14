//récupération donné json par Fetch API
fetch('./us.json')
    .then (response => response.json())
    .then(function(data){
        console.log(data);
        var {groupe,member}= data;
        var titre =`
        <h2>${groupe}</h2>`;
        document.querySelector("#top-banner").innerHTML= titre; 
        
        
        for(var i=0; i < member.length; i++){
            var {name,age,couleur,passions}=member[i];
            //displaying info
            var myPassion='';
            for(var j=0;j<passions.length;j++){
                 myPassion += `<li class="passionList">${passions[j]}</li>`;
                //the passions are stored in an array, so we have to parse it again
            }
            
            var markup = `
            <section>
                <h3 id="member">${name}</h3>
                <p>Âge: ${age} ans </p>
                <p>Couleur favorite: ${couleur} </p>
                <p>Passions :</p>
                <ul>${myPassion}</ul>
            </section>`;
            console.log(`${name}`);
            //injecting html code into our page
            document.querySelector("#info").innerHTML += markup;
            }
        
       
    })

