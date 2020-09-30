fetch("data.json")
    .then(openclassrooms => openclassrooms.json())
    .then(openclassrooms => {
        tableauProjets(openclassrooms)
        listeCompetences(openclassrooms)
    })

// Fonction de création du tableau des teddies  // &#x5c;
function tableauProjets(openclassrooms){
    const mainProjet = document.getElementById("listeProjets")
    openclassrooms.forEach(projet => {
        const divProjet = document.createElement("div")
        divProjet.classList.add("col-12", "col-md-6", "col-lg-4", "mb-3")
        divProjet.innerHTML = `            
        <div class="card mb-4 mb-lg-0 border-dark shadow h-100">
        <div class="card-header">
            <h3 class="card-title h5">#OC&#x5c;P${projet.id}&#x5c;${projet.title} <span class="h6 badge badge-${projet.class}">${projet.status}</span></h3>
            <h4 class="card-subtitle h6 text-muted">${projet.text}</h4>
        </div>
        <div class="card-body">
            <p class="h6 card-text">Compétences mises en avant:</p>
            <ul id="listeWorks">
            </ul>
            <p class="h6">Ressources supplémentaires:</p>
            <ul>
                <li class="small">
                    <a href="https://docs.google.com/document/d/1T0KI6cK9UWz2BhgCgevy0ypdfmTCry8R6EUcL8eQ-t0/edit?usp=sharing" class="text-primary ">Plan de test à mettre en place</a> 
                </li>
            </ul> 
            <div class="row m-0 p-0 justify-content-center">
                <div class="m-1 p-0"><img src="images/html5.png" height="32"></div>
                <div class="m-1 p-0"><img src="images/css3.png" height="32"></div>
                <div class="m-1 p-0"><img src="images/js.png" height="32"></div>
                <div class="m-1 p-0"><img src="images/bootstrap.png" height="32"></div>
            </div>                           
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="col-6">
                    <a href="${projet.link[0]}" class="btn btn-primary btn-sm btn-block">Projet sur Git</a> 
                </div>
                <div class="col-6">
                    <a href="${projet.link[1]}" class="btn btn-primary btn-sm btn-block">Page du site</a>
                </div>
            </div>
        </div>`
        mainProjet.appendChild(divProjet)
    })

}
//Fonction tableau compétences
function listeCompetences(openclassrooms){
        const listWorks = openclassrooms.work
        const listWork = document.getElementById("listeWorks")
        listWorks.forEach(work => {
            const liWork = document.createElement("li")
            liWork.classList.add("small")
            liWork.innerHTML = work
            listWork.appendChild(liWork)
        })
}