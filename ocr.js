fetch("data.json")
    .then(openclassrooms => openclassrooms.json())
    .then(openclassrooms => {
        openclassrooms.forEach(oc => {
            console.log(oc.id)
        })
    })
