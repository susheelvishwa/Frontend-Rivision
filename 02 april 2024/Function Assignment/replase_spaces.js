newstr : function (str) {
        let str = "hello"
        for (let i = 0; i < str.length; i++){
            if (i % 2 == 0) {
                str+="#"
            }
            else {
                str += name[i]
            }
        }
        return str
    }