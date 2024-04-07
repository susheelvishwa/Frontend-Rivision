let obj = {
    firstname: "susheel",
    lastname: "vishwakarma",
    greet: function () {
        // console.log(this);
        // console.log(this.firstname, this.lastname);
    },

    newstr : function () {
        let name = this.firstname
        let str = ""
        for (let i = 0; i < name.length; i++){
            if (i % 2 == 0) {
                str+="#"
            }
            else {
                str += name[i]
            }
        }
        return str
    }
}
obj.greet()
console.log(obj.newstr())