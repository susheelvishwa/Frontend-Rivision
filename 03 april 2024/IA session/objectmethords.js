// the function written in the object is called method


let obj = {
    name: "Susheel",
    age: 21,
    greet : function greet() {
        console.log(this.name, this.age);
    }
}

obj.greet()