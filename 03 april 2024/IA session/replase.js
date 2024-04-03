let str = "susheel viswakarma"

function replace(str) {
    let bag = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] == " ")
            bag += "-"
    }else{
        bag+=str[i]
    }
    return bag
}



