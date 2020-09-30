fetch("data.json")
    .then(openclassrooms => openclassrooms.json())
    .then(openclassrooms => {
        openclassrooms.forEach(projet => {
            //console.log(projet.id)
            tableauProjets(openclassrooms)
        })
    })
    .catch(error => console.error(error))

// Fonction de création du tableau des teddies
function tableauProjets(openclassrooms){
    const mainProjet = document.getElementById("teddies_list")
    openclassrooms.forEach(projet => {
        const divProjet = document.createElement("div")
        divProjet.classList.add("col-12", "col-md-6", "col-lg-4", "mb-3")
        divProjet.innerHTML = `            
        <div class="card mb-4 mb-lg-0 border-dark shadow h-100">
            <div class="card-header">
                <h3 class="card-title h5">#OC&#x5c;P${projet.id}&#x5c;${projet.titre} <span class="h6 badge badge-${projet.status_class}">${projet.status_titre}</span></h3>
                <h4 class="card-subtitle h6 text-muted">${projet.soustitre}</h4>
            </div>
            <div class="card-body">
                <p class="h6 card-text">Compétences mises en avant:</p>
                <ul>
                    <li class="small">${projet.compétence[0]}</li>
                    <li class="small">${projet.compétence[1]}</li>
                    <li class="small">${projet.compétence[2]}</li>
                    <li class="small">${projet.compétence[3]}</li>
                    <li class="small">${projet.compétence[4]}</li>
                    <li class="small">${projet.compétence[5]}</li>
                </ul>  
                <div class="row m-0 p-0 justify-content-center">
                    <div class="m-1 p-0"><img src="images/${projet.langages[0]}.png" height="32"></div>
                    <div class="m-1 p-0"><img src="images/${projet.langages[1]}.png" height="32"></div>
                </div>                          
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-6">
                        <a href="${projet.lien[0]}" class="btn btn-primary btn-sm btn-block">Projet sur Git</a> 
                    </div>
                    <div class="col-6">
                        <a href="${projet.lien[1]}" class="btn btn-primary btn-sm btn-block">Page du site</a>
                    </div>
                </div>
            </div>
        </div>`
        mainProjet.appendChild(divProjet)
    })
}