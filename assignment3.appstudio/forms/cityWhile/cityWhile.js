let cities=[]
let i=0
let city=prompt("Enter a city or enter stop")

while(city!='stop') {
  cities.push(city)
  city=prompt("Enter a city, or enter stop")
}

while (i<cities.length){
  console.log(cities[i].toLowerCase())
  i++
}
