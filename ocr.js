// fetch ("data.json")
//     .then(oc => oc.json())
//     .then(oc =>{
//         console.log(oc)
//         const mainOcrHeader = document.getElementById("ocrHeader")
//         ocrHeader.forEach(ocr => {
//             const h3OcrHeader = document.createElement("h3")
//             h3OcrHeader.classList.add("card-title", "h5")
//             h3OcrHeader.innerHTML = `${ocr.oc.id}`
//             mainOcrHeader.appendChild(h3OcrHeader)
//         })
//         console.log(oc.id)
//     })
//     //.catch(error => console.error(error))

fetch("data.json")
//Formatage reponse au format JSON
    .then(openclassrooms => openclassrooms.json())
// Recuperation du JSON tableau des oursons //
    .then(openclassrooms => {
        tableauOC(openclassrooms)
})
////////////////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////////////
// Fonction de création du tableau des teddies
function tableauOC(openclassrooms){
    console.log(openclassrooms.oc[id])
    //const mainOpenclassrooms = document.getElementById("ocrHeader")
    // openclassrooms.forEach(ocrProjet => {
    //     const h3Openclassrooms = document.createElement("h3")
    //     h3Openclassrooms.classList.add("card-title", "h5")
    //     h3Openclassrooms.innerHTML = `${ocrProjet.id}`
    //     mainOpenclassrooms.appendChild(h3Openclassrooms)
    // })
}