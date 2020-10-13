fetch("https://api.github.com/repos/sylvain-lissy/sylvain-lissy.github.io/languages")
    .then(langs => langs.json())
    .then(langs => {
        percent(langs)
        console.log(langs)
    })

// Fonction de création du tableau des teddies  // &#x5c;
function percent(langs){ 
    const valeurComplete = langs.HTML + langs.SCSS + langs.CSS + langs.JavaScript
    console.log(valeurComplete)
    const valeurHTML = (langs.HTML * 100) / valeurComplete
    const valeurSCSS = (langs.SCSS * 100) / valeurComplete
    const valeurCSS = (langs.CSS * 100) / valeurComplete
    const valeurJS = (langs.JavaScript * 100) / valeurComplete
    const valCent = (valeurHTML + valeurSCSS + valeurCSS + valeurJS); console.log(valCent.toFixed(2))
}