fetch("https://api.github.com/repos/sylvain-lissy/tags_up/languages")
    .then(langs => langs.json())
    .then(langs => {
        //console.log(langs)
        percent(langs)
    })

fetch("https://api.github.com/repos/sylvain-lissy/tags_up")
    .then(dates => dates.json())
    .then(dates => {
        createDate = dates.created_at; createDate = createDate.slice(0,10); createDate = createDate.split('-'); createDate = createDate[2] +'/'+createDate[1] +'/'+createDate[0]
        updateDate = dates.updated_at; updateDate = updateDate.slice(0,10); updateDate = updateDate.split('-'); updateDate = updateDate[2] +'/'+updateDate[1] +'/'+updateDate[0]
        const cDate = document.getElementById("cDate"); cDate.innerHTML = `Crée le ${createDate}`
        const uDate = document.getElementById("uDate"); uDate.innerHTML = `Mise à jour le ${updateDate}`
    })
// Fonction de création des progressbar de langages web
function percent(langs) {
    valeurtotale = 0
    for (const vallang in langs) { valeurtotale = valeurtotale + langs[vallang] }
    for (const lang in langs) {
        //création des bars de progression de chaque langages
        arrLang = `${(langs[lang] * 100) / valeurtotale}`.split('.')
        //console.log(arrLang)
        arrVal = arrLang[0] //+ "." + arrLang[1].slice(0, 2)
        const langWeb = document.getElementById("langWeb")
        const addLang = document.createElement("div")
        switch (lang) {
            case 'HTML': addLang.classList.add("progress-bar", "bg-html"); break
            case 'SCSS': addLang.classList.add("progress-bar", "bg-scss"); break
            case 'CSS': addLang.classList.add("progress-bar", "bg-css"); break
            case 'JavaScript': addLang.classList.add("progress-bar", "bg-js"); break
            case 'TypeScript': addLang.classList.add("progress-bar", "bg-ts"); break
            case 'PHP': addLang.classList.add("progress-bar", "bg-php"); break
            default: addLang.classList.add("progress-bar", "bg-primary"); break
        }
        addLang.setAttribute("role", "progressbar")
        addLang.setAttribute("aria-valuenow", arrVal)
        addLang.setAttribute("aria-valuemin", "0")
        addLang.setAttribute("aria-valuemax", "100")
        addLang.setAttribute("style", `width: ${arrVal}%`)
        langWeb.appendChild(addLang)
        //création des légendes de chaques langages
        const legendWeb = document.getElementById("legendWeb")
        const addLegend = document.createElement("div")
        switch (lang) {
            case 'HTML': addLegend.classList.add("mr-1", "p-0", "text-html", "align-content-center"); break
            case 'SCSS': addLegend.classList.add("mr-1", "p-0", "text-scss", "align-content-center"); break
            case 'CSS': addLegend.classList.add("mr-1", "p-0", "text-css", "align-content-center"); break
            case 'JavaScript': addLegend.classList.add("mr-1", "p-0", "text-js", "align-content-center"); break
            case 'TypeScript': addLegend.classList.add("mr-1", "p-0", "text-ts", "align-content-center"); break
            case 'PHP': addLegend.classList.add("mr-1", "p-0", "text-php", "align-content-center"); break
            default: addLegend.classList.add("mr-1", "p-0", "text-primary", "align-content-center"); break
        }
        addLegend.innerHTML = `
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="7" r="6"/>
            </svg>
            <span class="m-0 p-0 small text-black">${lang}: ${arrVal}%</span>`
        legendWeb.appendChild(addLegend)
    }
}