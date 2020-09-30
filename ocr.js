fetch ("data.json")
    .then(oc => oc.json())
    .then(oc =>{
        console.log(oc)
        const ocrHeader = document.getElementById("ocrHeader")
        oc.forEach(ocr => {
            const h3OcrHeader = document.createElement("h3")
            h3OcrHeader.classList.add("card-title", "h5")
            h3OcrHeader.innerHTML = `${ocr.oc.id}`
            ocrHeader.appendChild(h3OcrHeader)
        })
        console.log(oc.id)
    })
    //.catch(error => console.error(error))