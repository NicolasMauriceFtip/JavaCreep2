const APICALL = "https://api.github.com/users/";
const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-github-recherche');
const inpRecherche = document.querySelector('.inp-recherche');

//standard API call to get data from github
async function dataGithub(utilisateur){

    const reponse = await fetch(`${APICALL}${utilisateur}`);
    const data = await reponse.json();
    creationCarte(data);

}

dataGithub("nicolasmauriceitescia")
//default value of the page is a search for our beloved queen

function creationCarte(user){

    const carteHTML = `
    <div class="carte">
        <img src="${user.avatar_url}" alt="icone avatar" class="avatar">
        <h2>${user.name}</h2>
        <ul class="cont-infos">
            <li class="followers">Followers : ${user.followers}</li>
            <li class="etoiles">Repos : ${user.public_repos}</li>
            <li class="bio"> Bio : ${user.bio}</li>
        </ul>
    </div>
    `;
    affichage.innerHTML = carteHTML;

    //creating a user card with the info we've gather from the API call
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inpRecherche.value.length > 0){

        dataGithub(inpRecherche.value);
        inpRecherche.value = "";
    }
})