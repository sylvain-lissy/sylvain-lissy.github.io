fetch ("data.json")
    .then(oc => oc.json())
    .then(oc =>{
        console.log(oc)
        const ocrHeader = document.getElementById("ocrHeader")
        ocrHeader.forEach(oc => {
            const h3OcrHeader = document.createElement("h3")
            h3OcrHeader.classList.add("card-title", "h5")
            h3OcrHeader.innerHTML = `${oc.oc.id}`
            ocrHeader.appendChild(h3OcrHeader)
        })
    })
    .catch(error => console.error(error))