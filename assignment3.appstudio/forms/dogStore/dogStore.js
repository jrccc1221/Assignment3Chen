let products = ['Crocheted Dog Toy', 'Slow Feeder Bowl', 'Pawz Grey Treat Jar', 'Blue Sweet Dreams Thermal Pajamas', 'Checker Chewy Vuiton Bowl', 'Red Heart Sweater Dress', 'Velvet Hair Bow - Sun Kissed', 'Into the Wild Leash']
let prices = ['$10.00', '$14.00', '$20.00', '$30.00', '$32.00', '$27.00', '$12.00', '$27.00']
let wishList = []
let things = []
showBtn.onclick=function(){
  for (let i = 0; i<= prices.length; i++) {
    things.push(`${products[i]} : ${prices[i]}`)
    }
    lbl.value= `${item}`
    }
btn.onclick=function(){
  let product = things.value
  wishList.push(product)
  wishes.value  = `${wishList}`
}

