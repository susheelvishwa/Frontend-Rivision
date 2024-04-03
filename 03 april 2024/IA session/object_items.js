let items = ["rice", "dal", "salt"]
let qty = [2, 3, 4]
let price = [50, 60, 84]

let final = []
for (let i = 0; i < items.length; i++){
    let obj = {
        name: items[i],
        qty: qty[i],
        price:price[i]*qty[i]
    }
    final.push(obj)
}

console.log(final);