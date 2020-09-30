fetch ("data.json")
    .then(oc => oc.json())
    .then(oc =>{
        console.log(oc)
    })
    .catch(error => console.error(error))