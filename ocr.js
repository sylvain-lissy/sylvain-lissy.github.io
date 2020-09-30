fetch("data.json")
    .then(openclassrooms => openclassrooms.json())
    .then(openclassrooms => {
        openclassrooms.forEach(projet => {
            console.log(projet.id)
        })
    })
