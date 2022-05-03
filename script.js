"use strict"

let country = [
    {city: "Egiptas", area: 1010408, ppls: 110478581},
    {city: "Meksika", area: 1972550, ppls: 126014024},
    {city: "Kuba", area: 110860, ppls: 11390184},
    {city: "Japonija", area: 377975, ppls: 125360000},
    {city: "Brazilija", area: 8515767, ppls: 210147125}
]


function info(city, area, ppls) {

    let ppl = ppls / 1000000
    // console.log(ppl)
    let areaInfo = area * 1000000 / ppls

    
    console.log(`Šalis: ${city}, šalyje gyvena ${ppl.toFixed(2)} mln. gyventojų.`)
    console.log(`Valstybės plotas: ${area} km², plotas tenkantis vienam gyventojui: ${areaInfo.toFixed(2)} m²`)
    console.log("---------------")
}

for(let x of country) {
    info(x.city, x.area, x.ppls)
}