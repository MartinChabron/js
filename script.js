let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: "1985",
    licencePlate: "AA52265",
    address: "Jamnickeho 16",
    city: "Bratislava"
}, {
    firstName: "Jana",
    secondName: "Ružová",
    birth: "1996",
    licencePlate: "ZV568AC",
    address: "Štúrová 29",
    city: "Zvolen"
}, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: "1989",
    licencePlate: "AA52365",
    address: "Moyzesova 38",
    city: "Košice"
}]

let podozrivy =  prompt("Zadať hladaný údaj")

let result = criminals.filter(function(person){
    let hladat = person.firstName.toLowerCase().includes(podozrivy)
    let hladat1 = person.secondName.toLowerCase().includes(podozrivy)
    let hladat2 = person.licencePlate.toLowerCase().includes(podozrivy)
    let hladat3 = person.birth.toLowerCase().includes(podozrivy)
    let hladat4 = person.address.toLowerCase().includes(podozrivy)
    let hladat5 = person.city.toLowerCase().includes(podozrivy)

    return hladat || hladat1 || hladat2 || hladat3 || hladat4 || hladat5
})
//console.log(result)
 result.forEach(function(person){
    console.log(`Meno: ${person.firstName}`)
    console.log(`Krsne: ${person.secondName}`)
    console.log(`Narodenie: ${person.birth}`)
    console.log(`Adresa: ${person.licencePlate}`)
    console.log(`Adresa: ${person.address}`)
    console.log(`Mesto: ${person.city}`)
    console.log(`----------------------------`)

 })