

let arr = []
function studentdata(namevalue, idvalue , subjectvalue) {
    let obj = {
        name: namevalue,
        id: idvalue,
        subject:subjectvalue
    }
    arr.push(obj)
    return arr
}
console.log(studentdata("susheel", 64, "web")); 


for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

