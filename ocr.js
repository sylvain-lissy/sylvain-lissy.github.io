fetch("data.json")
    .then(openclassrooms => openclassrooms.json())
    .then(openclassrooms => {
        tableauProjets(openclassrooms)
    })

// Fonction de création du tableau des teddies  // &#x5c;
function tableauProjets(openclassrooms){
    const mainProjet = document.getElementById("listeProjets")
    openclassrooms.forEach(projet => {
        pId= projet.id
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
            <ul id="work${projet.id}">
            </ul>
            <p class="h6">Ressources supplémentaires:</p>
            <ul id="more${projet.id}">
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
        //Fonction tableau compétences
        for (i=0; i < projet.work.length; i++){
            const listing = document.getElementById("work"+pId)
            const liWork = document.createElement("li")
            liWork.classList.add("small")
            liWork.innerHTML = projet.work[i]
            listing.appendChild(liWork)
        }
        //Fonction ressource supplémentaires
        for (i=0; i < projet.more.length; i++){
            if (!projet.more){
                break
            }else{
                const listing = document.getElementById("more"+pId)
                const liWork = document.createElement("li")
                liWork.classList.add("small")
                liWork.innerHTML = `
                    <a href="${projet.more[i].link}" class="text-primary ">${projet.more[i].text}</a> `
                listing.appendChild(liWork)
            }
        }          
    })
}
