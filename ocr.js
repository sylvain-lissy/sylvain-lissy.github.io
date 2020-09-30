fetch("data.json")
    .then(openclassrooms => openclassrooms.json())
    .then(openclassrooms => {
        
        for (const oc of openclassrooms.children) {
            console.log(oc);
          }
        // openclassrooms.forEach(oc => {
        //     console.log(oc.id)
        // })
    })
